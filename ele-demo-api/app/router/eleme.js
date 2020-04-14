const express = require('express');
const axios = require('axios');
const pick = require('object.pick'); // 找交集

const { queryString, formatImageUrl, formatArrayQuery } = require('../utils');

const router = express.Router();

const baseUrl = 'https://h5.ele.me/restapi';
const request = (method, url, cookie = '', data = {}, params = {}) => {
	return new Promise((resolve, reject) => {
		axios({
			method,
			url,
			data,
			params,
			headers: {
				Cookie: cookie
			}
		}).then(data => {
			resolve(data);
		}).catch(error => {
			const errmsg = error.response.data.message || error.toString();
			const name = error.response.data.name || '';
			reject({ errmsg, name });
		});
	});
}



/**
 *  首页浮球 && 优惠专区
 *  
 *  https://h5.ele.me/restapi/shopping/v2/entries?latitude=39.98384&longitude=116.31433&templates[]=main_template&templates[]=favourable_template&templates[]=svip_template&terminal=h5
 */
router.get('/entry', (req, res, next) => {
	request(
		'GET',
		`${baseUrl}/shopping/v2/entries?${queryString(req.query)}&templates[]=main_template&templates[]=favourable_template&templates[]=svip_template&terminal=h5`)
	.then((resdata) => {
		// console.log(resdata, 'resolve(args)');
		res.json({
			result: resdata.data,
			code: 0
		});
	})
	.catch((errmsg) => {
		res.json({
			errmsg,
			code: 1
		});
	});
});


/**
 *  banner
 *  
 *  https://h5.ele.me/restapi/shopping/v2/banners?consumer=1&type=1&latitude=39.9709864&longitude=116.3222559
 */
router.get('/banner', (req, res, next) => {
	request(
		'GET',
		`${baseUrl}/shopping/v2/banners?${queryString(req.query)}&consumer=1&type=1`
	)
	.then((resdata) => {
		res.json({
			result: resdata.data,
			code: 0
		});
	}).catch((errmsg) => {
		res.json({
			errmsg,
			code: 1
		});
	});
});

/**
 * 获取验证码
 * https://h5.ele.me/restapi/eus/login/mobile_send_code
 * captcha_hash: ""
 * captcha_value: ""
 * mobile: "11111111111"
 */
router.post('/mobile_send_code', (req, res, next) => {
	const cookie = req.get('Cookie') || '';
	request(
		'POST',
		`${baseUrl}/eus/login/mobile_send_code`,
		cookie,
		req.body.data
	).then(({ data }) => {
		res.json({
			result: data,
			code: 0
		});
	}).catch(({ errmsg, name }) => {
		res.json({
			errmsg,
			name,
			code: 1
		});
	})
});

/**
 * 手机登录
 * https://h5.ele.me/restapi/eus/login/login_by_mobile
 * mobile: ""
 * validate_code: ""
 * validate_token: ""
 */
router.post('/login_by_mobile', (req, res, next) => {
	const cookie = req.get('cookie') || '';
	request(
		'POST',
		`${baseUrl}/eus/login/login_by_mobile`,
		cookie,
		req.body.data
	).then(data => {
		let cookie = data.headers['set-cookie'];
		cookie = cookie && cookie.map(x => x.replace('Domain=.ele.me', ''));
		res.set({
			'Set-Cookie': cookie
		});
		res.json({
			result: data.data,
			code: 0
		});
	}).catch(({ errmsg }) => {
		res.json({
			errmsg,
			code: 1
		});
	});
});

/**
 * 获取用户信息
 * https://h5.ele.me/restapi/eus/v3/users/5061956506?
 */

router.get('/users', (req, res, next) => {
	const { USERID } = req.cookies;
	const cookie = req.get('Cookie') || '';
	request(
		'GET',
		`${baseUrl}/eus/v3/users/${USERID}`,
		cookie
	).then(({ data }) => {
		// console.log(data, '用户信息')
		res.json({
			result: data,
			code: 0
		});
	}).catch(({ errmsg }) => {
		res.json({
			errmsg,
			code: 1
		});
	});
});


/**
 * 获取用户信息
 * https://h5.ele.me/restapi/shopping/v3/restaurants?latitude=39.97100069999999&longitude=116.3221563&offset=0&limit=8&extras[]=activities&extras[]=tags&extra_filters=home&rank_id=&terminal=h5
 */

router.get('/restaurants', (req, res) => {
	const pickArray = ['latitude', 'longitude', 'limit', 'offset', 'terminal', 'rank_id', 'extra_filters', 'order_by', 'super_vip', 'keywords'];
	const options = pick(req.query, ['delivery_mode', 'extras', 'restaurant_category_ids', 'activity_types', 'average_cost_ids', 'support_ids'])
	const tailUrl =  Object.keys(options).map(v => formatArrayQuery(req.query[v], v)).join('&')
	const cookie = req.get('Cookie') || '';
	request(
		'GET',
		`${baseUrl}/shopping/v3/restaurants?${queryString(pick(req.query, pickArray))}]&${tailUrl}`,
		cookie
	).then(({ data }) => {
		let result = [];
		if (data.items.length) {
			result = data.items.map(({ restaurant }) => ({
				...restaurant,
				image_url: formatImageUrl(restaurant.image_path),
				recommend: {
					...restaurant.recommend,
					image_url: formatImageUrl(restaurant.recommend.image_hash)
				}
			}))
		}
		res.json({
			result: {
				...data,
				items: result
			},
			code: 0
		});
	}).catch(({ errmsg }) => {
		res.json({
			errmsg,
			code: 1
		});
	});
});








module.exports = router;
