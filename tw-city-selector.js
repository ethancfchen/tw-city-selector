(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.TwCitySelector = factory());
}(this, (function () { 'use strict';

var data$1 = {
    // 縣市
    countries: ['台北市', '基隆市', '新北市', '宜蘭縣', '桃園市', '新竹市', '新竹縣', '苗栗縣', '台中市', '彰化縣', '南投縣', '嘉義市', '嘉義縣', '雲林縣', '台南市', '高雄市', '澎湖縣', '金門縣', '屏東縣', '台東縣', '花蓮縣', '連江縣'],

    // 區域
    districts: [
    // 台北市
    [['中正區', '大同區', '中山區', '松山區', '大安區', '萬華區', '信義區', '士林區', '北投區', '內湖區', '南港區', '文山區'], ['100', '103', '104', '105', '106', '108', '110', '111', '112', '114', '115', '116']],
    // 基隆市
    [['仁愛區', '信義區', '中正區', '中山區', '安樂區', '暖暖區', '七堵區'], ['200', '201', '202', '203', '204', '205', '206']],
    // 新北市
    [['萬里區', '金山區', '板橋區', '汐止區', '深坑區', '石碇區', '瑞芳區', '平溪區', '雙溪區', '貢寮區', '新店區', '坪林區', '烏來區', '永和區', '中和區', '土城區', '三峽區', '樹林區', '鶯歌區', '三重區', '新莊區', '泰山區', '林口區', '蘆洲區', '五股區', '八里區', '淡水區', '三芝區', '石門區'], ['207', '208', '220', '221', '222', '223', '224', '226', '227', '228', '231', '232', '233', '234', '235', '236', '237', '238', '239', '241', '242', '243', '244', '247', '248', '249', '251', '252', '253']],
    // 宜蘭縣
    [['宜蘭市', '頭城鎮', '礁溪鄉', '壯圍鄉', '員山鄉', '羅東鎮', '三星鄉', '大同鄉', '五結鄉', '冬山鄉', '蘇澳鎮', '南澳鄉', '釣魚台'], ['260', '261', '262', '263', '264', '265', '266', '267', '268', '269', '270', '272', '290']],
    // 桃園市
    [['中壢區', '平鎮區', '龍潭區', '楊梅區', '新屋區', '觀音區', '桃園區', '龜山區', '八德區', '大溪區', '復興區', '大園區', '蘆竹區'], ['320', '324', '325', '326', '327', '328', '330', '333', '334', '335', '336', '337', '338']],
    // 新竹市
    [['東區', '北區', '香山區'], ['300', '300', '300']],
    // 新竹縣
    [['竹北市', '湖口鄉', '新豐鄉', '新埔鎮', '關西鎮', '芎林鄉', '寶山鄉', '竹東鎮', '五峰鄉', '橫山鄉', '尖石鄉', '北埔鄉', '峨眉鄉'], ['302', '303', '304', '305', '306', '307', '308', '310', '311', '312', '313', '314', '315']],
    // 苗栗縣
    [['竹南鎮', '頭份市', '三灣鄉', '南庄鄉', '獅潭鄉', '後龍鎮', '通霄鎮', '苑裡鎮', '苗栗市', '造橋鄉', '頭屋鄉', '公館鄉', '大湖鄉', '泰安鄉', '銅鑼鄉', '三義鄉', '西湖鄉', '卓蘭鎮'], ['350', '351', '352', '353', '354', '356', '357', '358', '360', '361', '362', '363', '364', '365', '366', '367', '368', '369']],
    // 台中市
    [['中區', '東區', '南區', '西區', '北區', '北屯區', '西屯區', '南屯區', '太平區', '大里區', '霧峰區', '烏日區', '豐原區', '后里區', '石岡區', '東勢區', '和平區', '新社區', '潭子區', '大雅區', '神岡區', '大肚區', '沙鹿區', '龍井區', '梧棲區', '清水區', '大甲區', '外埔區', '大安區'], ['400', '401', '402', '403', '404', '406', '407', '408', '411', '412', '413', '414', '420', '421', '422', '423', '424', '426', '427', '428', '429', '432', '433', '434', '435', '436', '437', '438', '439']],
    // 彰化縣
    [['彰化市', '芬園鄉', '花壇鄉', '秀水鄉', '鹿港鎮', '福興鄉', '線西鄉', '和美鎮', '伸港鄉', '員林市', '社頭鄉', '永靖鄉', '埔心鄉', '溪湖鎮', '大村鄉', '埔鹽鄉', '田中鎮', '北斗鎮', '田尾鄉', '埤頭鄉', '溪州鄉', '竹塘鄉', '二林鎮', '大城鄉', '芳苑鄉', '二水鄉'], ['500', '502', '503', '504', '505', '506', '507', '508', '509', '510', '511', '512', '513', '514', '515', '516', '520', '521', '522', '523', '524', '525', '526', '527', '528', '530']],
    // 南投縣
    [['南投市', '中寮鄉', '草屯鎮', '國姓鄉', '埔里鎮', '仁愛鄉', '名間鄉', '集集鎮', '水里鄉', '魚池鄉', '信義鄉', '竹山鎮', '鹿谷鄉'], ['540', '541', '542', '544', '545', '546', '551', '552', '553', '555', '556', '557', '558']],
    // 嘉義市
    [['東區', '西區'], ['600', '600']],
    // 嘉義縣
    [['番路鄉', '梅山鄉', '竹崎鄉', '阿里山', '中埔鄉', '大埔鄉', '水上鄉', '鹿草鄉', '太保市', '朴子市', '東石鄉', '六腳鄉', '新港鄉', '民雄鄉', '大林鎮', '溪口鄉', '義竹鄉', '布袋鎮'], ['602', '603', '604', '605', '606', '607', '608', '611', '612', '613', '614', '615', '616', '621', '622', '623', '624', '625']],
    // 雲林縣
    [['斗南鎮', '大埤鄉', '虎尾鎮', '土庫鎮', '褒忠鄉', '東勢鄉', '台西鄉', '崙背鄉', '麥寮鄉', '斗六市', '林內鄉', '古坑鄉', '莿桐鄉', '西螺鎮', '二崙鄉', '北港鎮', '水林鄉', '口湖鄉', '四湖鄉', '元長鄉'], ['630', '631', '632', '633', '634', '635', '636', '637', '638', '640', '643', '646', '647', '648', '649', '651', '652', '653', '654', '655']],
    // 台南市
    [['中西區', '東區', '南區', '北區', '安平區', '安南區', '永康區', '歸仁區', '新化區', '左鎮區', '玉井區', '楠西區', '南化區', '仁德區', '關廟區', '龍崎區', '官田區', '麻豆區', '佳里區', '西港區', '七股區', '將軍區', '學甲區', '北門區', '新營區', '後壁區', '白河區', '東山區', '六甲區', '下營區', '柳營區', '鹽水區', '善化區', '大內區', '山上區', '新市區', '安定區'], ['700', '701', '702', '704', '708', '709', '710', '711', '712', '713', '714', '715', '716', '717', '718', '719', '720', '721', '722', '723', '724', '725', '726', '727', '730', '731', '732', '733', '734', '735', '736', '737', '741', '742', '743', '744', '745']],
    // 高雄市
    [['新興區', '前金區', '苓雅區', '鹽埕區', '鼓山區', '旗津區', '前鎮區', '三民區', '楠梓區', '小港區', '左營區', '仁武區', '大社區', '東沙群島', '南沙群島', '岡山區', '路竹區', '阿蓮區', '田寮區', '燕巢區', '橋頭區', '梓官區', '彌陀區', '永安區', '湖內區', '鳳山市', '大寮區', '林園區', '鳥松區', '大樹區', '旗山區', '美濃區', '六龜區', '內門區', '杉林區', '甲仙區', '桃源區', '那瑪夏區', '茂林區', '茄萣區'], ['800', '801', '802', '803', '804', '805', '806', '807', '811', '812', '813', '814', '815', '817', '819', '820', '821', '822', '823', '824', '825', '826', '827', '828', '829', '830', '831', '832', '833', '840', '842', '843', '844', '845', '846', '847', '848', '849', '851', '852']],
    // 澎湖縣
    [['馬公市', '西嶼鄉', '望安鄉', '七美鄉', '白沙鄉', '湖西鄉'], ['880', '881', '882', '883', '884', '885']],
    // 金門縣
    [['金沙鎮', '金湖鎮', '金寧鄉', '金城鎮', '烈嶼鄉', '烏坵鄉'], ['890', '891', '892', '893', '894', '896']],
    // 屏東縣
    [['屏東市', '三地門鄉', '霧台鄉', '瑪家鄉', '九如鄉', '里港鄉', '高樹鄉', '鹽埔鄉', '長治鄉', '麟洛鄉', '竹田鄉', '內埔鄉', '萬丹鄉', '潮州鎮', '泰武鄉', '來義鄉', '萬巒鄉', '崁頂鄉', '新埤鄉', '南州鄉', '林邊鄉', '東港鎮', '琉球鄉', '佳冬鄉', '新園鄉', '枋寮鄉', '枋山鄉', '春日鄉', '獅子鄉', '車城鄉', '牡丹鄉', '恆春鎮', '滿州鄉'], ['900', '901', '902', '903', '904', '905', '906', '907', '908', '909', '911', '912', '913', '920', '921', '922', '923', '924', '925', '926', '927', '928', '929', '931', '932', '940', '941', '942', '943', '944', '945', '946', '947']],
    // 台東縣
    [['台東市', '綠島鄉', '蘭嶼鄉', '延平鄉', '卑南鄉', '鹿野鄉', '關山鎮', '海端鄉', '池上鄉', '東河鄉', '成功鎮', '長濱鄉', '太麻里', '金峰鄉', '大武鄉', '達仁鄉'], ['950', '951', '952', '953', '954', '955', '956', '957', '958', '959', '961', '962', '963', '964', '965', '966']],
    // 花蓮縣
    [['花蓮市', '新城鄉', '秀林鄉', '吉安鄉', '壽豐鄉', '鳳林鎮', '光復鄉', '豐濱鄉', '瑞穗鄉', '萬榮鄉', '玉里鎮', '卓溪鄉', '富里鄉'], ['970', '971', '972', '973', '974', '975', '976', '977', '978', '979', '981', '982', '983']],
    // 連江縣
    [['南竿鄉', '北竿鄉', '莒光鄉', '東引鄉'], ['209', '210', '211', '212']]]
};

function handleOptions() {
  // Check options required
  if (arguments[1]) {
    getOptionsRequired(arguments[0], arguments[1]);
  }

  // Extend options
  return getOptionsExtend(arguments[0], arguments[2]);
}

function getOptionsRequired(optionsCustom, optionsRequired) {
  var error = '';
  var length = optionsRequired.length;
  optionsCustom = optionsCustom || {};

  while (length--) {
    if (!optionsCustom.hasOwnProperty(optionsRequired[length])) error += optionsRequired[length] + ',';
  }

  if (error) throw '缺少參數: ' + error;
}

function getOptionsExtend(optionsCustom, optionsDefault) {
  if (!optionsCustom) {
    return optionsDefault;
  }

  var property;
  for (property in optionsCustom) {
    optionsDefault[property] = optionsCustom[property];
  }

  if (optionsCustom['elCountry']) {
    // 拼字錯誤修正
    optionsDefault['elCounty'] = optionsCustom['elCountry'];
  }

  if (optionsCustom['selectedCountry']) {
    // 拼字錯誤修正
    optionsDefault['selectedCounty'] = optionsCustom['selectedCountry'];
  }

  if (optionsCustom['countryClassName']) {
    // 拼字錯誤修正
    optionsDefault['countyClassName'] = optionsCustom['countryClassName'];
  }

  if (optionsCustom['countryFiledName']) {
    // 拼字錯誤修正
    optionsDefault['countyFiledName'] = optionsCustom['countryFiledName'];
  }

  return optionsDefault;
}

// --------------------
// Module import
// --------------------

// module.exports = TwCitySelector; /* use browserify to build */


// --------------------
// Constructor
// --------------------
function TwCitySelector$1() {

	this.elRoleName = 'tw-city-selector';

	// Setting options
	var optionsDefault = {
		el: null,
		elCounty: null,
		elDistrict: null,
		elZipcode: null,
		selectedCounty: null, // 預設選擇的縣市名稱
		selectedDistrict: null, // 預設選擇的區域名稱
		only: null, // {array} 限制顯示哪些縣市 (下個版本棄用)
		onlyCity: null, // {array} 限制顯示哪些縣市
		showZipcode: false, // {boolean} 是否顯示郵遞區號欄位
		bootstrapStyle: false,
		countyClassName: 'county',
		countyFiledName: 'county',
		districtClassName: 'district',
		districtFieldName: 'district',
		zipcodeClassName: 'zipcode',
		zipcodeFieldName: 'zipcode'
	};

	var optionsCustom = arguments[0];
	var optionsRequired = arguments.length ? ['el'] : null; // 設置必要參數，若無帶入任何參數則設不設置
	this.options = handleOptions(optionsCustom, optionsRequired, optionsDefault);

	// Setup
	elSetup.call(this);

	// return this;
}

// --------------------
// Public Methods
// --------------------
// TwCitySelector.prototype.init = function() {
// 	return init.call(this);
// };

TwCitySelector$1.prototype.reset = function () {
	return resetSelectors.call(this);
};

// --------------------
// Private Methods
// --------------------
function elSetup() {
	// 有指定 element 的初始化
	if (this.options.el) {
		this.el = getElement(this.options.el);
		this.elCounty = getElement(this.options.elCounty, this.el);
		this.elDistrict = getElement(this.options.elDistrict, this.el);
		this.elZipcode = getElement(this.options.elZipcode, this.el);

		return init.call(this);
	}

	// 無指定 element 的初始化，使用 role-attribute element 作為預設 elements
	var els = document.querySelectorAll('[role=' + this.elRoleName + ']');
	Array.prototype.forEach.call(els, function (el) {
		var self = JSON.parse(JSON.stringify(this)); // clone object，因 object 為參考

		// 重置設定
		self.el = el;
		self.elCounty = null;
		self.elDistrict = null;
		self.elZipcode = null;

		// 限制顯示哪些縣市 (下個版本棄用)
		self.options.only = el.getAttribute('data-only') ? el.getAttribute('data-only').replace(/\s/g, '').split(',') // 去除空白字元，轉陣列
		: null;

		// 限制顯示哪些縣市
		self.options.onlyCity = el.getAttribute('data-only-city') ? el.getAttribute('data-only-city').replace(/\s/g, '').split(',') // 去除空白字元，轉陣列
		: null;

		// 預設選擇的縣市
		self.options.selectedCounty = el.getAttribute('data-selected-county') || el.getAttribute('data-selected-country'); // 拼字錯誤

		// 預設選擇的區域
		self.options.selectedDistrict = el.getAttribute('data-selected-district');

		// 是否使用 bootstrap 樣式
		self.options.bootstrapStyle = el.getAttribute('data-bootstrap-style') != null;

		// 是否顯示郵遞區號
		self.options.showZipcode = el.getAttribute('data-show-zipcode') != null;

		return init.call(self);
	}, this);

	return els;
}

function init() {
	setElements.call(this);

	// 監聽選單動作
	listenCountyChanged.call(this);
	listenDistrictChanged.call(this);

	// 設定預設選定的縣市
	setSelectedItem.call(this);

	// bootstrap 樣式套入
	if (this.options.bootstrapStyle) {
		setBootstrapStyle.call(this);
	}

	return this;
}

function getElement(el, parent) {
	if (!el) return null;
	if (parent) return parent.querySelector(el);
	return document.querySelector(el);
}

function setElements() {
	var fragment = document.createDocumentFragment();

	// 縣市選單
	if (!this.elCounty) {
		var county = document.createElement('select');
		this.elCounty = county;
		fragment.appendChild(county);
	}

	// 縣市選單屬性
	this.elCounty.innerHTML = getCountyOptions.call(this);
	this.elCounty.setAttribute('class', this.options.countyClassName);
	this.elCounty.name = this.options.countyFiledName;

	// 區域選單
	if (!this.elDistrict) {
		var district = document.createElement('select');
		this.elDistrict = district;
		fragment.appendChild(district);
	}

	// 區域選單屬性
	this.elDistrict.innerHTML = getDistrictOptions();
	this.elDistrict.setAttribute('class', this.options.districtClassName);
	this.elDistrict.name = this.options.districtFieldName;

	// 郵遞區號
	if (!this.elZipcode) {
		var zipcode = document.createElement('input');
		this.elZipcode = zipcode;
		fragment.appendChild(zipcode);

		// 郵遞區號屬性設定
		this.elZipcode.style.display = this.options.showZipcode || 'none';
		this.elZipcode.style.width = '6em';
		this.elZipcode.readOnly = true;
		this.elZipcode.type = 'text';
		this.elZipcode.placeholder = '郵遞區號';
		this.elZipcode.name = this.options.zipcodeFieldName;
		this.elZipcode.setAttribute('class', this.options.zipcodeClassName);
		this.elZipcode.autocomplete = 'off';
	}

	// element 片段塞入 el
	this.el.appendChild(fragment);
}

function getCountyOptions() {
	var elOptions = '<option value="">請選擇縣市</option>';
	var onlyCity = this.options.only || this.options.onlyCity; // this.options.only 下個版本棄用

	for (var i = 0, j = data$1.counties.length; i < j; i++) {
		// 若有設定限制顯示的縣市，且該項目不在自訂縣市中
		if (onlyCity && Array.isArray(onlyCity) && onlyCity.indexOf(data$1.counties[i]) === -1) {
			continue;
		}

		// format: <option value="臺北市" data-index="0">臺北市</option>
		elOptions += '<option value="' + data$1.counties[i] + '" data-index="' + i + '">' + data$1.counties[i] + '</option>';
	}

	return elOptions;
}

function getDistrictOptions(index) {
	if (!index) {
		return '<option value="" selected>請選擇區域</option>';
	}

	var elOptions = '<option value="" selected>請選擇區域</option>';

	for (var i = 0, j = data$1.districts[index][0].length - 1; i <= j; i++) {
		// format: <option value="中正區" data-zipcode="100">中正區</option>
		elOptions += '<option value="' + data$1.districts[index][0][i] + '"\n                            data-zipcode="' + data$1.districts[index][1][i] + '">\n\t\t                ' + data$1.districts[index][0][i] + '\n\t\t            </option>';
	}

	return elOptions;
}

function listenCountyChanged() {
	var handler = function () {
		var index = this.elCounty.querySelector('option:checked').dataset.index;
		this.elDistrict.innerHTML = getDistrictOptions(index);
		this.elZipcode.value = '';
	}.bind(this);

	this.elCounty.addEventListener('change', handler);
}

function listenDistrictChanged() {
	var handler = function () {
		var zipcode = this.elDistrict.querySelector('option:checked').dataset.zipcode || '';
		this.elZipcode.value = zipcode;
	}.bind(this);

	this.elDistrict.addEventListener('change', handler);
}

function setSelectedItem() {
	if (this.options.selectedCounty) {
		var event = document.createEvent('Event');
		event.initEvent('change', true, true);

		this.elCounty.value = this.options.selectedCounty;
		this.elCounty.dispatchEvent(event);
	}

	if (this.options.selectedDistrict) {
		this.elDistrict.value = this.options.selectedDistrict;
		this.elDistrict.dispatchEvent(event);
	}
}

function resetSelectors() {
	this.elCounty.selectedIndex = 0;
	this.elDistrict.innerHTML = getDistrictOptions();
	this.elZipcode.value = '';

	return this;
}

function setBootstrapStyle() {
	var fieldClassName = 'form-control';
	var wrapperClassName = 'form-group';
	var fragment = document.createDocumentFragment();

	this.elCounty.setAttribute('class', fieldClassName);
	this.elDistrict.setAttribute('class', fieldClassName);
	this.elZipcode.setAttribute('class', fieldClassName);

	var wrapper = document.createElement('div');
	wrapper.setAttribute('class', wrapperClassName);

	var elCounty = wrapper.cloneNode();
	elCounty.appendChild(this.elCounty);
	fragment.appendChild(elCounty);

	var elDistrict = wrapper.cloneNode();
	elDistrict.appendChild(this.elDistrict);
	fragment.appendChild(elDistrict);

	var elZipcode = wrapper.cloneNode();
	elZipcode.appendChild(this.elZipcode);
	fragment.appendChild(elZipcode);

	this.el.appendChild(fragment);
}

return TwCitySelector$1;

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjpudWxsLCJzb3VyY2VzIjpbIi9Vc2Vycy9ldGhhbmNmY2hlbi9naXRodWIvdHctY2l0eS1zZWxlY3Rvci9zcmMvZGF0YS5qcyIsIi9Vc2Vycy9ldGhhbmNmY2hlbi9naXRodWIvdHctY2l0eS1zZWxlY3Rvci9zcmMvaGFuZGxlLW9wdGlvbnMuanMiLCIvVXNlcnMvZXRoYW5jZmNoZW4vZ2l0aHViL3R3LWNpdHktc2VsZWN0b3Ivc3JjL3R3LWNpdHktc2VsZWN0b3IuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZGF0YTtcblxudmFyIGRhdGEgPSB7XG4gICAgLy8g57ij5biCXG4gICAgY291bnRyaWVzOiBbXG4gICAgICAgICflj7DljJfluIInLCAn5Z+66ZqG5biCJywgJ+aWsOWMl+W4gicsICflrpzomK3nuKMnLCAn5qGD5ZyS5biCJywgJ+aWsOerueW4gicsICfmlrDnq7nnuKMnLCAn6IuX5qCX57ijJyxcbiAgICAgICAgJ+WPsOS4reW4gicsICflvbDljJbnuKMnLCAn5Y2X5oqV57ijJywgJ+WYiee+qeW4gicsICflmInnvqnnuKMnLCAn6Zuy5p6X57ijJywgJ+WPsOWNl+W4gicsICfpq5jpm4TluIInLFxuICAgICAgICAn5r6O5rmW57ijJywgJ+mHkemWgOe4oycsICflsY/mnbHnuKMnLCAn5Y+w5p2x57ijJywgJ+iKseiTrue4oycsICfpgKPmsZ/nuKMnXG4gICAgXSxcblxuICAgIC8vIOWNgOWfn1xuICAgIGRpc3RyaWN0czogW1xuICAgICAgICAvLyDlj7DljJfluIJcbiAgICAgICAgW1xuICAgICAgICAgICAgWyfkuK3mraPljYAnLCAn5aSn5ZCM5Y2AJywgJ+S4reWxseWNgCcsICfmnb7lsbHljYAnLCAn5aSn5a6J5Y2AJywgJ+iQrOiPr+WNgCcsICfkv6HnvqnljYAnLFxuICAgICAgICAgICAgJ+Wjq+ael+WNgCcsICfljJfmipXljYAnLCAn5YWn5rmW5Y2AJywgJ+WNl+a4r+WNgCcsICfmloflsbHljYAnXSxcblxuICAgICAgICAgICAgWycxMDAnLCAnMTAzJywgJzEwNCcsICcxMDUnLCAnMTA2JywgJzEwOCcsICcxMTAnLCAnMTExJywgJzExMicsICcxMTQnLCAnMTE1JywgJzExNiddXG4gICAgICAgIF0sXG4gICAgICAgIC8vIOWfuumahuW4glxuICAgICAgICBbXG4gICAgICAgICAgICBbJ+S7geaEm+WNgCcsICfkv6HnvqnljYAnLCAn5Lit5q2j5Y2AJywgJ+S4reWxseWNgCcsICflronmqILljYAnLCAn5pqW5pqW5Y2AJywgJ+S4g+WgteWNgCddLFxuXG4gICAgICAgICAgICBbJzIwMCcsICcyMDEnLCAnMjAyJywgJzIwMycsICcyMDQnLCAnMjA1JywgJzIwNiddXG4gICAgICAgIF0sXG4gICAgICAgIC8vIOaWsOWMl+W4glxuICAgICAgICBbXG4gICAgICAgICAgICBbJ+iQrOmHjOWNgCcsICfph5HlsbHljYAnLCAn5p2/5qmL5Y2AJywgJ+axkOatouWNgCcsICfmt7HlnZHljYAnLCAn55+z56KH5Y2AJywgJ+eRnuiKs+WNgCcsICflubPmuqrljYAnLFxuICAgICAgICAgICAgJ+mbmea6quWNgCcsICfosqLlr67ljYAnLCAn5paw5bqX5Y2AJywgJ+Wdquael+WNgCcsICfng4/kvobljYAnLCAn5rC45ZKM5Y2AJywgJ+S4reWSjOWNgCcsICflnJ/ln47ljYAnLFxuICAgICAgICAgICAgJ+S4ieWzveWNgCcsICfmqLnmnpfljYAnLCAn6bav5q2M5Y2AJywgJ+S4iemHjeWNgCcsICfmlrDojorljYAnLCAn5rOw5bGx5Y2AJywgJ+ael+WPo+WNgCcsICfomIbmtLLljYAnLFxuICAgICAgICAgICAgJ+S6lOiCoeWNgCcsICflhavph4zljYAnLCAn5reh5rC05Y2AJywgJ+S4ieiKneWNgCcsICfnn7PploDljYAnXSxcblxuICAgICAgICAgICAgWycyMDcnLCAnMjA4JywgJzIyMCcsICcyMjEnLCAnMjIyJywgJzIyMycsICcyMjQnLCAnMjI2JywgJzIyNycsICcyMjgnLFxuICAgICAgICAgICAgJzIzMScsICcyMzInLCAnMjMzJywgJzIzNCcsICcyMzUnLCAnMjM2JywgJzIzNycsICcyMzgnLCAnMjM5JywgJzI0MScsXG4gICAgICAgICAgICAnMjQyJywgJzI0MycsICcyNDQnLCAnMjQ3JywgJzI0OCcsICcyNDknLCAnMjUxJywgJzI1MicsICcyNTMnXVxuICAgICAgICBdLFxuICAgICAgICAvLyDlrpzomK3nuKNcbiAgICAgICAgW1xuICAgICAgICAgICAgWyflrpzomK3luIInLCAn6aCt5Z+O6Y6uJywgJ+ekgea6qumEiScsICflo6/lnI3phIknLCAn5ZOh5bGx6YSJJywgJ+e+headsemOricsICfkuInmmJ/phIknLCAn5aSn5ZCM6YSJJyxcbiAgICAgICAgICAgICfkupTntZDphIknLCAn5Yas5bGx6YSJJywgJ+iYh+a+s+mOricsICfljZfmvrPphIknLCAn6Yej6a2a5Y+wJ10sXG5cbiAgICAgICAgICAgIFsnMjYwJywgJzI2MScsICcyNjInLCAnMjYzJywgJzI2NCcsICcyNjUnLCAnMjY2JywgJzI2NycsICcyNjgnLCAnMjY5JyxcbiAgICAgICAgICAgICcyNzAnLCAnMjcyJywgJzI5MCddXG4gICAgICAgIF0sXG4gICAgICAgIC8vIOahg+WckuW4glxuICAgIFx0W1xuICAgIFx0XHRbJ+S4reWjouWNgCcsICflubPpjq7ljYAnLCAn6b6N5r2t5Y2AJywgJ+aliuaiheWNgCcsICfmlrDlsYvljYAnLCAn6KeA6Z+z5Y2AJywgJ+ahg+WckuWNgCcsICfpvpzlsbHljYAnLFxuICAgIFx0XHQn5YWr5b635Y2AJywgJ+Wkp+a6quWNgCcsICflvqnoiIjljYAnLCAn5aSn5ZyS5Y2AJywgJ+iYhuerueWNgCddLFxuXG4gICAgXHRcdFsnMzIwJywgJzMyNCcsICczMjUnLCAnMzI2JywgJzMyNycsICczMjgnLCAnMzMwJywgJzMzMycsICczMzQnLCAnMzM1JyxcbiAgICBcdFx0JzMzNicsICczMzcnLCAnMzM4J11cbiAgICAgICAgXSxcbiAgICAgICAgLy8g5paw56u55biCXG4gICAgICAgIFtcbiAgICAgICAgICAgIFsn5p2x5Y2AJywgJ+WMl+WNgCcsICfpppnlsbHljYAnXSxcblxuICAgICAgICAgICAgWyczMDAnLCAnMzAwJywgJzMwMCddXG4gICAgICAgIF0sXG4gICAgICAgIC8vIOaWsOeruee4o1xuICAgICAgICBbXG4gICAgICAgICAgICBbJ+erueWMl+W4gicsICfmuZblj6PphIknLCAn5paw6LGQ6YSJJywgJ+aWsOWflOmOricsICfpl5zopb/pjq4nLCAn6IqO5p6X6YSJJywgJ+WvtuWxsemEiScsXG4gICAgICAgICAgICAn56u55p2x6Y6uJywgJ+S6lOWzsOmEiScsICfmqavlsbHphIknLCAn5bCW55+z6YSJJywgJ+WMl+WflOmEiScsICfls6jnnInphIknXSxcblxuICAgICAgICAgICAgWyczMDInLCAnMzAzJywgJzMwNCcsICczMDUnLCAnMzA2JywgJzMwNycsICczMDgnLCAnMzEwJywgJzMxMScsXG4gICAgICAgICAgICAnMzEyJywgJzMxMycsICczMTQnLCAnMzE1J11cbiAgICAgICAgXSxcbiAgICAgICAgLy8g6IuX5qCX57ijXG4gICAgICAgIFtcbiAgICAgICAgICAgIFsn56u55Y2X6Y6uJywgJ+mgreS7veW4gicsICfkuInngaPphIknLCAn5Y2X5bqE6YSJJywgJ+eNhea9remEiScsICflvozpvo3pjq4nLCAn6YCa6ZyE6Y6uJywgJ+iLkeijoemOricsXG4gICAgICAgICAgICAn6IuX5qCX5biCJywgJ+mAoOapi+mEiScsICfpoK3lsYvphIknLCAn5YWs6aSo6YSJJywgJ+Wkp+a5lumEiScsICfms7DlronphIknLFxuICAgICAgICAgICAgJ+mKhemRvOmEiScsICfkuInnvqnphIknLCAn6KW/5rmW6YSJJywgJ+WNk+iYremOriddLFxuXG4gICAgICAgICAgICBbJzM1MCcsICczNTEnLCAnMzUyJywgJzM1MycsICczNTQnLCAnMzU2JywgJzM1NycsICczNTgnLCAnMzYwJywgJzM2MScsXG4gICAgICAgICAgICAnMzYyJywgJzM2MycsICczNjQnLCAnMzY1JywgJzM2NicsICczNjcnLCAnMzY4JywgJzM2OSddXG4gICAgICAgIF0sXG4gICAgICAgIC8vIOWPsOS4reW4glxuICAgICAgICBbXG4gICAgICAgICAgICBbJ+S4reWNgCcsICfmnbHljYAnLCAn5Y2X5Y2AJywgJ+ilv+WNgCcsICfljJfljYAnLCAn5YyX5bGv5Y2AJywgJ+ilv+Wxr+WNgCcsICfljZflsa/ljYAnLCAn5aSq5bmz5Y2AJyxcbiAgICAgICAgICAgICflpKfph4zljYAnLCAn6Zyn5bOw5Y2AJywgJ+eDj+aXpeWNgCcsICfosZDljp/ljYAnLCAn5ZCO6YeM5Y2AJywgJ+efs+WyoeWNgCcsICfmnbHli6LljYAnLCAn5ZKM5bmz5Y2AJyxcbiAgICAgICAgICAgICfmlrDnpL7ljYAnLCAn5r2t5a2Q5Y2AJywgJ+Wkp+mbheWNgCcsICfnpZ7lsqHljYAnLCAn5aSn6IKa5Y2AJywgJ+aymem5v+WNgCcsICfpvo3kupXljYAnLCAn5qKn5qOy5Y2AJyxcbiAgICAgICAgICAgICfmuIXmsLTljYAnLCAn5aSn55Sy5Y2AJywgJ+WkluWflOWNgCcsICflpKflronljYAnXSxcblxuICAgICAgICAgICAgWyc0MDAnLCAnNDAxJywgJzQwMicsICc0MDMnLCAnNDA0JywgJzQwNicsICc0MDcnLCAnNDA4JywgJzQxMScsICc0MTInLFxuICAgICAgICAgICAgJzQxMycsICc0MTQnLCAnNDIwJywgJzQyMScsICc0MjInLCAnNDIzJywgJzQyNCcsICc0MjYnLCAnNDI3JywgJzQyOCcsXG4gICAgICAgICAgICAnNDI5JywgJzQzMicsICc0MzMnLCAnNDM0JywgJzQzNScsICc0MzYnLCAnNDM3JywgJzQzOCcsICc0MzknXVxuICAgICAgICBdLFxuICAgICAgICAvLyDlvbDljJbnuKNcbiAgICAgICAgW1xuICAgICAgICAgICAgWyflvbDljJbluIInLCAn6Iqs5ZyS6YSJJywgJ+iKseWjh+mEiScsICfnp4DmsLTphIknLCAn6bm/5riv6Y6uJywgJ+emj+iIiOmEiScsICfnt5ropb/phIknLCAn5ZKM576O6Y6uJyxcbiAgICAgICAgICAgICfkvLjmuK/phIknLCAn5ZOh5p6X5biCJywgJ+ekvumgremEiScsICfmsLjpnZbphIknLCAn5Z+U5b+D6YSJJywgJ+a6qua5lumOricsICflpKfmnZHphIknLCAn5Z+U6bm96YSJJyxcbiAgICAgICAgICAgICfnlLDkuK3pjq4nLCAn5YyX5paX6Y6uJywgJ+eUsOWwvumEiScsICfln6TpoK3phIknLCAn5rqq5bee6YSJJywgJ+erueWhmOmEiScsICfkuozmnpfpjq4nLCAn5aSn5Z+O6YSJJyxcbiAgICAgICAgICAgICfoirPoi5HphIknLCAn5LqM5rC06YSJJ10sXG5cbiAgICAgICAgICAgIFsnNTAwJywgJzUwMicsICc1MDMnLCAnNTA0JywgJzUwNScsICc1MDYnLCAnNTA3JywgJzUwOCcsICc1MDknLCAnNTEwJyxcbiAgICAgICAgICAgICc1MTEnLCAnNTEyJywgJzUxMycsICc1MTQnLCAnNTE1JywgJzUxNicsICc1MjAnLCAnNTIxJywgJzUyMicsICc1MjMnLFxuICAgICAgICAgICAgJzUyNCcsICc1MjUnLCAnNTI2JywgJzUyNycsICc1MjgnLCAnNTMwJ11cbiAgICAgICAgXSxcbiAgICAgICAgLy8g5Y2X5oqV57ijXG4gICAgICAgIFtcbiAgICAgICAgICAgIFsn5Y2X5oqV5biCJywgJ+S4reWvrumEiScsICfojYnlsa/pjq4nLCAn5ZyL5aeT6YSJJywgJ+WflOmHjOmOricsICfku4HmhJvphIknLCAn5ZCN6ZaT6YSJJywgJ+mbhumbhumOricsXG4gICAgICAgICAgICAn5rC06YeM6YSJJywgJ+mtmuaxoOmEiScsICfkv6HnvqnphIknLCAn56u55bGx6Y6uJywgJ+m5v+iwt+mEiSddLFxuXG4gICAgICAgICAgICBbJzU0MCcsICc1NDEnLCAnNTQyJywgJzU0NCcsICc1NDUnLCAnNTQ2JywgJzU1MScsICc1NTInLCAnNTUzJywgJzU1NScsXG4gICAgICAgICAgICAnNTU2JywgJzU1NycsICc1NTgnXVxuICAgICAgICBdLFxuICAgICAgICAvLyDlmInnvqnluIJcbiAgICAgICAgW1xuICAgICAgICAgICAgWyfmnbHljYAnLCAn6KW/5Y2AJ10sXG5cbiAgICAgICAgICAgIFsnNjAwJywgJzYwMCddXG4gICAgICAgIF0sXG4gICAgICAgIC8vIOWYiee+qee4o1xuICAgICAgICBbXG4gICAgICAgICAgICBbJ+eVqui3r+mEiScsICfmooXlsbHphIknLCAn56u55bSO6YSJJywgJ+mYv+mHjOWxsScsICfkuK3ln5TphIknLCAn5aSn5Z+U6YSJJywgJ+awtOS4iumEiScsXG4gICAgICAgICAgICAn6bm/6I2J6YSJJywgJ+WkquS/neW4gicsICfmnLTlrZDluIInLCAn5p2x55+z6YSJJywgJ+WFreiFs+mEiScsICfmlrDmuK/phIknLCAn5rCR6ZuE6YSJJywgJ+Wkp+ael+mOricsXG4gICAgICAgICAgICAn5rqq5Y+j6YSJJywgJ+e+qeeruemEiScsICfluIPooovpjq4nXSxcblxuICAgICAgICAgICAgWyc2MDInLCAnNjAzJywgJzYwNCcsICc2MDUnLCAnNjA2JywgJzYwNycsICc2MDgnLCAnNjExJywgJzYxMicsXG4gICAgICAgICAgICAnNjEzJywgJzYxNCcsICc2MTUnLCAnNjE2JywgJzYyMScsICc2MjInLCAnNjIzJywgJzYyNCcsICc2MjUnXVxuICAgICAgICBdLFxuICAgICAgICAvLyDpm7LmnpfnuKNcbiAgICAgICAgW1xuICAgICAgICAgICAgWyfmlpfljZfpjq4nLCAn5aSn5Z+k6YSJJywgJ+iZjuWwvumOricsICflnJ/luqvpjq4nLCAn6KSS5b+g6YSJJywgJ+adseWLoumEiScsICflj7Dopb/phIknLCAn5bSZ6IOM6YSJJyxcbiAgICAgICAgICAgICfpuqXlr67phIknLCAn5paX5YWt5biCJywgJ+ael+WFp+mEiScsICflj6TlnZHphIknLCAn6I6/5qGQ6YSJJywgJ+ilv+ieuumOricsICfkuozltJnphIknLCAn5YyX5riv6Y6uJyxcbiAgICAgICAgICAgICfmsLTmnpfphIknLCAn5Y+j5rmW6YSJJywgJ+Wbm+a5lumEiScsICflhYPplbfphIknXSxcblxuICAgICAgICAgICAgWyc2MzAnLCAnNjMxJywgJzYzMicsICc2MzMnLCAnNjM0JywgJzYzNScsICc2MzYnLCAnNjM3JywgJzYzOCcsICc2NDAnLCAnNjQzJyxcbiAgICAgICAgICAgICc2NDYnLCAnNjQ3JywgJzY0OCcsICc2NDknLCAnNjUxJywgJzY1MicsICc2NTMnLCAnNjU0JywgJzY1NSddXG4gICAgICAgIF0sXG4gICAgICAgIC8vIOWPsOWNl+W4glxuICAgICAgICBbXG4gICAgICAgICAgICBbJ+S4reilv+WNgCcsICfmnbHljYAnLCAn5Y2X5Y2AJywgJ+WMl+WNgCcsICflronlubPljYAnLCAn5a6J5Y2X5Y2AJywgJ+awuOW6t+WNgCcsICfmrbjku4HljYAnLCAn5paw5YyW5Y2AJyxcbiAgICAgICAgICAgICflt6bpjq7ljYAnLCAn546J5LqV5Y2AJywgJ+aloOilv+WNgCcsICfljZfljJbljYAnLCAn5LuB5b635Y2AJywgJ+mXnOW7n+WNgCcsICfpvo3ltI7ljYAnLCAn5a6Y55Sw5Y2AJyxcbiAgICAgICAgICAgICfpurvosYbljYAnLCAn5L2z6YeM5Y2AJywgJ+ilv+a4r+WNgCcsICfkuIPogqHljYAnLCAn5bCH6LuN5Y2AJywgJ+WtuOeUsuWNgCcsICfljJfploDljYAnLCAn5paw54ef5Y2AJyxcbiAgICAgICAgICAgICflvozlo4HljYAnLCAn55m95rKz5Y2AJywgJ+adseWxseWNgCcsICflha3nlLLljYAnLCAn5LiL54ef5Y2AJywgJ+afs+eHn+WNgCcsICfpub3msLTljYAnLCAn5ZaE5YyW5Y2AJyxcbiAgICAgICAgICAgICflpKflhafljYAnLCAn5bGx5LiK5Y2AJywgJ+aWsOW4guWNgCcsICflronlrprljYAnXSxcblxuICAgICAgICAgICAgWyc3MDAnLCAnNzAxJywgJzcwMicsICc3MDQnLCAnNzA4JywgJzcwOScsICc3MTAnLCAnNzExJywgJzcxMicsICc3MTMnLCAnNzE0JyxcbiAgICAgICAgICAgICc3MTUnLCAnNzE2JywgJzcxNycsICc3MTgnLCAnNzE5JywgJzcyMCcsICc3MjEnLCAnNzIyJywgJzcyMycsICc3MjQnLCAnNzI1JyxcbiAgICAgICAgICAgICc3MjYnLCAnNzI3JywgJzczMCcsICc3MzEnLCAnNzMyJywgJzczMycsICc3MzQnLCAnNzM1JywgJzczNicsICc3MzcnLCAnNzQxJyxcbiAgICAgICAgICAgICc3NDInLCAnNzQzJywgJzc0NCcsICc3NDUnXVxuICAgICAgICBdLFxuICAgICAgICAvLyDpq5jpm4TluIJcbiAgICAgICAgW1xuICAgICAgICAgICAgWyfmlrDoiIjljYAnLCAn5YmN6YeR5Y2AJywgJ+iLk+mbheWNgCcsICfpub3ln5XljYAnLCAn6byT5bGx5Y2AJywgJ+aXl+a0peWNgCcsICfliY3pjq7ljYAnLCAn5LiJ5rCR5Y2AJyxcbiAgICAgICAgICAgICfmpaDmopPljYAnLCAn5bCP5riv5Y2AJywgJ+W3pueHn+WNgCcsICfku4HmrabljYAnLCAn5aSn56S+5Y2AJywgJ+adseaymee+pOWzticsICfljZfmspnnvqTls7YnLCAn5bKh5bGx5Y2AJyxcbiAgICAgICAgICAgICfot6/nq7nljYAnLCAn6Zi/6JOu5Y2AJywgJ+eUsOWvruWNgCcsICfnh5Xlt6LljYAnLCAn5qmL6aCt5Y2AJywgJ+aik+WumOWNgCcsICflvYzpmYDljYAnLCAn5rC45a6J5Y2AJyxcbiAgICAgICAgICAgICfmuZblhafljYAnLCAn6bOz5bGx5biCJywgJ+Wkp+WvruWNgCcsICfmnpflnJLljYAnLCAn6bOl5p2+5Y2AJywgJ+Wkp+aoueWNgCcsICfml5flsbHljYAnLCAn576O5r+D5Y2AJyxcbiAgICAgICAgICAgICflha3pvpzljYAnLCAn5YWn6ZaA5Y2AJywgJ+adieael+WNgCcsICfnlLLku5nljYAnLCAn5qGD5rqQ5Y2AJywgJ+mCo+eRquWkj+WNgCcsICfojILmnpfljYAnLCAn6IyE6JCj5Y2AJ10sXG5cbiAgICAgICAgICAgIFsnODAwJywgJzgwMScsICc4MDInLCAnODAzJywgJzgwNCcsICc4MDUnLCAnODA2JywgJzgwNycsICc4MTEnLCAnODEyJywgJzgxMycsXG4gICAgICAgICAgICAnODE0JywgJzgxNScsICc4MTcnLCAnODE5JywgJzgyMCcsICc4MjEnLCAnODIyJywgJzgyMycsICc4MjQnLCAnODI1JywgJzgyNicsICc4MjcnLCAnODI4JyxcbiAgICAgICAgICAgICc4MjknLCAnODMwJywgJzgzMScsICc4MzInLCAnODMzJywgJzg0MCcsICc4NDInLCAnODQzJywgJzg0NCcsICc4NDUnLCAnODQ2JyxcbiAgICAgICAgICAgICc4NDcnLCAnODQ4JywgJzg0OScsICc4NTEnLCAnODUyJ11cbiAgICAgICAgXSxcbiAgICAgICAgLy8g5r6O5rmW57ijXG4gICAgICAgIFtcbiAgICAgICAgICAgIFsn6aas5YWs5biCJywgJ+ilv+W2vOmEiScsICfmnJvlronphIknLCAn5LiD576O6YSJJywgJ+eZveaymemEiScsICfmuZbopb/phIknXSxcblxuICAgICAgICAgICAgWyc4ODAnLCAnODgxJywgJzg4MicsICc4ODMnLCAnODg0JywgJzg4NSddXG4gICAgICAgIF0sXG4gICAgICAgIC8vIOmHkemWgOe4o1xuICAgICAgICBbXG4gICAgICAgICAgICBbJ+mHkeaymemOricsICfph5HmuZbpjq4nLCAn6YeR5a+n6YSJJywgJ+mHkeWfjumOricsICfng4jltrzphIknLCAn54OP5Z216YSJJ10sXG5cbiAgICAgICAgICAgIFsnODkwJywgJzg5MScsICc4OTInLCAnODkzJywgJzg5NCcsICc4OTYnXVxuICAgICAgICBdLFxuICAgICAgICAvLyDlsY/mnbHnuKNcbiAgICAgICAgW1xuICAgICAgICAgICAgWyflsY/mnbHluIInLCAn5LiJ5Zyw6ZaA6YSJJywgJ+mcp+WPsOmEiScsICfnkarlrrbphIknLCAn5Lmd5aaC6YSJJywgJ+mHjOa4r+mEiScsICfpq5jmqLnphIknLCAn6bm95Z+U6YSJJyxcbiAgICAgICAgICAgICfplbfmsrvphIknLCAn6bqf5rSb6YSJJywgJ+erueeUsOmEiScsICflhafln5TphIknLCAn6JCs5Li56YSJJywgJ+a9ruW3numOricsICfms7DmrabphIknLCAn5L6G576p6YSJJyxcbiAgICAgICAgICAgICfokKzlt5LphIknLCAn5bSB6aCC6YSJJywgJ+aWsOWfpOmEiScsICfljZflt57phIknLCAn5p6X6YKK6YSJJywgJ+adsea4r+mOricsICfnkInnkIPphIknLCAn5L2z5Yas6YSJJyxcbiAgICAgICAgICAgICfmlrDlnJLphIknLCAn5p6L5a+u6YSJJywgJ+aei+WxsemEiScsICfmmKXml6XphIknLCAn542F5a2Q6YSJJywgJ+i7iuWfjumEiScsICfniaHkuLnphIknLCAn5oGG5pil6Y6uJyxcbiAgICAgICAgICAgICfmu7/lt57phIknXSxcblxuICAgICAgICAgICAgWyc5MDAnLCAnOTAxJywgJzkwMicsICc5MDMnLCAnOTA0JywgJzkwNScsICc5MDYnLCAnOTA3JywgJzkwOCcsICc5MDknLCAnOTExJyxcbiAgICAgICAgICAgICc5MTInLCAnOTEzJywgJzkyMCcsICc5MjEnLCAnOTIyJywgJzkyMycsICc5MjQnLCAnOTI1JywgJzkyNicsICc5MjcnLCAnOTI4JyxcbiAgICAgICAgICAgICc5MjknLCAnOTMxJywgJzkzMicsICc5NDAnLCAnOTQxJywgJzk0MicsICc5NDMnLCAnOTQ0JywgJzk0NScsICc5NDYnLCAnOTQ3J11cbiAgICAgICAgXSxcbiAgICAgICAgLy8g5Y+w5p2x57ijXG4gICAgICAgIFtcbiAgICAgICAgICAgIFsn5Y+w5p2x5biCJywgJ+e2oOWztumEiScsICfomK3ltrzphIknLCAn5bu25bmz6YSJJywgJ+WNkeWNl+mEiScsICfpub/ph47phIknLCAn6Zec5bGx6Y6uJywgJ+a1t+err+mEiScsXG4gICAgICAgICAgICAn5rGg5LiK6YSJJywgJ+adseays+mEiScsICfmiJDlip/pjq4nLCAn6ZW35r+x6YSJJywgJ+Wkqum6u+mHjCcsICfph5Hls7DphIknLCAn5aSn5q2m6YSJJywgJ+mBlOS7gemEiSddLFxuXG4gICAgICAgICAgICBbJzk1MCcsICc5NTEnLCAnOTUyJywgJzk1MycsICc5NTQnLCAnOTU1JywgJzk1NicsICc5NTcnLCAnOTU4JywgJzk1OScsICc5NjEnLFxuICAgICAgICAgICAgJzk2MicsICc5NjMnLCAnOTY0JywgJzk2NScsICc5NjYnXVxuICAgICAgICBdLFxuICAgICAgICAvLyDoirHok67nuKNcbiAgICAgICAgW1xuICAgICAgICAgICAgWyfoirHok67luIInLCAn5paw5Z+O6YSJJywgJ+engOael+mEiScsICflkInlronphIknLCAn5aO96LGQ6YSJJywgJ+mzs+ael+mOricsICflhYnlvqnphIknLCAn6LGQ5r+x6YSJJyxcbiAgICAgICAgICAgICfnkZ7nqZfphIknLCAn6JCs5qau6YSJJywgJ+eOiemHjOmOricsICfljZPmuqrphIknLCAn5a+M6YeM6YSJJ10sXG5cbiAgICAgICAgICAgIFsnOTcwJywgJzk3MScsICc5NzInLCAnOTczJywgJzk3NCcsICc5NzUnLCAnOTc2JywgJzk3NycsICc5NzgnLCAnOTc5JywgJzk4MScsXG4gICAgICAgICAgICAnOTgyJywgJzk4MyddXG4gICAgICAgIF0sXG4gICAgICAgIC8vIOmAo+axn+e4o1xuICAgICAgICBbXG4gICAgICAgICAgICBbJ+WNl+erv+mEiScsICfljJfnq7/phIknLCAn6I6S5YWJ6YSJJywgJ+adseW8lemEiSddLFxuXG4gICAgICAgICAgICBbJzIwOScsICcyMTAnLCAnMjExJywgJzIxMiddXG4gICAgICAgIF1cbiAgICBdXG59O1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlT3B0aW9ucygpIHtcbiAgLy8gQ2hlY2sgb3B0aW9ucyByZXF1aXJlZFxuICBpZiAoYXJndW1lbnRzWzFdKSB7XG4gICAgZ2V0T3B0aW9uc1JlcXVpcmVkKGFyZ3VtZW50c1swXSwgYXJndW1lbnRzWzFdKTtcbiAgfVxuXG4gIC8vIEV4dGVuZCBvcHRpb25zXG4gIHJldHVybiBnZXRPcHRpb25zRXh0ZW5kKGFyZ3VtZW50c1swXSwgYXJndW1lbnRzWzJdKTtcbn1cblxuZnVuY3Rpb24gZ2V0T3B0aW9uc1JlcXVpcmVkKG9wdGlvbnNDdXN0b20sIG9wdGlvbnNSZXF1aXJlZCkge1xuICB2YXIgZXJyb3IgPSAnJztcbiAgdmFyIGxlbmd0aCA9IG9wdGlvbnNSZXF1aXJlZC5sZW5ndGg7XG4gIG9wdGlvbnNDdXN0b20gPSBvcHRpb25zQ3VzdG9tIHx8IHt9O1xuXG4gIHdoaWxlIChsZW5ndGgtLSkge1xuICAgIGlmICggISBvcHRpb25zQ3VzdG9tLmhhc093blByb3BlcnR5KG9wdGlvbnNSZXF1aXJlZFtsZW5ndGhdKSlcbiAgICAgIGVycm9yICs9IG9wdGlvbnNSZXF1aXJlZFtsZW5ndGhdICsgJywnO1xuICB9XG5cbiAgaWYgKGVycm9yKSB0aHJvdyAn57y65bCR5Y+D5pW4OiAnICsgZXJyb3I7XG59XG5cbmZ1bmN0aW9uIGdldE9wdGlvbnNFeHRlbmQob3B0aW9uc0N1c3RvbSwgb3B0aW9uc0RlZmF1bHQpIHtcbiAgaWYgKCAhIG9wdGlvbnNDdXN0b20pIHtcbiAgICByZXR1cm4gb3B0aW9uc0RlZmF1bHQ7XG4gIH1cblxuICB2YXIgcHJvcGVydHk7XG4gIGZvciAocHJvcGVydHkgaW4gb3B0aW9uc0N1c3RvbSkge1xuICAgIG9wdGlvbnNEZWZhdWx0W3Byb3BlcnR5XSA9IG9wdGlvbnNDdXN0b21bcHJvcGVydHldO1xuICB9XG5cbiAgaWYgKG9wdGlvbnNDdXN0b21bJ2VsQ291bnRyeSddKSB7IC8vIOaLvOWtl+mMr+iqpOS/ruato1xuICAgICAgb3B0aW9uc0RlZmF1bHRbJ2VsQ291bnR5J10gPSBvcHRpb25zQ3VzdG9tWydlbENvdW50cnknXTtcbiAgfVxuXG4gIGlmIChvcHRpb25zQ3VzdG9tWydzZWxlY3RlZENvdW50cnknXSkgeyAvLyDmi7zlrZfpjK/oqqTkv67mraNcbiAgICAgIG9wdGlvbnNEZWZhdWx0WydzZWxlY3RlZENvdW50eSddID0gb3B0aW9uc0N1c3RvbVsnc2VsZWN0ZWRDb3VudHJ5J107XG4gIH1cblxuICBpZiAob3B0aW9uc0N1c3RvbVsnY291bnRyeUNsYXNzTmFtZSddKSB7IC8vIOaLvOWtl+mMr+iqpOS/ruato1xuICAgICAgb3B0aW9uc0RlZmF1bHRbJ2NvdW50eUNsYXNzTmFtZSddID0gb3B0aW9uc0N1c3RvbVsnY291bnRyeUNsYXNzTmFtZSddO1xuICB9XG5cbiAgaWYgKG9wdGlvbnNDdXN0b21bJ2NvdW50cnlGaWxlZE5hbWUnXSkgeyAvLyDmi7zlrZfpjK/oqqTkv67mraNcbiAgICAgIG9wdGlvbnNEZWZhdWx0Wydjb3VudHlGaWxlZE5hbWUnXSA9IG9wdGlvbnNDdXN0b21bJ2NvdW50cnlGaWxlZE5hbWUnXTtcbiAgfVxuXG4gIHJldHVybiBvcHRpb25zRGVmYXVsdDtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIE1vZHVsZSBpbXBvcnRcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tXG5pbXBvcnQgZGF0YSBmcm9tICcuL2RhdGEnO1xuaW1wb3J0IGhhbmRsZU9wdGlvbnMgZnJvbSAnLi9oYW5kbGUtb3B0aW9ucyc7XG5cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIE1vZHVsZSBleHBvcnRcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tXG5leHBvcnQgZGVmYXVsdCBUd0NpdHlTZWxlY3RvcjsgLyogdXNlIHJvbGx1cCB0byBidWlsZCAqL1xuLy8gbW9kdWxlLmV4cG9ydHMgPSBUd0NpdHlTZWxlY3RvcjsgLyogdXNlIGJyb3dzZXJpZnkgdG8gYnVpbGQgKi9cblxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gQ29uc3RydWN0b3Jcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tXG5mdW5jdGlvbiBUd0NpdHlTZWxlY3RvcigpIHtcblxuXHR0aGlzLmVsUm9sZU5hbWUgPSAndHctY2l0eS1zZWxlY3Rvcic7XG5cblx0Ly8gU2V0dGluZyBvcHRpb25zXG5cdHZhciBvcHRpb25zRGVmYXVsdCA9IHtcblx0XHRlbDogbnVsbCxcblx0XHRlbENvdW50eTogbnVsbCxcblx0XHRlbERpc3RyaWN0OiBudWxsLFxuXHRcdGVsWmlwY29kZTogbnVsbCxcblx0XHRzZWxlY3RlZENvdW50eTogbnVsbCwgLy8g6aCQ6Kit6YG45pOH55qE57ij5biC5ZCN56ixXG5cdFx0c2VsZWN0ZWREaXN0cmljdDogbnVsbCwgLy8g6aCQ6Kit6YG45pOH55qE5Y2A5Z+f5ZCN56ixXG5cdFx0b25seTogbnVsbCwgLy8ge2FycmF5fSDpmZDliLbpoa/npLrlk6rkupvnuKPluIIgKOS4i+WAi+eJiOacrOajhOeUqClcbiAgICAgICAgb25seUNpdHk6IG51bGwsIC8vIHthcnJheX0g6ZmQ5Yi26aGv56S65ZOq5Lqb57ij5biCXG5cdFx0c2hvd1ppcGNvZGU6IGZhbHNlLCAvLyB7Ym9vbGVhbn0g5piv5ZCm6aGv56S66YO16YGe5Y2A6Jmf5qyE5L2NXG5cdFx0Ym9vdHN0cmFwU3R5bGU6IGZhbHNlLFxuXHRcdGNvdW50eUNsYXNzTmFtZTogJ2NvdW50eScsXG5cdFx0Y291bnR5RmlsZWROYW1lOiAnY291bnR5Jyxcblx0XHRkaXN0cmljdENsYXNzTmFtZTogJ2Rpc3RyaWN0Jyxcblx0XHRkaXN0cmljdEZpZWxkTmFtZTogJ2Rpc3RyaWN0Jyxcblx0XHR6aXBjb2RlQ2xhc3NOYW1lOiAnemlwY29kZScsXG5cdFx0emlwY29kZUZpZWxkTmFtZTogJ3ppcGNvZGUnXG5cdH07XG5cbiAgICB2YXIgb3B0aW9uc0N1c3RvbSA9IGFyZ3VtZW50c1swXTtcblx0dmFyIG9wdGlvbnNSZXF1aXJlZCA9IGFyZ3VtZW50cy5sZW5ndGggPyBbJ2VsJ10gOiBudWxsOyAvLyDoqK3nva7lv4XopoHlj4PmlbjvvIzoi6XnhKHluLblhaXku7vkvZXlj4PmlbjliYfoqK3kuI3oqK3nva5cblx0dGhpcy5vcHRpb25zID0gaGFuZGxlT3B0aW9ucyhvcHRpb25zQ3VzdG9tLCBvcHRpb25zUmVxdWlyZWQsIG9wdGlvbnNEZWZhdWx0KTtcblxuICAgIC8vIFNldHVwXG5cdGVsU2V0dXAuY2FsbCh0aGlzKTtcblxuXHQvLyByZXR1cm4gdGhpcztcbn07XG5cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIFB1YmxpYyBNZXRob2RzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gVHdDaXR5U2VsZWN0b3IucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbigpIHtcbi8vIFx0cmV0dXJuIGluaXQuY2FsbCh0aGlzKTtcbi8vIH07XG5cblR3Q2l0eVNlbGVjdG9yLnByb3RvdHlwZS5yZXNldCA9IGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gcmVzZXRTZWxlY3RvcnMuY2FsbCh0aGlzKTtcbn07XG5cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIFByaXZhdGUgTWV0aG9kc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS1cbmZ1bmN0aW9uIGVsU2V0dXAoKSB7XG4gICAgLy8g5pyJ5oyH5a6aIGVsZW1lbnQg55qE5Yid5aeL5YyWXG5cdGlmICh0aGlzLm9wdGlvbnMuZWwpIHtcblx0XHR0aGlzLmVsID0gZ2V0RWxlbWVudCh0aGlzLm9wdGlvbnMuZWwpO1xuXHRcdHRoaXMuZWxDb3VudHkgPSBnZXRFbGVtZW50KHRoaXMub3B0aW9ucy5lbENvdW50eSwgdGhpcy5lbCk7XG5cdFx0dGhpcy5lbERpc3RyaWN0ID0gZ2V0RWxlbWVudCh0aGlzLm9wdGlvbnMuZWxEaXN0cmljdCwgdGhpcy5lbCk7XG5cdFx0dGhpcy5lbFppcGNvZGUgPSBnZXRFbGVtZW50KHRoaXMub3B0aW9ucy5lbFppcGNvZGUsIHRoaXMuZWwpO1xuXG5cdFx0cmV0dXJuIGluaXQuY2FsbCh0aGlzKTtcblx0fVxuXG5cdC8vIOeEoeaMh+WumiBlbGVtZW50IOeahOWIneWni+WMlu+8jOS9v+eUqCByb2xlLWF0dHJpYnV0ZSBlbGVtZW50IOS9nOeCuumgkOiorSBlbGVtZW50c1xuXHR2YXIgZWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW3JvbGU9JysgdGhpcy5lbFJvbGVOYW1lICsnXScpO1xuXHRBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKGVscywgZnVuY3Rpb24oZWwpIHtcblx0XHR2YXIgc2VsZiA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpcykpOyAvLyBjbG9uZSBvYmplY3TvvIzlm6Agb2JqZWN0IOeCuuWPg+iAg1xuXG5cdFx0Ly8g6YeN572u6Kit5a6aXG5cdFx0c2VsZi5lbCA9IGVsO1xuXHRcdHNlbGYuZWxDb3VudHkgPSBudWxsO1xuXHRcdHNlbGYuZWxEaXN0cmljdCA9IG51bGw7XG5cdFx0c2VsZi5lbFppcGNvZGUgPSBudWxsO1xuXG5cdFx0Ly8g6ZmQ5Yi26aGv56S65ZOq5Lqb57ij5biCICjkuIvlgIvniYjmnKzmo4TnlKgpXG5cdFx0c2VsZi5vcHRpb25zLm9ubHkgPSBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtb25seScpXG5cdFx0XHQ/IGVsLmdldEF0dHJpYnV0ZSgnZGF0YS1vbmx5JykucmVwbGFjZSgvXFxzL2csICcnKS5zcGxpdCgnLCcpIC8vIOWOu+mZpOepuueZveWtl+WFg++8jOi9iemZo+WIl1xuXHRcdFx0OiBudWxsO1xuXG4gICAgICAgIC8vIOmZkOWItumhr+ekuuWTquS6m+e4o+W4glxuICAgIFx0c2VsZi5vcHRpb25zLm9ubHlDaXR5ID0gZWwuZ2V0QXR0cmlidXRlKCdkYXRhLW9ubHktY2l0eScpXG5cdFx0XHQ/IGVsLmdldEF0dHJpYnV0ZSgnZGF0YS1vbmx5LWNpdHknKS5yZXBsYWNlKC9cXHMvZywgJycpLnNwbGl0KCcsJykgLy8g5Y676Zmk56m655m95a2X5YWD77yM6L2J6Zmj5YiXXG5cdFx0XHQ6IG51bGw7XG5cblx0XHQvLyDpoJDoqK3pgbjmk4fnmoTnuKPluIJcblx0XHRzZWxmLm9wdGlvbnMuc2VsZWN0ZWRDb3VudHkgPSBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtc2VsZWN0ZWQtY291bnR5JykgfHwgZWwuZ2V0QXR0cmlidXRlKCdkYXRhLXNlbGVjdGVkLWNvdW50cnknKTsgLy8g5ou85a2X6Yyv6KqkXG5cblx0XHQvLyDpoJDoqK3pgbjmk4fnmoTljYDln59cblx0XHRzZWxmLm9wdGlvbnMuc2VsZWN0ZWREaXN0cmljdCA9IGVsLmdldEF0dHJpYnV0ZSgnZGF0YS1zZWxlY3RlZC1kaXN0cmljdCcpO1xuXG4gICAgICAgIC8vIOaYr+WQpuS9v+eUqCBib290c3RyYXAg5qij5byPXG5cdFx0c2VsZi5vcHRpb25zLmJvb3RzdHJhcFN0eWxlID0gKGVsLmdldEF0dHJpYnV0ZSgnZGF0YS1ib290c3RyYXAtc3R5bGUnKSAhPSBudWxsKTtcblxuICAgICAgICAvLyDmmK/lkKbpoa/npLrpg7XpgZ7ljYDomZ9cblx0XHRzZWxmLm9wdGlvbnMuc2hvd1ppcGNvZGUgPSAoZWwuZ2V0QXR0cmlidXRlKCdkYXRhLXNob3ctemlwY29kZScpICE9IG51bGwpO1xuXG5cdFx0cmV0dXJuIGluaXQuY2FsbChzZWxmKTtcblx0fSwgdGhpcyk7XG5cbiAgICByZXR1cm4gZWxzO1xufVxuXG5mdW5jdGlvbiBpbml0KCkge1xuXHRzZXRFbGVtZW50cy5jYWxsKHRoaXMpO1xuXG4gICAgLy8g55uj6IG96YG45Zau5YuV5L2cXG5cdGxpc3RlbkNvdW50eUNoYW5nZWQuY2FsbCh0aGlzKTtcblx0bGlzdGVuRGlzdHJpY3RDaGFuZ2VkLmNhbGwodGhpcyk7XG5cblx0Ly8g6Kit5a6a6aCQ6Kit6YG45a6a55qE57ij5biCXG5cdHNldFNlbGVjdGVkSXRlbS5jYWxsKHRoaXMpO1xuXG5cdC8vIGJvb3RzdHJhcCDmqKPlvI/lpZflhaVcblx0aWYgKHRoaXMub3B0aW9ucy5ib290c3RyYXBTdHlsZSkge1xuXHRcdHNldEJvb3RzdHJhcFN0eWxlLmNhbGwodGhpcyk7XG5cdH1cblxuXHRyZXR1cm4gdGhpcztcbn1cblxuZnVuY3Rpb24gZ2V0RWxlbWVudChlbCwgcGFyZW50KSB7XG4gICAgaWYgKCAhIGVsKVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICBpZiAocGFyZW50KVxuICAgICAgICByZXR1cm4gcGFyZW50LnF1ZXJ5U2VsZWN0b3IoZWwpO1xuXHRyZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbCk7XG59XG5cbmZ1bmN0aW9uIHNldEVsZW1lbnRzKCkge1xuXHR2YXIgZnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG5cblx0Ly8g57ij5biC6YG45ZauXG5cdGlmICggISB0aGlzLmVsQ291bnR5KSB7XG5cdFx0dmFyIGNvdW50eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuXHRcdHRoaXMuZWxDb3VudHkgPSBjb3VudHk7XG5cdFx0ZnJhZ21lbnQuYXBwZW5kQ2hpbGQoY291bnR5KTtcblx0fVxuXG5cdC8vIOe4o+W4gumBuOWWruWxrOaAp1xuXHR0aGlzLmVsQ291bnR5LmlubmVySFRNTCA9IGdldENvdW50eU9wdGlvbnMuY2FsbCh0aGlzKTtcblx0dGhpcy5lbENvdW50eS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgdGhpcy5vcHRpb25zLmNvdW50eUNsYXNzTmFtZSk7XG5cdHRoaXMuZWxDb3VudHkubmFtZSA9IHRoaXMub3B0aW9ucy5jb3VudHlGaWxlZE5hbWU7XG5cblx0Ly8g5Y2A5Z+f6YG45ZauXG5cdGlmICggISB0aGlzLmVsRGlzdHJpY3QpIHtcblx0XHR2YXIgZGlzdHJpY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcblx0XHR0aGlzLmVsRGlzdHJpY3QgPSBkaXN0cmljdDtcblx0XHRmcmFnbWVudC5hcHBlbmRDaGlsZChkaXN0cmljdCk7XG5cdH1cblxuXHQvLyDljYDln5/pgbjllq7lsazmgKdcblx0dGhpcy5lbERpc3RyaWN0LmlubmVySFRNTCA9IGdldERpc3RyaWN0T3B0aW9ucygpO1xuXHR0aGlzLmVsRGlzdHJpY3Quc2V0QXR0cmlidXRlKCdjbGFzcycsIHRoaXMub3B0aW9ucy5kaXN0cmljdENsYXNzTmFtZSk7XG5cdHRoaXMuZWxEaXN0cmljdC5uYW1lID0gdGhpcy5vcHRpb25zLmRpc3RyaWN0RmllbGROYW1lO1xuXG5cdC8vIOmDtemBnuWNgOiZn1xuXHRpZiAoICEgdGhpcy5lbFppcGNvZGUpIHtcblx0XHR2YXIgemlwY29kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG5cdFx0dGhpcy5lbFppcGNvZGUgPSB6aXBjb2RlO1xuXHRcdGZyYWdtZW50LmFwcGVuZENoaWxkKHppcGNvZGUpO1xuXG4gICAgICAgIC8vIOmDtemBnuWNgOiZn+WxrOaAp+ioreWumlxuICAgICAgICB0aGlzLmVsWmlwY29kZS5zdHlsZS5kaXNwbGF5ID0gdGhpcy5vcHRpb25zLnNob3daaXBjb2RlIHx8ICdub25lJztcbiAgICAgICAgdGhpcy5lbFppcGNvZGUuc3R5bGUud2lkdGggPSAnNmVtJztcbiAgICAgICAgdGhpcy5lbFppcGNvZGUucmVhZE9ubHkgPSB0cnVlO1xuICAgICAgICB0aGlzLmVsWmlwY29kZS50eXBlID0gJ3RleHQnO1xuICAgICAgICB0aGlzLmVsWmlwY29kZS5wbGFjZWhvbGRlciA9ICfpg7XpgZ7ljYDomZ8nO1xuICAgICAgICB0aGlzLmVsWmlwY29kZS5uYW1lID0gdGhpcy5vcHRpb25zLnppcGNvZGVGaWVsZE5hbWU7XG4gICAgICAgIHRoaXMuZWxaaXBjb2RlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCB0aGlzLm9wdGlvbnMuemlwY29kZUNsYXNzTmFtZSk7XG4gICAgICAgIHRoaXMuZWxaaXBjb2RlLmF1dG9jb21wbGV0ZSA9ICdvZmYnO1xuXHR9XG5cblx0Ly8gZWxlbWVudCDniYfmrrXloZ7lhaUgZWxcblx0dGhpcy5lbC5hcHBlbmRDaGlsZChmcmFnbWVudCk7XG59XG5cbmZ1bmN0aW9uIHNldENvdW50eUVsZW1lbnQoKSB7XG4gICAgLy8g57ij5biC6YG45ZauXG5cdGlmICggISB0aGlzLmVsQ291bnR5KSB7XG5cdFx0dmFyIGNvdW50eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuXHRcdHRoaXMuZWxDb3VudHkgPSBjb3VudHk7XG5cdFx0ZnJhZ21lbnQuYXBwZW5kQ2hpbGQoY291bnR5KTtcblx0fVxuXG5cdC8vIOe4o+W4gumBuOWWruWxrOaAp1xuXHR0aGlzLmVsQ291bnR5LmlubmVySFRNTCA9IGdldENvdW50eU9wdGlvbnMuY2FsbCh0aGlzKTtcblx0dGhpcy5lbENvdW50eS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgdGhpcy5vcHRpb25zLmNvdW50eUNsYXNzTmFtZSk7XG5cdHRoaXMuZWxDb3VudHkubmFtZSA9IHRoaXMub3B0aW9ucy5jb3VudHlGaWxlZE5hbWU7XG59XG5cbmZ1bmN0aW9uIGdldENvdW50eU9wdGlvbnMoKSB7XG5cdHZhciBlbE9wdGlvbnMgPSAnPG9wdGlvbiB2YWx1ZT1cIlwiPuiri+mBuOaTh+e4o+W4gjwvb3B0aW9uPic7XG4gICAgdmFyIG9ubHlDaXR5ID0gdGhpcy5vcHRpb25zLm9ubHkgfHwgdGhpcy5vcHRpb25zLm9ubHlDaXR5OyAvLyB0aGlzLm9wdGlvbnMub25seSDkuIvlgIvniYjmnKzmo4TnlKhcblxuXHRmb3IgKHZhciBpID0gMCwgaiA9IGRhdGEuY291bnRpZXMubGVuZ3RoOyBpIDwgajsgaSsrKSB7XG5cdFx0Ly8g6Iul5pyJ6Kit5a6a6ZmQ5Yi26aGv56S655qE57ij5biC77yM5LiU6Kmy6aCF55uu5LiN5Zyo6Ieq6KiC57ij5biC5LitXG5cdFx0aWYgKG9ubHlDaXR5ICYmIEFycmF5LmlzQXJyYXkob25seUNpdHkpICYmIG9ubHlDaXR5LmluZGV4T2YoZGF0YS5jb3VudGllc1tpXSkgPT09IC0xKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHQvLyBmb3JtYXQ6IDxvcHRpb24gdmFsdWU9XCLoh7rljJfluIJcIiBkYXRhLWluZGV4PVwiMFwiPuiHuuWMl+W4gjwvb3B0aW9uPlxuXHRcdGVsT3B0aW9ucyArPSBgPG9wdGlvbiB2YWx1ZT1cIiR7ZGF0YS5jb3VudGllc1tpXX1cIiBkYXRhLWluZGV4PVwiJHtpfVwiPiR7ZGF0YS5jb3VudGllc1tpXX08L29wdGlvbj5gO1xuXHR9XG5cblx0cmV0dXJuIGVsT3B0aW9ucztcbn1cblxuZnVuY3Rpb24gZ2V0RGlzdHJpY3RPcHRpb25zKGluZGV4KSB7XG5cdGlmICggISBpbmRleCkge1xuXHRcdHJldHVybiAnPG9wdGlvbiB2YWx1ZT1cIlwiIHNlbGVjdGVkPuiri+mBuOaTh+WNgOWfnzwvb3B0aW9uPic7XG5cdH1cblxuXHR2YXIgZWxPcHRpb25zID0gJzxvcHRpb24gdmFsdWU9XCJcIiBzZWxlY3RlZD7oq4vpgbjmk4fljYDln588L29wdGlvbj4nO1xuXG5cdGZvcih2YXIgaSA9IDAsIGogPSBkYXRhLmRpc3RyaWN0c1tpbmRleF1bMF0ubGVuZ3RoIC0gMTsgaSA8PSBqOyBpKyspIHtcblx0XHQvLyBmb3JtYXQ6IDxvcHRpb24gdmFsdWU9XCLkuK3mraPljYBcIiBkYXRhLXppcGNvZGU9XCIxMDBcIj7kuK3mraPljYA8L29wdGlvbj5cblx0XHRlbE9wdGlvbnMgKz0gYDxvcHRpb24gdmFsdWU9XCIke2RhdGEuZGlzdHJpY3RzW2luZGV4XVswXVtpXX1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtemlwY29kZT1cIiR7ZGF0YS5kaXN0cmljdHNbaW5kZXhdWzFdW2ldfVwiPlxuXHRcdCAgICAgICAgICAgICAgICAke2RhdGEuZGlzdHJpY3RzW2luZGV4XVswXVtpXX1cblx0XHQgICAgICAgICAgICA8L29wdGlvbj5gO1xuXHR9XG5cblx0cmV0dXJuIGVsT3B0aW9ucztcbn1cblxuZnVuY3Rpb24gbGlzdGVuQ291bnR5Q2hhbmdlZCgpIHtcblx0dmFyIGhhbmRsZXIgPSBmdW5jdGlvbigpIHtcblx0XHR2YXIgaW5kZXggPSB0aGlzLmVsQ291bnR5LnF1ZXJ5U2VsZWN0b3IoJ29wdGlvbjpjaGVja2VkJykuZGF0YXNldC5pbmRleDtcblx0XHR0aGlzLmVsRGlzdHJpY3QuaW5uZXJIVE1MID0gZ2V0RGlzdHJpY3RPcHRpb25zKGluZGV4KTtcblx0XHR0aGlzLmVsWmlwY29kZS52YWx1ZSA9ICcnO1xuXHR9LmJpbmQodGhpcyk7XG5cblx0dGhpcy5lbENvdW50eS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBoYW5kbGVyKTtcbn1cblxuZnVuY3Rpb24gbGlzdGVuRGlzdHJpY3RDaGFuZ2VkKCkge1xuXHR2YXIgaGFuZGxlciA9IGZ1bmN0aW9uKCkge1xuXHRcdHZhciB6aXBjb2RlID0gdGhpcy5lbERpc3RyaWN0LnF1ZXJ5U2VsZWN0b3IoJ29wdGlvbjpjaGVja2VkJykuZGF0YXNldC56aXBjb2RlIHx8ICcnO1xuXHRcdHRoaXMuZWxaaXBjb2RlLnZhbHVlID0gemlwY29kZTtcblx0fS5iaW5kKHRoaXMpO1xuXG5cdHRoaXMuZWxEaXN0cmljdC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBoYW5kbGVyKTtcbn1cblxuZnVuY3Rpb24gc2V0U2VsZWN0ZWRJdGVtKCkge1xuICAgIGlmICh0aGlzLm9wdGlvbnMuc2VsZWN0ZWRDb3VudHkpIHtcbiAgICAgICAgdmFyIGV2ZW50ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0V2ZW50Jyk7XG4gICAgXHRldmVudC5pbml0RXZlbnQoJ2NoYW5nZScsIHRydWUsIHRydWUpO1xuXG4gICAgXHR0aGlzLmVsQ291bnR5LnZhbHVlID0gdGhpcy5vcHRpb25zLnNlbGVjdGVkQ291bnR5O1xuICAgIFx0dGhpcy5lbENvdW50eS5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgICB9XG5cblx0aWYgKHRoaXMub3B0aW9ucy5zZWxlY3RlZERpc3RyaWN0KSB7XG5cdFx0dGhpcy5lbERpc3RyaWN0LnZhbHVlID0gdGhpcy5vcHRpb25zLnNlbGVjdGVkRGlzdHJpY3Q7XG5cdFx0dGhpcy5lbERpc3RyaWN0LmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHJlc2V0U2VsZWN0b3JzKCkge1xuXHR0aGlzLmVsQ291bnR5LnNlbGVjdGVkSW5kZXggPSAwO1xuXHR0aGlzLmVsRGlzdHJpY3QuaW5uZXJIVE1MID0gZ2V0RGlzdHJpY3RPcHRpb25zKCk7XG5cdHRoaXMuZWxaaXBjb2RlLnZhbHVlID0gJyc7XG5cblx0cmV0dXJuIHRoaXM7XG59XG5cbmZ1bmN0aW9uIHNldEJvb3RzdHJhcFN0eWxlKCkge1xuXHR2YXIgZmllbGRDbGFzc05hbWUgPSAnZm9ybS1jb250cm9sJztcbiAgICB2YXIgd3JhcHBlckNsYXNzTmFtZSA9ICdmb3JtLWdyb3VwJztcblx0dmFyIGZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuXG5cdHRoaXMuZWxDb3VudHkuc2V0QXR0cmlidXRlKCdjbGFzcycsIGZpZWxkQ2xhc3NOYW1lKTtcblx0dGhpcy5lbERpc3RyaWN0LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCBmaWVsZENsYXNzTmFtZSk7XG5cdHRoaXMuZWxaaXBjb2RlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCBmaWVsZENsYXNzTmFtZSk7XG5cbiAgICB2YXIgd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHdyYXBwZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsIHdyYXBwZXJDbGFzc05hbWUpO1xuXG5cdHZhciBlbENvdW50eSA9IHdyYXBwZXIuY2xvbmVOb2RlKCk7XG5cdGVsQ291bnR5LmFwcGVuZENoaWxkKHRoaXMuZWxDb3VudHkpO1xuXHRmcmFnbWVudC5hcHBlbmRDaGlsZChlbENvdW50eSk7XG5cblx0dmFyIGVsRGlzdHJpY3QgPSB3cmFwcGVyLmNsb25lTm9kZSgpO1xuXHRlbERpc3RyaWN0LmFwcGVuZENoaWxkKHRoaXMuZWxEaXN0cmljdCk7XG5cdGZyYWdtZW50LmFwcGVuZENoaWxkKGVsRGlzdHJpY3QpO1xuXG5cdHZhciBlbFppcGNvZGUgPSB3cmFwcGVyLmNsb25lTm9kZSgpO1xuXHRlbFppcGNvZGUuYXBwZW5kQ2hpbGQodGhpcy5lbFppcGNvZGUpO1xuXHRmcmFnbWVudC5hcHBlbmRDaGlsZChlbFppcGNvZGUpO1xuXG5cdHRoaXMuZWwuYXBwZW5kQ2hpbGQoZnJhZ21lbnQpO1xufVxuIl0sIm5hbWVzIjpbImRhdGEiLCJoYW5kbGVPcHRpb25zIiwiYXJndW1lbnRzIiwiZ2V0T3B0aW9uc0V4dGVuZCIsImdldE9wdGlvbnNSZXF1aXJlZCIsIm9wdGlvbnNDdXN0b20iLCJvcHRpb25zUmVxdWlyZWQiLCJlcnJvciIsImxlbmd0aCIsImhhc093blByb3BlcnR5Iiwib3B0aW9uc0RlZmF1bHQiLCJwcm9wZXJ0eSIsIlR3Q2l0eVNlbGVjdG9yIiwiZWxSb2xlTmFtZSIsIm9wdGlvbnMiLCJjYWxsIiwicHJvdG90eXBlIiwicmVzZXQiLCJyZXNldFNlbGVjdG9ycyIsImVsU2V0dXAiLCJlbCIsImdldEVsZW1lbnQiLCJlbENvdW50eSIsImVsRGlzdHJpY3QiLCJlbFppcGNvZGUiLCJpbml0IiwiZWxzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsInNlbGYiLCJKU09OIiwicGFyc2UiLCJzdHJpbmdpZnkiLCJvbmx5IiwiZ2V0QXR0cmlidXRlIiwicmVwbGFjZSIsInNwbGl0Iiwib25seUNpdHkiLCJzZWxlY3RlZENvdW50eSIsInNlbGVjdGVkRGlzdHJpY3QiLCJib290c3RyYXBTdHlsZSIsInNob3daaXBjb2RlIiwicGFyZW50IiwicXVlcnlTZWxlY3RvciIsInNldEVsZW1lbnRzIiwiZnJhZ21lbnQiLCJjcmVhdGVEb2N1bWVudEZyYWdtZW50IiwiY291bnR5IiwiY3JlYXRlRWxlbWVudCIsImFwcGVuZENoaWxkIiwiaW5uZXJIVE1MIiwiZ2V0Q291bnR5T3B0aW9ucyIsInNldEF0dHJpYnV0ZSIsImNvdW50eUNsYXNzTmFtZSIsIm5hbWUiLCJjb3VudHlGaWxlZE5hbWUiLCJkaXN0cmljdCIsImdldERpc3RyaWN0T3B0aW9ucyIsImRpc3RyaWN0Q2xhc3NOYW1lIiwiZGlzdHJpY3RGaWVsZE5hbWUiLCJ6aXBjb2RlIiwic3R5bGUiLCJkaXNwbGF5Iiwid2lkdGgiLCJyZWFkT25seSIsInR5cGUiLCJwbGFjZWhvbGRlciIsInppcGNvZGVGaWVsZE5hbWUiLCJ6aXBjb2RlQ2xhc3NOYW1lIiwiYXV0b2NvbXBsZXRlIiwiZWxPcHRpb25zIiwiaSIsImoiLCJjb3VudGllcyIsIkFycmF5IiwiaXNBcnJheSIsImluZGV4T2YiLCJpbmRleCIsImRpc3RyaWN0cyIsImxpc3RlbkNvdW50eUNoYW5nZWQiLCJoYW5kbGVyIiwiZGF0YXNldCIsInZhbHVlIiwiYmluZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJsaXN0ZW5EaXN0cmljdENoYW5nZWQiLCJzZXRTZWxlY3RlZEl0ZW0iLCJldmVudCIsImNyZWF0ZUV2ZW50IiwiaW5pdEV2ZW50IiwiZGlzcGF0Y2hFdmVudCIsInNlbGVjdGVkSW5kZXgiLCJzZXRCb290c3RyYXBTdHlsZSIsImZpZWxkQ2xhc3NOYW1lIiwid3JhcHBlckNsYXNzTmFtZSIsIndyYXBwZXIiLCJjbG9uZU5vZGUiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUVBLElBQUlBLFNBQU87O2VBRUksQ0FDUCxLQURPLEVBQ0EsS0FEQSxFQUNPLEtBRFAsRUFDYyxLQURkLEVBQ3FCLEtBRHJCLEVBQzRCLEtBRDVCLEVBQ21DLEtBRG5DLEVBQzBDLEtBRDFDLEVBRVAsS0FGTyxFQUVBLEtBRkEsRUFFTyxLQUZQLEVBRWMsS0FGZCxFQUVxQixLQUZyQixFQUU0QixLQUY1QixFQUVtQyxLQUZuQyxFQUUwQyxLQUYxQyxFQUdQLEtBSE8sRUFHQSxLQUhBLEVBR08sS0FIUCxFQUdjLEtBSGQsRUFHcUIsS0FIckIsRUFHNEIsS0FINUIsQ0FGSjs7O2VBU0k7O0tBR0gsQ0FBQyxLQUFELEVBQVEsS0FBUixFQUFlLEtBQWYsRUFBc0IsS0FBdEIsRUFBNkIsS0FBN0IsRUFBb0MsS0FBcEMsRUFBMkMsS0FBM0MsRUFDQSxLQURBLEVBQ08sS0FEUCxFQUNjLEtBRGQsRUFDcUIsS0FEckIsRUFDNEIsS0FENUIsQ0FESixFQUlJLENBQUMsS0FBRCxFQUFRLEtBQVIsRUFBZSxLQUFmLEVBQXNCLEtBQXRCLEVBQTZCLEtBQTdCLEVBQW9DLEtBQXBDLEVBQTJDLEtBQTNDLEVBQWtELEtBQWxELEVBQXlELEtBQXpELEVBQWdFLEtBQWhFLEVBQXVFLEtBQXZFLEVBQThFLEtBQTlFLENBSkosQ0FGTzs7S0FVSCxDQUFDLEtBQUQsRUFBUSxLQUFSLEVBQWUsS0FBZixFQUFzQixLQUF0QixFQUE2QixLQUE3QixFQUFvQyxLQUFwQyxFQUEyQyxLQUEzQyxDQURKLEVB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