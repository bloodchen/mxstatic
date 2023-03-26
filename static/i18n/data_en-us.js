/**
 * 默认初始化文件夹
 */
var DEFAULT_MY_SITE = [
  {
    title: 'Bing',
    url: 'http://www.bing.com/?pc=cosp&ptag=A91255CDCDA&conlogo=CT3210127',
    image: staticServer + '/v1.1/image/logo/Re/Bing.png'
  },
  {
    title: 'Yahoo',
    url: 'https://www.yahoo.com/',
    image: staticServer + '/v1.1/image/logo/Re/yahoo.png'
  },
  {
    title: 'Gmail',
    url: 'http://gmail.google.com/',
    image: staticServer + '/v1.1/image/logo/Re/gmail.png'
  },
  {
    title: 'Maxthon Fan Page',
    url: 'http://go.maxthon.com/redir/mx5/qa.htm?f=fbmx5 ',
    image: staticServer + '/v1.1/image/logo/Re/facebook_maxthon.png'
  },
  {
    folderId: typeof guid === 'function' ? guid() : '2b92c466-53d0-1968-71bf-210f6dbdde4e',
    title: 'News',
    children: [
      {
        title: 'MSN',
        url: 'http://www.msn.com',
        image: staticServer + '/v1.1/image/logo/Re/msn.png'
      },
      {
        title: 'CNN',
        url: 'http://www.cnn.com/',
        image: staticServer + '/v1.1/image/logo/Re/cnn.png'
      },
      {
        title: 'BBC',
        url: 'http://www.bbc.com/',
        image: staticServer + '/v1.1/image/logo/Re/bbc.png'
      },
      {
        title: 'ESPN',
        url: 'http://www.espn.com/',
        image: staticServer + '/v1.1/image/logo/Re/espn.png'
      }
    ],
    isHot: false
  },
  {
    title: 'Google',
    url: 'https://www.google.com/',
    image: staticServer + '/v1.1/image/logo/Sq/Google.png',
    isHot: true
  },
  {
    title: 'eBay',
    url: 'http://rover.ebay.com/rover/1/711-53200-19255-0/1?icep_ff3=1&pub=5575044537&toolid=10001&campid=5337264385&customid=&ipn=psmain&icep_vectorid=229466&kwid=902099&mtid=824&kw=lg',
    image: staticServer + '/v1.1/image/logo/Sq/ebay.png',
    isHot: true
  },
  {
    title: 'Amazon',
    url: 'http://go.maxthon.com/redir/mx5/qa.htm?f=mx5qaamazon',
    image: staticServer + '/v1.1/image/logo/Sq/amazon.png',
    isHot: true
  },
  {
    title: 'Facebook',
    url: 'http://mini.fbunion.com/?ac=pc&channel=50100',
    image: staticServer + '/v1.1/image/logo/Sq/facebook.png',
    isHot: true
  },
  {
    title: 'Twitter',
    url: 'https://twitter.com/',
    image: staticServer + '/v1.1/image/logo/Sq/twitter.png',
    isHot: true
  },
  {
    title: 'YouTube',
    url: 'http://youtube.fbunion.com/?ac=pc&channel=50100',
    image: staticServer + '/v1.1/image/logo/Sq/youtube.png',
    isHot: true
  },
  {
    title: 'LinkedIn',
    url: 'http://click.howdoesin.net/aff_c?offer_id=106943463&affiliate_id=7197',
    image: staticServer + '/v1.1/image/logo/Sq/Linkedin.png',
    isHot: true
  },
  {
    title: 'Maxthon Now',
    url: 'http://i.maxthon.com',
    image: staticServer + '/v1.1/image/logo/Sq/maxthonnow.png',
    isHot: true
  }
];

/**
 * 推荐站点
 */
var SITE_LIST = [
  {
    categroy: 'Featured',
    list: [
      {
        title: 'Google',
        url: 'https://www.google.com/',
        image: staticServer + '/v1.1/image/logo/Re/Google.png',
        isHot: true
      },
      {
        title: 'eBay',
        url: 'http://rover.ebay.com/rover/1/711-53200-19255-0/1?icep_ff3=1&pub=5575044537&toolid=10001&campid=5337264385&customid=&ipn=psmain&icep_vectorid=229466&kwid=902099&mtid=824&kw=lg',
        image: staticServer + '/v1.1/image/logo/Re/ebay.png',
        isHot: true
      },
      {
        title: 'Amazon',
        url: 'http://go.maxthon.com/redir/mx5/qa.htm?f=mx5qaamazon',
        image: staticServer + '/v1.1/image/logo/Re/amazon.png',
        isHot: true
      },
      {
        title: 'Facebook',
        url: 'https://www.facebook.com/',
        image: staticServer + '/v1.1/image/logo/Re/facebook.png',
        isHot: true
      },
      {
        title: 'Twitter',
        url: 'https://twitter.com/',
        image: staticServer + '/v1.1/image/logo/Re/twitter.png',
        isHot: true
      },
      {
        title: 'YouTube',
        url: 'https://www.youtube.com/',
        image: staticServer + '/v1.1/image/logo/Re/youtube.png',
        isHot: true
      },
      {
        title: 'LinkedIn',
        url: 'https://www.linkedin.com',
        image: staticServer + '/v1.1/image/logo/Re/Linkedin.png',
        isHot: true
      },
      {
        title: 'Maxthon Now',
        url: 'http://i.maxthon.com',
        image: staticServer + '/v1.1/image/logo/Re/maxthonnow.png',
        isHot: true
      },
      {
        title: 'Bing',
        url: 'http://www.bing.com/?pc=cosp&ptag=A91255CDCDA&conlogo=CT3210127',
        image: staticServer + '/v1.1/image/logo/Re/Bing.png'
      },
      {
        title: 'Yahoo',
        url: 'https://www.yahoo.com/',
        image: staticServer + '/v1.1/image/logo/Re/yahoo.png'
      },
      {
        title: 'Gmail',
        url: 'https://gmail.google.com/ ',
        image: staticServer + '/v1.1/image/logo/Re/gmail.png'
      },
      {
        title: 'Maxthon Fan Page',
        url: 'http://go.maxthon.com/redir/mx5/qa.htm?f=fbmx5 ',
        image: staticServer + '/v1.1/image/logo/Re/facebook_maxthon.png'
      }
    ]
  },
  {
    categroy: 'Social',
    list: [
      {
        title: 'Facebook',
        url: 'https://www.facebook.com/',
        image: staticServer + '/v1.1/image/logo/Re/facebook.png'
      },
      {
        title: 'Twitter',
        url: 'https://twitter.com/',
        image: staticServer + '/v1.1/image/logo/Re/twitter.png'
      },
      {
        title: 'LinkedIn',
        url: 'https://www.linkedin.com',
        image: staticServer + '/v1.1/image/logo/Re/Linkedin.png'
      },
      {
        title: 'Pinterest',
        url: 'https://www.pinterest.com/',
        image: staticServer + '/v1.1/image/logo/Re/pinterest.png'
      },
      {
        title: 'Google+',
        url: 'https://plus.google.com/',
        image: staticServer + '/v1.1/image/logo/Re/Googleplus.png'
      },
      {
        title: 'Tumblr',
        url: 'https://www.tumblr.com/',
        image: staticServer + '/v1.1/image/logo/Re/tumblr.png'
      },
      {
        title: 'Instagram',
        url: 'https://www.instagram.com/',
        image: staticServer + '/v1.1/image/logo/Re/instagram.png'
      },
      {
        title: 'Reddit',
        url: 'https://www.reddit.com/',
        image: staticServer + '/v1.1/image/logo/Re/reddit.png'
      },
      {
        title: 'VK',
        url: 'https://vk.com/',
        image: staticServer + '/v1.1/image/logo/Re/vk.png'
      },
      {
        title: 'Flickr',
        url: 'https://www.flickr.com/',
        image: staticServer + '/v1.1/image/logo/Re/Flickr.png'
      },
      {
        title: 'Meetup',
        url: 'https://www.meetup.com/',
        image: staticServer + '/v1.1/image/logo/Re/Meetup.png'
      },
      {
        title: 'ASKfm',
        url: 'http://ask.fm/',
        image: staticServer + '/v1.1/image/logo/Re/askfm.png'
      }
    ]
  },
  {
    categroy: 'News&Media',
    list: [
      {
        title: 'Yahoo',
        url: 'https://www.yahoo.com/',
        image: staticServer + '/v1.1/image/logo/Re/yahoo.png'
      },
      {
        title: 'Google News',
        url: 'https://news.google.com/',
        image: staticServer + '/v1.1/image/logo/Re/googlenews.png'
      },
      {
        title: 'Huffington Post',
        url: 'http://www.huffingtonpost.com/',
        image: staticServer + '/v1.1/image/logo/Re/huffpost.png'
      },
      {
        title: 'The New York Times',
        url: 'http://www.nytimes.com/',
        image: staticServer + '/v1.1/image/logo/Re/nytimes.png'
      },
      {
        title: 'Daily Mail Online',
        url: 'http://www.dailymail.co.uk/',
        image: staticServer + '/v1.1/image/logo/Re/dailymail.png'
      },
      {
        title: 'Washington Post',
        url: 'http://www.washingtonpost.com/',
        image: staticServer + '/v1.1/image/logo/Re/washingtonPost.png'
      },
      {
        title: 'The Guardian',
        url: 'https://www.theguardian.com/',
        image: staticServer + '/v1.1/image/logo/Re/the_Guardian.png'
      },
      {
        title: 'BBC',
        url: 'http://www.bbc.com/',
        image: staticServer + '/v1.1/image/logo/Re/bbc.png'
      },
      {
        title: 'MSN',
        url: 'http://www.msn.com',
        image: staticServer + '/v1.1/image/logo/Re/msn.png'
      },
      {
        title: 'IGN',
        url: 'http://www.ign.com/',
        image: staticServer + '/v1.1/image/logo/Re/ign.png'
      },
      {
        title: 'CNET',
        url: 'https://www.cnet.com/',
        image: staticServer + '/v1.1/image/logo/Re/cnet.png'
      },
      {
        title: 'Yahoo Sports',
        url: 'http://sports.yahoo.com/',
        image: staticServer + '/v1.1/image/logo/Re/yahoo_sports.png'
      },
      {
        title: 'ESPN',
        url: 'http://www.espn.com/',
        image: staticServer + '/v1.1/image/logo/Re/espn.png'
      },
      {
        title: 'HowStuffWorks',
        url: 'http://www.howstuffworks.com/',
        image: staticServer + '/v1.1/image/logo/Re/howstuffworks.png'
      },
      {
        title: 'theCHIVE',
        url: 'http://thechive.com/',
        image: staticServer + '/v1.1/image/logo/Re/theChive.png'
      },
      {
        title: 'IMDb',
        url: 'http://www.imdb.com/',
        image: staticServer + '/v1.1/image/logo/Re/imdb.png'
      },
      {
        title: 'TMZ',
        url: 'http://www.tmz.com/',
        image: staticServer + '/v1.1/image/logo/Re/tmz.png'
      },
      {
        title: 'EW',
        url: 'http://www.ew.com/',
        image: staticServer + '/v1.1/image/logo/Re/ew.png'
      },
      {
        title: 'YouTube',
        url: 'https://www.youtube.com/',
        image: staticServer + '/v1.1/image/logo/Re/youtube.png'
      },
      {
        title: 'Netflix',
        url: 'https://www.netflix.com/',
        image: staticServer + '/v1.1/image/logo/Re/netflix.png'
      },
      {
        title: 'Vimeo',
        url: 'https://vimeo.com/',
        image: staticServer + '/v1.1/image/logo/Re/vimeo.png'
      },
      {
        title: 'Dailymotion',
        url: 'http://www.dailymotion.com/',
        image: staticServer + '/v1.1/image/logo/Re/dailymotion.png'
      },
      {
        title: 'Hulu',
        url: 'http://www.hulu.com/',
        image: staticServer + '/v1.1/image/logo/Re/hulu.png'
      },
      {
        title: 'Vine',
        url: 'https://vine.co/',
        image: staticServer + '/v1.1/image/logo/Re/vine.png'
      }
    ]
  },
  {
    categroy: 'Shopping',
    list: [
      {
        title: 'Amazon',
        url: 'http://go.maxthon.com/redir/mx5/qa.htm?f=mx5qaamazon',
        image: staticServer + '/v1.1/image/logo/Re/amazon.png'
      },
      {
        title: 'eBay',
        url: 'http://rover.ebay.com/rover/1/711-53200-19255-0/1?icep_ff3=1&pub=5575044537&toolid=10001&campid=5337264385&customid=&ipn=psmain&icep_vectorid=229466&kwid=902099&mtid=824&kw=lg',
        image: staticServer + '/v1.1/image/logo/Re/ebay.png'
      },
      {
        title: 'Walmart',
        url: 'http://linksynergy.walmart.com/fs-bin/click?id=Z53*jNXOGFw&subid=&offerid=223073.1&type=10&tmpid=1082&RD_PARM1=http%3A%2F%2Fwww.walmart.com%2F',
        image: staticServer + '/v1.1/image/logo/Re/walmart.png'
      },
      {
        title: 'Alibaba',
        url: 'https://www.alibaba.com/',
        image: staticServer + '/v1.1/image/logo/Re/alibaba.png'
      },
      {
        title: 'Target',
        url: 'http://www.target.com/',
        image: staticServer + '/v1.1/image/logo/Re/target.png'
      },
      {
        title: 'Flipkart',
        url: 'https://www.flipkart.com/',
        image: staticServer + '/v1.1/image/logo/Re/flipkart.png'
      },
      {
        title: 'Best Buy',
        url: 'http://www.bestbuy.com',
        image: staticServer + '/v1.1/image/logo/Re/bestbuy.png'
      },
      {
        title: 'Newegg',
        url: 'http://www.newegg.com',
        image: staticServer + '/v1.1/image/logo/Re/newegg.png'
      },
      {
        title: 'Overstock',
        url: 'https://www.overstock.com',
        image: staticServer + '/v1.1/image/logo/Re/overstock.png'
      },
      {
        title: 'SHOP.COM',
        url: 'http://www.shop.com/',
        image: staticServer + '/v1.1/image/logo/Re/shop.png'
      },
      {
        title: 'AliExpress',
        url: 'https://www.aliexpress.com/',
        image: staticServer + '/v1.1/image/logo/Re/Aliexpress.png'
      },
      {
        title: 'RetailMeNot',
        url: 'https://www.retailmenot.com/',
        image: staticServer + '/v1.1/image/logo/Re/retailmenot.png'
      },
      {
        title: 'Groupon',
        url: 'https://www.groupon.com/',
        image: staticServer + '/v1.1/image/logo/Re/groupon.png'
      }
    ]
  },
  {
    categroy: 'Tools',
    list: [
      {
        title: 'Google',
        url: 'https://www.google.com/',
        image: staticServer + '/v1.1/image/logo/Re/Google.png'
      },
      {
        title: 'Bing',
        url: 'http://www.bing.com/?pc=cosp&ptag=A91255CDCDA&conlogo=CT3210127',
        image: staticServer + '/v1.1/image/logo/Re/Bing.png'
      },
      {
        title: 'Yahoo Search',
        url: 'https://search.yahoo.com/',
        image: staticServer + '/v1.1/image/logo/Re/yahoosearch.png'
      },
      {
        title: 'Ask',
        url: 'http://www.ask.com/',
        image: staticServer + '/v1.1/image/logo/Re/ask.png'
      },
      {
        title: 'AOL Search',
        url: 'https://search.aol.com',
        image: staticServer + '/v1.1/image/logo/Re/aolsearch.png'
      },
      {
        title: 'DuckDuckGo',
        url: 'https://duckduckgo.com/',
        image: staticServer + '/v1.1/image/logo/Re/duckduckgo.png'
      },
      {
        title: 'Maxthon Now',
        url: 'http://i.maxthon.com',
        image: staticServer + '/v1.1/image/logo/Re/maxthonnow.png'
      },
      {
        title: 'Gmail',
        url: 'https://gmail.google.com/ ',
        image: staticServer + '/v1.1/image/logo/Re/gmail.png'
      },
      {
        title: 'Outlook',
        url: 'https://www.outlook.com/',
        image: staticServer + '/v1.1/image/logo/Re/outlook.png'
      },
      {
        title: 'Yahoo Mail',
        url: 'https://mail.yahoo.com/',
        image: staticServer + '/v1.1/image/logo/Re/yahoomail.png'
      },
      {
        title: 'AOL Mail',
        url: 'https://mail.aol.com/',
        image: staticServer + '/v1.1/image/logo/Re/aolmail.png'
      },
      {
        title: 'Zoho Mail',
        url: 'https://www.zoho.com/mail/',
        image: staticServer + '/v1.1/image/logo/Re/zohomail.png'
      },
      {
        title: 'Mail.com',
        url: 'https://www.mail.com/mail/',
        image: staticServer + '/v1.1/image/logo/Re/mail_com.png'
      },
      {
        title: 'Yandex.Mail',
        url: 'https://mail.yandex.com/',
        image: staticServer + '/v1.1/image/logo/Re/yandex.png'
      }
    ]
  }
];
