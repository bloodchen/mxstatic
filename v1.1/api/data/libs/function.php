<?php
/**
 * Created by PhpStorm.
 * User: why
 * Date: 2016/8/18
 * Time: 10:44
 */

/**
 * [get_white_referer] Description for here
 * @param array $white
 * @return bool
 */
function get_white_referer($white = array())
{
    //白名单库
    $white = 'http://pc-newtab.maxthon.com/';
    preg_match('/^(http:\/\/)?([^\/]+)/i', $white, $match);
    $white_arr = $match[2];
    if (isset($_SERVER['HTTP_REFERER'])) {
        preg_match('/^(http:\/\/)?([^\/]+)/i', $_SERVER['HTTP_REFERER'], $match);
        $referer = $match[2];
    } else {
        $referer = '';
    }
    if ($referer == $white_arr) {
        return true;
    } else {
        return false;
    }
}

/**
 * [get_language] Description for here
 * @return string
 */
function get_language()
{
    $lang = isset($_POST['lang']) ? htmlentities($_POST['lang']) : (isset($_GET['lang']) ? htmlentities($_GET['lang']) : '');
    $lang = strtolower($lang);
    $langs_arr = array(
        'zh-cn',
        'en-us',
    );
    if (!$lang) {
        //获取浏览器语言版本
        $accpt_lan = $_SERVER['HTTP_ACCEPT_LANGUAGE'];
        if (strstr($accpt_lan, 'zh') !== false) {
            //台湾香港转到繁体页面
            $lang = 'zh-cn';
        } elseif (strstr($accpt_lan, 'en') !== false) {
            $lang = 'en-us';
        } else {
            //$lang = 'zh-cn';
            $lang = 'en-us';
        }
    }
    if (!in_array($lang, $langs_arr)) {
        //$lang = 'zh-cn';
        $lang = 'en-us';
    }
    return $lang;
}

/**
 * @blog http://www.phpddt.com
 * @param $string
 * @param $low 安全别级低
 */
function clean_xss($string, $low = false)
{
    $string = trim($string);
    $string = strip_tags($string);
    $string = htmlspecialchars($string);
    if ($low) {
        return $string;
    }
    $string = str_replace(array('"', "\\", "'", "/", "..", "../", "./", "//"), '', $string);
    $no = '/%0[0-8bcef]/';
    $string = preg_replace($no, '', $string);
    $no = '/%1[0-9a-f]/';
    $string = preg_replace($no, '', $string);
    $no = '/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]+/S';
    $string = preg_replace($no, '', $string);
    return $string;
}

/**
 * [send] Description for here
 * @param $result
 * @param bool $callback
 * @return void
 */
function send($result, $callback = false)
{
    if (DEBUG) {
        $msg = 'UserID:' . $_POST['uid'] . "\r\n";
        $msg .= 'Request:' . "\r\n";
        $msg .= print_r($_POST, true);
        $msg .= "\r\n";
        $msg .= 'Repons:' . "\r\n";
        $msg .= json_encode($result);
        recordLog($msg);
    }

    if (!$callback) {
        $result = json_encode($result);
        echo $result;
        exit;
    } else {
        echo $callback . '(' . json_encode($result) . ')';
        exit;
    }
}

//对TOP7数据 ishot标志置false,并将TOP7下的图片类型转换成对应我的站点下的图片类型
//图片的几种状态 image=null 为色块，不用转换处理。
//"http://pc-newtab.maxthon.com/image/logo/Re/weibo.png"  -我的站点图片地址
//"http://pc-newtab.maxthon.com/image/logo/Sq/Tmall.png" --TOP7站点图片地址
//http://fastdail-imglib.maxthon.cn/fastimg/imges/weibo/big/weibo.png  --图片库数据
//http://fastdail-imglib.maxthon.cn/fastimg/imges/weibo/small/weibo.png --TOP7来源图片库数据
function image_convert($data = array())
{
    foreach ($data as $k => $v) {

        if ($v['isHot']) {
            $data[$k]['isHot'] = false;

            if ($v['image'] != 'null' || !$v['image']) {//色块不予处理，只处理非色块情况
                $parse = array();
                $parse = parse_url($v['image']);
                //Sq,small
                if (strstr($parse['path'], '/Sq/')) {
                    $new_path = str_replace('/Sq/', '/Re/', $parse['path']);
                    $data[$k]['image'] = $parse['scheme'] . '://' . $parse['host'] . $new_path;
//                    $data[$k]['isHot'] = false;
                    continue;
                }
                if (strstr($parse['path'], '/small/')) {
                    $new_path = str_replace('/small/', '/big/', $parse['path']);
                    $data[$k]['image'] = $parse['scheme'] . '://' . $parse['host'] . $new_path;
//                    $data[$k]['isHot'] = false;
                    continue;
                }
            }

        }
    }
    return $data;
}

/**
 * 生成UUID
 * @param string $namespace
 * @return string
 */
function create_guid($namespace = '')
{
    static $guid = '';
    $uid = uniqid("", true);
    $data = $namespace;
    $data .= $_SERVER['REQUEST_TIME'];
    $data .= $_SERVER['HTTP_USER_AGENT'];
    $data .= $_SERVER['LOCAL_ADDR'];
    $data .= $_SERVER['LOCAL_PORT'];
    $data .= $_SERVER['REMOTE_ADDR'];
    $data .= $_SERVER['REMOTE_PORT'];
    $hash = strtolower(hash('ripemd128', $uid . $guid . md5($data)));
    $guid =
        //'{' .
        substr($hash, 0, 8) .
        '-' .
        substr($hash, 8, 4) .
        '-' .
        substr($hash, 12, 4) .
        '-' .
        substr($hash, 16, 4) .
        '-' .
        substr($hash, 20, 12)//.'}'
    ;
    return $guid;
}

/**
 * [getValidTitle] Description for here
 * @param $verifyTitle
 * @param $titleLists
 * @return mixed
 */
function getValidTitle($verifyTitle, $titleLists)
{
    if (is_array($titleLists)) {
        foreach ($titleLists as $title) {
            $i = 0;
            do {
                $i++;
                if (md5($verifyTitle) == md5($title)) {
                    $titleNum = getTitleNumber($title);

                    if ($titleNum) {

                        $extNum = $i + 1;

                        $newTitle = preg_replace('/\\((\\d+)\\)$/', "($extNum)", $title);

                    } else {
                        $newTitle = $verifyTitle . '(' . $i . ')';
                    }
                }

            } while (in_array($newTitle, $titleLists));
        }

        return $newTitle ?: $verifyTitle;
    }
}

function getValidTitle2($verifyTitle, $titleLists)
{
    if (is_array($titleLists)) {
        $i = 0;
        do {
            $i++;
            if (in_array($verifyTitle, $titleLists)) {
                $serchKey = array_search($verifyTitle, $titleLists);

                $titleNum = getTitleNumber($titleLists[$serchKey]);

                if ($titleNum) {
                    $extNum = $i + 1;
                    $newTitle = preg_replace('/\\((\\d+)\\)$/', "($extNum)", $verifyTitle);
                } else {
                    $newTitle = $verifyTitle . '(' . $i . ')';
                }
            } else {
                $newTitle = $verifyTitle;
            }

        } while (in_array($newTitle, $titleLists));

        return $newTitle;

    } else {
        return $verifyTitle;
    }

}

/**
 * [getTitleNumber] Description for here
 * @param $title
 * @return bool|int
 */
function getTitleNumber($title)
{
    preg_match('/\\((\\d+)\\)$/', $title, $match_1);
    if ($match_1[1]) {
        preg_match('/(\\d+)/', $match_1[0], $match_2);
        if ($match_2[1] > 0) {
            return (int)$match_2[1];
        }
    } else {
        return false;
    }
}

/**
 * [compareTitle] Description for here
 * @param $t_1
 * @param $t_2
 * @return mixed|string
 */
function compareTitle($t_1, $t_2)
{
    if ($t_1 === $t_2) {
        preg_match('/\\((\\d+)\\)$/', $t_1, $match_1);
        if ($match_1[1]) {
            preg_match('/(\\d+)/', $match_1[0], $match_2);
            if ($match_2[1] > 0) {
                $newNo = (int)$match_2[1] + 1;
                $newNo = '(' . $newNo . ')';
                $new = preg_replace('/\\((\\d+)\\)$/', $newNo, $t_1);
                return $new;
            }
        } else {
            $new = $t_1 . '(1)';
            return $new;
        }

    } else {
        return $new;
    }
}

/**
 * [getFolderTitleLists] Description for here
 * @param $input
 * @return array
 */
/*function getFolderTitleLists($input)
{
    if (is_array($input)) {
        foreach ($input as $item) {
            if ($item['folderId']) {
                $titleLists[] = $item['title'];
            }
        }
    }

    return (array)$titleLists;
}*/

function getFolderTitleLists($input)
{
    if (is_array($input)) {
        foreach ($input as $item) {
            if ($item['children']) {
                $titleLists[] = $item['title'];
            }
        }
    }

    return (array)$titleLists;
}

/**
 * [array_diff_assoc_recursive] Description for here
 * @param $array1
 * @param $array2
 * @return int|null
 */
function array_diff_assoc_recursive($array1, $array2)
{
    $difference = NULL;
    foreach ($array1 as $key => $value) {
        if (is_array($value)) {
            if (!array_key_exists($key, $array2)) {
                $difference[$key] = $value;
            } elseif (!is_array($array2[$key])) {
                $difference[$key] = $value;
            } else {
                $new_diff = array_diff_assoc_recursive($value, $array2[$key]);
                if ($new_diff != FALSE) {
                    $difference[$key] = $new_diff;
                }
            }
        } elseif (!array_key_exists($key, $array2) || $array2[$key] != $value) {
            $difference[$key] = $value;
        }
    }
    return !isset($difference) ? 0 : $difference;
}

/**
 * [getExceptFolderData] Description for here
 * @param $input
 * @return array
 */
/*function getExceptFolderData($input)
{
    if (is_array($input)) {
        foreach ($input as $item) {
            if (!isset($item['folderId'])) {
                $data[] = $item;
            }
        }
    }

    return (array)$data;
}*/
function getExceptFolderData($input)
{
    if (is_array($input)) {
        foreach ($input as $item) {
            if (!isset($item['children'])) {
                $data[] = $item;
            }
        }
    }

    return (array)$data;
}

/**
 * [getFolderLists] Description for here
 * @param $input
 * @return array
 */
/*function getFolderLists($input)
            {
    if (is_array($input)) {
        foreach ($input as $item) {
            if (isset($item['folderId']) && $item['folderId']) {
                $data[] = $item;
            }
        }
    }

    return (array)$data;
}*/
function getFolderLists($input)
{
    if (is_array($input)) {
        foreach ($input as $item) {
            if (isset($item['children']) && $item['children']) {
                $data[] = $item;
            }
        }
    }

    return (array)$data;
}

/**
 * [array_column_multi] Description for here
 * @param $input
 * @param array $column_keys
 * @return array
 */
function array_column_multi($input, $column_keys = array())
{
    $result = array();
    $column_keys = array_flip($column_keys);
    foreach ($input as $key => $el) {
        $result[$key] = array_intersect_key($el, $column_keys);
    }
    return $result;
}

/**
 * [getDefaultImage] Description for here
 * @param $match
 * @param $input
 * @return mixed
 */
function getDefaultImage($match, $input)
{
    foreach ($input as $k => $value) {
        if (md5($match['url']) == md5($value['url'])) {
            return $value['image'];
        }
    }
}

/**
 * [replaceMX4GoToMX5Go] Description for here
 * @param $match
 * @param $input
 * @return mixed
 */
function replaceMX4GoToMX5Go($match, $input)
{
    foreach ($input as $k => $value) {
        if (md5($match['url']) == md5($value['url'])) {
            $match['url'] = $value['replace'];
        }
    }

    return $match;
}
/**
 * [checkArrayNotInOther] Description for here
 * @param $needle
 * @param $haystack
 * @return bool
 */
function checkArrayNotInOther($needle, $haystack)
{
    if (is_array($haystack)) {
        foreach ($haystack as $value) {
            if (md5($value['url']) == md5($needle['url']) && md5($value['title']) == md5($needle['title'])) {
                return true;
            } else {
                return false;
            }
        }
    }
}

/**
 * [error] Description for here
 * @param $msg
 * @return void
 */
function recordLog($msg)
{
//    $filename = LOG_PATH . date('Ymd', $_SERVER["REQUEST_TIME"]) . '.log';
    $filename = LOG_PATH . 'php_pc-newtab.maxthon.com_log';
    $server = @getenv(SERVER_ADDR);
    $log = date('[Y-m-d H:i:s]', $_SERVER["REQUEST_TIME"]) . " - ";
    $log .= "[{$_SERVER['REMOTE_ADDR']}->{$server}] : " . "\n";
    $log .= $msg . "\r\n\r\n";
//    error_log($log, 3, $filename);
    writeData($filename, "ab+", $log);
    return;
}

/**
 * [writeData] Description for here
 * @param $path
 * @param $mode
 * @param $data
 * @return bool
 */
function writeData($path, $mode, $data)
{
    $fp = fopen($path, $mode);
    $retries = 0;
    $max_retries = 100;

    if (!$fp) {
        // failure
        return false;
    }

    // keep trying to get a lock as long as possible
    do {
        if ($retries > 0) {
            usleep(rand(1, 10000));
        }
        $retries += 1;
    } while (!flock($fp, LOCK_EX) and $retries <= $max_retries);

    // couldn't get the lock, give up
    if ($retries == $max_retries) {
        // failure
        return false;
    }

    // got the lock, write the data
    fwrite($fp, "$data\n");
    // release the lock
    flock($fp, LOCK_UN);
    fclose($fp);
    // success
    return true;
}