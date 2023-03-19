"use strict";
// 变量可自行添加修改
let options = {}
if(process.env.NODE_ENV === 'development'){
	options = {
		baseUrl:'http://ol.wanmei.iego.cn:8445'
	}
}else{
	options = {
		baseUrl:'http://ol.wanmei.iego.cn:8445'
	}
}
export default options
/**
 * 	appid : 		小程序appid
 *  baseUrl : 		服务端域名
 */
