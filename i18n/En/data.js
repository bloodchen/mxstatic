var DEFAULT_HOT_SITE = [
	{'title': 'google','url': 'http://www.google.com', 'image': 'http://pc-newtab.maxthon.com/image/logo/Sq/Google.png', isHot: true},
	{'title': 'amazon','url': 'http://www.amazon.com/gp/redirect.html?ie=UTF8&location=http%3A%2F%2Fwww.amazon.com%2F&tag=wwwmaxthoncom-20&linkCode=ur2&camp=1789&creative=390957/', 'image': 'http://pc-newtab.maxthon.com/image/logo/Sq/amazon.png', isHot: true},
	{'title': 'youtube','url': 'http://www.youtube.com', 'image': 'http://pc-newtab.maxthon.com/image/logo/Sq/youtube.png', isHot: true},
	{'title': 'facebook','url': 'http://www.facebook.com', 'image': 'http://pc-newtab.maxthon.com/image/logo/Sq/facebook.png', isHot: true},
	{'title': 'tumblr','url': 'http://www.tumblr.com', 'image': 'http://pc-newtab.maxthon.com/image/logo/Sq/tumblr.png', isHot: true},
	{'title': 'reddit','url': 'http://www.reddit.com', 'image': 'http://pc-newtab.maxthon.com/image/logo/Sq/reddit.png', isHot: true},
	{'title': 'maxthon','url': 'http://i.maxthon.com', 'image': 'http://pc-newtab.maxthon.com/image/logo/Sq/maxthonnow.png', isHot: true}
];

var MX4_SITE_LIST = [];
var SITE_LIST = [{
	'categroy': 'Featured',
	'list': [{
		'title': 'yahoo',
		'url': 'http://www.yahoo.com',
		'image': 'http://pc-newtab.maxthon.com/image/logo/Re/yahoo.png'
	}, {
		'title': 'twitter',
		'url': 'http://www.twitter.com',
		'image': 'http://pc-newtab.maxthon.com/image/logo/Re/twitter.png'
	}, {
		'title': 'instagram',
		'url': 'http://www.instagram.com',
		'image': 'http://pc-newtab.maxthon.com/image/logo/Re/instagram.png'
	}, {
		'title': 'Walmart',
		'url': 'http://www.walmart.com/?u1=&oid=223073.1&wmlspartner=Z53*jNXOGFw&sourceid=14968565143583927590&affillinktype=10&veh=aff',
		'image': 'http://pc-newtab.maxthon.com/image/logo/Re/walmart.png'
	},{
		'title': 'cnn',
		'url': 'http://www.cnn.com/',
		'image': 'http://pc-newtab.maxthon.com/image/logo/Re/cnn.png'
	},{
		'title': 'BBC',
		'url': 'http://www.bbc.com/',
		'image': 'http://pc-newtab.maxthon.com/image/logo/Re/bbc.png'
	},{
		'title': 'netflix',
		'url': 'http://www.netflix.com',
		'image': 'http://pc-newtab.maxthon.com/image/logo/Re/netflix.png'
	},{
		'title': 'mtv',
		'url': 'http://www.mtv.com/',
		'image': 'http://pc-newtab.maxthon.com/image/logo/Re/mtv.png'
	},{
		'title': 'Bestbuy',
		'url': 'http://www.bestbuy.com',
		'image': 'http://pc-newtab.maxthon.com/image/logo/Re/bestbuy.png'
	},{
		'title': 'Nfl',
		'url': 'http://www.nfl.com',
		'image': 'http://pc-newtab.maxthon.com/image/logo/Re/nfl.png'
	},{
		'title': 'NBA',
		'url': 'http://www.nba.com/',
		'image': 'http://pc-newtab.maxthon.com/image/logo/Re/nba.png'
	}, {
		'title': 'Xbox',
		'url': 'http://www.xbox.com/',
		'image': 'http://pc-newtab.maxthon.com/image/logo/Re/xbox.png'
	}, {
		'title': 'PS4',
		'url': 'http://www.playstation.com/',
		'image': 'http://pc-newtab.maxthon.com/image/logo/Re/ps4.png'
	}, {
		'title': 'ebay',
		'url': 'http://www.ebay.com/?rmvSB=true',
		'image': 'http://pc-newtab.maxthon.com/image/logo/Re/ebay.png'
	}]
}, 
{
	'categroy': 'entertainment',
	'list': [{
		'title': 'vimeo',
		'url': 'http://www.vimeo.com/',
		'image': 'http://pc-newtab.maxthon.com/image/logo/Re/vimeo.png'
	}, {
		'title': 'pinterest',
		'url': 'http://www.pinterest.com',
		'image': 'http://pc-newtab.maxthon.com/image/logo/Re/pinterest.png'
	}, {
		'title': 'mtv',
		'url': 'http://www.mtv.com/',
		'image': 'http://pc-newtab.maxthon.com/image/logo/Re/mtv.png'
	}, {
		'title': 'rollingstone',
		'url': 'http://www.rollingstone.com/',
		'image': 'http://pc-newtab.maxthon.com/image/logo/Re/rollingstone.png'
	}, {
		'title': 'variety',
		'url': 'http://www.variety.com/',
		'image': 'http://pc-newtab.maxthon.com/image/logo/Re/variety.png'
	}, {
		'title': 'hollywood',
		'url': 'http://www.hollywood.com/',
		'image': 'http://pc-newtab.maxthon.com/image/logo/Re/hollywood.png'
	}, {
		'title': 'TMZ',
		'url': 'http://www.tmz.com/',
		'image': 'http://pc-newtab.maxthon.com/image/logo/Re/tmz.png'
	}, {
		'title': 'Xbox',
		'url': 'http://www.xbox.com/',
		'image': 'http://pc-newtab.maxthon.com/image/logo/Re/xbox.png'
	}, {
		'title': 'PS4',
		'url': 'http://www.playstation.com/',
		'image': 'http://pc-newtab.maxthon.com/image/logo/Re/ps4.png'
	}, {
		'title': 'Nintendo',
		'url': 'http://www.nintendo.com/',
		'image': 'http://pc-newtab.maxthon.com/image/logo/Re/nintendo.png'
	}, {
		'title': 'Steam',
		'url': 'http://www.steam.com/',
		'image': 'http://pc-newtab.maxthon.com/image/logo/Re/steam.png'
	}, {
		'title': 'Battlenet',
		'url': 'http://www.battlenet.com/',
		'image': 'http://pc-newtab.maxthon.com/image/logo/Re/battlenet.png'
	}, {
		'title': 'youtube',
		'url': 'http://www.youtube.com/',
		'image': 'http://pc-newtab.maxthon.com/image/logo/Re/youtube.png'
	}, {
		'title': 'netflix',
		'url': 'http://www.netflix.com/',
		'image': 'http://pc-newtab.maxthon.com/image/logo/Re/netflix.png'
	}]
}, {
	'categroy': 'shopping',
	'list': [{
		'title': 'Bestbuy',
		'url': 'http://www.bestbuy.com',
		'image': 'http://pc-newtab.maxthon.com/image/logo/Re/bestbuy.png'
	}, {
		'title': 'Newegg',
		'url': 'http://www.newegg.com',
		'image': 'http://pc-newtab.maxthon.com/image/logo/Re/newegg.png'
	}, {
		'title': 'Groupon',
		'url': 'http://c.duomai.com/track.php?site_id=211878&aid=1611&euid=&t=http%3A%2F%2Fwww.groupon.co.uk%2F',
		'image': 'http://pc-newtab.maxthon.com/image/logo/Re/groupon.png'
	}, {
		'title': 'Etsy',
		'url': 'http://www.etsy.com',
		'image': 'http://pc-newtab.maxthon.com/image/logo/Re/etsy.png'
	}, {
		'title': 'Walmart',
		'url': 'http://linksynergy.walmart.com/fs-bin/click?id=Z53*jNXOGFw&subid=&offerid=223073.1&type=10&tmpid=1082&RD_PARM1=http%3A%2F%2Fwww.walmart.com%2F',
		'image': 'http://pc-newtab.maxthon.com/image/logo/Re/walmart.png'
	}, {
		'title': 'Steam',
		'url': 'http://store.steampowered.com/',
		'image': 'http://pc-newtab.maxthon.com/image/logo/Re/steam.png'
	}, {
		'title': 'ebay',
		'url': 'http://www.ebay.com/?rmvSB=true',
		'image': 'http://pc-newtab.maxthon.com/image/logo/Re/ebay.png'
	}, {
		'title': 'amazon',
		'url': 'http://www.amazon.com/gp/redirect.html?ie=UTF8&location=http%3A%2F%2Fwww.amazon.com%2F&tag=wwwmaxthoncom-20&linkCode=ur2&camp=1789&creative=390957/',
		'image': 'http://pc-newtab.maxthon.com/image/logo/Re/amazon.png'
	}]
}, {
	'categroy': 'social',
	'list': [{
		'title': 'vimeo',
		'url': 'http://www.vimeo.com/',
		'image': 'http://pc-newtab.maxthon.com/image/logo/Re/vimeo.png'
	}, {
		'title': 'pinterest',
		'url': 'http://www.pinterest.com/',
		'image': 'http://pc-newtab.maxthon.com/image/logo/Re/pinterest.png'
	}, {
		'title': 'yelp',
		'url': 'http://www.yelp.com/',
		'image': 'http://pc-newtab.maxthon.com/image/logo/Re/yelp.png'
	}, {
		'title': 'youtube',
		'url': 'http://www.youtube.com/',
		'image': 'http://pc-newtab.maxthon.com/image/logo/Re/youtube.png'
	}, {
		'title': 'facebook',
		'url': 'http://www.facebook.com/',
		'image': 'http://pc-newtab.maxthon.com/image/logo/Re/facebook.png'
	}, {
		'title': 'tumblr',
		'url': 'http://www.tumblr.com/',
		'image': 'http://pc-newtab.maxthon.com/image/logo/Re/tumblr.png'
	}, {
		'title': 'reddit',
		'url': 'http://www.reddit.com/',
		'image': 'http://pc-newtab.maxthon.com/image/logo/Re/reddit.png'
	}, {
		'title': 'twitter',
		'url': 'http://www.twitter.com/',
		'image': 'http://pc-newtab.maxthon.com/image/logo/Re/twitter.png'
	}, {
		'title': 'instagram',
		'url': 'http://www.instagram.com/',
		'image': 'http://pc-newtab.maxthon.com/image/logo/Re/instagram.png'
	}]
}, {
	'categroy': 'news/sports',
	'list': [{
		'title': 'slate',
		'url': 'http://www.slate.com/',
		'image': 'http://pc-newtab.maxthon.com/image/logo/Re/slate.png'
	}, {
		'title': 'variety',
		'url': 'http://www.variety.com/',
		'image': 'http://pc-newtab.maxthon.com/image/logo/Re/variety.png'
	}, {
		'title': 'digital spy',
		'url': 'http://www.digitalspy.com/',
		'image': 'http://pc-newtab.maxthon.com/image/logo/Re/digitalspy.png'
	}, {
		'title': 'hollywood',
		'url': 'http://www.hollywood.com/',
		'image': 'http://pc-newtab.maxthon.com/image/logo/Re/hollywood.png'
	}, {
		'title': 'TMZ',
		'url': 'http://www.tmz.com/',
		'image': 'http://pc-newtab.maxthon.com/image/logo/Re/tmz.png'
	}, {
		'title': 'Nfl',
		'url': 'http://www.nfl.com/',
		'image': 'http://pc-newtab.maxthon.com/image/logo/Re/nfl.png'
	}, {
		'title': 'Yahoo sports',
		'url': 'http://www.sports.yahoo.com',
		'image': 'http://pc-newtab.maxthon.com/image/logo/Re/yahoo_sports.png'
	}, {
		'title': 'NBA',
		'url': 'http://www.nba.com/',
		'image': 'http://pc-newtab.maxthon.com/image/logo/Re/nba.png'
	}, {
		'title': 'Espn',
		'url': 'http://www.espn.com/',
		'image': 'http://pc-newtab.maxthon.com/image/logo/Re/espn.png'
	}, {
		'title': 'Bleacher report',
		'url': 'http://www.bleacherreport.com',
		'image': 'http://pc-newtab.maxthon.com/image/logo/Re/bleacherreport.png'
	}, {
		'title': 'cnn',
		'url': 'http://www.cnn.com/',
		'image': 'http://pc-newtab.maxthon.com/image/logo/Re/cnn.png'
	}, {
		'title': 'BBC',
		'url': 'http://www.bbc.com/',
		'image': 'http://pc-newtab.maxthon.com/image/logo/Re/bbc.png'
	}]
}]