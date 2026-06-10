var size = 0;
var placement = 'point';
function categories__1(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
                switch(valueStr) {case '渤海银行':
                    return [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [450.90698, 256.42206],
                  scale: 0.033266284766760544,
                  anchor: [225.45349, 128.21103],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/BHB.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '东莞银行':
                    return [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [112.44791, 112.59924],
                  scale: 0.1333950982281485,
                  anchor: [56.223955, 56.29962],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/dongguanbank.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '光大银行':
                    return [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [449.99997, 209.46425],
                  scale: 0.033333335555555704,
                  anchor: [224.999985, 104.732125],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/GDB.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '广发银行':
                    return [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [450, 450],
                  scale: 0.03333333333333333,
                  anchor: [225.0, 225.0],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/GFB.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '华夏银行':
                    return [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [450, 450],
                  scale: 0.03333333333333333,
                  anchor: [225.0, 225.0],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/HXB.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '交通银行':
                    return [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [450.60999, 491.51746],
                  scale: 0.033288210054996784,
                  anchor: [225.304995, 245.75873],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/JTB.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '民生银行':
                    return [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [450.00598, 346.69061],
                  scale: 0.03333289037625677,
                  anchor: [225.00299, 173.345305],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/MSB.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '平安银行':
                    return [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [450.25, 93.180397],
                  scale: 0.03331482509716824,
                  anchor: [225.125, 46.5901985],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/PAB.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '浦发银行':
                    return [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [450.84, 378.88358],
                  scale: 0.03327122704285334,
                  anchor: [225.42, 189.44179],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/PFB.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '兴业银行':
                    return [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [450.561, 290.24945],
                  scale: 0.0332918295191994,
                  anchor: [225.2805, 145.124725],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/XYB.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '邮储银行':
                    return [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [420.99301, 399.73499],
                  scale: 0.03563004525894622,
                  anchor: [210.496505, 199.867495],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/PSCB.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '招商银行':
                    return [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [450, 450],
                  scale: 0.03333333333333333,
                  anchor: [225.0, 225.0],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/CMB.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '中信银行':
                    return [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [450.729, 451.53644],
                  scale: 0.033279420671844945,
                  anchor: [225.3645, 225.76822],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/ZXB.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style__1 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("银行名称");
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    
    var style = categories__1(feature, value, size, resolution, labelText,
                            labelFont, labelFill, bufferColor,
                            bufferWidth, placement);

    return style;
};
