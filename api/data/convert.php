<?php
/**
 * Created by PhpStorm.
 * User: zhaohongfeng
 * Date: 2016/10/10
 * Time: 13:00
 */

/*
 * 参数说明
 * lang 语言
 * import 导入标识
 * mx4_layout_guest MX4 guest数据
 * mx4_layout  MX4数据
 * mx5_layout  MX5数据
 * mx5_layout_guest  MX5 guest数据
 * callback  jsonp标志
 * error code
 * 10001  来源错误
 * 10002  非ajax请求
 * 10003  import参数缺失
 * 10004  数据包没有数据
 */

error_reporting(0);
header('Content-type: text/json');
define('BASE_PATH', str_replace("\\", "/", dirname(dirname(__FILE__)))); // 获取当前目录，结尾不带"/"
define('APP_PATH', BASE_PATH . '/data/');
define('LOG_PATH', APP_PATH . 'logs/'); //此目录不会自动创建,需要手动创建。
define('DEBUG', 1);//调试模式 1为调试 0为正式环境
include APP_PATH . "libs/function.php";

//语言处理
$lang = get_language();
$callback = isset($_GET['callback']) ? htmlentities($_GET['callback']) : false;
$callback = false;
if ($lang == 'zh-cn') {
    include APP_PATH . "resource/zh/data.php";//加载数据对比源
} else {
    include APP_PATH . "resource/en/data.php";//加载数据对比源
}

//来源判断
$referer = get_white_referer();
if (!$referer) {//非法请求
    $result = array(
        "result" => array(),
        "status" => array("code" => "10001", "msg" => "failed"),
    );
    if (DEBUG == false) {
        send($result, $callback);
    }
}
//判断是否是ajax请求
if (!(isset($_SERVER["HTTP_X_REQUESTED_WITH"]) && strtolower($_SERVER["HTTP_X_REQUESTED_WITH"]) == "xmlhttprequest")) {
    // 非ajax 请求的处理方式
    $result = array(
        "result" => array(),
        "status" => array("code" => "10002", "msg" => "failed"),
    );
    if (DEBUG == false) {
        send($result, $callback);
    }
}

//获取数据MX4数据导入和MX5数据导入
$import = isset($_POST['import']) ? htmlentities($_POST['import']) : (isset($_GET['import']) ? htmlentities($_GET['import']) : '');
$platform = isset($_POST['platform']) ? htmlentities($_POST['platform']) : (isset($_GET['platform']) ? htmlentities($_GET['platform']) : 'Win');
if (isset($_POST['mx4_layout'])) {
    $mx4_layout = json_decode($_POST['mx4_layout'], true);
} else {
    $mx4_layout = array();
}

if (isset($_POST['mx4_layout_guest'])) {
    $mx4_layout_guest = json_decode($_POST['mx4_layout_guest'], true);
} else {
    $mx4_layout_guest = array();
}

if (isset($_POST['mx5_layout'])) {
    $mx5_layout = json_decode($_POST['mx5_layout'], true);
} else {
    $mx5_layout = array();
}

if (isset($_POST['mx5_layout_guest'])) {
    $mx5_layout_guest = json_decode($_POST['mx5_layout_guest'], true);
} else {
    $mx5_layout_guest = array();
}

if ($import == 'mx4' && strtolower($platform) == 'mac') {
    $mx4_arr = array_merge($mx4_layout, $mx4_layout_guest);

    //处理图片
    foreach ($mx4_arr['items'] as $key => $item) {
        //如果数据中url有数据,title为空,截取100个字符长度的url作为默认title
        if ((isset($item[title]) && empty($item['title'])) && (isset($item['url']) && !empty($item['url']))) {
            $item['title'] = substr($item['url'], 0, 100);
        }

        //从网址库里进行默认图片匹配
        $image = getDefaultImage(array('url' => $item['url']), $data['SITE_LIST']);

        if ($image) {
            //匹配的到
            $mx4_convert_img[$key]['title'] = $item['title'];
            $mx4_convert_img[$key]['group'] = $item['group'];
            $mx4_convert_img[$key]['url'] = $item['url'];
            $mx4_convert_img[$key]['image'] = $image;
            $mx4_convert_img[$key]['isHot'] = false;
            $mx4_convert_img[$key]['colorBlock'] = null;
        } else {
            //匹配不到，按照存在用户截图,需要拼出缩略图地址
            if (!$item['bgcolor']) {
                $mx4_convert_img[$key]['title'] = $item['title'];
                $mx4_convert_img[$key]['group'] = $item['group'];
                $mx4_convert_img[$key]['url'] = $item['url'];
                $mx4_convert_img[$key]['image'] = 'mx://thumbs/?reflush=0&stamp=' . time() . '&url=' . $item['url'];
                $mx4_convert_img[$key]['isHot'] = false;
                $mx4_convert_img[$key]['colorBlock'] = null;
            } else {
                $mx4_convert_img[$key]['title'] = $item['title'];
                $mx4_convert_img[$key]['group'] = $item['group'];
                $mx4_convert_img[$key]['url'] = $item['url'];
                $mx4_convert_img[$key]['image'] = null;
                $mx4_convert_img[$key]['isHot'] = false;
                $mx4_convert_img[$key]['colorBlock'] = null;
            }
        }

    }

    //获取mx4 Folder数据
    foreach ($mx4_convert_img as $key => $item) {
        if (isset($item['group']) && !empty($item['group'])) {
            $mx4_folder[] = $item;
        } else {
            $mx4_ext_folder_data[] = $item;
        }
    }

    //生成文件夹名list，文件夹ID
    foreach ($mx4_folder as $key => $item) {
        $mx4_folder_title_list[] = $item['group'];
    }

    $mx4_folder_title_list = array_unique($mx4_folder_title_list);

    foreach ($mx4_folder_title_list as $name) {
        $mx4_new_folder_title_list[create_guid()] = $name;
    }

    //归并mx4文件夹数据，生成mx5文件夹数据格式
    foreach ($mx4_folder as $key => $item) {
        $folderName = $item['group'];
        if (in_array($folderName, $mx4_new_folder_title_list)) {
            $childeren[$folderName][] = array('title' => $item['title'], 'url' => $item['url'], 'image' => $item['image']);
        }
    }

    foreach ($childeren as $key => $item) {
        if (in_array($key, $mx4_new_folder_title_list)) {
            $mx4_sub_folder[] = array(
                'folderId' => array_search($key, $mx4_new_folder_title_list),
                'title' => $key,
                'children' =>  $item,
            );
        }
    }

    $mx4_new_data = array_merge((array)$mx4_ext_folder_data, (array)$mx4_sub_folder);

    $mx4_url_title_lists = array_column_multi($mx4_ext_folder_data, array('url'));

    //获取mx5外层，除top8的去重数据
    foreach ($mx5_layout as $key => $item) {
        if ((!isset($item['children']) && !isset($item['folderId']) ) && (!isset($item['isHot']) || $item['isHot'] === false) && (!isset($item['group']) || empty($item['group']))) {
            //去重,如mx5里有重复数据丢掉
            if (in_array(array('url' => $item['url']), $mx4_url_title_lists)) {
                //$notin_mx4_data[] = $item;
                unset($mx5_layout[$key]);
            }
        }else{
            //排查问题
            //var_export($item);
        }
    }

    //逐一取出mx4_new_data的数据追加到mx5_guest数组后面
    $mx5_new_map_list =  array();
    $mx5_folder_title_list = getFolderTitleLists($mx5_layout);
    $mx4_new_data_row = count($mx4_new_data);

    while ($mx4_new_data_row > 0) {

        $first = array_shift($mx4_new_data);
        $mx4_new_data_row = count($mx4_new_data);

        if (isset($first['children'])) {
            //获取mx5_layout_geust title lists
            $mx5_new_map_title_lists = getFolderTitleLists($mx5_new_map_list);
            $titleLists = $mx5_folder_title_list;
            //将两次title合并用于检查可用的new title
            foreach ($mx5_new_map_title_lists as $newdata) {
                $titleLists[] = $newdata;
            }

            $validTitle = getValidTitle(substr($first['title'], 0, strlen($first['title']) - 8), $titleLists);

            if ($validTitle) {
                $first['folderId'] = create_guid();
                $first['title'] = $validTitle;
                $mx5_new_map_list[] = $first;
            }
        } else {
            $mx5_new_map_list[] = $first;
        }
    }

    $mx5_layout = array_merge((array)$mx5_new_map_list, (array)$mx5_layout);

    $result = array(
        "result" => $mx5_layout,
        "status" => array("code" => "200", "msg" => "success")
    );

} elseif ($import == 'mx4' && strtolower($platform) == 'win') {
    //mx4数据导入情况
    $mx4_arr = array_merge($mx4_layout, $mx4_layout_guest);

    $mx5_arr = array_merge($mx5_layout_guest, $mx5_layout);

    if (empty($mx4_arr)) {
        //mx4数据为空，直接返回mx5json数据包
        $result = array(
            "result" => $mx5_arr,
            "status" => array("code" => "200", "msg" => "success")
        );
        send($result, $callback);
    }

    $mx4_copy_arr = array();

    //整理MX4,进行一次数据copy,去掉空url,空title,没有数据的未命名文件夹
    foreach ($mx4_arr['page'] as $page => $mx4_data) {
        foreach ($mx4_data['content'] as $k => $v) {
            //如果数据中url有数据,title为空,截取100个字符长度的url作为默认title
            if ((isset($v[title]) && empty($v['title'])) && (isset($v['url']) && !empty($v['url']))) {
                $v['title'] = substr($v['url'], 0, 100);
            }

            if ((isset($v['url']) && $v['url']) && (isset($v['title']) && $v['title'])) {
                //把mx4里go跳转转换成mx5的go跳转资源
                $v = replaceMX4GoToMX5Go($v, $data['MX4Go_To_MX5Go']);

                /**
                 * 处理图片
                 * thumbType 取值0预置;1抓图;2色块;3自定义
                 */

                if ($v['thumbType'] == 0) {
                    //预置图片,需从提供的mx5库里取image
                    $v['image'] = getDefaultImage(array('url' => $v['url'], 'title' => $v['title']), $data['SITE_LIST']);
                } elseif ($v['thumbType'] == 1) {
                    //存在用户截图,需要拼出缩略图地址
                    $v['image'] = 'mx://thumbs/?reflush=0&stamp=' . time() . '&url=' . $v['url'];
                }

                $mx4_copy_arr['page'][$page]['title'] = $mx4_data['title'];
                $mx4_copy_arr['page'][$page]['content'][] = array('url' => $v['url'], 'title' => $v['title'], 'image' => $v['image'], 'thumbType' => $v['thumbType'], 'isHot' => false);
            }

        }
    }

//转换成mx5文件夹数据格式
    $mx4_to_mx5_folder_format_arr = array();
    foreach ($mx4_copy_arr['page'] as $data) {
        $mx4_to_mx5_folder_format_arr[] = array(
            'folderId' => create_guid(),
            'title' => $data['title'],
            'children' => $data['content'],
            'isHot' => false
        );
    }

    $mx4_row = count($mx4_to_mx5_folder_format_arr);

    while ($mx4_row > 0) {

        $first = array_shift($mx4_to_mx5_folder_format_arr);
        $mx4_row = count($mx4_to_mx5_folder_format_arr);

        $titleLists = getFolderTitleLists($mx5_layout);
        $validTitle = getValidTitle($first['title'], $titleLists);

        if ($validTitle) {
            $first['title'] = $validTitle;
            $mx5_layout[] = $first;
        }
    }

    $result = array(
        "result" => $mx5_layout,
        "status" => array("code" => "200", "msg" => "success")
    );
} elseif ($import == 'mx5') {
    //mx5数据导入情况

    if (empty($mx5_layout) && empty($mx5_layout_guest)) {
        $result = array(
            "result" => array(),
            "status" => array("code" => "10004", "msg" => "failed"),
    );
        if (DEBUG == false) {
            send($result, $callback);
        }
    }

    //把mx4里go跳转转换成mx5的go跳转资源
    $mx5_guest_replace_row = count($mx5_layout_guest);

    while ($mx5_guest_replace_row > 0) {

        $first = array_shift($mx5_layout_guest);
        $mx5_guest_replace_row = count($mx5_layout_guest);

        if (isset($first['children'])) {
            //把mx4里go跳转转换成mx5的go跳转资源
            foreach ($first['children'] as $k => $items) {
                $first['children'][$k] = replaceMX4GoToMX5Go($items, $data['MX4Go_To_MX5Go']);
            }

            $mx5_layout_guest_replace[] = $first;

        } else {
            //把mx4里go跳转转换成mx5的go跳转资源
            $first = replaceMX4GoToMX5Go($first, $data['MX4Go_To_MX5Go']);

            $mx5_layout_guest_replace[] = $first;
        }
    }

    $mx5_layout_guest = $mx5_layout_guest_replace;

    //获取mx5_layout_guest去除文件夹的数据
    $mx5_layout_guest_ext_folder_data = getExceptFolderData($mx5_layout_guest);

    $mx5_layout_guest_url_title_lists = array_column_multi($mx5_layout_guest_ext_folder_data, array('url', 'title'));

    //获取mx5_layout不在mx5_layout_guest除了文件夹数据
    foreach ($mx5_layout as $mx5_data) {
        if (isset($mx5_data['title']) && isset($mx5_data['url'])) {
            //去重外层数据
            if (!in_array(array('url' => $mx5_data['url'], 'title' => $mx5_data['title']), $mx5_layout_guest_url_title_lists)) {
                $mx5_layout_only[] = $mx5_data;
                //对只有mx5_layout数据进行图片转换,去掉isHost
                $mx5_layout_only = image_convert($mx5_layout_only);
            }
        } elseif (isset($mx5_data['title']) && isset($mx5_data['children'])) {
            //保留文件夹顺序
            $mx5_layout_only[] = $mx5_data;
        }
    }

    //获取mx5_layout_only文件夹名称列表数据
    $mx5_layout_only_folder_lists = getFolderTitleLists($mx5_layout_only);

    $mx5_layout_guest_new_map = array();

    //逐一取出mx5_layout的目录数据追加到mx5_layout_guest数组后面
    $mx5_guest_row = count($mx5_layout_guest);

    while ($mx5_guest_row > 0) {

        $first = array_shift($mx5_layout_guest);
        $mx5_guest_row = count($mx5_layout_guest);

        if (isset($first['children'])) {
            //获取mx5_layout_geust title lists
            $mx5_layout_guest_new_map_title_lists = getFolderTitleLists($mx5_layout_guest_new_map);
            $titleLists = $mx5_layout_only_folder_lists;
            //将两次title合并用于检查可用的new title
            foreach ($mx5_layout_guest_new_map_title_lists as $newdata) {
                $titleLists[] = $newdata;
            }

            $validTitle = getValidTitle($first['title'], $titleLists);

            if ($validTitle) {
                $first['folderId'] = create_guid();
                $first['title'] = $validTitle;
                $mx5_layout_guest_new_map[] = $first;
            }
        } else {
            $mx5_layout_guest_new_map[] = $first;
        }

    }

    $respons = array_merge((array)$mx5_layout_guest_new_map, (array)$mx5_layout_only);

    $result = array(
        "result" => $respons,
        "status" => array("code" => "200", "msg" => "success")
    );
} else {
    $result = array(
        "result" => array(),
        "status" => array("code" => "10003", "msg" => "failed"),
    );
}

send($result, $callback);