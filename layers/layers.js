var wms_layers = [];


        var lyr_Retina_0 = new ol.layer.Tile({
            'title': '高德地图-Retina超清版',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://wprd02.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=10&x={x}&y={y}&z={z}',
                tilePixelRatio: window.devicePixelRatio > 1 ? 2 : 1
            })
        });
var format__1 = new ol.format.GeoJSON();
var features__1 = format__1.readFeatures(json__1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__1.addFeatures(features__1);
var lyr__1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__1, 
                style: style__1,
                popuplayertitle: '其它同业',
                interactive: true,
    title: '其它同业<br />\
    <img src="styles/legend/_1_0.png" /> 渤海银行<br />\
    <img src="styles/legend/_1_1.png" /> 东莞银行<br />\
    <img src="styles/legend/_1_2.png" /> 光大银行<br />\
    <img src="styles/legend/_1_3.png" /> 广发银行<br />\
    <img src="styles/legend/_1_4.png" /> 华夏银行<br />\
    <img src="styles/legend/_1_5.png" /> 交通银行<br />\
    <img src="styles/legend/_1_6.png" /> 民生银行<br />\
    <img src="styles/legend/_1_7.png" /> 平安银行<br />\
    <img src="styles/legend/_1_8.png" /> 浦发银行<br />\
    <img src="styles/legend/_1_9.png" /> 兴业银行<br />\
    <img src="styles/legend/_1_10.png" /> 邮储银行<br />\
    <img src="styles/legend/_1_11.png" /> 招商银行<br />\
    <img src="styles/legend/_1_12.png" /> 中信银行<br />' });
var format__2 = new ol.format.GeoJSON();
var features__2 = format__2.readFeatures(json__2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__2.addFeatures(features__2);
var lyr__2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__2, 
                style: style__2,
                popuplayertitle: '四行',
                interactive: true,
    title: '四行<br />\
    <img src="styles/legend/_2_0.png" /> 工商银行<br />\
    <img src="styles/legend/_2_1.png" /> 建设银行<br />\
    <img src="styles/legend/_2_2.png" /> 农业银行<br />\
    <img src="styles/legend/_2_3.png" /> 中国银行<br />' });
var format__3 = new ol.format.GeoJSON();
var features__3 = format__3.readFeatures(json__3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__3.addFeatures(features__3);
var lyr__3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__3, 
                style: style__3,
                popuplayertitle: '农行',
                interactive: true,
                title: '<img src="styles/legend/_3.png" /> 农行'
            });

lyr_Retina_0.setVisible(true);lyr__1.setVisible(true);lyr__2.setVisible(true);lyr__3.setVisible(true);
var layersList = [lyr_Retina_0,lyr__1,lyr__2,lyr__3];
lyr__1.set('fieldAliases', {'名称': '名称', '简称': '简称', '银行类别': '银行类别', '银行名称': '银行名称', '批准日期': '批准日期', '发证日期': '发证日期', '机构地址': '机构地址', '高德经度': '高德经度', '高德纬度': '高德纬度', '变更前机构地址': '变更前机构地址', });
lyr__2.set('fieldAliases', {'网点名称': '网点名称', '网点简称': '网点简称', '银行分类': '银行分类', '银行名称': '银行名称', '机构地址': '机构地址', '变更前机构地址': '变更前机构地址', '负责人': '负责人', 'lng（百度经度）': 'lng（百度经度）', 'lat（百度纬度）': 'lat（百度纬度）', 'lng（谷歌/高德经度）': 'lng（谷歌/高德经度）', 'lat（谷歌/高德纬度）': 'lat（谷歌/高德纬度）', '新网点简称': '新网点简称', 'navigation': 'navigation', });
lyr__3.set('fieldAliases', {'fid': 'fid', '网点名称': '网点名称', '网点简称': '网点简称', '机构地址': '机构地址', 'lng（百度经度）': 'lng（百度经度）', 'lat（百度纬度）': 'lat（百度纬度）', 'lng（谷歌/高德经度）': 'lng（谷歌/高德经度）', 'lat（谷歌/高德纬度）': 'lat（谷歌/高德纬度）', '区域＿中山行政区新': '区域＿中山行政区新', '导航': '导航', });
lyr__1.set('fieldImages', {'名称': 'TextEdit', '简称': 'TextEdit', '银行类别': 'TextEdit', '银行名称': 'TextEdit', '批准日期': 'DateTime', '发证日期': 'DateTime', '机构地址': 'TextEdit', '高德经度': 'TextEdit', '高德纬度': 'TextEdit', '变更前机构地址': 'TextEdit', });
lyr__2.set('fieldImages', {'网点名称': 'TextEdit', '网点简称': 'TextEdit', '银行分类': 'TextEdit', '银行名称': 'TextEdit', '机构地址': 'TextEdit', '变更前机构地址': 'TextEdit', '负责人': 'TextEdit', 'lng（百度经度）': 'TextEdit', 'lat（百度纬度）': 'TextEdit', 'lng（谷歌/高德经度）': 'TextEdit', 'lat（谷歌/高德纬度）': 'TextEdit', '新网点简称': 'TextEdit', 'navigation': '', });
lyr__3.set('fieldImages', {'fid': 'TextEdit', '网点名称': 'TextEdit', '网点简称': 'TextEdit', '机构地址': 'TextEdit', 'lng（百度经度）': 'TextEdit', 'lat（百度纬度）': 'TextEdit', 'lng（谷歌/高德经度）': 'TextEdit', 'lat（谷歌/高德纬度）': 'TextEdit', '区域＿中山行政区新': 'TextEdit', '导航': '', });
lyr__1.set('fieldLabels', {'名称': 'no label', '简称': 'no label', '银行类别': 'no label', '银行名称': 'no label', '批准日期': 'no label', '发证日期': 'no label', '机构地址': 'no label', '高德经度': 'hidden field', '高德纬度': 'hidden field', '变更前机构地址': 'hidden field', });
lyr__2.set('fieldLabels', {'网点名称': 'no label', '网点简称': 'no label', '银行分类': 'no label', '银行名称': 'no label', '机构地址': 'no label', '变更前机构地址': 'hidden field', '负责人': 'hidden field', 'lng（百度经度）': 'hidden field', 'lat（百度纬度）': 'hidden field', 'lng（谷歌/高德经度）': 'hidden field', 'lat（谷歌/高德纬度）': 'hidden field', '新网点简称': 'no label', 'navigation': 'no label', });
lyr__3.set('fieldLabels', {'fid': 'no label', '网点名称': 'no label', '网点简称': 'no label', '机构地址': 'no label', 'lng（百度经度）': 'hidden field', 'lat（百度纬度）': 'hidden field', 'lng（谷歌/高德经度）': 'hidden field', 'lat（谷歌/高德纬度）': 'hidden field', '区域＿中山行政区新': 'no label', 'navigation': 'header label - always visible', });
lyr__3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});