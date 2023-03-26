<?php
/**
 * Description for here
 * @author zhaohongfeng
 * @date 2017/9/7 17:11
 * @version v1.0
 */
error_reporting(0);

$resPath =  $_SERVER['DOCUMENT_ROOT'] . '/static/v1.1/data';

$lang = checkBowserLang();

$res = isset($_GET['res']) ? strtolower($_GET['res']) : '';

if (!empty($lang) && !empty($res)) {
    if ($lang == 'zh') {
        switch ($res) {
            case 'data':
                    exit(file_get_contents($resPath . '/resource/zh/data_js_file.txt'));
                break;

            case 'map':
                $mapData = file_get_contents($resPath . '/resource/zh/map_list.json');
                exit($_GET['callback'] . '(' .$mapData. ')');
                break;
            default:
                exit;
        }
    } elseif($lang == 'en') {
        switch ($res) {
            case 'data':
                exit(file_get_contents($resPath . '/resource/en/data_js_file.txt'));
                break;

            case 'map':
                $mapData = file_get_contents($resPath . '/resource/en/map_list.json');
                exit($_GET['callback'] . '(' .$mapData. ')');
                break;

            default:
                exit;
        }
    }
}

/**
 * [checkBowserLang] Description for here
 * @return string
 */
function checkBowserLang()
{
    //用户设置的语言,只取前4位，这样只判断最优先的语言。如果取前5位，可能出现en,zh的情况，影响判断。
    $lang = ($_GET['lang']) ? substr($_GET['lang'], 0, 4) : 'en';

    if (preg_match("/zh-c/i", $lang)) {
        //echo "简体中文";
        return 'zh';
    } else if (preg_match("/en/i", $lang)) {
        //echo "English";
        return 'en';
    } else {
        //其它语言不处理
        return 'en';
    }
    /*else if (preg_match("/zh/i", $lang))
        echo "繁體中文";

    else if (preg_match("/fr/i", $lang))
        echo "French";
    else if (preg_match("/de/i", $lang))
        echo "German";
    else if (preg_match("/jp/i", $lang))
        echo "Japanese";
    else if (preg_match("/ko/i", $lang))
        echo "Korean";
    else if (preg_match("/es/i", $lang))
        echo "Spanish";
    else if (preg_match("/sv/i", $lang))
        echo "Swedish";
    else echo $_SERVER["HTTP_ACCEPT_LANGUAGE"];*/
}