"use strict";
var DEFAULT_MY_SITE = [
    {
      title: "携程旅行网",
      url: "http://go.maxthon.cn/redir/mx5/qa.htm?f=ctrip",
      image:
        "https://pc-newtab.maxthonimg.com/static/v1.1/image/logo/Sq/ctrip.png",
      isHot: !0,
    },
    {
      title: "淘宝网",
      url: "http://go.maxthon.cn/redir/mx5/qa.htm?f=taobao",
      image:
        "https://pc-newtab.maxthonimg.com/static/v1.1/image/logo/Re/taobao.png",
    },
    {
      title: "唯品会",
      url: "http://go.maxthon.cn/redir/mx5/qa.htm?f=vipshop",
      image:
        "https://pc-newtab.maxthonimg.com/static/v1.1/image/logo/Re/vip.png",
    },
    {
      title: "新浪微博",
      url: "http://weibo.com/",
      image:
        "https://pc-newtab.maxthonimg.com/static/v1.1/image/logo/Re/weibo.png",
    },
    {
      title: "百度",
      url: "https://go.mxfast.com/bd1/",
      image:
        "https://pc-newtab.maxthonimg.com/static/v1.1/image/logo/Sq/baidu.png",
      isHot: !0,
    },
    {
      title: "亚马逊",
      url: "http://go.maxthon.cn/redir/mx5/qa.htm?f=amazon",
      image:
        "https://pc-newtab.maxthonimg.com/static/v1.1/image/logo/Re/amazon.png",
    },
    {
      title: "知乎",
      url: "https://www.zhihu.com",
      image:
        "https://pc-newtab.maxthonimg.com/static/v1.1/image/logo/Re/zhihu.png",
    },
    {
      title: "58同城",
      url: "http://www.58.com/?path=?utm_source%3d5uad%26utm_campaign%3d5uad-109",
      image:
        "https://pc-newtab.maxthonimg.com/static/v1.1/image/logo/Re/58.png",
    },
    {
      title: "哔哩哔哩",
      url: "http://www.bilibili.com/",
      image:
        "https://pc-newtab.maxthonimg.com/static/v1.1/image/logo/Re/bilibili.png",
    },
    {
      title: "hao123",
      url: "http://go.maxthon.cn/redir/mx5/qa.htm?f=hao123",
      image:
        "https://pc-newtab.maxthonimg.com/static/v1.1/image/logo/Re/hao123.png",
    },
    {
      folderId: "0495ed3e-e5e6-ee18-1d8f-0ef3e68c5c44",
      title: "新闻资讯",
      children: [
        {
          title: "凤凰网",
          url: "http://www.ifeng.com/#_zbs_maxthon",
          image:
            "https://pc-newtab.maxthonimg.com/static/v1.1/image/logo/Re/ifeng.png",
        },
        {
          title: "新浪",
          url: "http://www.sina.com.cn/",
          image:
            "https://pc-newtab.maxthonimg.com/static/v1.1/image/logo/Re/sina.png",
        },
        {
          title: "腾讯",
          url: "http://www.qq.com/",
          image:
            "https://pc-newtab.maxthonimg.com/static/v1.1/image/logo/Re/qq.png",
        },
        {
          title: "网易",
          url: "http://www.163.com/#frp10",
          image:
            "https://pc-newtab.maxthonimg.com/static/v1.1/image/logo/Re/163.png",
        },
        {
          title: "搜狐",
          url: "http://www.sohu.com/",
          image:
            "https://pc-newtab.maxthonimg.com/static/v1.1/image/logo/Re/sohu.png",
        },
        {
          title: "东方财富网",
          url: "http://www.eastmoney.com/",
          image:
            "https://pc-newtab.maxthonimg.com/static/v1.1/image/logo/Re/eastmoney.png",
        },
        {
          title: "中华网",
          url: "http://www.china.com/",
          image:
            "https://pc-newtab.maxthonimg.com/static/v1.1/image/logo/Re/china.png",
        },
        {
          title: "人民网",
          url: "http://www.people.com.cn/",
          image:
            "https://pc-newtab.maxthonimg.com/static/v1.1/image/logo/Re/people.png",
        },
        {
          title: "环球网",
          url: "http://www.huanqiu.com/",
          image:
            "https://pc-newtab.maxthonimg.com/static/v1.1/image/logo/Re/huanqiu.png",
        },
        {
          title: "新华网",
          url: "http://www.xinhuanet.com/",
          image:
            "https://pc-newtab.maxthonimg.com/static/v1.1/image/logo/Re/xinhuanet.png",
        },
      ],
    },
    {
      folderId: "f7b4e480-7325-d6c3-b977-763708a8c8b6",
      title: "网上购物",
      children: [
        {
          title: "1号店",
          url: "http://go.maxthon.cn/redir/mx5/qa.htm?f=yhd",
          image:
            "https://pc-newtab.maxthonimg.com/static/v1.1/image/logo/Re/yhd.png",
        },
        {
          title: "聚美优品",
          url: "http://go.maxthon.cn/redir/mx5/qa.htm?f=jumei",
          image:
            "https://pc-newtab.maxthonimg.com/static/v1.1/image/logo/Re/jumei.png",
        },
        {
          title: "苏宁易购",
          url: "http://go.maxthon.cn/redir/mx5/qa.htm?f=suning",
          image:
            "https://pc-newtab.maxthonimg.com/static/v1.1/image/logo/Re/suning.png",
        },
        {
          title: "糯米",
          url: "http://go.maxthon.cn/redir/mx5/qa.htm?f=nuomi",
          image:
            "https://pc-newtab.maxthonimg.com/static/v1.1/image/logo/Re/nuomi.png",
        },
        {
          title: "国美在线",
          url: "http://go.maxthon.cn/redir/mx5/qa.htm?f=gome",
          image:
            "https://pc-newtab.maxthonimg.com/static/v1.1/image/logo/Re/gome.png",
        },
        {
          title: "聚划算",
          url: "http://go.maxthon.cn/redir/mx5/qa.htm?f=juhuasuan",
          image:
            "https://pc-newtab.maxthonimg.com/static/v1.1/image/logo/Re/ju_taobao.png",
        },
        {
          title: "小米",
          url: "http://go.maxthon.cn/redir/mx5/qa.htm?f=mi",
          image:
            "https://pc-newtab.maxthonimg.com/static/v1.1/image/logo/Re/mi.png",
        },
        {
          title: "乐视商城",
          url: "http://www.lemall.com/",
          image:
            "https://pc-newtab.maxthonimg.com/static/v1.1/image/logo/Re/lemall.png",
        },
        {
          title: "当当网",
          url: "http://go.maxthon.cn/redir/mx5/qa.htm?f=dangdang",
          image:
            "https://pc-newtab.maxthonimg.com/static/v1.1/image/logo/Re/dangdang.png",
        },
        {
          title: "美团",
          url: "http://go.maxthon.cn/redir/mx5/qa.htm?f=meituan",
          image:
            "https://pc-newtab.maxthonimg.com/static/v1.1/image/logo/Re/meituan.png",
        },
        {
          title: "什么值得买",
          url: "https://www.smzdm.com/",
          image:
            "https://pc-newtab.maxthonimg.com/static/v1.1/image/logo/Re/smzdm.png",
        },
        {
          title: "乐蜂网",
          url: "http://www.lefeng.com/",
          image:
            "https://pc-newtab.maxthonimg.com/static/v1.1/image/logo/Re/lefeng.png",
        },
        {
          title: "凡客诚品",
          url: "http://go.maxthon.cn/redir/mx5/qa.htm?f=vancl",
          image:
            "https://pc-newtab.maxthonimg.com/static/v1.1/image/logo/Re/vancl.png",
        },
      ],
    },
    {
      title: "天猫精选",
      url: "http://go.maxthon.cn/redir/mx5/qa.htm?f=tmall",
      image:
        "https://pc-newtab.maxthonimg.com/static/v1.1/image/logo/Sq/Tmall.png",
      isHot: !0,
    },
    {
      title: "京东商城",
      url: "http://go.maxthon.cn/redir/mx5/qa.htm?f=jd",
      image:
        "https://pc-newtab.maxthonimg.com/static/v1.1/image/logo/Sq/jingdong.png",
      isHot: !0,
    },
    {
      title: "爱淘宝",
      url: "http://go.maxthon.cn/redir/mx5/qa.htm?f=aitaobao",
      image:
        "https://pc-newtab.maxthonimg.com/static/v1.1/image/logo/Sq/simba_taobao.png",
      isHot: !0,
    },
    {
      title: "腾讯新闻",
      url: "http://go.maxthon.cn/redir/mx5/qa.htm?f=txxw",
      image:
        "https://pc-newtab.maxthonimg.com/static/v1.1/image/logo/Sq/txxw.png",
      isHot: !0,
    },
    {
      title: "优酷",
      url: "http://www.youku.com/",
      image:
        "https://pc-newtab.maxthonimg.com/static/v1.1/image/logo/Sq/youku.png",
      isHot: !0,
    },
    {
      title: "傲游今日",
      url: "http://i.maxthon.cn/",
      image:
        "https://pc-newtab.maxthonimg.com/static/v1.1/image/logo/Sq/i_maxthon.png",
      isHot: !0,
    },
  ],
  SITE_LIST = [
    {
      categroy: "热门网址",
      list: [
        {
          title: "百度",
          url: "https://go.mxfast.com/bd1/",
          match: ["www.baidu.com"],
          image:
            "https://pc-newtab.maxthonimg.com/static/v1.1/image/logo/Re/baidu.png",
        },
        {
          title: "天猫精选",
          url: "http://go.maxthon.cn/redir/mx5/qa.htm?f=tmall",
          match: ["jx.tmall.com", "www.tmall.com"],
          image:
            "https://pc-newtab.maxthonimg.com/static/v1.1/image/logo/Re/Tmall.png",
        },
        {
          title: "京东商城",
          url: "http://go.maxthon.cn/redir/mx5/qa.htm?f=jd",
          match: ["www.jd.com"],
          image:
            "https://pc-newtab.maxthonimg.com/static/v1.1/image/logo/Re/jingdong.png",
        },
        {
          title: "爱淘宝",
          url: "http://go.maxthon.cn/redir/mx5/qa.htm?f=aitaobao",
          match: ["ai.taobao.com"],
          image:
            "https://pc-newtab.maxthonimg.com/static/v1.1/image/logo/Re/simba_taobao.png",
        },
        {
          title: "腾讯新闻",
          url: "http://go.maxthon.cn/redir/mx5/qa.htm?f=txxw",
          image:
            "https://pc-newtab.maxthonimg.com/static/v1.1/image/logo/Re/txxw.png",
        },
        {
          title: "携程旅行网",
          url: "http://go.maxthon.cn/redir/mx5/qa.htm?f=ctrip",
          match: ["www.ctrip.com"],
          image:
            "https://pc-newtab.maxthonimg.com/static/v1.1/image/logo/Re/ctrip.png",
        },
        {
          title: "优酷",
          url: "http://www.youku.com/",
          image:
            "https://pc-newtab.maxthonimg.com/static/v1.1/image/logo/Re/youku.png",
        },
        {
          title: "傲游今日",
          url: "http://i.maxthon.cn/",
          image:
            "https://pc-newtab.maxthonimg.com/static/v1.1/image/logo/Re/i_maxthon.png",
        },
        {
          title: "新浪微博",
          url: "http://weibo.com/",
          match: ["www.weibo.com"],
          image:
            "https://pc-newtab.maxthonimg.com/static/v1.1/image/logo/Re/weibo.png",
        },
        {
          title: "亚马逊",
          url: "http://go.maxthon.cn/redir/mx5/qa.htm?f=amazon",
          match: ["www.amazon.cn", "http://amazon.", "https://amazon."],
          image:
            "https://pc-newtab.maxthonimg.com/static/v1.1/image/logo/Re/amazon.png",
        },
        {
          title: "唯品会",
          url: "http://go.maxthon.cn/redir/mx5/qa.htm?f=vipshop",
          match: ["www.vip.com"],
          image:
            "https://pc-newtab.maxthonimg.com/static/v1.1/image/logo/Re/vip.png",
        },
        {
          title: "淘宝网",
          url: "http://go.maxthon.cn/redir/mx5/qa.htm?f=taobao",
          match: ["www.taobao.com"],
          image:
            "https://pc-newtab.maxthonimg.com/static/v1.1/image/logo/Re/taobao.png",
        },
        {
          title: "途牛旅游网",
          url: "http://go.maxthon.cn/redir/mx5/qa.htm?f=tuniu",
          match: ["www.tuniu.com"],
          image:
            "https://pc-newtab.maxthonimg.com/static/v1.1/image/logo/Re/tuniu.png",
        },
        {
          title: "58同城",
          url: "http://www.58.com/?path=?utm_source%3d5uad%26utm_campaign%3d5uad-109",
          image:
            "https://pc-newtab.maxthonimg.com/static/v1.1/image/logo/Re/58.png",
        },
        {
          title: "哔哩哔哩",
          url: "http://www.bilibili.com/",
          image:
            "https://pc-newtab.maxthonimg.com/static/v1.1/image/logo/Re/bilibili.png",
        },
        {
          title: "hao123",
          url: "http://go.maxthon.cn/redir/mx5/qa.htm?f=hao123",
          match: ["www.hao123.com"],
          image:
            "https://pc-newtab.maxthonimg.com/static/v1.1/image/logo/Re/hao123.png",
        },
        {
          title: "百度地图",
          url: "https://map.baidu.com/",
          image:
            "https://pc-newtab.maxthonimg.com/static/v1.1/image/logo/Re/bdmap.png",
        },
        {
          title: "百度网盘",
          url: "https://pan.baidu.com/",
          image:
            "https://pc-newtab.maxthonimg.com/static/v1.1/image/logo/Re/bdpan.png",
        },
      ],
    },
    {
      categroy: "新闻资讯",
      list: [
        {
          title: "凤凰网",
          url: "http://www.ifeng.com/#_zbs_maxthon",
          image:
            "https://pc-newtab.maxthonimg.com/static/v1.1/image/logo/Re/ifeng.png",
        },
        {
          title: "新浪",
          url: "http://www.sina.com.cn/",
          image:
            "https://pc-newtab.maxthonimg.com/static/v1.1/image/logo/Re/sina.png",
        },
        {
          title: "腾讯",
          url: "http://www.qq.com/",
          image:
            "https://pc-newtab.maxthonimg.com/static/v1.1/image/logo/Re/qq.png",
        },
        {
          title: "网易",
          url: "http://www.163.com/#frp10",
          image:
            "https://pc-newtab.maxthonimg.com/static/v1.1/image/logo/Re/163.png",
        },
        {
          title: "搜狐",
          url: "http://www.sohu.com/",
          image:
            "https://pc-newtab.maxthonimg.com/static/v1.1/image/logo/Re/sohu.png",
        },
        {
          title: "东方财富网",
          url: "http://www.eastmoney.com/",
          image:
            "https://pc-newtab.maxthonimg.com/static/v1.1/image/logo/Re/eastmoney.png",
        },
        {
          title: "中华网",
          url: "http://www.china.com/",
          image:
            "https://pc-newtab.maxthonimg.com/static/v1.1/image/logo/Re/china.png",
        },
        {
          title: "人民网",
          url: "http://www.people.com.cn/",
          image:
            "https://pc-newtab.maxthonimg.com/static/v1.1/image/logo/Re/people.png",
        },
        {
          title: "环球网",
          url: "http://www.huanqiu.com/",
          image:
            "https://pc-newtab.maxthonimg.com/static/v1.1/image/logo/Re/huanqiu.png",
        },
        {
          title: "新华网",
          url: "http://www.xinhuanet.com/",
          image:
            "https://pc-newtab.maxthonimg.com/static/v1.1/image/logo/Re/xinhuanet.png",
        },
        {
          title: "36氪",
          url: "https://36kr.com/",
          image:
            "https://pc-newtab.maxthonimg.com/static/v1.1/image/logo/Re/36kr.png",
        },
        {
          title: "果壳网",
          url: "https://www.guokr.com/",
          image:
            "https://pc-newtab.maxthonimg.com/static/v1.1/image/logo/Re/guoke.png",
        },
        {
          title: "虎嗅网",
          url: "https://www.huxiu.com/",
          image:
            "https://pc-newtab.maxthonimg.com/static/v1.1/image/logo/Re/huxiu.png",
        },
        {
          title: "观察者网",
          url: "https://www.guancha.cn/",
          image:
            "https://pc-newtab.maxthonimg.com/static/v1.1/image/logo/Re/guanchazhe.png",
        },
        {
          title: "参考消息",
          url: "http://www.cankaoxiaoxi.com/",
          image:
            "https://pc-newtab.maxthonimg.com/static/v1.1/image/logo/Re/cankao.png",
        },
        {
          title: "中国新闻网",
          url: "https://www.chinanews.com.cn/",
          image:
            "https://pc-newtab.maxthonimg.com/static/v1.1/image/logo/Re/chinanews.png",
        },
        {
          title: "澎湃新闻",
          url: "https://www.thepaper.cn/",
          image:
            "https://pc-newtab.maxthonimg.com/static/v1.1/image/logo/Re/pengpai.png",
        },
        {
          title: "南方周末",
          url: "http://www.infzm.com/",
          image:
            "https://pc-newtab.maxthonimg.com/static/v1.1/image/logo/Re/nfzm.png",
        },
        {
          title: "南风窗",
          url: "https://www.nfcmag.com/",
          image:
            "https://pc-newtab.maxthonimg.com/static/v1.1/image/logo/Re/nanfeng.png",
        },
        {
          title: "中国日报",
          url: "http://www.chinadaily.com.cn/",
          image:
            "https://pc-newtab.maxthonimg.com/static/v1.1/image/logo/Re/chinadaily.png",
        },
        {
          title: "三联生活周刊",
          url: "http://www.lifeweek.com.cn/",
          image:
            "https://pc-newtab.maxthonimg.com/static/v1.1/image/logo/Re/lifeweek.png",
        },
        {
          title: "大公网",
          url: "http://www.takungpao.com/",
          image:
            "https://pc-newtab.maxthonimg.com/static/v1.1/image/logo/Re/dagong.png",
        },
        {
          title: "网易新闻",
          url: "https://news.163.com/",
          image:
            "https://pc-newtab.maxthonimg.com/static/v1.1/image/logo/Re/news.png",
        },
        {
          title: "央视新闻",
          url: "https://news.cctv.com/",
          image:
            "https://pc-newtab.maxthonimg.com/static/v1.1/image/logo/Re/cctvnews.png",
        },
        {
          title: "米尔网",
          url: "http://military.miercn.com/?maxthon",
          image:
            "https://pc-newtab.maxthonimg.com/static/v1.1/image/logo/Re/mier.png",
        },
      ],
    },
    {
      categroy: "影视频道",
      list: [
        {
          title: "优酷",
          url: "http://www.youku.com/",
          image:
            "https://pc-newtab.maxthonimg.com/static/v1.1/image/logo/Re/youku.png",
        },
        {
          title: "爱奇艺",
          url: "http://www.iqiyi.com/",
          image:
            "https://pc-newtab.maxthonimg.com/static/v1.1/image/logo/Re/iqiyi.png",
        },
        {
          title: "腾讯视频",
          url: "http://v.qq.com/",
          image:
            "https://pc-newtab.maxthonimg.com/static/v1.1/image/logo/Re/v_qq.png",
        },
        {
          title: "哔哩哔哩",
          url: "http://www.bilibili.com/",
          image:
            "https://pc-newtab.maxthonimg.com/static/v1.1/image/logo/Re/bilibili.png",
        },
        {
          title: "搜狐视频",
          url: "http://tv.sohu.com/?lcode=AAAAI8cJIH0zbD_j7vM06mKU-H-ufrd6-IyD4U7nXbj2ixyHWYs9o_-LUX-.cf6&lqd=10217",
          image:
            "https://pc-newtab.maxthonimg.com/static/v1.1/image/logo/Re/tv_sohu.png",
        },
        {
          title: "土豆",
          url: "http://www.tudou.com/",
          image:
            "https://pc-newtab.maxthonimg.com/static/v1.1/image/logo/Re/tudou.png",
        },
        {
          title: "乐视网",
          url: "http://www.le.com/",
          image:
            "https://pc-newtab.maxthonimg.com/static/v1.1/image/logo/Re/le.png",
        },
        {
          title: "凤凰视频",
          url: "http://v.ifeng.com/",
          image:
            "https://pc-newtab.maxthonimg.com/static/v1.1/image/logo/Re/v_ifeng.png",
        },
        {
          title: "AcFun",
          url: "https://www.acfun.cn/",
          image:
            "https://pc-newtab.maxthonimg.com/static/v1.1/image/logo/Re/acfun.png",
        },
        {
          title: "抖音",
          url: "https://www.douyin.com/",
          image:
            "https://pc-newtab.maxthonimg.com/static/v1.1/image/logo/Re/douyin.png",
        },
        {
          title: "快手",
          url: "https://www.kuaishou.com/",
          image:
            "https://pc-newtab.maxthonimg.com/static/v1.1/image/logo/Re/kuaishou.png",
        },
        {
          title: "芒果TV",
          url: "https://www.mgtv.com/",
          image:
            "https://pc-newtab.maxthonimg.com/static/v1.1/image/logo/Re/mgtv.png",
        },
        {
          title: "央视网",
          url: "https://www.cctv.com/",
          image:
            "https://pc-newtab.maxthonimg.com/static/v1.1/image/logo/Re/cctv.png",
        },
        {
          title: "斗鱼TV",
          url: "http://www.douyu.com/",
          image:
            "https://pc-newtab.maxthonimg.com/static/v1.1/image/logo/Re/douyu.png",
        },
        {
          title: "虎牙直播",
          url: "https://www.huya.com/",
          image:
            "https://pc-newtab.maxthonimg.com/static/v1.1/image/logo/Re/huya.png",
        },
        {
          title: "YY直播",
          url: "https://www.yy.com/",
          image:
            "https://pc-newtab.maxthonimg.com/static/v1.1/image/logo/Re/yy.png",
        },
        {
          title: "风行网",
          url: "http://www.fun.tv/",
          image:
            "https://pc-newtab.maxthonimg.com/static/v1.1/image/logo/Re/fun.png",
        },
        {
          title: "PPTV",
          url: "http://www.pptv.com/",
          image:
            "https://pc-newtab.maxthonimg.com/static/v1.1/image/logo/Re/PPTV.png",
        },
      ],
    },
    {
      categroy: "网上购物",
      list: [
        {
          title: "天猫精选",
          url: "http://go.maxthon.cn/redir/mx5/qa.htm?f=tmall",
          image:
            "https://pc-newtab.maxthonimg.com/static/v1.1/image/logo/Re/Tmall.png",
        },
        {
          title: "京东",
          url: "http://go.maxthon.cn/redir/mx5/qa.htm?f=jd",
          image:
            "https://pc-newtab.maxthonimg.com/static/v1.1/image/logo/Re/jingdong.png",
        },
        {
          title: "淘宝网",
          url: "http://go.maxthon.cn/redir/mx5/qa.htm?f=taobao",
          image:
            "https://pc-newtab.maxthonimg.com/static/v1.1/image/logo/Re/taobao.png",
        },
        {
          title: "天猫",
          url: "http://redirect.simba.taobao.com/rd?c=un&w=bd&f=https%3A%2F%2Fs.click.taobao.com%2Ft%3Funion_lens%3DlensId%253AOPT%25401615280124%25402104be69_0782_1781632b34a_ced8%254001%253BeventPageId%253A8655681%26e%3Dm%253D2%2526s%253Dv%252Bp6OF1HixccQipKwQzePCperVdZeJviePMclkcdtjxyINtkUhsv0MS6Blk41Mgmiybki%252FObwflD415GGSsrJ4YxhNUZ2i3GTlT4SLzYDiBT2M421%252BABgTvflh4%252Fhqj89CGjsatFbg%252FkxFiXT%252FI5kZuVJ2zJE2c0ACFpTaudtkEaHks2%252FfPFu3EqY%252Bakgpmw%26pid%3Dmm_12431063_2220385_111469400049&k=67a22f436b17a341&p=mm_12431063_2220385_111469400049",
          image:
            "https://pc-newtab.maxthonimg.com/static/v1.1/image/logo/Re/tianmao.png",
        },
        {
          title: "爱淘宝",
          url: "http://go.maxthon.cn/redir/mx5/qa.htm?f=aitaobao",
          image:
            "https://pc-newtab.maxthonimg.com/static/v1.1/image/logo/Re/simba_taobao.png",
        },
        {
          title: "亚马逊",
          url: "http://go.maxthon.cn/redir/mx5/qa.htm?f=amazon",
          image:
            "https://pc-newtab.maxthonimg.com/static/v1.1/image/logo/Re/amazon.png",
        },
        {
          title: "唯品会",
          url: "http://go.maxthon.cn/redir/mx5/qa.htm?f=vipshop",
          image:
            "https://pc-newtab.maxthonimg.com/static/v1.1/image/logo/Re/vip.png",
        },
        {
          title: "1号店",
          url: "http://go.maxthon.cn/redir/mx5/qa.htm?f=yhd",
          match: ["www.yhd.com"],
          image:
            "https://pc-newtab.maxthonimg.com/static/v1.1/image/logo/Re/yhd.png",
        },
        {
          title: "聚美优品",
          url: "http://go.maxthon.cn/redir/mx5/qa.htm?f=jumei",
          match: ["bj.jumei.com"],
          image:
            "https://pc-newtab.maxthonimg.com/static/v1.1/image/logo/Re/jumei.png",
        },
        {
          title: "苏宁易购",
          url: "http://go.maxthon.cn/redir/mx5/qa.htm?f=suning",
          match: ["www.suning.com"],
          image:
            "https://pc-newtab.maxthonimg.com/static/v1.1/image/logo/Re/suning.png",
        },
        {
          title: "糯米",
          url: "http://go.maxthon.cn/redir/mx5/qa.htm?f=nuomi",
          match: ["www.nuomi.com"],
          image:
            "https://pc-newtab.maxthonimg.com/static/v1.1/image/logo/Re/nuomi.png",
        },
        {
          title: "真快乐购物",
          url: "http://go.maxthon.cn/redir/mx5/qa.htm?f=gome",
          match: ["www.gome.com.cn"],
          image:
            "https://pc-newtab.maxthonimg.com/static/v1.1/image/logo/Re/zhenkuaile.png",
        },
        {
          title: "聚划算",
          url: "http://go.maxthon.cn/redir/mx5/qa.htm?f=juhuasuan",
          image:
            "https://pc-newtab.maxthonimg.com/static/v1.1/image/logo/Re/ju_taobao.png",
        },
        {
          title: "小米",
          url: "http://go.maxthon.cn/redir/mx5/qa.htm?f=mi",
          match: ["www.mi.com"],
          image:
            "https://pc-newtab.maxthonimg.com/static/v1.1/image/logo/Re/mi.png",
        },
        {
          title: "乐视商城",
          url: "http://www.lemall.com/",
          image:
            "https://pc-newtab.maxthonimg.com/static/v1.1/image/logo/Re/lemall.png",
        },
        {
          title: "当当网",
          url: "http://go.maxthon.cn/redir/mx5/qa.htm?f=dangdang",
          match: ["www.dangdang.com/"],
          image:
            "https://pc-newtab.maxthonimg.com/static/v1.1/image/logo/Re/dangdang.png",
        },
        {
          title: "美团",
          url: "http://go.maxthon.cn/redir/mx5/qa.htm?f=meituan",
          match: ["bj.meituan.com", "www.meituan.com"],
          image:
            "https://pc-newtab.maxthonimg.com/static/v1.1/image/logo/Re/meituan.png",
        },
        {
          title: "什么值得买",
          url: "https://www.smzdm.com/",
          image:
            "https://pc-newtab.maxthonimg.com/static/v1.1/image/logo/Re/smzdm.png",
        },
        {
          title: "凡客诚品",
          url: "http://go.maxthon.cn/redir/mx5/qa.htm?f=vancl",
          match: ["www.vancl.com"],
          image:
            "https://pc-newtab.maxthonimg.com/static/v1.1/image/logo/Re/vancl.png",
        },
        {
          title: "苹果首页",
          url: "https://p.gouwubang.com/59esCa",
          image:
            "https://pc-newtab.maxthonimg.com/static/v1.1/image/logo/Re/apple.png",
        },
        {
          title: "华为商城",
          url: "https://p.yiqifa.com/n?k=2mLErnWm1NRSrI6H2mLErI6H6EKO1QLF6NtSWl4HWNWqWl3qrI6HYQLErnDSWn3S3ljLrn6x1Z4ENmL-&t=https://www.vmall.com",
          image:
            "https://pc-newtab.maxthonimg.com/static/v1.1/image/logo/Re/huawei.png",
        },
      ],
    },
    {
      categroy: "社交网络",
      list: [
        {
          title: "QQ空间",
          url: "http://qzone.qq.com/",
          image:
            "https://pc-newtab.maxthonimg.com/static/v1.1/image/logo/Re/qq_zone.png",
        },
        {
          title: "新浪微博",
          url: "http://weibo.com/",
          image:
            "https://pc-newtab.maxthonimg.com/static/v1.1/image/logo/Re/weibo.png",
        },
        {
          title: "百度贴吧",
          url: "http://tieba.baidu.com/",
          image:
            "https://pc-newtab.maxthonimg.com/static/v1.1/image/logo/Re/tieba_baidu.png",
        },
        {
          title: "知乎",
          url: "http://www.zhihu.com/",
          image:
            "https://pc-newtab.maxthonimg.com/static/v1.1/image/logo/Re/zhihu.png",
        },
        {
          title: "LOFTER乐乎",
          url: "http://www.lofter.com/",
          image:
            "https://pc-newtab.maxthonimg.com/static/v1.1/image/logo/Re/lofter.png",
        },
        {
          title: "天涯社区",
          url: "http://www.tianya.cn/",
          image:
            "https://pc-newtab.maxthonimg.com/static/v1.1/image/logo/Re/tianya.png",
        },
        {
          title: "豆瓣网",
          url: "http://www.douban.com/",
          image:
            "https://pc-newtab.maxthonimg.com/static/v1.1/image/logo/Re/douban.png",
        },
        {
          title: "开心网",
          url: "http://www.kaixin001.com/",
          image:
            "https://pc-newtab.maxthonimg.com/static/v1.1/image/logo/Re/kanxin001.png",
        },
        {
          title: "世纪佳缘",
          url: "https://www.jiayuan.com/",
          image:
            "https://pc-newtab.maxthonimg.com/static/v1.1/image/logo/Re/jiayuan.png",
        },
        {
          title: "百合网",
          url: "http://www.baihe.com/betatest/betatest_newlandpage.html?policy=1&Channel=xmkj-pc&Code=4",
          match: ["www.jiayuan.com"],
          image:
            "https://pc-newtab.maxthonimg.com/static/v1.1/image/logo/Re/baihe.png",
        },
        {
          title: "珍爱网",
          url: "http://www.zhenai.com/",
          image:
            "https://pc-newtab.maxthonimg.com/static/v1.1/image/logo/Re/zhenai.png",
        },
        {
          title: "水木社区",
          url: "http://www.newsmth.net/",
          image:
            "https://pc-newtab.maxthonimg.com/static/v1.1/image/logo/Re/newsmth.png",
        },
        {
          title: "虎扑",
          url: "https://www.hupu.com/",
          image:
            "https://pc-newtab.maxthonimg.com/static/v1.1/image/logo/Re/hupu.png",
        },
        {
          title: "人人网",
          url: "http://www.renren.com/",
          image:
            "https://pc-newtab.maxthonimg.com/static/v1.1/image/logo/Re/renren.png",
        },
        {
          title: "堆糖",
          url: "http://www.duitang.com/",
          image:
            "https://pc-newtab.maxthonimg.com/static/v1.1/image/logo/Re/duitang.png",
        },
        {
          title: "西祠胡同",
          url: "http://www.xici.net/",
          image:
            "https://pc-newtab.maxthonimg.com/static/v1.1/image/logo/Re/xici.png",
        },
        {
          title: "微信网页版",
          url: "https://wx.qq.com/",
          image:
            "https://pc-newtab.maxthonimg.com/static/v1.1/image/logo/Re/wx.png",
        },
      ],
    },
    {
      categroy: "文学小说",
      list: [
        {
          title: "起点中文网",
          url: "http://www.qidian.com/",
          image:
            "https://pc-newtab.maxthonimg.com/static/v1.1/image/logo/Re/qidian.png",
        },
        {
          title: "红袖添香",
          url: "http://www.hongxiu.com/",
          image:
            "https://pc-newtab.maxthonimg.com/static/v1.1/image/logo/Re/hongxiu.png",
        },
        {
          title: "纵横中文网",
          url: "http://www.zongheng.com/",
          image:
            "https://pc-newtab.maxthonimg.com/static/v1.1/image/logo/Re/zongheng.png",
        },
        {
          title: "潇湘书院",
          url: "http://www.xxsy.net/",
          image:
            "https://pc-newtab.maxthonimg.com/static/v1.1/image/logo/Re/xxsy.png",
        },
        {
          title: "新浪读书",
          url: "http://book.sina.com.cn/",
          image:
            "https://pc-newtab.maxthonimg.com/static/v1.1/image/logo/Re/booksina.png",
        },
        {
          title: "简书",
          url: "http://www.jianshu.com/",
          image:
            "https://pc-newtab.maxthonimg.com/static/v1.1/image/logo/Re/jianshu.png",
        },
        {
          title: "QQ阅读",
          url: "http://ebook.qq.com/",
          image:
            "https://pc-newtab.maxthonimg.com/static/v1.1/image/logo/Re/ebook.png",
        },
        {
          title: "晋江文学城",
          url: "http://www.jjwxc.net/",
          image:
            "https://pc-newtab.maxthonimg.com/static/v1.1/image/logo/Re/jjwxc.png",
        },
        {
          title: "飞卢小说",
          url: "https://b.faloo.com/",
          image:
            "https://pc-newtab.maxthonimg.com/static/v1.1/image/logo/Re/faloo.png",
        },
        {
          title: "喜马拉雅听书",
          url: "https://www.ximalaya.com/",
          image:
            "https://pc-newtab.maxthonimg.com/static/v1.1/image/logo/Re/ximalaya.png",
        },
        {
          title: "懒人听书",
          url: "http://www.lrts.me/",
          image:
            "https://pc-newtab.maxthonimg.com/static/v1.1/image/logo/Re/lrts.png",
        },
        {
          title: "蜻蜓FM",
          url: "http://www.qingting.fm/",
          image:
            "https://pc-newtab.maxthonimg.com/static/v1.1/image/logo/Re/qingting.png",
        },
        {
          title: "小说阅读网",
          url: "http://www.readnovel.com/",
          image:
            "https://pc-newtab.maxthonimg.com/static/v1.1/image/logo/Re/readnovel.png",
        },
        {
          title: "言情小说吧",
          url: "http://www.xs8.cn/",
          image:
            "https://pc-newtab.maxthonimg.com/static/v1.1/image/logo/Re/xs8.png",
        },
        {
          title: "七猫中文网",
          url: "https://www.qimao.com/",
          image:
            "https://pc-newtab.maxthonimg.com/static/v1.1/image/logo/Re/qimao.png",
        },
        {
          title: "多看阅读",
          url: "http://www.duokan.com/",
          image:
            "https://pc-newtab.maxthonimg.com/static/v1.1/image/logo/Re/duokan.png",
        },
        {
          title: "网易云阅读",
          url: "http://yuedu.163.com/",
          image:
            "https://pc-newtab.maxthonimg.com/static/v1.1/image/logo/Re/yuedu163.png",
        },
        {
          title: "逐浪小说",
          url: "http://www.zhulang.com/",
          image:
            "https://pc-newtab.maxthonimg.com/static/v1.1/image/logo/Re/zhulang.png",
        },
        {
          title: "17K",
          url: "http://www.17k.com/",
          image:
            "https://pc-newtab.maxthonimg.com/static/v1.1/image/logo/Re/17k.png",
        },
        {
          title: "创世中文网",
          url: "http://chuangshi.qq.com/",
          image:
            "https://pc-newtab.maxthonimg.com/static/v1.1/image/logo/Re/chuangshi.png",
        },
        {
          title: "番茄小说网",
          url: "https://fanqienovel.com/",
          image:
            "https://pc-newtab.maxthonimg.com/static/v1.1/image/logo/Re/fanqienovel.png",
        },
        {
          title: "黑岩网",
          url: "http://www.heiyan.com/",
          image:
            "https://pc-newtab.maxthonimg.com/static/v1.1/image/logo/Re/heiyan.png",
        },
        {
          title: "磨铁中文",
          url: "http://www.motie.com/",
          image:
            "https://pc-newtab.maxthonimg.com/static/v1.1/image/logo/Re/motie.png",
        },
        {
          title: "红薯网",
          url: "http://www.hongshu.com/",
          image:
            "https://pc-newtab.maxthonimg.com/static/v1.1/image/logo/Re/hongshu.png",
        },
        {
          title: "凤鸣轩",
          url: "http://www.fmx.cn/",
          image:
            "https://pc-newtab.maxthonimg.com/static/v1.1/image/logo/Re/fmx.png",
        },
        {
          title: "龙的天空",
          url: "http://www.lkong.net/",
          image:
            "https://pc-newtab.maxthonimg.com/static/v1.1/image/logo/Re/lkong.png",
        },
        {
          title: "豆瓣阅读",
          url: "http://book.douban.com/",
          image:
            "https://pc-newtab.maxthonimg.com/static/v1.1/image/logo/Re/douban.png",
        },
        {
          title: "咪咕",
          url: "http://www.migu.cn/",
          image:
            "https://pc-newtab.maxthonimg.com/static/v1.1/image/logo/Re/migu.png",
        },
        {
          title: "有妖气",
          url: "https://www.u17.com/",
          image:
            "https://pc-newtab.maxthonimg.com/static/v1.1/image/logo/Re/u17.png",
        },
        {
          title: "动漫之家",
          url: "https://dmzj.com/",
          image:
            "https://pc-newtab.maxthonimg.com/static/v1.1/image/logo/Re/dmzj.png",
        },
        {
          title: "百度文库",
          url: "https://wenku.baidu.com/ndcore/browse/audio",
          image:
            "https://pc-newtab.maxthonimg.com/static/v1.1/image/logo/Re/wenku.png",
        },
      ],
    },
    {
      categroy: "游戏娱乐",
      list: [
        {
          title: "4399小游戏",
          url: "http://www.4399.com/",
          image:
            "https://pc-newtab.maxthonimg.com/static/v1.1/image/logo/Re/4399.png",
        },
        {
          title: "腾讯游戏",
          url: "http://game.qq.com/",
          image:
            "https://pc-newtab.maxthonimg.com/static/v1.1/image/logo/Re/game_qq.png",
        },
        {
          title: "网易游戏",
          url: "http://game.163.com/",
          image:
            "https://pc-newtab.maxthonimg.com/static/v1.1/image/logo/Re/game_163.png",
        },
        {
          title: "17173游戏网",
          url: "http://www.17173.com/",
          image:
            "https://pc-newtab.maxthonimg.com/static/v1.1/image/logo/Re/17173.png",
        },
        {
          title: "3DMGAME",
          url: "http://www.3dmgame.com/",
          image:
            "https://pc-newtab.maxthonimg.com/static/v1.1/image/logo/Re/3dmgame.png",
        },
        {
          title: "多玩游戏",
          url: "http://www.duowan.com/",
          image:
            "https://pc-newtab.maxthonimg.com/static/v1.1/image/logo/Re/duowan.png",
        },
        {
          title: "电玩巴士",
          url: "http://www.tgbus.com/",
          image:
            "https://pc-newtab.maxthonimg.com/static/v1.1/image/logo/Re/tgbus.png",
        },
        {
          title: "空中网",
          url: "http://www.kongzhong.com/",
          image:
            "https://pc-newtab.maxthonimg.com/static/v1.1/image/logo/Re/kongzhong.png",
        },
        {
          title: "游民星空",
          url: "http://www.gamersky.com/",
          image:
            "https://pc-newtab.maxthonimg.com/static/v1.1/image/logo/Re/gamersky.png",
        },
        {
          title: "腾讯动漫",
          url: "http://ac.qq.com/",
          image:
            "https://pc-newtab.maxthonimg.com/static/v1.1/image/logo/Re/ac_qq.png",
        },
        {
          title: "网易云音乐",
          url: "http://music.163.com/",
          image:
            "https://pc-newtab.maxthonimg.com/static/v1.1/image/logo/Re/music_163.png",
        },
        {
          title: "QQ音乐",
          url: "http://y.qq.com/",
          image:
            "https://pc-newtab.maxthonimg.com/static/v1.1/image/logo/Re/qq_music.png",
        },
        {
          title: "虾米音乐",
          url: "http://www.xiami.com/",
          image:
            "https://pc-newtab.maxthonimg.com/static/v1.1/image/logo/Re/xiami.png",
        },
        {
          title: "酷狗音乐",
          url: "http://www.kugou.com/",
          image:
            "https://pc-newtab.maxthonimg.com/static/v1.1/image/logo/Re/kugou.png",
        },
        {
          title: "酷我音乐",
          url: "http://www.kuwo.cn/",
          image:
            "https://pc-newtab.maxthonimg.com/static/v1.1/image/logo/Re/kuwo.png",
        },
        {
          title: "音悦台",
          url: "http://www.yinyuetai.com/",
          image:
            "https://pc-newtab.maxthonimg.com/static/v1.1/image/logo/Re/yinyuetai.png",
        },
        {
          title: "糗事百科",
          url: "http://www.qiushibaike.com/",
          image:
            "https://pc-newtab.maxthonimg.com/static/v1.1/image/logo/Re/qiushibaike.png",
        },
        {
          title: "租号玩",
          url: "https://www.zuhaowan.com/",
          image:
            "https://pc-newtab.maxthonimg.com/static/v1.1/image/logo/Re/zuhaowan.png",
        },
        {
          title: "游侠网",
          url: "http://www.ali213.net/",
          image:
            "https://pc-newtab.maxthonimg.com/static/v1.1/image/logo/Re/ali213.png",
        },
        {
          title: "9377页游",
          url: "http://wvw.9377.com/",
          image:
            "https://pc-newtab.maxthonimg.com/static/v1.1/image/logo/Re/9377.png",
        },
        {
          title: "7K7K小游戏",
          url: "http://www.7k7k.com/",
          image:
            "https://pc-newtab.maxthonimg.com/static/v1.1/image/logo/Re/7k7k.png",
        },
        {
          title: "51游戏",
          url: "https://code.51.com/jh/g51yx/i25/3l73q.html?g=bgjzgsn9wn9w_1047002&bd_vid=7044168697674384086",
          image:
            "https://pc-newtab.maxthonimg.com/static/v1.1/image/logo/Re/51.png",
        },
        {
          title: "唱吧",
          url: "http://changba.com/now/zhibo/zhibo.php",
          image:
            "https://pc-newtab.maxthonimg.com/static/v1.1/image/logo/Re/changba.png",
        },
        {
          title: "花瓣网",
          url: "https://huaban.com/",
          image:
            "https://pc-newtab.maxthonimg.com/static/v1.1/image/logo/Re/huaban.png",
        },
      ],
    },
    {
      categroy: "生活服务",
      list: [
        {
          title: "百度",
          url: "https://go.mxfast.com/bd1/",
          image:
            "https://pc-newtab.maxthonimg.com/static/v1.1/image/logo/Re/baidu.png",
        },
        {
          title: "傲游今日",
          url: "http://i.maxthon.cn/",
          image:
            "https://pc-newtab.maxthonimg.com/static/v1.1/image/logo/Re/i_maxthon.png",
        },
        {
          title: "hao123",
          url: "http://go.maxthon.cn/redir/mx5/qa.htm?f=hao123",
          image:
            "https://pc-newtab.maxthonimg.com/static/v1.1/image/logo/Re/hao123.png",
        },
        {
          title: "大众点评",
          url: "http://go.maxthon.cn/redir/mx5/qa.htm?f=dianping",
          match: ["www.dianping.com"],
          image:
            "https://pc-newtab.maxthonimg.com/static/v1.1/image/logo/Re/dianping.png",
        },
        {
          title: "12306火车票",
          url: "http://www.12306.cn",
          image:
            "https://pc-newtab.maxthonimg.com/static/v1.1/image/logo/Re/12306.png",
        },
        {
          title: "汽车之家",
          url: "http://www.autohome.com.cn/?pvareaid=101581",
          image:
            "https://pc-newtab.maxthonimg.com/static/v1.1/image/logo/Re/autohome.png",
        },
        {
          title: "携程旅行网",
          url: "http://go.maxthon.cn/redir/mx5/qa.htm?f=ctrip",
          image:
            "https://pc-newtab.maxthonimg.com/static/v1.1/image/logo/Re/ctrip.png",
        },
        {
          title: "去哪儿",
          url: "http://www.qunar.com/?ex_track=auto_4f59af02",
          image:
            "https://pc-newtab.maxthonimg.com/static/v1.1/image/logo/Re/qunar.png",
        },
        {
          title: "途牛旅游网",
          url: "http://go.maxthon.cn/redir/mx5/qa.htm?f=tuniu",
          image:
            "https://pc-newtab.maxthonimg.com/static/v1.1/image/logo/Re/tuniu.png",
        },
        {
          title: "驱动之家",
          url: "http://www.mydrivers.com",
          image:
            "https://pc-newtab.maxthonimg.com/static/v1.1/image/logo/Re/mudrivers.png",
        },
        {
          title: "中国银行",
          url: "http://www.boc.cn/",
          image:
            "https://pc-newtab.maxthonimg.com/static/v1.1/image/logo/Re/boc.png",
        },
        {
          title: "中国工商银行",
          url: "http://www.icbc.com.cn/",
          image:
            "https://pc-newtab.maxthonimg.com/static/v1.1/image/logo/Re/icbc.png",
        },
        {
          title: "中国建设银行",
          url: "http://www.ccb.com/",
          image:
            "https://pc-newtab.maxthonimg.com/static/v1.1/image/logo/Re/ccb.png",
        },
        {
          title: "中国农业银行",
          url: "http://www.abchina.com/",
          image:
            "https://pc-newtab.maxthonimg.com/static/v1.1/image/logo/Re/abchina.png",
        },
        {
          title: "招商银行",
          url: "http://www.cmbchina.com/",
          image:
            "https://pc-newtab.maxthonimg.com/static/v1.1/image/logo/Re/cmbchina_z.png",
        },
        {
          title: "交通银行",
          url: "http://www.bankcomm.com/",
          image:
            "https://pc-newtab.maxthonimg.com/static/v1.1/image/logo/Re/cmbchina_j.png",
        },
        {
          title: "中信银行",
          url: "http://bank.ecitic.com/",
          image:
            "https://pc-newtab.maxthonimg.com/static/v1.1/image/logo/Re/ecitic.png",
        },
        {
          title: "房天下",
          url: "http://www.fang.com/",
          image:
            "https://pc-newtab.maxthonimg.com/static/v1.1/image/logo/Re/fang.png",
        },
        {
          title: "58同城",
          url: "http://www.58.com/?path=?utm_source%3d5uad%26utm_campaign%3d5uad-109",
          image:
            "https://pc-newtab.maxthonimg.com/static/v1.1/image/logo/Re/58.png",
        },
        {
          title: "赶集网",
          url: "http://www.ganji.com/?ca_name=dh_cpc_mingzhan/",
          image:
            "https://pc-newtab.maxthonimg.com/static/v1.1/image/logo/Re/ganji.png",
        },
        {
          title: "网易邮箱",
          url: "http://mail.163.com/",
          image:
            "https://pc-newtab.maxthonimg.com/static/v1.1/image/logo/Re/wangyimail.png",
        },
        {
          title: "腾讯邮箱",
          url: "https://mail.qq.com/",
          image:
            "https://pc-newtab.maxthonimg.com/static/v1.1/image/logo/Re/qqmail.png",
        },
        {
          title: "百度地图",
          url: "https://map.baidu.com/",
          image:
            "https://pc-newtab.maxthonimg.com/static/v1.1/image/logo/Re/bdmap.png",
        },
        {
          title: "百度网盘",
          url: "https://map.baidu.com/",
          image:
            "https://pc-newtab.maxthonimg.com/static/v1.1/image/logo/Re/bdpan.png",
        },
      ],
    },
  ];
