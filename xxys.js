/*
小小影视 unlock Vip

app 下载地址:http://t.cn/AiWI7o28

电报交流频道：https://t.me/ThorHCC
QQ交流：189519867

QX:

[rewrite_local]👇
# 小小影视
https:\/\/.*\..*\.com\/(vod\/reqplay\/|ucp/index|getGlobalData) url script-response-body https://raw.githubusercontent.com/toechon/JGG/master/xxys.js

https:\/\/.*.xiaoxiao(img|apps|appxs).com url request-header (\r\n)Cookie:.+(\r\n) request-header $1Cookie: xxx_api_auth=6131333537653261363463323331666265663763396239663835636662373930$2



MITM = *.*apps.com, *.xiao*.com

*/

const path1 = "/ucp/index";
const path2 = "/vod/reqplay/";
const ad = 'getGlobalData';
let obj = JSON.parse($response.body);

if ($request.url.indexOf(path1) != -1){
	obj.data.uinfo["down_daily_remainders"] = "5201314";
	obj.data.uinfo["play_daily_remainders"] = "5201314";
	obj.data.uinfo["curr_group"] = "5";
	obj.data.user["isvip"] = "1";
	obj.data.user["goldcoin"] = "5201314";
   	obj.data.user["avatar_url"] = "https://i.loli.net/2019/10/24/eCJuqz75WrL6ihQ.jpg";
}
if ($request.url.indexOf(path2) != -1){
	obj.retcode = "0";
	obj.data.lastplayindex = "1";
	if(obj.data.hasOwnProperty("httpurl_preview")){
		var playurl = obj.data["httpurl_preview"];
		obj.data["httpurl"] = playurl;
	};
}

if ($request.url.indexOf(ad) != -1) {
delete obj.data.adrows
delete obj.data.adgroups
}
$done({body: JSON.stringify(obj)});
