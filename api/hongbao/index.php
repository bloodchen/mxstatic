<?php

/**
 * 红包生成访问链接接口
 * 新标签页面打开后，ajax请求这个地址获得红包打开链接
 * 
 * @version v1.0
 */
define('AES_KEY', 'mx5-hongbao-20160808');
define('HD_LINK', 'http://hd.maxthon.cn/hongbao/prize.html');

header('Content-type: text/json');

$uid = filter_input(INPUT_GET, 'uid', FILTER_VALIDATE_INT);
if ($uid) {

    $param = $uid . ',' . time();
    $param = greateAesStr($param);

    $result = array(
        "data" => array("url" => HD_LINK . '?u=' . $param),
        "status" => array("code" => "200", "msg" => "success")
    );
} else {
    $result = array(
        "data" => array(),
        "status" => array("code" => "403", "msg" => "fail")
    );
}
echo json_encode($result);
exit;

function greateAesStr($str) {
    include_once './libs/AES.class.php';
    $aes = new AES(md5(AES_KEY));
    return base64_encode($aes->encrypt($str));
}
