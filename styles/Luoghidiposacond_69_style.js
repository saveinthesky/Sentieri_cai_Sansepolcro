var size = 0;
var placement = 'point';
function categories_Luoghidiposacond_69(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
                switch(valueStr) {case 'Esistente':
                    return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 8.4 + size,
            displacement: [0, 0],  fill: new ol.style.Fill({color: 'rgba(247,14,22,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'in Progetto':
                    return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 8.8 + size,
            displacement: [0, 0],  fill: new ol.style.Fill({color: 'rgba(16,200,178,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'in Ripristino':
                    return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 8.8 + size,
            displacement: [0, 0],  fill: new ol.style.Fill({color: 'rgba(246,124,29,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Ripristino':
                    return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 8.8 + size,
            displacement: [0, 0],  fill: new ol.style.Fill({color: 'rgba(238,131,30,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
default:
                    return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 8.4 + size,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(128,17,25,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.52}), fill: new ol.style.Fill({color: 'rgba(235,143,209,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_Luoghidiposacond_69 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("Esistente /progetto");
    var labelFont = "15.600000000000001px \'Open Sans\', sans-serif";
    var labelFill = "#fc0000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if (feature.get("ID_Palo") !== null) {
        labelText = String(feature.get("ID_Palo"));
    }
    
    var style = categories_Luoghidiposacond_69(feature, value, size, resolution, labelText,
                            labelFont, labelFill, bufferColor,
                            bufferWidth, placement);

    return style;
};
