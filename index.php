<?php
ini_set('display_errors', 1);
error_reporting(E_ALL & ~E_NOTICE & ~E_WARNING);

//引用静态资源管理类
require_once 'Resource.class.php';

//设置配置和模板文件夹
$root = dirname(__FILE__) . DIRECTORY_SEPARATOR;
FISResource::setConfig(array(
    'config_dir'    => $root . '/tpl/config/',
    'template_dir'  => $root . '/tpl/'
));

$mxver = $_GET['mxver'];
$lang = $_GET['ln'];

if(isInVersions($mxver)) {
    $sub = $lang === 'zh-cn' ? '/zh' : '/en';
    echo file_get_contents("i18n" .$sub. "/index.html");
    return;
}

if(mxVersionContrast($mxver, '5.2.3.100')) {
	// 渲染动态PHP程序
    display("page/home.php");
    return ;
}

if(mxVersionContrast($mxver,'5.1.37') || mxVersionContrast($mxver,'5.1.4.1300')) {
    echo file_get_contents("page/index.html");
    return ;
}

echo file_get_contents("view/index.html");
return ;
?>  