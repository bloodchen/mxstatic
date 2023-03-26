<?php
/**
 * Created by PhpStorm.
 * User: why
 * Date: 2016/8/5
 * Time: 17:55
 */
//数据对比源
$data = array();
$data['DEFAULT_HOT_SITE'] = array(
    array('title' => '百度', 'url' => 'http://www.baidu.com/index.php?tn=maxthon2&ch=2'),
    array('title' => '天猫精选', 'url' => 'http://go.maxthon.cn/redir/mx4/qa.htm?f=tmall'),
    array('title' => '天猫商城', 'url' => 'http://go.maxthon.cn/redir/mx4/qa.htm?f=tmall'),
    array('title' => '京东商城', 'url' => 'http://go.maxthon.cn/redir/mx4/qa.htm?f=jd'),
    array('title' => '新浪', 'url' => 'http://www.sina.com.cn'),
    array('title' => '凤凰网', 'url' => 'http://www.ifeng.com/#_zbs_maxthon'),
    array('title' => '优酷', 'url' => 'http://www.youku.com/'),
    array('title' => '傲游今日', 'url' => 'http://i.maxthon.cn/'),
);
$data['MX4_SITE_LIST'] = array(
    array('title' => '亚马逊', 'url' => 'http://go.maxthon.cn/redir/mx4/qa.htm?f=amazon'),
    array('title' => '1号店', 'url' => 'http://go.maxthon.cn/redir/mx4/qa.htm?f=yhd'),
    array('title' => '唯品会', 'url' => 'http://go.maxthon.cn/redir/mx4/qa.htm?f=vipshop'),
    array('title' => '苏宁易购', 'url' => 'http://go.maxthon.cn/redir/mx4/qa.htm?f=suning'),
    array('title' => '途牛', 'url' => 'http://www.tuniu.com/?p=11386&cmpid=mkt_06019901&utm_campaign=lifestyle&utm_source=maxthon.com&utm_medium=referral'),
    array('title' => '美团', 'url' => 'http://r.union.meituan.com/link/hqbdt'),
    array('title' => '糯米', 'url' => 'http://go.maxthon.cn/redir/public/feature_post.htm?f=qa_nuomi'),
    array('title' => '国美在线', 'url' => 'http://go.maxthon.cn/redir/mx4/qa.htm?f=gome'),
    array('title' => '当当网', 'url' => 'http://union.dangdang.com/transfer.php?from=P-303956-9gongge&ad_type=10&sys_id=1&backurl=http%3A%2F%2Fwww.dangdang.com'),
    array('title' => '聚美优品', 'url' => 'http://go.maxthon.cn/redir/mx4/qa.htm?f=jumei'),
    array('title' => '乐蜂网', 'url' => 'http://www.lefeng.com/'),
    array('title' => '去哪儿', 'url' => 'http://www.qunar.com/?ex_track=auto_4f59afc7'),
);
//mx4 go 跳转的数据转换成mx5的go跳转数据
$data['MX4Go_To_MX5Go'] = array(
    0 =>
        array(
            'title' => '淘宝网',
            'url' => 'http://go.maxthon.cn/redir/mx4/qa.htm?f=taobao',
            'replace' => 'http://go.maxthon.cn/redir/mx5/qa.htm?f=taobao',
        ),
    1 =>
        array(
            'title' => '淘宝网',
            'url' => 'http://go.maxthon.cn/redir/mx4/qa.htm?f=taobao2',
            'replace' => 'https://www.taobao.com/',
        ),
    2 =>
        array(
            'title' => '天猫商城',
            'url' => 'http://go.maxthon.cn/redir/mx4/qa.htm?f=tmall',
            'replace' => 'http://go.maxthon.cn/redir/mx5/qa.htm?f=tmall',
        ),
    3 =>
        array(
            'title' => '京东商城',
            'url' => 'http://go.maxthon.cn/redir/mx4/qa.htm?f=jd',
            'replace' => 'http://go.maxthon.cn/redir/mx5/qa.htm?f=jd',
        ),
    4 =>
        array(
            'title' => '京东商城',
            'url' => 'http://go.maxthon.cn/redir/public/feature_post.htm?f=mx4_jd',
            'replace' => 'http://go.maxthon.cn/redir/mx5/qa.htm?f=jd',
        ),
    5 =>
        array(
            'title' => '爱淘宝',
            'url' => 'http://go.maxthon.cn/redir/mx4/qa.htm?f=aitaobao',
            'replace' => 'http://go.maxthon.cn/redir/mx5/qa.htm?f=aitaobao',
        ),
    6 =>
        array(
            'title' => '亚马逊',
            'url' => 'http://go.maxthon.cn/redir/mx4/qa.htm?f=amazon',
            'replace' => 'http://go.maxthon.cn/redir/mx5/qa.htm?f=amazon',
        ),
    7 =>
        array(
            'title' => '唯品会',
            'url' => 'http://go.maxthon.cn/redir/mx4/qa.htm?f=vipshop',
            'replace' => 'http://go.maxthon.cn/redir/mx5/qa.htm?f=vipshop',
        ),
    8 =>
        array(
            'title' => 'hao123网址导航',
            'url' => 'http://go.maxthon.cn/redir/mx4/qa.htm?f=hao123',
            'replace' => 'http://go.maxthon.cn/redir/mx5/qa.htm?f=hao123',
        ),
    9 =>
        array(
            'title' => '1号店',
            'url' => 'http://go.maxthon.cn/redir/mx4/qa.htm?f=yhd',
            'replace' => 'http://go.maxthon.cn/redir/mx5/qa.htm?f=yhd',
        ),
    10 =>
        array(
            'title' => '聚美优品',
            'url' => 'http://go.maxthon.cn/redir/mx4/qa.htm?f=jumei',
            'replace' => 'http://go.maxthon.cn/redir/mx5/qa.htm?f=jumei',
        ),
    11 =>
        array(
            'title' => '苏宁易购',
            'url' => 'http://go.maxthon.cn/redir/mx4/qa.htm?f=suning',
            'replace' => 'http://go.maxthon.cn/redir/mx5/qa.htm?f=suning',
        ),
    12 =>
        array(
            'title' => '糯米',
            'url' => 'http://go.maxthon.cn/redir/public/feature_post.htm?f=qa_nuomi',
            'replace' => 'http://go.maxthon.cn/redir/mx5/qa.htm?f=nuomi',
        ),
    13 =>
        array(
            'title' => '国美在线',
            'url' => 'http://go.maxthon.cn/redir/mx4/qa.htm?f=gome',
            'replace' => 'http://go.maxthon.cn/redir/mx5/qa.htm?f=gome',
        ),
    14 =>
        array(
            'title' => '凡客诚品',
            'url' => 'http://go.maxthon.cn/redir/mx4/qa.htm?f=vancl',
            'replace' => 'http://go.maxthon.cn/redir/mx5/qa.htm?f=vancl',
        ),
    15 =>
        array(
            'title' => '携程旅游网',
            'url' => 'http://u.ctrip.com/union/CtripRedirect.aspx?TypeID=2&Allianceid=18105&sid=449687&OUID=&jumpUrl=http://www.ctrip.com',
            'replace' => 'http://go.maxthon.cn/redir/mx5/qa.htm?f=ctrip',
        ),
);

$data['SITE_LIST'] = array(
    //推荐站点
    0 =>
        array(
            'title' => '百度',
            'url' => 'https://www.baidu.com/index.php?tn=maxthon2&ch=2',
            'image' => 'http://pc-newtab.maxthon.com/v1.1/image/logo/Re/baidu.png',
        ),
    1 =>
        array(
            'title' => '天猫精选',
            'url' => 'http://go.maxthon.cn/redir/mx5/qa.htm?f=tmall',   //原http://go.maxthon.cn/redir/mx4/qa.htm?f=tmall
            'image' => 'http://pc-newtab.maxthon.com/v1.1/image/logo/Re/Tmall.png',
        ),
    2 =>
        array(
            'title' => '京东商城',
            'url' => 'http://go.maxthon.cn/redir/mx5/qa.htm?f=jd',  //原http://go.maxthon.cn/redir/mx4/qa.htm?f=jd
            'image' => 'http://pc-newtab.maxthon.com/v1.1/image/logo/Re/JD.png',
        ),
    3 =>
        array(
            'title' => '爱淘宝',
            'url' => 'http://go.maxthon.cn/redir/mx5/qa.htm?f=aitaobao',    //原http://go.maxthon.cn/redir/mx4/qa.htm?f=aitaobao
            'image' => 'http://pc-newtab.maxthon.com/v1.1/image/logo/Re/simba_taobao.png',
        ),
    4 =>
        array(
            'title' => '知乎',
            'url' => 'http://www.zhihu.com',
            'image' => 'http://pc-newtab.maxthon.com/v1.1/image/logo/Re/zhihu.png',
        ),
    5 =>
        array(
            'title' => '携程旅行网',
            'url' => 'http://go.maxthon.cn/redir/mx5/qa.htm?f=ctrip',  //原http://u.ctrip.com/union/CtripRedirect.aspx?TypeID=2&Allianceid=18105&sid=791160&OUID=&jumpUrl=http://www.ctrip.com/
            'image' => 'http://pc-newtab.maxthon.com/v1.1/image/logo/Re/ctrip.png',
        ),
    6 =>
        array(
            'title' => '优酷',
            'url' => 'http://www.youku.com/',
            'image' => 'http://pc-newtab.maxthon.com/v1.1/image/logo/Re/youku.png',
        ),
    7 =>
        array(
            'title' => '傲游今日',
            'url' => 'http://i.maxthon.cn/',
            'image' => 'http://pc-newtab.maxthon.com/v1.1/image/logo/Re/i_maxthon.png',
        ),
    8 =>
        array(
            'title' => '新浪微博',
            'url' => 'http://weibo.com/',
            'image' => 'http://pc-newtab.maxthon.com/v1.1/image/logo/Re/weibo.png',
        ),
    9 =>
        array(
            'title' => '亚马逊',
            'url' => 'http://go.maxthon.cn/redir/mx5/qa.htm?f=amazon',  //原http://go.maxthon.cn/redir/mx4/qa.htm?f=amazon
            'image' => 'http://pc-newtab.maxthon.com/v1.1/image/logo/Re/amazon.png',
        ),
    10 =>
        array(
            'title' => '唯品会',
            'url' => 'http://go.maxthon.cn/redir/mx5/qa.htm?f=vipshop',  //原http://go.maxthon.cn/redir/mx4/qa.htm?f=vipshop
            'image' => 'http://pc-newtab.maxthon.com/v1.1/image/logo/Re/vip.png',
        ),
    11 =>
        array(
            'title' => '淘宝网',
            'url' => 'http://go.maxthon.cn/redir/mx5/qa.htm?f=taobao',  //原http://go.maxthon.cn/redir/mx4/qa.htm?f=taobao
            'image' => 'http://pc-newtab.maxthon.com/v1.1/image/logo/Re/taobao.png',
        ),
    12 =>
        array(
            'title' => '途牛旅游网',
            'url' => 'http://go.maxthon.cn/redir/mx5/qa.htm?f=tuniu ',
            'image' => 'http://pc-newtab.maxthon.com/v1.1/image/logo/Re/tuniu.png',
        ),
    13 =>
        array(
            'title' => '58同城',
            'url' => 'http://www.58.com/?path=?utm_source%3d5uad%26utm_campaign%3d5uad-109',
            'image' => 'http://pc-newtab.maxthon.com/v1.1/image/logo/Re/58.png',
        ),
    14 =>
        array(
            'title' => '傲游哈哈',
            'url' => 'http://www.haha.mx/?qamx5',
            'image' => 'http://pc-newtab.maxthon.com/v1.1/image/logo/Re/haha_mx.png',
        ),
    15 =>
        array(
            'title' => '哔哩哔哩',
            'url' => 'http://www.bilibili.com/',
            'image' => 'http://pc-newtab.maxthon.com/v1.1/image/logo/Re/bilibili.png',
        ),
    16 =>
        array(
            'title' => 'hao123',
            'url' => 'http://go.maxthon.cn/redir/mx5/qa.htm?f=hao123',  //原http://go.maxthon.cn/redir/mx4/qa.htm?f=hao123
            'image' => 'http://pc-newtab.maxthon.com/v1.1/image/logo/Re/hao123.png',
        ),
    //新闻资讯
    17 =>
        array(
            'title' => '凤凰网',
            'url' => 'http://www.ifeng.com/#_zbs_maxthon',
            'image' => 'http://pc-newtab.maxthon.com/v1.1/image/logo/Re/ifeng.png',
        ),
    18 =>
        array(
            'title' => '新浪',
            'url' => 'http://www.sina.com.cn/',
            'image' => 'http://pc-newtab.maxthon.com/v1.1/image/logo/Re/sina.png',
        ),
    19 =>
        array(
            'title' => '腾讯',
            'url' => 'http://www.qq.com/',
            'image' => 'http://pc-newtab.maxthon.com/v1.1/image/logo/Re/qq.png',
        ),
    20 =>
        array(
            'title' => '网易',
            'url' => 'http://www.163.com/#frp10',
            'image' => 'http://pc-newtab.maxthon.com/v1.1/image/logo/Re/163.png',
        ),
    21 =>
        array(
            'title' => '搜狐',
            'url' => 'http://www.sohu.com/',
            'image' => 'http://pc-newtab.maxthon.com/v1.1/image/logo/Re/sohu.png',
        ),
    22 =>
        array(
            'title' => '东方财富网',
            'url' => 'http://www.eastmoney.com/',
            'image' => 'http://pc-newtab.maxthon.com/v1.1/image/logo/Re/eastmoney.png',
        ),
    23 =>
        array(
            'title' => '中华网',
            'url' => 'http://www.china.com/',
            'image' => 'http://pc-newtab.maxthon.com/v1.1/image/logo/Re/china.png',
        ),
    24 =>
        array(
            'title' => '人民网',
            'url' => 'http://www.people.com.cn/',
            'image' => 'http://pc-newtab.maxthon.com/v1.1/image/logo/Re/people.png',
        ),
    25 =>
        array(
            'title' => '环球网',
            'url' => 'http://www.huanqiu.com/',
            'image' => 'http://pc-newtab.maxthon.com/v1.1/image/logo/Re/huanqiu.png',
        ),
    26 =>
        array(
            'title' => '新华网',
            'url' => 'http://www.xinhuanet.com/',
            'image' => 'http://pc-newtab.maxthon.com/v1.1/image/logo/Re/xinhuanet.png',
        ),
    //影视频道
    27 =>
        array(
            'title' => '优酷',
            'url' => 'http://www.youku.com/',
            'image' => 'http://pc-newtab.maxthon.com/v1.1/image/logo/Re/youku.png',
        ),
    28 =>
        array(
            'title' => '搜狐视频',
            'url' => 'http://tv.sohu.com/?lcode=AAAAI8cJIH0zbD_j7vM06mKU-H-ufrd6-IyD4U7nXbj2ixyHWYs9o_-LUX-.cf6&lqd=10217',
            'image' => 'http://pc-newtab.maxthon.com/v1.1/image/logo/Re/tv_sohu.png',
        ),
    29 =>
        array(
            'title' => '土豆',
            'url' => 'http://www.tudou.com/',
            'image' => 'http://pc-newtab.maxthon.com/v1.1/image/logo/Re/tudou.png',
        ),
    30 =>
        array(
            'title' => '爱奇艺',
            'url' => 'http://www.iqiyi.com/',
            'image' => 'http://pc-newtab.maxthon.com/v1.1/image/logo/Re/iqiyi.png',
        ),
    31 =>
        array(
            'title' => '乐视网',
            'url' => 'http://www.le.com/',
            'image' => 'http://pc-newtab.maxthon.com/v1.1/image/logo/Re/le.png',
        ),
    32 =>
        array(
            'title' => '腾讯视频',
            'url' => 'http://v.qq.com/',
            'image' => 'http://pc-newtab.maxthon.com/v1.1/image/logo/Re/v_qq.png',
        ),
    33 =>
        array(
            'title' => '凤凰视频',
            'url' => 'http://v.ifeng.com/',
            'image' => 'http://pc-newtab.maxthon.com/v1.1/image/logo/Re/v_ifeng.png',
        ),
    34 =>
        array(
            'title' => '哔哩哔哩',
            'url' => 'http://www.bilibili.com/',
            'image' => 'http://pc-newtab.maxthon.com/v1.1/image/logo/Re/bilibili.png',
        ),
    35 =>
        array(
            'title' => 'AcFun',
            'url' => 'http://www.acfun.tv/',
            'image' => 'http://pc-newtab.maxthon.com/v1.1/image/logo/Re/acfun.png',
        ),
    36 =>
        array(
            'title' => '风行网',
            'url' => 'http://www.fun.tv/',
            'image' => 'http://pc-newtab.maxthon.com/v1.1/image/logo/Re/fun.png',
        ),
    37 =>
        array(
            'title' => '响巢看看',
            'url' => 'http://www.kankan.com/',
            'image' => 'http://pc-newtab.maxthon.com/v1.1/image/logo/Re/kankan.png',
        ),
    38 =>
        array(
            'title' => 'PPTV',
            'url' => 'http://www.pptv.com/',
            'image' => 'http://pc-newtab.maxthon.com/v1.1/image/logo/Re/PPTV.png',
        ),
    39 =>
        array(
            'title' => 'PPS',
            'url' => 'http://www.pps.tv/',
            'image' => 'http://pc-newtab.maxthon.com/v1.1/image/logo/Re/PPS.png',
        ),
    40 =>
        array(
            'title' => '斗鱼TV',
            'url' => 'http://www.douyu.com/',
            'image' => 'http://pc-newtab.maxthon.com/v1.1/image/logo/Re/douyu.png',
        ),
    41 =>
        array(
            'title' => '熊猫TV',
            'url' => 'http://www.panda.tv/',
            'image' => 'http://pc-newtab.maxthon.com/v1.1/image/logo/Re/panda.png',
        ),
    //网上购物
    42 =>
        array(
            'title' => '天猫精选',
            'url' => 'http://go.maxthon.cn/redir/mx4/qa.htm?f=tmall',
            'image' => 'http://pc-newtab.maxthon.com/v1.1/image/logo/Re/Tmall.png',
        ),
    43 =>
        array(
            'title' => '京东',
            'url' => 'http://go.maxthon.cn/redir/mx4/qa.htm?f=jd',
            'image' => 'http://pc-newtab.maxthon.com/v1.1/image/logo/Re/JD.png',
        ),
    44 =>
        array(
            'title' => '淘宝网',
            'url' => 'http://go.maxthon.cn/redir/mx5/qa.htm?f=taobao',  //原http://go.maxthon.cn/redir/mx4/qa.htm?f=taobao
            'image' => 'http://pc-newtab.maxthon.com/v1.1/image/logo/Re/taobao.png',
        ),
    45 =>
        array(
            'title' => '爱淘宝',
            'url' => 'http://go.maxthon.cn/redir/mx4/qa.htm?f=aitaobao',
            'image' => 'http://pc-newtab.maxthon.com/v1.1/image/logo/Re/simba_taobao.png',
        ),
    46 =>
        array(
            'title' => '亚马逊',
            'url' => 'http://go.maxthon.cn/redir/mx4/qa.htm?f=amazon',
            'image' => 'http://pc-newtab.maxthon.com/v1.1/image/logo/Re/amazon.png',
        ),
    47 =>
        array(
            'title' => '唯品会',
            'url' => 'http://go.maxthon.cn/redir/mx4/qa.htm?f=vipshop',
            'image' => 'http://pc-newtab.maxthon.com/v1.1/image/logo/Re/vip.png',
        ),
    48 =>
        array(
            'title' => '1号店',
            'url' => 'http://go.maxthon.cn/redir/mx5/qa.htm?f=yhd',    //原http://go.maxthon.cn/redir/mx4/qa.htm?f=yhd
            'image' => 'http://pc-newtab.maxthon.com/v1.1/image/logo/Re/yhd.png',
        ),
    49 =>
        array(
            'title' => '聚美优品',
            'url' => 'http://go.maxthon.cn/redir/mx5/qa.htm?f=jumei',    //原http://go.maxthon.cn/redir/mx4/qa.htm?f=jumei
            'image' => 'http://pc-newtab.maxthon.com/v1.1/image/logo/Re/jumei.png',
        ),
    50 =>
        array(
            'title' => '苏宁易购',
            'url' => 'http://go.maxthon.cn/redir/mx5/qa.htm?f=suning',    //原http://go.maxthon.cn/redir/mx4/qa.htm?f=suning
            'image' => 'http://pc-newtab.maxthon.com/v1.1/image/logo/Re/suning.png',
        ),
    51 =>
        array(
            'title' => '糯米',
            'url' => 'http://go.maxthon.cn/redir/mx5/qa.htm?f=nuomi',    //原http://go.maxthon.cn/redir/public/feature_post.htm?f=qa_nuomi
            'image' => 'http://pc-newtab.maxthon.com/v1.1/image/logo/Re/nuomi.png',
        ),
    52 =>
        array(
            'title' => '国美在线',
            'url' => 'http://go.maxthon.cn/redir/mx5/qa.htm?f=gome',    //原http://go.maxthon.cn/redir/mx4/qa.htm?f=gome
            'image' => 'http://pc-newtab.maxthon.com/v1.1/image/logo/Re/gome.png',
        ),
    53 =>
        array(
            'title' => '聚划算',
            'url' => 'http://go.maxthon.cn/redir/mx5/qa.htm?f=juhuasuan',
            'image' => 'http://pc-newtab.maxthon.com/v1.1/image/logo/Re/ju_taobao.png',
        ),
    54 =>
        array(
            'title' => '小米',
            'url' => 'http://go.maxthon.cn/redir/mx5/qa.htm?f=mi',
            'image' => 'http://pc-newtab.maxthon.com/v1.1/image/logo/Re/mi.png',
        ),
    55 =>
        array(
            'title' => '乐视商城',
            'url' => 'http://www.lemall.com/',
            'image' => 'http://pc-newtab.maxthon.com/v1.1/image/logo/Re/lemall.png',
        ),
    56 =>
        array(
            'title' => '当当网',
            'url' => 'http://go.maxthon.cn/redir/mx5/qa.htm?f=dangdang',
            'image' => 'http://pc-newtab.maxthon.com/v1.1/image/logo/Re/dangdang.png',
        ),
    57 =>
        array(
            'title' => '美团',
            'url' => 'http://go.maxthon.cn/redir/mx5/qa.htm?f=meituan',
            'image' => 'http://pc-newtab.maxthon.com/v1.1/image/logo/Re/meituan.png',
        ),
    58 =>
        array(
            'title' => '什么值得买',
            'url' => 'http://www.smzdm.com/',
            'image' => 'http://pc-newtab.maxthon.com/v1.1/image/logo/Re/smzdm.png',
        ),
    59 =>
        array(
            'title' => '乐蜂网',
            'url' => 'http://www.lefeng.com/',
            'image' => 'http://pc-newtab.maxthon.com/v1.1/image/logo/Re/lefeng.png',
        ),
    60 =>
        array(
            'title' => '凡客诚品',
            'url' => 'http://go.maxthon.cn/redir/mx5/qa.htm?f=vancl',    //原http://go.maxthon.cn/redir/mx4/qa.htm?f=vancl
            'image' => 'http://pc-newtab.maxthon.com/v1.1/image/logo/Re/vancl.png',
        ),
    //社交网络
    61 =>
        array(
            'title' => '傲游哈哈',
            'url' => 'http://www.haha.mx/?qamx5',
            'image' => 'http://pc-newtab.maxthon.com/v1.1/image/logo/Re/haha_mx.png',
        ),
    62 =>
        array(
            'title' => 'QQ空间',
            'url' => 'http://qzone.qq.com/',
            'image' => 'http://pc-newtab.maxthon.com/v1.1/image/logo/Re/qq_zone.png',
        ),
    63 =>
        array(
            'title' => '新浪微博',
            'url' => 'http://weibo.com/',
            'image' => 'http://pc-newtab.maxthon.com/v1.1/image/logo/Re/weibo.png',
        ),
    64 =>
        array(
            'title' => '百度贴吧',
            'url' => 'http://tieba.baidu.com/',
            'image' => 'http://pc-newtab.maxthon.com/v1.1/image/logo/Re/tieba_baidu.png',
        ),
    65 =>
        array(
            'title' => '知乎',
            'url' => 'http://www.zhihu.com/',
            'image' => 'http://pc-newtab.maxthon.com/v1.1/image/logo/Re/zhihu.png',
        ),
    66 =>
        array(
            'title' => 'LOFTER乐乎',
            'url' => 'http://www.lofter.com/',
            'image' => 'http://pc-newtab.maxthon.com/v1.1/image/logo/Re/lofter.png',
        ),
    67 =>
        array(
            'title' => '天涯社区',
            'url' => 'http://www.tianya.cn/',
            'image' => 'http://pc-newtab.maxthon.com/v1.1/image/logo/Re/tianya.png',
        ),
    68 =>
        array(
            'title' => '猫扑',
            'url' => 'http://www.mop.com/',
            'image' => 'http://pc-newtab.maxthon.com/v1.1/image/logo/Re/mop.png',
        ),
    69 =>
        array(
            'title' => '豆瓣网',
            'url' => 'http://www.douban.com/',
            'image' => 'http://pc-newtab.maxthon.com/v1.1/image/logo/Re/douban.png',
        ),
    70 =>
        array(
            'title' => '开心网',
            'url' => 'http://www.kaixin001.com/',
            'image' => 'http://pc-newtab.maxthon.com/v1.1/image/logo/Re/kanxin001.png',
        ),
    71 =>
        array(
            'title' => '世纪佳缘',
            'url' => 'http://go.maxthon.cn/redir/mx5/qa.htm?f=jiayuan',
            'image' => 'http://pc-newtab.maxthon.com/v1.1/image/logo/Re/jiayuan.png',
        ),
    72 =>
        array(
            'title' => '百合网',
            'url' => 'http://www.baihe.com/betatest/betatest_newlandpage.html?policy=1&Channel=xmkj-pc&Code=4',
            'image' => 'http://pc-newtab.maxthon.com/v1.1/image/logo/Re/baihe.png',
        ),
    73 =>
        array(
            'title' => '珍爱网',
            'url' => 'http://www.zhenai.com/',
            'image' => 'http://pc-newtab.maxthon.com/v1.1/image/logo/Re/zhenai.png',
        ),
    74 =>
        array(
            'title' => '水木社区',
            'url' => 'http://www.newsmth.net/',
            'image' => 'http://pc-newtab.maxthon.com/v1.1/image/logo/Re/newsmth.png',
        ),
    //文学小说
    75 =>
        array(
            'title' => '起点中文网',
            'url' => 'http://www.qidian.com/',
            'image' => 'http://pc-newtab.maxthon.com/v1.1/image/logo/Re/qidian.png',
        ),
    76 =>
        array(
            'title' => '红袖添香',
            'url' => 'http://www.hongxiu.com/',
            'image' => 'http://pc-newtab.maxthon.com/v1.1/image/logo/Re/hongxiu.png',
        ),
    77 =>
        array(
            'title' => '纵横中文网',
            'url' => 'http://www.zongheng.com/',
            'image' => 'http://pc-newtab.maxthon.com/v1.1/image/logo/Re/zongheng.png',
        ),
    78 =>
        array(
            'title' => '潇湘书院',
            'url' => 'http://www.xxsy.net/',
            'image' => 'http://pc-newtab.maxthon.com/v1.1/image/logo/Re/xxsy.png',
        ),
    79 =>
        array(
            'title' => '新浪读书',
            'url' => 'http://book.sina.com.cn/',
            'image' => 'http://pc-newtab.maxthon.com/v1.1/image/logo/Re/book_sina.png',
        ),
    80 =>
        array(
            'title' => '简书',
            'url' => 'http://www.jianshu.com/',
            'image' => 'http://pc-newtab.maxthon.com/v1.1/image/logo/Re/jianshu.png',
        ),
    81 =>
        array(
            'title' => 'QQ阅读',
            'url' => 'http://ebook.qq.com/',
            'image' => 'http://pc-newtab.maxthon.com/v1.1/image/logo/Re/ebook.png',
        ),
    //游戏娱乐
    82 =>
        array(
            'title' => '傲游游戏',
            'url' => 'http://www.007.mx/',
            'image' => 'http://pc-newtab.maxthon.com/v1.1/image/logo/Re/007_mx.png',
        ),
    83 =>
        array(
            'title' => '4399小游戏',
            'url' => 'http://www.4399.com/',
            'image' => 'http://pc-newtab.maxthon.com/v1.1/image/logo/Re/4399.png',
        ),
    84 =>
        array(
            'title' => '腾讯游戏',
            'url' => 'http://game.qq.com/',
            'image' => 'http://pc-newtab.maxthon.com/v1.1/image/logo/Re/game_qq.png',
        ),
    85 =>
        array(
            'title' => '网易游戏',
            'url' => 'http://game.163.com/',
            'image' => 'http://pc-newtab.maxthon.com/v1.1/image/logo/Re/game_163.png',
        ),
    86 =>
        array(
            'title' => '17173游戏网',
            'url' => 'http://www.17173.com/',
            'image' => 'http://pc-newtab.maxthon.com/v1.1/image/logo/Re/17173.png',
        ),
    87 =>
        array(
            'title' => '3DMGAME',
            'url' => 'http://www.3dmgame.com/',
            'image' => 'http://pc-newtab.maxthon.com/v1.1/image/logo/Re/3dmgame.png',
        ),
    88 =>
        array(
            'title' => '多玩游戏',
            'url' => 'http://www.duowan.com/',
            'image' => 'http://pc-newtab.maxthon.com/v1.1/image/logo/Re/duowan.png',
        ),
    89 =>
        array(
            'title' => '电玩巴士',
            'url' => 'http://www.tgbus.com/',
            'image' => 'http://pc-newtab.maxthon.com/v1.1/image/logo/Re/tgbus.png',
        ),
    90 =>
        array(
            'title' => '空中网',
            'url' => 'http://www.kongzhong.com/',
            'image' => 'http://pc-newtab.maxthon.com/v1.1/image/logo/Re/kongzhong.png',
        ),
    91 =>
        array(
            'title' => '游民星空',
            'url' => 'http://www.gamersky.com/',
            'image' => 'http://pc-newtab.maxthon.com/v1.1/image/logo/Re/gamersky.png',
        ),
    92 =>
        array(
            'title' => '腾讯动漫',
            'url' => 'http://ac.qq.com/',
            'image' => 'http://pc-newtab.maxthon.com/v1.1/image/logo/Re/ac_qq.png',
        ),
    93 =>
        array(
            'title' => '网易云音乐',
            'url' => 'http://music.163.com/',
            'image' => 'http://pc-newtab.maxthon.com/v1.1/image/logo/Re/music_163.png',
        ),
    94 =>
        array(
            'title' => 'QQ音乐',
            'url' => 'http://y.qq.com/',
            'image' => 'http://pc-newtab.maxthon.com/v1.1/image/logo/Re/qq_music.png',
        ),
    95 =>
        array(
            'title' => '虾米音乐',
            'url' => 'http://www.xiami.com/',
            'image' => 'http://pc-newtab.maxthon.com/v1.1/image/logo/Re/xiami.png',
        ),
    96 =>
        array(
            'title' => '酷狗音乐',
            'url' => 'http://www.kugou.com/',
            'image' => 'http://pc-newtab.maxthon.com/v1.1/image/logo/Re/kugou.png',
        ),
    97 =>
        array(
            'title' => '酷我音乐',
            'url' => 'http://www.kuwo.cn/',
            'image' => 'http://pc-newtab.maxthon.com/v1.1/image/logo/Re/kuwo.png',
        ),
    98 =>
        array(
            'title' => '音悦台',
            'url' => 'http://www.yinyuetai.com/',
            'image' => 'http://pc-newtab.maxthon.com/v1.1/image/logo/Re/yinyuetai.png',
        ),
    99 =>
        array(
            'title' => '糗事百科',
            'url' => 'http://www.qiushibaike.com/',
            'image' => 'http://pc-newtab.maxthon.com/v1.1/image/logo/Re/qiushibaike.png',
        ),
    //生活服务
    100 =>
        array(
            'title' => '百度',
            'url' => 'https://www.baidu.com/index.php?tn=maxthon2&ch=2',
            'image' => 'http://pc-newtab.maxthon.com/v1.1/image/logo/Re/baidu.png',
        ),
    101 =>
        array(
            'title' => '傲游今日',
            'url' => 'http://i.maxthon.cn/',
            'image' => 'http://pc-newtab.maxthon.com/v1.1/image/logo/Re/i_maxthon.png',
        ),
    102 =>
        array(
            'title' => 'hao123',
            'url' => 'http://go.maxthon.cn/redir/mx5/qa.htm?f=hao123',  //原 http://go.maxthon.cn/redir/mx4/qa.htm?f=hao123
            'image' => 'http://pc-newtab.maxthon.com/v1.1/image/logo/Re/hao123.png',
        ),
    103 =>
        array(
            'title' => '大众点评',
            'url' => 'http://go.maxthon.cn/redir/mx5/qa.htm?f=dianping',
            'image' => 'http://pc-newtab.maxthon.com/v1.1/image/logo/Re/dianping.png',
        ),
    104 =>
        array(
            'title' => '12306火车票',
            'url' => 'http://www.12306.cn',
            'image' => 'http://pc-newtab.maxthon.com/v1.1/image/logo/Re/12306.png',
        ),
    105 =>
        array(
            'title' => '汽车之家',
            'url' => 'http://www.autohome.com.cn/?pvareaid=101581',
            'image' => 'http://pc-newtab.maxthon.com/v1.1/image/logo/Re/autohome.png',
        ),
    106 =>
        array(
            'title' => '携程旅行网',
            'url' => 'http://go.maxthon.cn/redir/mx5/qa.htm?f=ctrip',    //原http://u.ctrip.com/union/CtripRedirect.aspx?TypeID=2&Allianceid=18105&sid=449687&OUID=&jumpUrl=http://www.ctrip.com
            'image' => 'http://pc-newtab.maxthon.com/v1.1/image/logo/Re/ctrip.png',
        ),
    107 =>
        array(
            'title' => '去哪儿',
            'url' => 'http://www.qunar.com/?ex_track=auto_4f59af02',
            'image' => 'http://pc-newtab.maxthon.com/v1.1/image/logo/Re/qunar.png',
        ),
    108 =>
        array(
            'title' => '途牛旅游网',
            'url' => 'http://go.maxthon.cn/redir/mx5/qa.htm?f=tuniu ',
            'image' => 'http://pc-newtab.maxthon.com/v1.1/image/logo/Re/tuniu.png',
        ),
    109 =>
        array(
            'title' => '驱动之家',
            'url' => 'http://www.mydrivers.com',
            'image' => 'http://pc-newtab.maxthon.com/v1.1/image/logo/Re/mudrivers.png',
        ),
    110 =>
        array(
            'title' => '中国银行',
            'url' => 'http://www.boc.cn/',
            'image' => 'http://pc-newtab.maxthon.com/v1.1/image/logo/Re/boc.png',
        ),
    111 =>
        array(
            'title' => '中国工商银行',
            'url' => 'http://www.icbc.com.cn/',
            'image' => 'http://pc-newtab.maxthon.com/v1.1/image/logo/Re/icbc.png',
        ),
    112 =>
        array(
            'title' => '中国建设银行',
            'url' => 'http://www.ccb.com/',
            'image' => 'http://pc-newtab.maxthon.com/v1.1/image/logo/Re/ccb.png',
        ),
    113 =>
        array(
            'title' => '中国农业银行',
            'url' => 'http://www.abchina.com/',
            'image' => 'http://pc-newtab.maxthon.com/v1.1/image/logo/Re/abchina.png',
        ),
    114 =>
        array(
            'title' => '招商银行',
            'url' => 'http://www.cmbchina.com/',
            'image' => 'http://pc-newtab.maxthon.com/v1.1/image/logo/Re/cmbchina_z.png',
        ),
    115 =>
        array(
            'title' => '交通银行',
            'url' => 'http://www.bankcomm.com/',
            'image' => 'http://pc-newtab.maxthon.com/v1.1/image/logo/Re/cmbchina_j.png',
        ),
    116 =>
        array(
            'title' => '中信银行',
            'url' => 'http://bank.ecitic.com/',
            'image' => 'http://pc-newtab.maxthon.com/v1.1/image/logo/Re/ecitic.png',
        ),
    117 =>
        array(
            'title' => '房天下',
            'url' => 'http://www.fang.com/',
            'image' => 'http://pc-newtab.maxthon.com/v1.1/image/logo/Re/fang.png',
        ),
    118 =>
        array(
            'title' => '58同城',
            'url' => 'http://www.58.com/?path=?utm_source%3d5uad%26utm_campaign%3d5uad-109',
            'image' => 'http://pc-newtab.maxthon.com/v1.1/image/logo/Re/58.png',
        ),
    119 =>
        array(
            'title' => '赶集网',
            'url' => 'http://www.ganji.com/?ca_name=dh_cpc_mingzhan/',
            'image' => 'http://pc-newtab.maxthon.com/v1.1/image/logo/Re/ganji.png',
        ),
    //新增淘宝白链
    120 =>
        array(
            'title' => '淘宝网',
            'url' => 'https://www.taobao.com/',
            'image' => 'http://pc-newtab.maxthon.com/v1.1/image/logo/Re/taobao_bai.png',
        ),
    121 =>
        array(
            'title' => '百度',
            'url' => 'https://www.baidu.com/index.php?tn=maxthon2&ch=10',
            'image' => 'http://pc-newtab.maxthon.com/v1.1/image/logo/Re/baidu.png',
        ),
    122 =>
        array(
            'title' => '淘宝专享优惠券',
            'url' => 'https://maxthon.walatao.com/?from=rising',
            'image' => 'https://pc-newtab-img.maxthon.com/static/v1.1/image/logo/Re/walatao.png',
        ),
    123 =>
        array(
            'title' => '淘宝专享优惠券',
            'url' => 'http://go.maxthon.cn/redir/mx5/qa.htm?f=walatao',
            'image' => 'https://pc-newtab-img.maxthon.com/static/v1.1/image/logo/Re/walatao.png',
        )
);
