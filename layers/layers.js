ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3004").setExtent([2283396.056116, 4831336.298756, 2302019.319563, 4841564.619612]);
var wms_layers = [];


        var lyr_OpenTopoMap_0 = new ol.layer.Tile({
            'title': 'OpenTopoMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://opentopomap.org/about#datenstand">OpenTopoMap (CC-BY-SA)</a>',
                url: 'https://tile.opentopomap.org/{z}/{x}/{y}.png'
            })
        });
var format_LARE8_1 = new ol.format.GeoJSON();
var features_LARE8_1 = format_LARE8_1.readFeatures(json_LARE8_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3004'});
var jsonSource_LARE8_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LARE8_1.addFeatures(features_LARE8_1);
var lyr_LARE8_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LARE8_1, 
                style: style_LARE8_1,
                popuplayertitle: 'LARE8',
                interactive: true,
                title: '<img src="styles/legend/LARE8_1.png" /> LARE8'
            });
var format_DbLdPsentCAISans_2 = new ol.format.GeoJSON();
var features_DbLdPsentCAISans_2 = format_DbLdPsentCAISans_2.readFeatures(json_DbLdPsentCAISans_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3004'});
var jsonSource_DbLdPsentCAISans_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DbLdPsentCAISans_2.addFeatures(features_DbLdPsentCAISans_2);
var lyr_DbLdPsentCAISans_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DbLdPsentCAISans_2, 
                style: style_DbLdPsentCAISans_2,
                popuplayertitle: 'Db-LdP- sent CAI Sans',
                interactive: true,
                title: '<img src="styles/legend/DbLdPsentCAISans_2.png" /> Db-LdP- sent CAI Sans'
            });
var format_sentiero00_I_shp_3 = new ol.format.GeoJSON();
var features_sentiero00_I_shp_3 = format_sentiero00_I_shp_3.readFeatures(json_sentiero00_I_shp_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3004'});
var jsonSource_sentiero00_I_shp_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sentiero00_I_shp_3.addFeatures(features_sentiero00_I_shp_3);
var lyr_sentiero00_I_shp_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_sentiero00_I_shp_3, 
                style: style_sentiero00_I_shp_3,
                popuplayertitle: 'sentiero 00_I_shp',
                interactive: true,
                title: '<img src="styles/legend/sentiero00_I_shp_3.png" /> sentiero 00_I_shp'
            });
var format_sentiero00_ii_shp_4 = new ol.format.GeoJSON();
var features_sentiero00_ii_shp_4 = format_sentiero00_ii_shp_4.readFeatures(json_sentiero00_ii_shp_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3004'});
var jsonSource_sentiero00_ii_shp_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sentiero00_ii_shp_4.addFeatures(features_sentiero00_ii_shp_4);
var lyr_sentiero00_ii_shp_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_sentiero00_ii_shp_4, 
                style: style_sentiero00_ii_shp_4,
                popuplayertitle: 'sentiero 00_ii_shp',
                interactive: true,
                title: '<img src="styles/legend/sentiero00_ii_shp_4.png" /> sentiero 00_ii_shp'
            });
var format_refREI_LARE8080_5 = new ol.format.GeoJSON();
var features_refREI_LARE8080_5 = format_refREI_LARE8080_5.readFeatures(json_refREI_LARE8080_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3004'});
var jsonSource_refREI_LARE8080_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_refREI_LARE8080_5.addFeatures(features_refREI_LARE8080_5);
var lyr_refREI_LARE8080_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_refREI_LARE8080_5, 
                style: style_refREI_LARE8080_5,
                popuplayertitle: 'ref:REI_LARE8080',
                interactive: true,
                title: '<img src="styles/legend/refREI_LARE8080_5.png" /> ref:REI_LARE8080'
            });
var format_refREI_LARE8710_6 = new ol.format.GeoJSON();
var features_refREI_LARE8710_6 = format_refREI_LARE8710_6.readFeatures(json_refREI_LARE8710_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3004'});
var jsonSource_refREI_LARE8710_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_refREI_LARE8710_6.addFeatures(features_refREI_LARE8710_6);
var lyr_refREI_LARE8710_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_refREI_LARE8710_6, 
                style: style_refREI_LARE8710_6,
                popuplayertitle: 'ref:REI_LARE8710',
                interactive: true,
                title: '<img src="styles/legend/refREI_LARE8710_6.png" /> ref:REI_LARE8710'
            });
var format_refREI_LARE8040_7 = new ol.format.GeoJSON();
var features_refREI_LARE8040_7 = format_refREI_LARE8040_7.readFeatures(json_refREI_LARE8040_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3004'});
var jsonSource_refREI_LARE8040_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_refREI_LARE8040_7.addFeatures(features_refREI_LARE8040_7);
var lyr_refREI_LARE8040_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_refREI_LARE8040_7, 
                style: style_refREI_LARE8040_7,
                popuplayertitle: 'ref:REI_LARE8040',
                interactive: true,
                title: '<img src="styles/legend/refREI_LARE8040_7.png" /> ref:REI_LARE8040'
            });
var format_refREI_LARE8010_8 = new ol.format.GeoJSON();
var features_refREI_LARE8010_8 = format_refREI_LARE8010_8.readFeatures(json_refREI_LARE8010_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3004'});
var jsonSource_refREI_LARE8010_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_refREI_LARE8010_8.addFeatures(features_refREI_LARE8010_8);
var lyr_refREI_LARE8010_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_refREI_LARE8010_8, 
                style: style_refREI_LARE8010_8,
                popuplayertitle: 'ref:REI_LARE8010',
                interactive: true,
                title: '<img src="styles/legend/refREI_LARE8010_8.png" /> ref:REI_LARE8010'
            });
var format_803etichette_9 = new ol.format.GeoJSON();
var features_803etichette_9 = format_803etichette_9.readFeatures(json_803etichette_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3004'});
var jsonSource_803etichette_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_803etichette_9.addFeatures(features_803etichette_9);
var lyr_803etichette_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_803etichette_9, 
                style: style_803etichette_9,
                popuplayertitle: '803 etichette',
                interactive: true,
                title: '<img src="styles/legend/803etichette_9.png" /> 803 etichette'
            });
var format_refREI_LARE8060_10 = new ol.format.GeoJSON();
var features_refREI_LARE8060_10 = format_refREI_LARE8060_10.readFeatures(json_refREI_LARE8060_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3004'});
var jsonSource_refREI_LARE8060_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_refREI_LARE8060_10.addFeatures(features_refREI_LARE8060_10);
var lyr_refREI_LARE8060_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_refREI_LARE8060_10, 
                style: style_refREI_LARE8060_10,
                popuplayertitle: 'ref:REI_LARE8060',
                interactive: true,
                title: '<img src="styles/legend/refREI_LARE8060_10.png" /> ref:REI_LARE8060'
            });
var format_refREI_LARE8070_11 = new ol.format.GeoJSON();
var features_refREI_LARE8070_11 = format_refREI_LARE8070_11.readFeatures(json_refREI_LARE8070_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3004'});
var jsonSource_refREI_LARE8070_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_refREI_LARE8070_11.addFeatures(features_refREI_LARE8070_11);
var lyr_refREI_LARE8070_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_refREI_LARE8070_11, 
                style: style_refREI_LARE8070_11,
                popuplayertitle: 'ref:REI_LARE8070',
                interactive: true,
                title: '<img src="styles/legend/refREI_LARE8070_11.png" /> ref:REI_LARE8070'
            });
var format_refREI_LARE804A_12 = new ol.format.GeoJSON();
var features_refREI_LARE804A_12 = format_refREI_LARE804A_12.readFeatures(json_refREI_LARE804A_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3004'});
var jsonSource_refREI_LARE804A_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_refREI_LARE804A_12.addFeatures(features_refREI_LARE804A_12);
var lyr_refREI_LARE804A_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_refREI_LARE804A_12, 
                style: style_refREI_LARE804A_12,
                popuplayertitle: 'ref:REI_LARE804A',
                interactive: true,
                title: '<img src="styles/legend/refREI_LARE804A_12.png" /> ref:REI_LARE804A'
            });
var format_refREI_LARE8060_13 = new ol.format.GeoJSON();
var features_refREI_LARE8060_13 = format_refREI_LARE8060_13.readFeatures(json_refREI_LARE8060_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3004'});
var jsonSource_refREI_LARE8060_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_refREI_LARE8060_13.addFeatures(features_refREI_LARE8060_13);
var lyr_refREI_LARE8060_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_refREI_LARE8060_13, 
                style: style_refREI_LARE8060_13,
                popuplayertitle: 'ref:REI_LARE8060',
                interactive: true,
                title: '<img src="styles/legend/refREI_LARE8060_13.png" /> ref:REI_LARE8060'
            });
var format_refREI_LARE806A_14 = new ol.format.GeoJSON();
var features_refREI_LARE806A_14 = format_refREI_LARE806A_14.readFeatures(json_refREI_LARE806A_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3004'});
var jsonSource_refREI_LARE806A_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_refREI_LARE806A_14.addFeatures(features_refREI_LARE806A_14);
var lyr_refREI_LARE806A_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_refREI_LARE806A_14, 
                style: style_refREI_LARE806A_14,
                popuplayertitle: 'ref:REI_LARE806A',
                interactive: true,
                title: '<img src="styles/legend/refREI_LARE806A_14.png" /> ref:REI_LARE806A'
            });
var format_refREI_LARE806B_15 = new ol.format.GeoJSON();
var features_refREI_LARE806B_15 = format_refREI_LARE806B_15.readFeatures(json_refREI_LARE806B_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3004'});
var jsonSource_refREI_LARE806B_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_refREI_LARE806B_15.addFeatures(features_refREI_LARE806B_15);
var lyr_refREI_LARE806B_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_refREI_LARE806B_15, 
                style: style_refREI_LARE806B_15,
                popuplayertitle: 'ref:REI_LARE806B',
                interactive: true,
                title: '<img src="styles/legend/refREI_LARE806B_15.png" /> ref:REI_LARE806B'
            });
var format_refREI_LARE8050_16 = new ol.format.GeoJSON();
var features_refREI_LARE8050_16 = format_refREI_LARE8050_16.readFeatures(json_refREI_LARE8050_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3004'});
var jsonSource_refREI_LARE8050_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_refREI_LARE8050_16.addFeatures(features_refREI_LARE8050_16);
var lyr_refREI_LARE8050_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_refREI_LARE8050_16, 
                style: style_refREI_LARE8050_16,
                popuplayertitle: 'ref:REI_LARE8050',
                interactive: true,
                title: '<img src="styles/legend/refREI_LARE8050_16.png" /> ref:REI_LARE8050'
            });
var format_refREI_LARE805A_17 = new ol.format.GeoJSON();
var features_refREI_LARE805A_17 = format_refREI_LARE805A_17.readFeatures(json_refREI_LARE805A_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3004'});
var jsonSource_refREI_LARE805A_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_refREI_LARE805A_17.addFeatures(features_refREI_LARE805A_17);
var lyr_refREI_LARE805A_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_refREI_LARE805A_17, 
                style: style_refREI_LARE805A_17,
                popuplayertitle: 'ref:REI_LARE805A',
                interactive: true,
                title: '<img src="styles/legend/refREI_LARE805A_17.png" /> ref:REI_LARE805A'
            });
var format_refREI_LARE805B_18 = new ol.format.GeoJSON();
var features_refREI_LARE805B_18 = format_refREI_LARE805B_18.readFeatures(json_refREI_LARE805B_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3004'});
var jsonSource_refREI_LARE805B_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_refREI_LARE805B_18.addFeatures(features_refREI_LARE805B_18);
var lyr_refREI_LARE805B_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_refREI_LARE805B_18, 
                style: style_refREI_LARE805B_18,
                popuplayertitle: 'ref:REI_LARE805B',
                interactive: true,
                title: '<img src="styles/legend/refREI_LARE805B_18.png" /> ref:REI_LARE805B'
            });
var format_refREI_LARE805C_19 = new ol.format.GeoJSON();
var features_refREI_LARE805C_19 = format_refREI_LARE805C_19.readFeatures(json_refREI_LARE805C_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3004'});
var jsonSource_refREI_LARE805C_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_refREI_LARE805C_19.addFeatures(features_refREI_LARE805C_19);
var lyr_refREI_LARE805C_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_refREI_LARE805C_19, 
                style: style_refREI_LARE805C_19,
                popuplayertitle: 'ref:REI_LARE805C',
                interactive: true,
                title: '<img src="styles/legend/refREI_LARE805C_19.png" /> ref:REI_LARE805C'
            });
var format_refREI_LARE8610_20 = new ol.format.GeoJSON();
var features_refREI_LARE8610_20 = format_refREI_LARE8610_20.readFeatures(json_refREI_LARE8610_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3004'});
var jsonSource_refREI_LARE8610_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_refREI_LARE8610_20.addFeatures(features_refREI_LARE8610_20);
var lyr_refREI_LARE8610_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_refREI_LARE8610_20, 
                style: style_refREI_LARE8610_20,
                popuplayertitle: 'ref:REI_LARE8610',
                interactive: true,
                title: '<img src="styles/legend/refREI_LARE8610_20.png" /> ref:REI_LARE8610'
            });
var format_refREI_LARE8190_21 = new ol.format.GeoJSON();
var features_refREI_LARE8190_21 = format_refREI_LARE8190_21.readFeatures(json_refREI_LARE8190_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3004'});
var jsonSource_refREI_LARE8190_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_refREI_LARE8190_21.addFeatures(features_refREI_LARE8190_21);
var lyr_refREI_LARE8190_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_refREI_LARE8190_21, 
                style: style_refREI_LARE8190_21,
                popuplayertitle: 'ref:REI_LARE8190',
                interactive: true,
                title: '<img src="styles/legend/refREI_LARE8190_21.png" /> ref:REI_LARE8190'
            });
var format_refREI_LARE8270_22 = new ol.format.GeoJSON();
var features_refREI_LARE8270_22 = format_refREI_LARE8270_22.readFeatures(json_refREI_LARE8270_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3004'});
var jsonSource_refREI_LARE8270_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_refREI_LARE8270_22.addFeatures(features_refREI_LARE8270_22);
var lyr_refREI_LARE8270_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_refREI_LARE8270_22, 
                style: style_refREI_LARE8270_22,
                popuplayertitle: 'ref:REI_LARE8270',
                interactive: true,
                title: '<img src="styles/legend/refREI_LARE8270_22.png" /> ref:REI_LARE8270'
            });
var format_refREI_LARE8290_23 = new ol.format.GeoJSON();
var features_refREI_LARE8290_23 = format_refREI_LARE8290_23.readFeatures(json_refREI_LARE8290_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3004'});
var jsonSource_refREI_LARE8290_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_refREI_LARE8290_23.addFeatures(features_refREI_LARE8290_23);
var lyr_refREI_LARE8290_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_refREI_LARE8290_23, 
                style: style_refREI_LARE8290_23,
                popuplayertitle: 'ref:REI_LARE8290',
                interactive: true,
                title: '<img src="styles/legend/refREI_LARE8290_23.png" /> ref:REI_LARE8290'
            });
var format_refREI_LARE8170_24 = new ol.format.GeoJSON();
var features_refREI_LARE8170_24 = format_refREI_LARE8170_24.readFeatures(json_refREI_LARE8170_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3004'});
var jsonSource_refREI_LARE8170_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_refREI_LARE8170_24.addFeatures(features_refREI_LARE8170_24);
var lyr_refREI_LARE8170_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_refREI_LARE8170_24, 
                style: style_refREI_LARE8170_24,
                popuplayertitle: 'ref:REI_LARE8170',
                interactive: true,
                title: '<img src="styles/legend/refREI_LARE8170_24.png" /> ref:REI_LARE8170'
            });
var format_refREI_LARE817B_25 = new ol.format.GeoJSON();
var features_refREI_LARE817B_25 = format_refREI_LARE817B_25.readFeatures(json_refREI_LARE817B_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3004'});
var jsonSource_refREI_LARE817B_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_refREI_LARE817B_25.addFeatures(features_refREI_LARE817B_25);
var lyr_refREI_LARE817B_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_refREI_LARE817B_25, 
                style: style_refREI_LARE817B_25,
                popuplayertitle: 'ref:REI_LARE817B',
                interactive: true,
                title: '<img src="styles/legend/refREI_LARE817B_25.png" /> ref:REI_LARE817B'
            });
var format_refREI_LARE861B_26 = new ol.format.GeoJSON();
var features_refREI_LARE861B_26 = format_refREI_LARE861B_26.readFeatures(json_refREI_LARE861B_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3004'});
var jsonSource_refREI_LARE861B_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_refREI_LARE861B_26.addFeatures(features_refREI_LARE861B_26);
var lyr_refREI_LARE861B_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_refREI_LARE861B_26, 
                style: style_refREI_LARE861B_26,
                popuplayertitle: 'ref:REI_LARE861B',
                interactive: true,
                title: '<img src="styles/legend/refREI_LARE861B_26.png" /> ref:REI_LARE861B'
            });
var format_refREI_LARE861C_27 = new ol.format.GeoJSON();
var features_refREI_LARE861C_27 = format_refREI_LARE861C_27.readFeatures(json_refREI_LARE861C_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3004'});
var jsonSource_refREI_LARE861C_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_refREI_LARE861C_27.addFeatures(features_refREI_LARE861C_27);
var lyr_refREI_LARE861C_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_refREI_LARE861C_27, 
                style: style_refREI_LARE861C_27,
                popuplayertitle: 'ref:REI_LARE861C',
                interactive: true,
                title: '<img src="styles/legend/refREI_LARE861C_27.png" /> ref:REI_LARE861C'
            });
var format_refREI_LARE8650_28 = new ol.format.GeoJSON();
var features_refREI_LARE8650_28 = format_refREI_LARE8650_28.readFeatures(json_refREI_LARE8650_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3004'});
var jsonSource_refREI_LARE8650_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_refREI_LARE8650_28.addFeatures(features_refREI_LARE8650_28);
var lyr_refREI_LARE8650_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_refREI_LARE8650_28, 
                style: style_refREI_LARE8650_28,
                popuplayertitle: 'ref:REI_LARE8650',
                interactive: true,
                title: '<img src="styles/legend/refREI_LARE8650_28.png" /> ref:REI_LARE8650'
            });
var format_refREI_LARE8630_29 = new ol.format.GeoJSON();
var features_refREI_LARE8630_29 = format_refREI_LARE8630_29.readFeatures(json_refREI_LARE8630_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3004'});
var jsonSource_refREI_LARE8630_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_refREI_LARE8630_29.addFeatures(features_refREI_LARE8630_29);
var lyr_refREI_LARE8630_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_refREI_LARE8630_29, 
                style: style_refREI_LARE8630_29,
                popuplayertitle: 'ref:REI_LARE8630',
                interactive: true,
                title: '<img src="styles/legend/refREI_LARE8630_29.png" /> ref:REI_LARE8630'
            });
var format_refREI_LARE8150_30 = new ol.format.GeoJSON();
var features_refREI_LARE8150_30 = format_refREI_LARE8150_30.readFeatures(json_refREI_LARE8150_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3004'});
var jsonSource_refREI_LARE8150_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_refREI_LARE8150_30.addFeatures(features_refREI_LARE8150_30);
var lyr_refREI_LARE8150_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_refREI_LARE8150_30, 
                style: style_refREI_LARE8150_30,
                popuplayertitle: 'ref:REI_LARE8150',
                interactive: true,
                title: '<img src="styles/legend/refREI_LARE8150_30.png" /> ref:REI_LARE8150'
            });
var format_refREI_LARE8230_31 = new ol.format.GeoJSON();
var features_refREI_LARE8230_31 = format_refREI_LARE8230_31.readFeatures(json_refREI_LARE8230_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3004'});
var jsonSource_refREI_LARE8230_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_refREI_LARE8230_31.addFeatures(features_refREI_LARE8230_31);
var lyr_refREI_LARE8230_31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_refREI_LARE8230_31, 
                style: style_refREI_LARE8230_31,
                popuplayertitle: 'ref:REI_LARE8230',
                interactive: true,
                title: '<img src="styles/legend/refREI_LARE8230_31.png" /> ref:REI_LARE8230'
            });
var format_refREI_LARE8090_32 = new ol.format.GeoJSON();
var features_refREI_LARE8090_32 = format_refREI_LARE8090_32.readFeatures(json_refREI_LARE8090_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3004'});
var jsonSource_refREI_LARE8090_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_refREI_LARE8090_32.addFeatures(features_refREI_LARE8090_32);
var lyr_refREI_LARE8090_32 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_refREI_LARE8090_32, 
                style: style_refREI_LARE8090_32,
                popuplayertitle: 'ref:REI_LARE8090',
                interactive: true,
                title: '<img src="styles/legend/refREI_LARE8090_32.png" /> ref:REI_LARE8090'
            });
var format_refREI_LARE809A_33 = new ol.format.GeoJSON();
var features_refREI_LARE809A_33 = format_refREI_LARE809A_33.readFeatures(json_refREI_LARE809A_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3004'});
var jsonSource_refREI_LARE809A_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_refREI_LARE809A_33.addFeatures(features_refREI_LARE809A_33);
var lyr_refREI_LARE809A_33 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_refREI_LARE809A_33, 
                style: style_refREI_LARE809A_33,
                popuplayertitle: 'ref:REI_LARE809A',
                interactive: true,
                title: '<img src="styles/legend/refREI_LARE809A_33.png" /> ref:REI_LARE809A'
            });
var format_refREI_LARE8120_34 = new ol.format.GeoJSON();
var features_refREI_LARE8120_34 = format_refREI_LARE8120_34.readFeatures(json_refREI_LARE8120_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3004'});
var jsonSource_refREI_LARE8120_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_refREI_LARE8120_34.addFeatures(features_refREI_LARE8120_34);
var lyr_refREI_LARE8120_34 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_refREI_LARE8120_34, 
                style: style_refREI_LARE8120_34,
                popuplayertitle: 'ref:REI_LARE8120',
                interactive: true,
                title: '<img src="styles/legend/refREI_LARE8120_34.png" /> ref:REI_LARE8120'
            });
var format_refREI_LARE812A_35 = new ol.format.GeoJSON();
var features_refREI_LARE812A_35 = format_refREI_LARE812A_35.readFeatures(json_refREI_LARE812A_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3004'});
var jsonSource_refREI_LARE812A_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_refREI_LARE812A_35.addFeatures(features_refREI_LARE812A_35);
var lyr_refREI_LARE812A_35 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_refREI_LARE812A_35, 
                style: style_refREI_LARE812A_35,
                popuplayertitle: 'ref:REI_LARE812A',
                interactive: true,
                title: '<img src="styles/legend/refREI_LARE812A_35.png" /> ref:REI_LARE812A'
            });
var format_refREI_LARE808A_36 = new ol.format.GeoJSON();
var features_refREI_LARE808A_36 = format_refREI_LARE808A_36.readFeatures(json_refREI_LARE808A_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3004'});
var jsonSource_refREI_LARE808A_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_refREI_LARE808A_36.addFeatures(features_refREI_LARE808A_36);
var lyr_refREI_LARE808A_36 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_refREI_LARE808A_36, 
                style: style_refREI_LARE808A_36,
                popuplayertitle: 'ref:REI_LARE808A',
                interactive: true,
                title: '<img src="styles/legend/refREI_LARE808A_36.png" /> ref:REI_LARE808A'
            });
var format_refREI_LARE808B_37 = new ol.format.GeoJSON();
var features_refREI_LARE808B_37 = format_refREI_LARE808B_37.readFeatures(json_refREI_LARE808B_37, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3004'});
var jsonSource_refREI_LARE808B_37 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_refREI_LARE808B_37.addFeatures(features_refREI_LARE808B_37);
var lyr_refREI_LARE808B_37 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_refREI_LARE808B_37, 
                style: style_refREI_LARE808B_37,
                popuplayertitle: 'ref:REI_LARE808B',
                interactive: true,
                title: '<img src="styles/legend/refREI_LARE808B_37.png" /> ref:REI_LARE808B'
            });
var format_refREI_LARE0940_38 = new ol.format.GeoJSON();
var features_refREI_LARE0940_38 = format_refREI_LARE0940_38.readFeatures(json_refREI_LARE0940_38, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3004'});
var jsonSource_refREI_LARE0940_38 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_refREI_LARE0940_38.addFeatures(features_refREI_LARE0940_38);
var lyr_refREI_LARE0940_38 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_refREI_LARE0940_38, 
                style: style_refREI_LARE0940_38,
                popuplayertitle: 'ref:REI_LARE0940',
                interactive: true,
                title: '<img src="styles/legend/refREI_LARE0940_38.png" /> ref:REI_LARE0940'
            });
var format_refREI_LARE094A_39 = new ol.format.GeoJSON();
var features_refREI_LARE094A_39 = format_refREI_LARE094A_39.readFeatures(json_refREI_LARE094A_39, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3004'});
var jsonSource_refREI_LARE094A_39 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_refREI_LARE094A_39.addFeatures(features_refREI_LARE094A_39);
var lyr_refREI_LARE094A_39 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_refREI_LARE094A_39, 
                style: style_refREI_LARE094A_39,
                popuplayertitle: 'ref:REI_LARE094A',
                interactive: true,
                title: '<img src="styles/legend/refREI_LARE094A_39.png" /> ref:REI_LARE094A'
            });
var format_refREI_LARE094B_40 = new ol.format.GeoJSON();
var features_refREI_LARE094B_40 = format_refREI_LARE094B_40.readFeatures(json_refREI_LARE094B_40, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3004'});
var jsonSource_refREI_LARE094B_40 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_refREI_LARE094B_40.addFeatures(features_refREI_LARE094B_40);
var lyr_refREI_LARE094B_40 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_refREI_LARE094B_40, 
                style: style_refREI_LARE094B_40,
                popuplayertitle: 'ref:REI_LARE094B',
                interactive: true,
                title: '<img src="styles/legend/refREI_LARE094B_40.png" /> ref:REI_LARE094B'
            });
var format_refREI_LARE0930_41 = new ol.format.GeoJSON();
var features_refREI_LARE0930_41 = format_refREI_LARE0930_41.readFeatures(json_refREI_LARE0930_41, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3004'});
var jsonSource_refREI_LARE0930_41 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_refREI_LARE0930_41.addFeatures(features_refREI_LARE0930_41);
var lyr_refREI_LARE0930_41 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_refREI_LARE0930_41, 
                style: style_refREI_LARE0930_41,
                popuplayertitle: 'ref:REI_LARE0930',
                interactive: true,
                title: '<img src="styles/legend/refREI_LARE0930_41.png" /> ref:REI_LARE0930'
            });
var format_refREI_LARE0910_42 = new ol.format.GeoJSON();
var features_refREI_LARE0910_42 = format_refREI_LARE0910_42.readFeatures(json_refREI_LARE0910_42, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3004'});
var jsonSource_refREI_LARE0910_42 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_refREI_LARE0910_42.addFeatures(features_refREI_LARE0910_42);
var lyr_refREI_LARE0910_42 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_refREI_LARE0910_42, 
                style: style_refREI_LARE0910_42,
                popuplayertitle: 'ref:REI_LARE0910',
                interactive: true,
                title: '<img src="styles/legend/refREI_LARE0910_42.png" /> ref:REI_LARE0910'
            });
var format_refREI_LARE0880_43 = new ol.format.GeoJSON();
var features_refREI_LARE0880_43 = format_refREI_LARE0880_43.readFeatures(json_refREI_LARE0880_43, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3004'});
var jsonSource_refREI_LARE0880_43 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_refREI_LARE0880_43.addFeatures(features_refREI_LARE0880_43);
var lyr_refREI_LARE0880_43 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_refREI_LARE0880_43, 
                style: style_refREI_LARE0880_43,
                popuplayertitle: 'ref:REI_LARE0880',
                interactive: true,
                title: '<img src="styles/legend/refREI_LARE0880_43.png" /> ref:REI_LARE0880'
            });
var format_refREI_LARE0870_44 = new ol.format.GeoJSON();
var features_refREI_LARE0870_44 = format_refREI_LARE0870_44.readFeatures(json_refREI_LARE0870_44, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3004'});
var jsonSource_refREI_LARE0870_44 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_refREI_LARE0870_44.addFeatures(features_refREI_LARE0870_44);
var lyr_refREI_LARE0870_44 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_refREI_LARE0870_44, 
                style: style_refREI_LARE0870_44,
                popuplayertitle: 'ref:REI_LARE0870',
                interactive: true,
                title: '<img src="styles/legend/refREI_LARE0870_44.png" /> ref:REI_LARE0870'
            });
var format_refREI_LARE0850_45 = new ol.format.GeoJSON();
var features_refREI_LARE0850_45 = format_refREI_LARE0850_45.readFeatures(json_refREI_LARE0850_45, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3004'});
var jsonSource_refREI_LARE0850_45 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_refREI_LARE0850_45.addFeatures(features_refREI_LARE0850_45);
var lyr_refREI_LARE0850_45 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_refREI_LARE0850_45, 
                style: style_refREI_LARE0850_45,
                popuplayertitle: 'ref:REI_LARE0850',
                interactive: true,
                title: '<img src="styles/legend/refREI_LARE0850_45.png" /> ref:REI_LARE0850'
            });
var format_refREI_LARE0840_46 = new ol.format.GeoJSON();
var features_refREI_LARE0840_46 = format_refREI_LARE0840_46.readFeatures(json_refREI_LARE0840_46, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3004'});
var jsonSource_refREI_LARE0840_46 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_refREI_LARE0840_46.addFeatures(features_refREI_LARE0840_46);
var lyr_refREI_LARE0840_46 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_refREI_LARE0840_46, 
                style: style_refREI_LARE0840_46,
                popuplayertitle: 'ref:REI_LARE0840',
                interactive: true,
                title: '<img src="styles/legend/refREI_LARE0840_46.png" /> ref:REI_LARE0840'
            });
var format_refREI_LARE0800_47 = new ol.format.GeoJSON();
var features_refREI_LARE0800_47 = format_refREI_LARE0800_47.readFeatures(json_refREI_LARE0800_47, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3004'});
var jsonSource_refREI_LARE0800_47 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_refREI_LARE0800_47.addFeatures(features_refREI_LARE0800_47);
var lyr_refREI_LARE0800_47 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_refREI_LARE0800_47, 
                style: style_refREI_LARE0800_47,
                popuplayertitle: 'ref:REI_LARE0800',
                interactive: true,
                title: '<img src="styles/legend/refREI_LARE0800_47.png" /> ref:REI_LARE0800'
            });
var format_refREI_LARE0780_48 = new ol.format.GeoJSON();
var features_refREI_LARE0780_48 = format_refREI_LARE0780_48.readFeatures(json_refREI_LARE0780_48, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3004'});
var jsonSource_refREI_LARE0780_48 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_refREI_LARE0780_48.addFeatures(features_refREI_LARE0780_48);
var lyr_refREI_LARE0780_48 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_refREI_LARE0780_48, 
                style: style_refREI_LARE0780_48,
                popuplayertitle: 'ref:REI_LARE0780',
                interactive: true,
                title: '<img src="styles/legend/refREI_LARE0780_48.png" /> ref:REI_LARE0780'
            });
var format_refREI_LARE0750_49 = new ol.format.GeoJSON();
var features_refREI_LARE0750_49 = format_refREI_LARE0750_49.readFeatures(json_refREI_LARE0750_49, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3004'});
var jsonSource_refREI_LARE0750_49 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_refREI_LARE0750_49.addFeatures(features_refREI_LARE0750_49);
var lyr_refREI_LARE0750_49 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_refREI_LARE0750_49, 
                style: style_refREI_LARE0750_49,
                popuplayertitle: 'ref:REI_LARE0750',
                interactive: true,
                title: '<img src="styles/legend/refREI_LARE0750_49.png" /> ref:REI_LARE0750'
            });
var format_refREI_LARE0660_50 = new ol.format.GeoJSON();
var features_refREI_LARE0660_50 = format_refREI_LARE0660_50.readFeatures(json_refREI_LARE0660_50, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3004'});
var jsonSource_refREI_LARE0660_50 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_refREI_LARE0660_50.addFeatures(features_refREI_LARE0660_50);
var lyr_refREI_LARE0660_50 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_refREI_LARE0660_50, 
                style: style_refREI_LARE0660_50,
                popuplayertitle: 'ref:REI_LARE0660',
                interactive: true,
                title: '<img src="styles/legend/refREI_LARE0660_50.png" /> ref:REI_LARE0660'
            });
var format_refREI_LARE0610_51 = new ol.format.GeoJSON();
var features_refREI_LARE0610_51 = format_refREI_LARE0610_51.readFeatures(json_refREI_LARE0610_51, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3004'});
var jsonSource_refREI_LARE0610_51 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_refREI_LARE0610_51.addFeatures(features_refREI_LARE0610_51);
var lyr_refREI_LARE0610_51 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_refREI_LARE0610_51, 
                style: style_refREI_LARE0610_51,
                popuplayertitle: 'ref:REI_LARE0610',
                interactive: true,
                title: '<img src="styles/legend/refREI_LARE0610_51.png" /> ref:REI_LARE0610'
            });
var format_refREI_LARE0590_52 = new ol.format.GeoJSON();
var features_refREI_LARE0590_52 = format_refREI_LARE0590_52.readFeatures(json_refREI_LARE0590_52, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3004'});
var jsonSource_refREI_LARE0590_52 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_refREI_LARE0590_52.addFeatures(features_refREI_LARE0590_52);
var lyr_refREI_LARE0590_52 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_refREI_LARE0590_52, 
                style: style_refREI_LARE0590_52,
                popuplayertitle: 'ref:REI_LARE0590',
                interactive: true,
                title: '<img src="styles/legend/refREI_LARE0590_52.png" /> ref:REI_LARE0590'
            });
var format_refREI_LARE0470_53 = new ol.format.GeoJSON();
var features_refREI_LARE0470_53 = format_refREI_LARE0470_53.readFeatures(json_refREI_LARE0470_53, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3004'});
var jsonSource_refREI_LARE0470_53 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_refREI_LARE0470_53.addFeatures(features_refREI_LARE0470_53);
var lyr_refREI_LARE0470_53 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_refREI_LARE0470_53, 
                style: style_refREI_LARE0470_53,
                popuplayertitle: 'ref:REI_LARE0470',
                interactive: true,
                title: '<img src="styles/legend/refREI_LARE0470_53.png" /> ref:REI_LARE0470'
            });
var format_refREI_LARE0390_54 = new ol.format.GeoJSON();
var features_refREI_LARE0390_54 = format_refREI_LARE0390_54.readFeatures(json_refREI_LARE0390_54, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3004'});
var jsonSource_refREI_LARE0390_54 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_refREI_LARE0390_54.addFeatures(features_refREI_LARE0390_54);
var lyr_refREI_LARE0390_54 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_refREI_LARE0390_54, 
                style: style_refREI_LARE0390_54,
                popuplayertitle: 'ref:REI_LARE0390',
                interactive: true,
                title: '<img src="styles/legend/refREI_LARE0390_54.png" /> ref:REI_LARE0390'
            });
var format_refREI_LARE0320_55 = new ol.format.GeoJSON();
var features_refREI_LARE0320_55 = format_refREI_LARE0320_55.readFeatures(json_refREI_LARE0320_55, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3004'});
var jsonSource_refREI_LARE0320_55 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_refREI_LARE0320_55.addFeatures(features_refREI_LARE0320_55);
var lyr_refREI_LARE0320_55 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_refREI_LARE0320_55, 
                style: style_refREI_LARE0320_55,
                popuplayertitle: 'ref:REI_LARE0320',
                interactive: true,
                title: '<img src="styles/legend/refREI_LARE0320_55.png" /> ref:REI_LARE0320'
            });
var format_refREI_LARE0210_56 = new ol.format.GeoJSON();
var features_refREI_LARE0210_56 = format_refREI_LARE0210_56.readFeatures(json_refREI_LARE0210_56, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3004'});
var jsonSource_refREI_LARE0210_56 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_refREI_LARE0210_56.addFeatures(features_refREI_LARE0210_56);
var lyr_refREI_LARE0210_56 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_refREI_LARE0210_56, 
                style: style_refREI_LARE0210_56,
                popuplayertitle: 'ref:REI_LARE0210',
                interactive: true,
                title: '<img src="styles/legend/refREI_LARE0210_56.png" /> ref:REI_LARE0210'
            });
var format_refREI_LARE020A_57 = new ol.format.GeoJSON();
var features_refREI_LARE020A_57 = format_refREI_LARE020A_57.readFeatures(json_refREI_LARE020A_57, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3004'});
var jsonSource_refREI_LARE020A_57 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_refREI_LARE020A_57.addFeatures(features_refREI_LARE020A_57);
var lyr_refREI_LARE020A_57 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_refREI_LARE020A_57, 
                style: style_refREI_LARE020A_57,
                popuplayertitle: 'ref:REI_LARE020A',
                interactive: true,
                title: '<img src="styles/legend/refREI_LARE020A_57.png" /> ref:REI_LARE020A'
            });
var format_refREI_LARE0200_58 = new ol.format.GeoJSON();
var features_refREI_LARE0200_58 = format_refREI_LARE0200_58.readFeatures(json_refREI_LARE0200_58, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3004'});
var jsonSource_refREI_LARE0200_58 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_refREI_LARE0200_58.addFeatures(features_refREI_LARE0200_58);
var lyr_refREI_LARE0200_58 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_refREI_LARE0200_58, 
                style: style_refREI_LARE0200_58,
                popuplayertitle: 'ref:REI_LARE0200',
                interactive: true,
                title: '<img src="styles/legend/refREI_LARE0200_58.png" /> ref:REI_LARE0200'
            });
var format_refREI_LARE0190_59 = new ol.format.GeoJSON();
var features_refREI_LARE0190_59 = format_refREI_LARE0190_59.readFeatures(json_refREI_LARE0190_59, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3004'});
var jsonSource_refREI_LARE0190_59 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_refREI_LARE0190_59.addFeatures(features_refREI_LARE0190_59);
var lyr_refREI_LARE0190_59 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_refREI_LARE0190_59, 
                style: style_refREI_LARE0190_59,
                popuplayertitle: 'ref:REI_LARE0190',
                interactive: true,
                title: '<img src="styles/legend/refREI_LARE0190_59.png" /> ref:REI_LARE0190'
            });
var format_refREI_LARE0180_60 = new ol.format.GeoJSON();
var features_refREI_LARE0180_60 = format_refREI_LARE0180_60.readFeatures(json_refREI_LARE0180_60, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3004'});
var jsonSource_refREI_LARE0180_60 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_refREI_LARE0180_60.addFeatures(features_refREI_LARE0180_60);
var lyr_refREI_LARE0180_60 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_refREI_LARE0180_60, 
                style: style_refREI_LARE0180_60,
                popuplayertitle: 'ref:REI_LARE0180',
                interactive: true,
                title: '<img src="styles/legend/refREI_LARE0180_60.png" /> ref:REI_LARE0180'
            });
var format_refREI_LARE018A_61 = new ol.format.GeoJSON();
var features_refREI_LARE018A_61 = format_refREI_LARE018A_61.readFeatures(json_refREI_LARE018A_61, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3004'});
var jsonSource_refREI_LARE018A_61 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_refREI_LARE018A_61.addFeatures(features_refREI_LARE018A_61);
var lyr_refREI_LARE018A_61 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_refREI_LARE018A_61, 
                style: style_refREI_LARE018A_61,
                popuplayertitle: 'ref:REI_LARE018A',
                interactive: true,
                title: '<img src="styles/legend/refREI_LARE018A_61.png" /> ref:REI_LARE018A'
            });
var format_refREI_LARE018B_62 = new ol.format.GeoJSON();
var features_refREI_LARE018B_62 = format_refREI_LARE018B_62.readFeatures(json_refREI_LARE018B_62, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3004'});
var jsonSource_refREI_LARE018B_62 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_refREI_LARE018B_62.addFeatures(features_refREI_LARE018B_62);
var lyr_refREI_LARE018B_62 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_refREI_LARE018B_62, 
                style: style_refREI_LARE018B_62,
                popuplayertitle: 'ref:REI_LARE018B',
                interactive: true,
                title: '<img src="styles/legend/refREI_LARE018B_62.png" /> ref:REI_LARE018B'
            });
var format_refREI_LARE0140_63 = new ol.format.GeoJSON();
var features_refREI_LARE0140_63 = format_refREI_LARE0140_63.readFeatures(json_refREI_LARE0140_63, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3004'});
var jsonSource_refREI_LARE0140_63 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_refREI_LARE0140_63.addFeatures(features_refREI_LARE0140_63);
var lyr_refREI_LARE0140_63 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_refREI_LARE0140_63, 
                style: style_refREI_LARE0140_63,
                popuplayertitle: 'ref:REI_LARE0140',
                interactive: true,
                title: '<img src="styles/legend/refREI_LARE0140_63.png" /> ref:REI_LARE0140'
            });
var format_refREI_LARE0130_64 = new ol.format.GeoJSON();
var features_refREI_LARE0130_64 = format_refREI_LARE0130_64.readFeatures(json_refREI_LARE0130_64, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3004'});
var jsonSource_refREI_LARE0130_64 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_refREI_LARE0130_64.addFeatures(features_refREI_LARE0130_64);
var lyr_refREI_LARE0130_64 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_refREI_LARE0130_64, 
                style: style_refREI_LARE0130_64,
                popuplayertitle: 'ref:REI_LARE0130',
                interactive: true,
                title: '<img src="styles/legend/refREI_LARE0130_64.png" /> ref:REI_LARE0130'
            });
var format_refREI_LARE0120_65 = new ol.format.GeoJSON();
var features_refREI_LARE0120_65 = format_refREI_LARE0120_65.readFeatures(json_refREI_LARE0120_65, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3004'});
var jsonSource_refREI_LARE0120_65 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_refREI_LARE0120_65.addFeatures(features_refREI_LARE0120_65);
var lyr_refREI_LARE0120_65 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_refREI_LARE0120_65, 
                style: style_refREI_LARE0120_65,
                popuplayertitle: 'ref:REI_LARE0120',
                interactive: true,
                title: '<img src="styles/legend/refREI_LARE0120_65.png" /> ref:REI_LARE0120'
            });
var format_refREI_LARE1060_66 = new ol.format.GeoJSON();
var features_refREI_LARE1060_66 = format_refREI_LARE1060_66.readFeatures(json_refREI_LARE1060_66, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3004'});
var jsonSource_refREI_LARE1060_66 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_refREI_LARE1060_66.addFeatures(features_refREI_LARE1060_66);
var lyr_refREI_LARE1060_66 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_refREI_LARE1060_66, 
                style: style_refREI_LARE1060_66,
                popuplayertitle: 'ref:REI_LARE1060',
                interactive: true,
                title: '<img src="styles/legend/refREI_LARE1060_66.png" /> ref:REI_LARE1060'
            });
var format_refREI_LARE1080_67 = new ol.format.GeoJSON();
var features_refREI_LARE1080_67 = format_refREI_LARE1080_67.readFeatures(json_refREI_LARE1080_67, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3004'});
var jsonSource_refREI_LARE1080_67 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_refREI_LARE1080_67.addFeatures(features_refREI_LARE1080_67);
var lyr_refREI_LARE1080_67 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_refREI_LARE1080_67, 
                style: style_refREI_LARE1080_67,
                popuplayertitle: 'ref:REI_LARE1080',
                interactive: true,
                title: '<img src="styles/legend/refREI_LARE1080_67.png" /> ref:REI_LARE1080'
            });
var group_SentieriLARE1OSM = new ol.layer.Group({
                                layers: [lyr_refREI_LARE1060_66,lyr_refREI_LARE1080_67,],
                                fold: 'open',
                                title: 'Sentieri LARE1-OSM'});
var group_SentieriLARE0OSM = new ol.layer.Group({
                                layers: [lyr_refREI_LARE0940_38,lyr_refREI_LARE094A_39,lyr_refREI_LARE094B_40,lyr_refREI_LARE0930_41,lyr_refREI_LARE0910_42,lyr_refREI_LARE0880_43,lyr_refREI_LARE0870_44,lyr_refREI_LARE0850_45,lyr_refREI_LARE0840_46,lyr_refREI_LARE0800_47,lyr_refREI_LARE0780_48,lyr_refREI_LARE0750_49,lyr_refREI_LARE0660_50,lyr_refREI_LARE0610_51,lyr_refREI_LARE0590_52,lyr_refREI_LARE0470_53,lyr_refREI_LARE0390_54,lyr_refREI_LARE0320_55,lyr_refREI_LARE0210_56,lyr_refREI_LARE020A_57,lyr_refREI_LARE0200_58,lyr_refREI_LARE0190_59,lyr_refREI_LARE0180_60,lyr_refREI_LARE018A_61,lyr_refREI_LARE018B_62,lyr_refREI_LARE0140_63,lyr_refREI_LARE0130_64,lyr_refREI_LARE0120_65,],
                                fold: 'close',
                                title: 'Sentieri LARE0-OSM'});
var group_SentieriLARE8OSM = new ol.layer.Group({
                                layers: [lyr_refREI_LARE8080_5,lyr_refREI_LARE8710_6,lyr_refREI_LARE8040_7,lyr_refREI_LARE8010_8,lyr_803etichette_9,lyr_refREI_LARE8060_10,lyr_refREI_LARE8070_11,lyr_refREI_LARE804A_12,lyr_refREI_LARE8060_13,lyr_refREI_LARE806A_14,lyr_refREI_LARE806B_15,lyr_refREI_LARE8050_16,lyr_refREI_LARE805A_17,lyr_refREI_LARE805B_18,lyr_refREI_LARE805C_19,lyr_refREI_LARE8610_20,lyr_refREI_LARE8190_21,lyr_refREI_LARE8270_22,lyr_refREI_LARE8290_23,lyr_refREI_LARE8170_24,lyr_refREI_LARE817B_25,lyr_refREI_LARE861B_26,lyr_refREI_LARE861C_27,lyr_refREI_LARE8650_28,lyr_refREI_LARE8630_29,lyr_refREI_LARE8150_30,lyr_refREI_LARE8230_31,lyr_refREI_LARE8090_32,lyr_refREI_LARE809A_33,lyr_refREI_LARE8120_34,lyr_refREI_LARE812A_35,lyr_refREI_LARE808A_36,lyr_refREI_LARE808B_37,],
                                fold: 'close',
                                title: 'Sentieri LARE8- OSM'});
var group_Sentiero00 = new ol.layer.Group({
                                layers: [lyr_sentiero00_I_shp_3,lyr_sentiero00_ii_shp_4,],
                                fold: 'close',
                                title: 'Sentiero 00'});
var group_LuoghidiPosaPALI = new ol.layer.Group({
                                layers: [lyr_DbLdPsentCAISans_2,],
                                fold: 'open',
                                title: 'Luoghi di Posa - PALI'});
var group_Areecai = new ol.layer.Group({
                                layers: [lyr_LARE8_1,],
                                fold: 'close',
                                title: 'Aree cai'});
var group_Cartografiadisfondo = new ol.layer.Group({
                                layers: [lyr_OpenTopoMap_0,],
                                fold: 'close',
                                title: 'Cartografia di sfondo'});

lyr_OpenTopoMap_0.setVisible(true);lyr_LARE8_1.setVisible(true);lyr_DbLdPsentCAISans_2.setVisible(true);lyr_sentiero00_I_shp_3.setVisible(true);lyr_sentiero00_ii_shp_4.setVisible(true);lyr_refREI_LARE8080_5.setVisible(true);lyr_refREI_LARE8710_6.setVisible(true);lyr_refREI_LARE8040_7.setVisible(true);lyr_refREI_LARE8010_8.setVisible(true);lyr_803etichette_9.setVisible(true);lyr_refREI_LARE8060_10.setVisible(true);lyr_refREI_LARE8070_11.setVisible(true);lyr_refREI_LARE804A_12.setVisible(true);lyr_refREI_LARE8060_13.setVisible(true);lyr_refREI_LARE806A_14.setVisible(true);lyr_refREI_LARE806B_15.setVisible(true);lyr_refREI_LARE8050_16.setVisible(true);lyr_refREI_LARE805A_17.setVisible(true);lyr_refREI_LARE805B_18.setVisible(true);lyr_refREI_LARE805C_19.setVisible(true);lyr_refREI_LARE8610_20.setVisible(true);lyr_refREI_LARE8190_21.setVisible(true);lyr_refREI_LARE8270_22.setVisible(true);lyr_refREI_LARE8290_23.setVisible(true);lyr_refREI_LARE8170_24.setVisible(true);lyr_refREI_LARE817B_25.setVisible(true);lyr_refREI_LARE861B_26.setVisible(true);lyr_refREI_LARE861C_27.setVisible(true);lyr_refREI_LARE8650_28.setVisible(true);lyr_refREI_LARE8630_29.setVisible(true);lyr_refREI_LARE8150_30.setVisible(true);lyr_refREI_LARE8230_31.setVisible(true);lyr_refREI_LARE8090_32.setVisible(true);lyr_refREI_LARE809A_33.setVisible(true);lyr_refREI_LARE8120_34.setVisible(true);lyr_refREI_LARE812A_35.setVisible(true);lyr_refREI_LARE808A_36.setVisible(true);lyr_refREI_LARE808B_37.setVisible(true);lyr_refREI_LARE0940_38.setVisible(true);lyr_refREI_LARE094A_39.setVisible(true);lyr_refREI_LARE094B_40.setVisible(true);lyr_refREI_LARE0930_41.setVisible(true);lyr_refREI_LARE0910_42.setVisible(true);lyr_refREI_LARE0880_43.setVisible(true);lyr_refREI_LARE0870_44.setVisible(true);lyr_refREI_LARE0850_45.setVisible(true);lyr_refREI_LARE0840_46.setVisible(true);lyr_refREI_LARE0800_47.setVisible(true);lyr_refREI_LARE0780_48.setVisible(true);lyr_refREI_LARE0750_49.setVisible(true);lyr_refREI_LARE0660_50.setVisible(true);lyr_refREI_LARE0610_51.setVisible(true);lyr_refREI_LARE0590_52.setVisible(true);lyr_refREI_LARE0470_53.setVisible(true);lyr_refREI_LARE0390_54.setVisible(true);lyr_refREI_LARE0320_55.setVisible(true);lyr_refREI_LARE0210_56.setVisible(true);lyr_refREI_LARE020A_57.setVisible(true);lyr_refREI_LARE0200_58.setVisible(true);lyr_refREI_LARE0190_59.setVisible(true);lyr_refREI_LARE0180_60.setVisible(true);lyr_refREI_LARE018A_61.setVisible(true);lyr_refREI_LARE018B_62.setVisible(true);lyr_refREI_LARE0140_63.setVisible(true);lyr_refREI_LARE0130_64.setVisible(true);lyr_refREI_LARE0120_65.setVisible(true);lyr_refREI_LARE1060_66.setVisible(true);lyr_refREI_LARE1080_67.setVisible(true);
var layersList = [group_Cartografiadisfondo,group_Areecai,group_LuoghidiPosaPALI,group_Sentiero00,group_SentieriLARE8OSM,group_SentieriLARE0OSM,group_SentieriLARE1OSM];
lyr_LARE8_1.set('fieldAliases', {});
lyr_DbLdPsentCAISans_2.set('fieldAliases', {'Sentiero_n': 'Sentiero_n', 'codice sentiero': 'codice sentiero', 'ID_Palo': 'ID_Palo', 'Località': 'Località', 'Sogg_Manutentore': 'Sogg_Manutentore', 'Sogg_finanziatore': 'Sogg_finanziatore', 'gruppo_Montuoso': 'gruppo_Montuoso', 'Comune': 'Comune', 'Regione': 'Regione', 'Provincia': 'Provincia', 'Quota': 'Quota', 'Latitudine_N': 'Latitudine_N', 'Longitudine_E': 'Longitudine_E', 'Note': 'Note', 'Mappa': 'Mappa', 'Materiale': 'Materiale', 'Stato_Conservazione': 'Stato_Conservazione', 'Data_Rilievo': 'Data_Rilievo', 'Rilevatore': 'Rilevatore', 'Nome_File_Foto': 'Nome_File_Foto', 'Esistente /progetto': 'Esistente /progetto', 'Lat Dec': 'Lat Dec', 'Long dec': 'Long dec', });
lyr_sentiero00_I_shp_3.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', 'N.': 'N.', 'N. ex': 'N. ex', 'partenza': 'partenza', 'Arrivo': 'Arrivo', });
lyr_sentiero00_ii_shp_4.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', 'N.': 'N.', 'N. ex': 'N. ex', 'Partenza': 'Partenza', 'Arrivo': 'Arrivo', });
lyr_refREI_LARE8080_5.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'ref_REI': 'ref_REI', 'type': 'type', 'to': 'to', 'survey_dat': 'survey_dat', 'source_ref': 'source_ref', 'route': 'route', 'roundtrip': 'roundtrip', 'ref': 'ref', 'osmc_symbo': 'osmc_symbo', 'operator': 'operator', 'old_ref': 'old_ref', 'network': 'network', 'from': 'from', 'cai_scale': 'cai_scale', });
lyr_refREI_LARE8710_6.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'ref_REI': 'ref_REI', 'type': 'type', 'to': 'to', 'source_ref': 'source_ref', 'route': 'route', 'ref': 'ref', 'osmc_symbo': 'osmc_symbo', 'old_ref': 'old_ref', 'network': 'network', 'from': 'from', 'cai_scale': 'cai_scale', });
lyr_refREI_LARE8040_7.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'ref_REI': 'ref_REI', 'type': 'type', 'to': 'to', 'survey_dat': 'survey_dat', 'source_ref': 'source_ref', 'route': 'route', 'ref': 'ref', 'osmc_symbo': 'osmc_symbo', 'old_ref': 'old_ref', 'network': 'network', 'from': 'from', 'cai_scale': 'cai_scale', });
lyr_refREI_LARE8010_8.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'ref_REI': 'ref_REI', 'type': 'type', 'to': 'to', 'survey_dat': 'survey_dat', 'source_ref': 'source_ref', 'route': 'route', 'roundtrip': 'roundtrip', 'ref': 'ref', 'osmc_symbo': 'osmc_symbo', 'operator': 'operator', 'old_ref': 'old_ref', 'network': 'network', 'from': 'from', 'cai_scale': 'cai_scale', });
lyr_803etichette_9.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'ref_REI': 'ref_REI', 'type': 'type', 'to': 'to', 'survey_dat': 'survey_dat', 'source_ref': 'source_ref', 'route': 'route', 'roundtrip': 'roundtrip', 'ref': 'ref', 'osmc_symbo': 'osmc_symbo', 'operator': 'operator', 'old_ref': 'old_ref', 'network': 'network', 'from': 'from', 'cai_scale': 'cai_scale', });
lyr_refREI_LARE8060_10.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'ref_REI': 'ref_REI', 'type': 'type', 'to': 'to', 'survey_dat': 'survey_dat', 'source_ref': 'source_ref', 'route': 'route', 'roundtrip': 'roundtrip', 'ref': 'ref', 'osmc_symbo': 'osmc_symbo', 'operator': 'operator', 'old_ref': 'old_ref', 'network': 'network', 'from': 'from', 'cai_scale': 'cai_scale', });
lyr_refREI_LARE8070_11.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'ref_REI': 'ref_REI', 'type': 'type', 'to': 'to', 'survey_dat': 'survey_dat', 'source_ref': 'source_ref', 'route': 'route', 'ref': 'ref', 'osmc_symbo': 'osmc_symbo', 'old_ref': 'old_ref', 'network': 'network', 'from': 'from', 'cai_scale': 'cai_scale', });
lyr_refREI_LARE804A_12.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'ref_REI': 'ref_REI', 'type': 'type', 'to': 'to', 'survey_dat': 'survey_dat', 'route': 'route', 'roundtrip': 'roundtrip', 'ref': 'ref', 'osmc_symbo': 'osmc_symbo', 'operator': 'operator', 'network': 'network', 'from': 'from', 'cai_scale': 'cai_scale', });
lyr_refREI_LARE8060_13.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'ref_REI': 'ref_REI', 'type': 'type', 'to': 'to', 'survey_dat': 'survey_dat', 'source_ref': 'source_ref', 'route': 'route', 'roundtrip': 'roundtrip', 'ref': 'ref', 'osmc_symbo': 'osmc_symbo', 'operator': 'operator', 'old_ref': 'old_ref', 'network': 'network', 'from': 'from', 'cai_scale': 'cai_scale', });
lyr_refREI_LARE806A_14.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'ref_REI': 'ref_REI', 'type': 'type', 'to': 'to', 'survey_dat': 'survey_dat', 'source_ref': 'source_ref', 'route': 'route', 'roundtrip': 'roundtrip', 'ref': 'ref', 'osmc_symbo': 'osmc_symbo', 'operator': 'operator', 'old_ref': 'old_ref', 'network': 'network', 'from': 'from', 'cai_scale': 'cai_scale', });
lyr_refREI_LARE806B_15.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'ref_REI': 'ref_REI', 'type': 'type', 'to': 'to', 'source_ref': 'source_ref', 'route': 'route', 'ref': 'ref', 'osmc_symbo': 'osmc_symbo', 'old_ref': 'old_ref', 'network': 'network', 'from': 'from', 'cai_scale': 'cai_scale', });
lyr_refREI_LARE8050_16.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'ref_REI': 'ref_REI', 'type': 'type', 'to': 'to', 'source_ref': 'source_ref', 'route': 'route', 'ref': 'ref', 'osmc_symbo': 'osmc_symbo', 'operator': 'operator', 'old_ref': 'old_ref', 'network': 'network', 'from': 'from', 'cai_scale': 'cai_scale', });
lyr_refREI_LARE805A_17.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'ref_REI': 'ref_REI', 'type': 'type', 'to': 'to', 'survey_dat': 'survey_dat', 'source_ref': 'source_ref', 'route': 'route', 'ref': 'ref', 'osmc_symbo': 'osmc_symbo', 'old_ref': 'old_ref', 'network': 'network', 'from': 'from', 'cai_scale': 'cai_scale', });
lyr_refREI_LARE805B_18.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'ref_REI': 'ref_REI', 'type': 'type', 'to': 'to', 'source_ref': 'source_ref', 'route': 'route', 'ref': 'ref', 'osmc_symbo': 'osmc_symbo', 'old_ref': 'old_ref', 'network': 'network', 'from': 'from', 'cai_scale': 'cai_scale', });
lyr_refREI_LARE805C_19.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'ref_REI': 'ref_REI', 'type': 'type', 'to': 'to', 'survey_dat': 'survey_dat', 'source_ref': 'source_ref', 'route': 'route', 'roundtrip': 'roundtrip', 'ref': 'ref', 'osmc_symbo': 'osmc_symbo', 'operator': 'operator', 'old_ref': 'old_ref', 'network': 'network', 'from': 'from', 'cai_scale': 'cai_scale', });
lyr_refREI_LARE8610_20.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'ref_REI': 'ref_REI', 'type': 'type', 'to': 'to', 'route': 'route', 'ref': 'ref', 'osmc_symbo': 'osmc_symbo', 'operator': 'operator', 'old_ref': 'old_ref', 'network': 'network', 'from': 'from', 'cai_scale': 'cai_scale', });
lyr_refREI_LARE8190_21.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'ref_REI': 'ref_REI', 'type': 'type', 'to': 'to', 'survey_dat': 'survey_dat', 'source_ref': 'source_ref', 'route': 'route', 'roundtrip': 'roundtrip', 'ref': 'ref', 'osmc_symbo': 'osmc_symbo', 'operator': 'operator', 'old_ref': 'old_ref', 'network': 'network', 'from': 'from', 'cai_scale': 'cai_scale', });
lyr_refREI_LARE8270_22.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'ref_REI': 'ref_REI', 'type': 'type', 'to': 'to', 'survey_dat': 'survey_dat', 'source_ref': 'source_ref', 'route': 'route', 'roundtrip': 'roundtrip', 'ref': 'ref', 'osmc_symbo': 'osmc_symbo', 'operator': 'operator', 'old_ref': 'old_ref', 'network': 'network', 'from': 'from', 'cai_scale': 'cai_scale', });
lyr_refREI_LARE8290_23.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'ref_REI': 'ref_REI', 'type': 'type', 'to': 'to', 'survey_dat': 'survey_dat', 'source_ref': 'source_ref', 'route': 'route', 'roundtrip': 'roundtrip', 'ref': 'ref', 'osmc_symbo': 'osmc_symbo', 'operator': 'operator', 'old_ref': 'old_ref', 'network': 'network', 'from': 'from', 'cai_scale': 'cai_scale', });
lyr_refREI_LARE8170_24.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'ref_REI': 'ref_REI', 'via': 'via', 'type': 'type', 'to': 'to', 'source_ref': 'source_ref', 'route': 'route', 'ref': 'ref', 'osmc_symbo': 'osmc_symbo', 'operator': 'operator', 'old_ref': 'old_ref', 'network': 'network', 'from': 'from', 'distance': 'distance', 'cai_scale': 'cai_scale', });
lyr_refREI_LARE817B_25.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'ref_REI': 'ref_REI', 'type': 'type', 'to': 'to', 'symbol_it': 'symbol_it', 'symbol': 'symbol', 'source_ref': 'source_ref', 'route': 'route', 'ref': 'ref', 'osmc_symbo': 'osmc_symbo', 'operator': 'operator', 'old_ref': 'old_ref', 'network': 'network', 'from': 'from', 'distance': 'distance', 'cai_scale': 'cai_scale', });
lyr_refREI_LARE861B_26.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'ref_REI': 'ref_REI', 'type': 'type', 'to': 'to', 'symbol_it': 'symbol_it', 'symbol': 'symbol', 'survey_dat': 'survey_dat', 'source_ref': 'source_ref', 'rwn_name': 'rwn_name', 'route': 'route', 'ref': 'ref', 'osmc_symbo': 'osmc_symbo', 'operator': 'operator', 'old_ref': 'old_ref', 'network': 'network', 'from': 'from', 'cai_scale': 'cai_scale', });
lyr_refREI_LARE861C_27.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'ref_REI': 'ref_REI', 'type': 'type', 'to': 'to', 'source_ref': 'source_ref', 'route': 'route', 'ref': 'ref', 'osmc_symbo': 'osmc_symbo', 'old_ref': 'old_ref', 'network': 'network', 'from': 'from', 'cai_scale': 'cai_scale', });
lyr_refREI_LARE8650_28.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'ref_REI': 'ref_REI', 'type': 'type', 'to': 'to', 'survey_dat': 'survey_dat', 'source_ref': 'source_ref', 'route': 'route', 'ref': 'ref', 'osmc_symbo': 'osmc_symbo', 'operator': 'operator', 'old_ref': 'old_ref', 'network': 'network', 'from': 'from', 'cai_scale': 'cai_scale', });
lyr_refREI_LARE8630_29.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'ref_REI': 'ref_REI', 'type': 'type', 'to': 'to', 'survey_dat': 'survey_dat', 'source_ref': 'source_ref', 'route': 'route', 'roundtrip': 'roundtrip', 'ref': 'ref', 'osmc_symbo': 'osmc_symbo', 'old_ref': 'old_ref', 'network': 'network', 'from': 'from', 'cai_scale': 'cai_scale', });
lyr_refREI_LARE8150_30.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'ref_REI': 'ref_REI', 'type': 'type', 'to': 'to', 'survey_dat': 'survey_dat', 'source_ref': 'source_ref', 'route': 'route', 'roundtrip': 'roundtrip', 'ref': 'ref', 'osmc_symbo': 'osmc_symbo', 'operator': 'operator', 'old_ref': 'old_ref', 'network': 'network', 'from': 'from', 'cai_scale': 'cai_scale', });
lyr_refREI_LARE8230_31.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'ref_REI': 'ref_REI', 'type': 'type', 'to': 'to', 'survey_dat': 'survey_dat', 'source_ref': 'source_ref', 'route': 'route', 'roundtrip': 'roundtrip', 'ref': 'ref', 'osmc_symbo': 'osmc_symbo', 'operator': 'operator', 'old_ref': 'old_ref', 'network': 'network', 'from': 'from', 'cai_scale': 'cai_scale', });
lyr_refREI_LARE8090_32.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'ref_REI': 'ref_REI', 'type': 'type', 'to': 'to', 'survey_dat': 'survey_dat', 'source_ref': 'source_ref', 'route': 'route', 'roundtrip': 'roundtrip', 'ref': 'ref', 'osmc_symbo': 'osmc_symbo', 'old_ref': 'old_ref', 'network': 'network', 'from': 'from', 'cai_scale': 'cai_scale', });
lyr_refREI_LARE809A_33.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'ref_REI': 'ref_REI', 'type': 'type', 'to': 'to', 'survey_dat': 'survey_dat', 'source_ref': 'source_ref', 'route': 'route', 'ref': 'ref', 'osmc_symbo': 'osmc_symbo', 'old_ref': 'old_ref', 'network': 'network', 'from': 'from', 'cai_scale': 'cai_scale', });
lyr_refREI_LARE8120_34.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'ref_REI': 'ref_REI', 'type': 'type', 'to': 'to', 'survey_dat': 'survey_dat', 'source_ref': 'source_ref', 'route': 'route', 'roundtrip': 'roundtrip', 'ref': 'ref', 'osmc_symbo': 'osmc_symbo', 'operator': 'operator', 'old_ref': 'old_ref', 'network': 'network', 'from': 'from', 'cai_scale': 'cai_scale', });
lyr_refREI_LARE812A_35.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'ref_REI': 'ref_REI', 'type': 'type', 'to': 'to', 'survey_dat': 'survey_dat', 'source_ref': 'source_ref', 'route': 'route', 'roundtrip': 'roundtrip', 'ref': 'ref', 'osmc_symbo': 'osmc_symbo', 'operator': 'operator', 'old_ref': 'old_ref', 'network': 'network', 'from': 'from', 'cai_scale': 'cai_scale', });
lyr_refREI_LARE808A_36.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'ref_REI': 'ref_REI', 'type': 'type', 'to': 'to', 'survey_dat': 'survey_dat', 'source_ref': 'source_ref', 'route': 'route', 'roundtrip': 'roundtrip', 'ref': 'ref', 'osmc_symbo': 'osmc_symbo', 'operator': 'operator', 'old_ref': 'old_ref', 'network': 'network', 'from': 'from', 'cai_scale': 'cai_scale', });
lyr_refREI_LARE808B_37.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'ref_REI': 'ref_REI', 'type': 'type', 'to': 'to', 'survey_dat': 'survey_dat', 'source_ref': 'source_ref', 'route': 'route', 'roundtrip': 'roundtrip', 'ref': 'ref', 'osmc_symbo': 'osmc_symbo', 'operator': 'operator', 'old_ref': 'old_ref', 'network': 'network', 'from': 'from', 'cai_scale': 'cai_scale', });
lyr_refREI_LARE0940_38.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'ref_REI': 'ref_REI', 'type': 'type', 'to': 'to', 'source_ref': 'source_ref', 'route': 'route', 'ref': 'ref', 'osmc_symbo': 'osmc_symbo', 'old_ref': 'old_ref', 'network': 'network', 'from': 'from', 'cai_scale': 'cai_scale', });
lyr_refREI_LARE094A_39.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'ref_REI': 'ref_REI', 'type': 'type', 'to': 'to', 'source_ref': 'source_ref', 'route': 'route', 'ref': 'ref', 'osmc_symbo': 'osmc_symbo', 'operator': 'operator', 'old_ref': 'old_ref', 'network': 'network', 'from': 'from', 'cai_scale': 'cai_scale', });
lyr_refREI_LARE094B_40.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'ref_REI': 'ref_REI', 'type': 'type', 'to': 'to', 'source_ref': 'source_ref', 'route': 'route', 'ref': 'ref', 'osmc_symbo': 'osmc_symbo', 'operator': 'operator', 'old_ref': 'old_ref', 'network': 'network', 'from': 'from', 'cai_scale': 'cai_scale', });
lyr_refREI_LARE0930_41.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'ref_REI': 'ref_REI', 'type': 'type', 'to': 'to', 'source_ref': 'source_ref', 'route': 'route', 'ref': 'ref', 'osmc_symbo': 'osmc_symbo', 'network': 'network', 'from': 'from', 'cai_scale': 'cai_scale', 'access': 'access', });
lyr_refREI_LARE0910_42.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'ref_REI': 'ref_REI', 'type': 'type', 'to': 'to', 'source_ref': 'source_ref', 'route': 'route', 'ref': 'ref', 'osmc_symbo': 'osmc_symbo', 'network': 'network', 'from': 'from', 'cai_scale': 'cai_scale', 'access': 'access', });
lyr_refREI_LARE0880_43.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'ref_REI': 'ref_REI', 'type': 'type', 'to': 'to', 'source_ref': 'source_ref', 'route': 'route', 'ref': 'ref', 'osmc_symbo': 'osmc_symbo', 'operator': 'operator', 'network': 'network', 'from': 'from', 'cai_scale': 'cai_scale', });
lyr_refREI_LARE0870_44.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'ref_REI': 'ref_REI', 'type': 'type', 'to': 'to', 'source_ref': 'source_ref', 'route': 'route', 'ref': 'ref', 'osmc_symbo': 'osmc_symbo', 'network': 'network', 'from': 'from', 'cai_scale': 'cai_scale', });
lyr_refREI_LARE0850_45.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'ref_REI': 'ref_REI', 'type': 'type', 'to': 'to', 'source_ref': 'source_ref', 'route': 'route', 'ref': 'ref', 'osmc_symbo': 'osmc_symbo', 'network': 'network', 'from': 'from', 'cai_scale': 'cai_scale', });
lyr_refREI_LARE0840_46.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'ref_REI': 'ref_REI', 'type': 'type', 'to': 'to', 'source_ref': 'source_ref', 'route': 'route', 'ref': 'ref', 'osmc_symbo': 'osmc_symbo', 'network': 'network', 'from': 'from', 'cai_scale': 'cai_scale', });
lyr_refREI_LARE0800_47.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'ref_REI': 'ref_REI', 'type': 'type', 'to': 'to', 'source_ref': 'source_ref', 'route': 'route', 'ref': 'ref', 'osmc_symbo': 'osmc_symbo', 'network': 'network', 'from': 'from', 'cai_scale': 'cai_scale', });
lyr_refREI_LARE0780_48.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'ref_REI': 'ref_REI', 'type': 'type', 'to': 'to', 'source_ref': 'source_ref', 'route': 'route', 'ref': 'ref', 'osmc_symbo': 'osmc_symbo', 'network': 'network', 'from': 'from', 'cai_scale': 'cai_scale', });
lyr_refREI_LARE0750_49.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'ref_REI': 'ref_REI', 'type': 'type', 'to': 'to', 'source_ref': 'source_ref', 'route': 'route', 'ref': 'ref', 'osmc_symbo': 'osmc_symbo', 'network': 'network', 'from': 'from', 'cai_scale': 'cai_scale', });
lyr_refREI_LARE0660_50.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'ref_REI': 'ref_REI', 'type': 'type', 'to': 'to', 'source_ref': 'source_ref', 'route': 'route', 'ref': 'ref', 'osmc_symbo': 'osmc_symbo', 'network': 'network', 'from': 'from', 'distance': 'distance', 'cai_scale': 'cai_scale', 'access': 'access', });
lyr_refREI_LARE0610_51.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'ref_REI': 'ref_REI', 'type': 'type', 'to': 'to', 'source_ref': 'source_ref', 'route': 'route', 'ref': 'ref', 'osmc_symbo': 'osmc_symbo', 'network': 'network', 'from': 'from', 'distance': 'distance', 'cai_scale': 'cai_scale', });
lyr_refREI_LARE0590_52.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'ref_REI': 'ref_REI', 'website': 'website', 'type': 'type', 'to': 'to', 'source_ref': 'source_ref', 'route': 'route', 'ref': 'ref', 'osmc_symbo': 'osmc_symbo', 'operator': 'operator', 'network': 'network', 'from': 'from', 'cai_scale': 'cai_scale', });
lyr_refREI_LARE0470_53.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'ref_REI': 'ref_REI', 'type': 'type', 'to': 'to', 'source_ref': 'source_ref', 'route': 'route', 'ref': 'ref', 'osmc_symbo': 'osmc_symbo', 'network': 'network', 'from': 'from', 'cai_scale': 'cai_scale', });
lyr_refREI_LARE0390_54.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'ref_REI': 'ref_REI', 'type': 'type', 'to': 'to', 'source_ref': 'source_ref', 'route': 'route', 'ref': 'ref', 'osmc_symbo': 'osmc_symbo', 'network': 'network', 'from': 'from', 'cai_scale': 'cai_scale', });
lyr_refREI_LARE0320_55.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'ref_REI': 'ref_REI', 'type': 'type', 'to': 'to', 'source_ref': 'source_ref', 'route': 'route', 'ref': 'ref', 'osmc_symbo': 'osmc_symbo', 'operator': 'operator', 'old_ref': 'old_ref', 'network': 'network', 'from': 'from', 'distance': 'distance', 'cai_scale': 'cai_scale', });
lyr_refREI_LARE0210_56.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'ref_REI': 'ref_REI', 'type': 'type', 'to': 'to', 'source_ref': 'source_ref', 'route': 'route', 'ref': 'ref', 'osmc_symbo': 'osmc_symbo', 'old_ref': 'old_ref', 'network': 'network', 'from': 'from', 'descriptio': 'descriptio', 'cai_scale': 'cai_scale', });
lyr_refREI_LARE020A_57.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'ref_REI': 'ref_REI', 'type': 'type', 'to': 'to', 'source_ref': 'source_ref', 'route': 'route', 'ref': 'ref', 'osmc_symbo': 'osmc_symbo', 'network': 'network', 'from': 'from', 'cai_scale': 'cai_scale', });
lyr_refREI_LARE0200_58.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'ref_REI': 'ref_REI', 'type': 'type', 'to': 'to', 'source_ref': 'source_ref', 'route': 'route', 'ref': 'ref', 'osmc_symbo': 'osmc_symbo', 'network': 'network', 'from': 'from', 'cai_scale': 'cai_scale', });
lyr_refREI_LARE0190_59.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'ref_REI': 'ref_REI', 'type': 'type', 'to': 'to', 'source_ref': 'source_ref', 'route': 'route', 'ref': 'ref', 'osmc_symbo': 'osmc_symbo', 'old_ref': 'old_ref', 'network': 'network', 'name': 'name', 'length': 'length', 'from': 'from', 'cai_scale': 'cai_scale', });
lyr_refREI_LARE0180_60.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'ref_REI': 'ref_REI', 'type': 'type', 'to': 'to', 'source_ref': 'source_ref', 'route': 'route', 'ref': 'ref', 'osmc_symbo': 'osmc_symbo', 'operator': 'operator', 'old_ref': 'old_ref', 'network': 'network', 'from': 'from', 'cai_scale': 'cai_scale', });
lyr_refREI_LARE018A_61.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'ref_REI': 'ref_REI', 'type': 'type', 'to': 'to', 'route': 'route', 'ref': 'ref', 'osmc_symbo': 'osmc_symbo', 'old_ref': 'old_ref', 'network': 'network', 'from': 'from', 'descriptio': 'descriptio', 'cai_scale': 'cai_scale', });
lyr_refREI_LARE018B_62.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'ref_REI': 'ref_REI', 'type': 'type', 'to': 'to', 'route': 'route', 'ref': 'ref', 'osmc_symbo': 'osmc_symbo', 'old_ref': 'old_ref', 'network': 'network', 'from': 'from', 'descriptio': 'descriptio', 'cai_scale': 'cai_scale', });
lyr_refREI_LARE0140_63.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'ref_REI': 'ref_REI', 'type': 'type', 'to': 'to', 'source_ref': 'source_ref', 'route': 'route', 'ref': 'ref', 'osmc_symbo': 'osmc_symbo', 'network': 'network', 'from': 'from', 'cai_scale': 'cai_scale', });
lyr_refREI_LARE0130_64.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'ref_REI': 'ref_REI', 'type': 'type', 'to': 'to', 'source_ref': 'source_ref', 'route': 'route', 'ref': 'ref', 'osmc_symbo': 'osmc_symbo', 'network': 'network', 'from': 'from', 'cai_scale': 'cai_scale', });
lyr_refREI_LARE0120_65.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'ref_REI': 'ref_REI', 'type': 'type', 'to': 'to', 'source_ref': 'source_ref', 'route': 'route', 'ref': 'ref', 'osmc_symbo': 'osmc_symbo', 'network': 'network', 'from': 'from', 'cai_scale': 'cai_scale', });
lyr_refREI_LARE1060_66.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'ref_REI': 'ref_REI', 'type': 'type', 'to': 'to', 'source_ref': 'source_ref', 'route': 'route', 'ref': 'ref', 'osmc_symbo': 'osmc_symbo', 'network': 'network', 'from': 'from', 'cai_scale': 'cai_scale', });
lyr_refREI_LARE1080_67.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'ref:REI': 'ref:REI', 'type': 'type', 'to': 'to', 'source:ref': 'source:ref', 'route': 'route', 'ref': 'ref', 'osmc:symbol': 'osmc:symbol', 'network': 'network', 'from': 'from', 'cai_scale': 'cai_scale', });
lyr_LARE8_1.set('fieldImages', {});
lyr_DbLdPsentCAISans_2.set('fieldImages', {'Sentiero_n': 'TextEdit', 'codice sentiero': 'Hidden', 'ID_Palo': 'TextEdit', 'Località': 'TextEdit', 'Sogg_Manutentore': 'Hidden', 'Sogg_finanziatore': 'Hidden', 'gruppo_Montuoso': 'Hidden', 'Comune': 'Hidden', 'Regione': 'Hidden', 'Provincia': 'Hidden', 'Quota': 'Hidden', 'Latitudine_N': 'Hidden', 'Longitudine_E': 'Hidden', 'Note': 'TextEdit', 'Mappa': 'Hidden', 'Materiale': 'TextEdit', 'Stato_Conservazione': 'TextEdit', 'Data_Rilievo': 'TextEdit', 'Rilevatore': 'TextEdit', 'Nome_File_Foto': 'Hidden', 'Esistente /progetto': 'TextEdit', 'Lat Dec': 'TextEdit', 'Long dec': 'TextEdit', });
lyr_sentiero00_I_shp_3.set('fieldImages', {'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'TextEdit', 'type': 'TextEdit', 'N.': 'Range', 'N. ex': 'TextEdit', 'partenza': 'TextEdit', 'Arrivo': 'TextEdit', });
lyr_sentiero00_ii_shp_4.set('fieldImages', {'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'TextEdit', 'type': 'TextEdit', 'N.': 'Range', 'N. ex': 'TextEdit', 'Partenza': 'TextEdit', 'Arrivo': 'TextEdit', });
lyr_refREI_LARE8080_5.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'ref_REI': 'TextEdit', 'type': 'TextEdit', 'to': 'TextEdit', 'survey_dat': 'TextEdit', 'source_ref': 'TextEdit', 'route': 'TextEdit', 'roundtrip': 'TextEdit', 'ref': 'TextEdit', 'osmc_symbo': 'TextEdit', 'operator': 'TextEdit', 'old_ref': 'TextEdit', 'network': 'TextEdit', 'from': 'TextEdit', 'cai_scale': 'TextEdit', });
lyr_refREI_LARE8710_6.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'ref_REI': '', 'type': 'TextEdit', 'to': 'TextEdit', 'source_ref': '', 'route': 'TextEdit', 'ref': 'TextEdit', 'osmc_symbo': '', 'old_ref': 'TextEdit', 'network': 'TextEdit', 'from': 'TextEdit', 'cai_scale': 'TextEdit', });
lyr_refREI_LARE8040_7.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'ref_REI': 'TextEdit', 'type': 'TextEdit', 'to': 'TextEdit', 'survey_dat': 'TextEdit', 'source_ref': 'TextEdit', 'route': 'TextEdit', 'ref': 'TextEdit', 'osmc_symbo': 'TextEdit', 'old_ref': 'TextEdit', 'network': 'TextEdit', 'from': 'TextEdit', 'cai_scale': 'TextEdit', });
lyr_refREI_LARE8010_8.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'ref_REI': '', 'type': 'TextEdit', 'to': 'TextEdit', 'survey_dat': '', 'source_ref': '', 'route': 'TextEdit', 'roundtrip': '', 'ref': 'TextEdit', 'osmc_symbo': '', 'operator': '', 'old_ref': 'TextEdit', 'network': 'TextEdit', 'from': 'TextEdit', 'cai_scale': 'TextEdit', });
lyr_803etichette_9.set('fieldImages', {'fid': 'TextEdit', 'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'ref_REI': 'TextEdit', 'type': 'TextEdit', 'to': 'TextEdit', 'survey_dat': 'TextEdit', 'source_ref': 'TextEdit', 'route': 'TextEdit', 'roundtrip': 'TextEdit', 'ref': 'TextEdit', 'osmc_symbo': 'TextEdit', 'operator': 'TextEdit', 'old_ref': 'TextEdit', 'network': 'TextEdit', 'from': 'TextEdit', 'cai_scale': 'TextEdit', });
lyr_refREI_LARE8060_10.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'ref_REI': '', 'type': 'TextEdit', 'to': 'TextEdit', 'survey_dat': '', 'source_ref': '', 'route': 'TextEdit', 'roundtrip': '', 'ref': 'TextEdit', 'osmc_symbo': '', 'operator': '', 'old_ref': 'TextEdit', 'network': 'TextEdit', 'from': 'TextEdit', 'cai_scale': 'TextEdit', });
lyr_refREI_LARE8070_11.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'ref_REI': '', 'type': 'TextEdit', 'to': 'TextEdit', 'survey_dat': '', 'source_ref': '', 'route': 'TextEdit', 'ref': 'TextEdit', 'osmc_symbo': '', 'old_ref': 'TextEdit', 'network': 'TextEdit', 'from': 'TextEdit', 'cai_scale': 'TextEdit', });
lyr_refREI_LARE804A_12.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'ref_REI': '', 'type': 'TextEdit', 'to': 'TextEdit', 'survey_dat': '', 'route': 'TextEdit', 'roundtrip': '', 'ref': 'TextEdit', 'osmc_symbo': '', 'operator': '', 'network': 'TextEdit', 'from': 'TextEdit', 'cai_scale': 'TextEdit', });
lyr_refREI_LARE8060_13.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'ref_REI': '', 'type': 'TextEdit', 'to': 'TextEdit', 'survey_dat': '', 'source_ref': '', 'route': 'TextEdit', 'roundtrip': '', 'ref': 'TextEdit', 'osmc_symbo': '', 'operator': '', 'old_ref': 'TextEdit', 'network': 'TextEdit', 'from': 'TextEdit', 'cai_scale': 'TextEdit', });
lyr_refREI_LARE806A_14.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'ref_REI': '', 'type': 'TextEdit', 'to': 'TextEdit', 'survey_dat': '', 'source_ref': '', 'route': 'TextEdit', 'roundtrip': '', 'ref': 'TextEdit', 'osmc_symbo': '', 'operator': '', 'old_ref': 'TextEdit', 'network': 'TextEdit', 'from': 'TextEdit', 'cai_scale': 'TextEdit', });
lyr_refREI_LARE806B_15.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'ref_REI': '', 'type': 'TextEdit', 'to': 'TextEdit', 'source_ref': '', 'route': 'TextEdit', 'ref': 'TextEdit', 'osmc_symbo': '', 'old_ref': 'TextEdit', 'network': 'TextEdit', 'from': 'TextEdit', 'cai_scale': 'TextEdit', });
lyr_refREI_LARE8050_16.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'ref_REI': '', 'type': 'TextEdit', 'to': 'TextEdit', 'source_ref': '', 'route': 'TextEdit', 'ref': 'TextEdit', 'osmc_symbo': '', 'operator': '', 'old_ref': 'TextEdit', 'network': 'TextEdit', 'from': 'TextEdit', 'cai_scale': 'TextEdit', });
lyr_refREI_LARE805A_17.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'ref_REI': '', 'type': 'TextEdit', 'to': 'TextEdit', 'survey_dat': '', 'source_ref': '', 'route': 'TextEdit', 'ref': 'TextEdit', 'osmc_symbo': '', 'old_ref': 'TextEdit', 'network': 'TextEdit', 'from': 'TextEdit', 'cai_scale': 'TextEdit', });
lyr_refREI_LARE805B_18.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'ref_REI': '', 'type': 'TextEdit', 'to': 'TextEdit', 'source_ref': '', 'route': 'TextEdit', 'ref': 'TextEdit', 'osmc_symbo': '', 'old_ref': 'TextEdit', 'network': 'TextEdit', 'from': 'TextEdit', 'cai_scale': 'TextEdit', });
lyr_refREI_LARE805C_19.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'ref_REI': '', 'type': 'TextEdit', 'to': 'TextEdit', 'survey_dat': '', 'source_ref': '', 'route': 'TextEdit', 'roundtrip': '', 'ref': 'TextEdit', 'osmc_symbo': '', 'operator': '', 'old_ref': 'TextEdit', 'network': 'TextEdit', 'from': 'TextEdit', 'cai_scale': 'TextEdit', });
lyr_refREI_LARE8610_20.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'ref_REI': '', 'type': 'TextEdit', 'to': 'TextEdit', 'route': 'TextEdit', 'ref': 'TextEdit', 'osmc_symbo': '', 'operator': '', 'old_ref': 'TextEdit', 'network': 'TextEdit', 'from': 'TextEdit', 'cai_scale': 'TextEdit', });
lyr_refREI_LARE8190_21.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'ref_REI': '', 'type': 'TextEdit', 'to': 'TextEdit', 'survey_dat': '', 'source_ref': '', 'route': 'TextEdit', 'roundtrip': '', 'ref': 'TextEdit', 'osmc_symbo': '', 'operator': '', 'old_ref': 'TextEdit', 'network': 'TextEdit', 'from': 'TextEdit', 'cai_scale': 'TextEdit', });
lyr_refREI_LARE8270_22.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'ref_REI': '', 'type': 'TextEdit', 'to': 'TextEdit', 'survey_dat': '', 'source_ref': '', 'route': 'TextEdit', 'roundtrip': '', 'ref': 'TextEdit', 'osmc_symbo': '', 'operator': '', 'old_ref': 'TextEdit', 'network': 'TextEdit', 'from': 'TextEdit', 'cai_scale': 'TextEdit', });
lyr_refREI_LARE8290_23.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'ref_REI': '', 'type': 'TextEdit', 'to': 'TextEdit', 'survey_dat': '', 'source_ref': '', 'route': 'TextEdit', 'roundtrip': '', 'ref': 'TextEdit', 'osmc_symbo': '', 'operator': '', 'old_ref': 'TextEdit', 'network': 'TextEdit', 'from': 'TextEdit', 'cai_scale': 'TextEdit', });
lyr_refREI_LARE8170_24.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'ref_REI': '', 'via': '', 'type': 'TextEdit', 'to': 'TextEdit', 'source_ref': '', 'route': 'TextEdit', 'ref': 'TextEdit', 'osmc_symbo': '', 'operator': '', 'old_ref': 'TextEdit', 'network': 'TextEdit', 'from': 'TextEdit', 'distance': '', 'cai_scale': 'TextEdit', });
lyr_refREI_LARE817B_25.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'ref_REI': '', 'type': 'TextEdit', 'to': 'TextEdit', 'symbol_it': '', 'symbol': '', 'source_ref': '', 'route': 'TextEdit', 'ref': 'TextEdit', 'osmc_symbo': '', 'operator': '', 'old_ref': 'TextEdit', 'network': 'TextEdit', 'from': 'TextEdit', 'distance': '', 'cai_scale': 'TextEdit', });
lyr_refREI_LARE861B_26.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'ref_REI': '', 'type': 'TextEdit', 'to': 'TextEdit', 'symbol_it': '', 'symbol': '', 'survey_dat': '', 'source_ref': '', 'rwn_name': '', 'route': 'TextEdit', 'ref': 'TextEdit', 'osmc_symbo': '', 'operator': '', 'old_ref': 'TextEdit', 'network': 'TextEdit', 'from': 'TextEdit', 'cai_scale': 'TextEdit', });
lyr_refREI_LARE861C_27.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'ref_REI': '', 'type': 'TextEdit', 'to': 'TextEdit', 'source_ref': '', 'route': 'TextEdit', 'ref': 'TextEdit', 'osmc_symbo': '', 'old_ref': 'TextEdit', 'network': 'TextEdit', 'from': 'TextEdit', 'cai_scale': 'TextEdit', });
lyr_refREI_LARE8650_28.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'ref_REI': '', 'type': 'TextEdit', 'to': 'TextEdit', 'survey_dat': '', 'source_ref': '', 'route': 'TextEdit', 'ref': 'TextEdit', 'osmc_symbo': '', 'operator': '', 'old_ref': 'TextEdit', 'network': 'TextEdit', 'from': 'TextEdit', 'cai_scale': 'TextEdit', });
lyr_refREI_LARE8630_29.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'ref_REI': '', 'type': 'TextEdit', 'to': 'TextEdit', 'survey_dat': '', 'source_ref': '', 'route': 'TextEdit', 'roundtrip': '', 'ref': 'TextEdit', 'osmc_symbo': '', 'old_ref': 'TextEdit', 'network': 'TextEdit', 'from': 'TextEdit', 'cai_scale': 'TextEdit', });
lyr_refREI_LARE8150_30.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'ref_REI': '', 'type': 'TextEdit', 'to': 'TextEdit', 'survey_dat': '', 'source_ref': '', 'route': 'TextEdit', 'roundtrip': '', 'ref': 'TextEdit', 'osmc_symbo': '', 'operator': '', 'old_ref': 'TextEdit', 'network': 'TextEdit', 'from': 'TextEdit', 'cai_scale': 'TextEdit', });
lyr_refREI_LARE8230_31.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'ref_REI': '', 'type': 'TextEdit', 'to': 'TextEdit', 'survey_dat': '', 'source_ref': '', 'route': 'TextEdit', 'roundtrip': '', 'ref': 'TextEdit', 'osmc_symbo': '', 'operator': '', 'old_ref': 'TextEdit', 'network': 'TextEdit', 'from': 'TextEdit', 'cai_scale': 'TextEdit', });
lyr_refREI_LARE8090_32.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'ref_REI': '', 'type': 'TextEdit', 'to': 'TextEdit', 'survey_dat': '', 'source_ref': '', 'route': 'TextEdit', 'roundtrip': '', 'ref': 'TextEdit', 'osmc_symbo': '', 'old_ref': 'TextEdit', 'network': 'TextEdit', 'from': 'TextEdit', 'cai_scale': 'TextEdit', });
lyr_refREI_LARE809A_33.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'ref_REI': '', 'type': 'TextEdit', 'to': 'TextEdit', 'survey_dat': '', 'source_ref': '', 'route': 'TextEdit', 'ref': 'TextEdit', 'osmc_symbo': '', 'old_ref': 'TextEdit', 'network': 'TextEdit', 'from': 'TextEdit', 'cai_scale': 'TextEdit', });
lyr_refREI_LARE8120_34.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'ref_REI': '', 'type': 'TextEdit', 'to': 'TextEdit', 'survey_dat': '', 'source_ref': '', 'route': 'TextEdit', 'roundtrip': '', 'ref': 'TextEdit', 'osmc_symbo': '', 'operator': '', 'old_ref': 'TextEdit', 'network': 'TextEdit', 'from': 'TextEdit', 'cai_scale': 'TextEdit', });
lyr_refREI_LARE812A_35.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'ref_REI': '', 'type': 'TextEdit', 'to': 'TextEdit', 'survey_dat': '', 'source_ref': '', 'route': 'TextEdit', 'roundtrip': '', 'ref': 'TextEdit', 'osmc_symbo': '', 'operator': '', 'old_ref': 'TextEdit', 'network': 'TextEdit', 'from': 'TextEdit', 'cai_scale': 'TextEdit', });
lyr_refREI_LARE808A_36.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'ref_REI': 'TextEdit', 'type': 'TextEdit', 'to': 'TextEdit', 'survey_dat': 'TextEdit', 'source_ref': 'TextEdit', 'route': 'TextEdit', 'roundtrip': 'TextEdit', 'ref': 'TextEdit', 'osmc_symbo': 'TextEdit', 'operator': 'TextEdit', 'old_ref': 'TextEdit', 'network': 'TextEdit', 'from': 'TextEdit', 'cai_scale': 'TextEdit', });
lyr_refREI_LARE808B_37.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'ref_REI': 'TextEdit', 'type': 'TextEdit', 'to': 'TextEdit', 'survey_dat': 'TextEdit', 'source_ref': 'TextEdit', 'route': 'TextEdit', 'roundtrip': 'TextEdit', 'ref': 'TextEdit', 'osmc_symbo': 'TextEdit', 'operator': 'TextEdit', 'old_ref': 'TextEdit', 'network': 'TextEdit', 'from': 'TextEdit', 'cai_scale': 'TextEdit', });
lyr_refREI_LARE0940_38.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'ref_REI': '', 'type': 'TextEdit', 'to': 'TextEdit', 'source_ref': '', 'route': 'TextEdit', 'ref': 'TextEdit', 'osmc_symbo': '', 'old_ref': 'TextEdit', 'network': 'TextEdit', 'from': 'TextEdit', 'cai_scale': 'TextEdit', });
lyr_refREI_LARE094A_39.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'ref_REI': '', 'type': 'TextEdit', 'to': 'TextEdit', 'source_ref': '', 'route': 'TextEdit', 'ref': 'TextEdit', 'osmc_symbo': '', 'operator': '', 'old_ref': 'TextEdit', 'network': 'TextEdit', 'from': 'TextEdit', 'cai_scale': 'TextEdit', });
lyr_refREI_LARE094B_40.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'ref_REI': '', 'type': 'TextEdit', 'to': 'TextEdit', 'source_ref': '', 'route': 'TextEdit', 'ref': 'TextEdit', 'osmc_symbo': '', 'operator': '', 'old_ref': 'TextEdit', 'network': 'TextEdit', 'from': 'TextEdit', 'cai_scale': 'TextEdit', });
lyr_refREI_LARE0930_41.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'ref_REI': '', 'type': 'TextEdit', 'to': 'TextEdit', 'source_ref': '', 'route': 'TextEdit', 'ref': 'TextEdit', 'osmc_symbo': '', 'network': 'TextEdit', 'from': 'TextEdit', 'cai_scale': 'TextEdit', 'access': '', });
lyr_refREI_LARE0910_42.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'ref_REI': '', 'type': 'TextEdit', 'to': 'TextEdit', 'source_ref': '', 'route': 'TextEdit', 'ref': 'TextEdit', 'osmc_symbo': '', 'network': 'TextEdit', 'from': 'TextEdit', 'cai_scale': 'TextEdit', 'access': '', });
lyr_refREI_LARE0880_43.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'ref_REI': '', 'type': 'TextEdit', 'to': 'TextEdit', 'source_ref': '', 'route': 'TextEdit', 'ref': 'TextEdit', 'osmc_symbo': '', 'operator': '', 'network': 'TextEdit', 'from': 'TextEdit', 'cai_scale': 'TextEdit', });
lyr_refREI_LARE0870_44.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'ref_REI': '', 'type': 'TextEdit', 'to': 'TextEdit', 'source_ref': '', 'route': 'TextEdit', 'ref': 'TextEdit', 'osmc_symbo': '', 'network': 'TextEdit', 'from': 'TextEdit', 'cai_scale': 'TextEdit', });
lyr_refREI_LARE0850_45.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'ref_REI': '', 'type': 'TextEdit', 'to': 'TextEdit', 'source_ref': '', 'route': 'TextEdit', 'ref': 'TextEdit', 'osmc_symbo': '', 'network': 'TextEdit', 'from': 'TextEdit', 'cai_scale': 'TextEdit', });
lyr_refREI_LARE0840_46.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'ref_REI': '', 'type': 'TextEdit', 'to': 'TextEdit', 'source_ref': '', 'route': 'TextEdit', 'ref': 'TextEdit', 'osmc_symbo': '', 'network': 'TextEdit', 'from': 'TextEdit', 'cai_scale': 'TextEdit', });
lyr_refREI_LARE0800_47.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'ref_REI': '', 'type': 'TextEdit', 'to': 'TextEdit', 'source_ref': '', 'route': 'TextEdit', 'ref': 'TextEdit', 'osmc_symbo': '', 'network': 'TextEdit', 'from': 'TextEdit', 'cai_scale': 'TextEdit', });
lyr_refREI_LARE0780_48.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'ref_REI': '', 'type': 'TextEdit', 'to': 'TextEdit', 'source_ref': '', 'route': 'TextEdit', 'ref': 'TextEdit', 'osmc_symbo': '', 'network': 'TextEdit', 'from': 'TextEdit', 'cai_scale': 'TextEdit', });
lyr_refREI_LARE0750_49.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'ref_REI': '', 'type': 'TextEdit', 'to': 'TextEdit', 'source_ref': '', 'route': 'TextEdit', 'ref': 'TextEdit', 'osmc_symbo': '', 'network': 'TextEdit', 'from': 'TextEdit', 'cai_scale': 'TextEdit', });
lyr_refREI_LARE0660_50.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'ref_REI': '', 'type': 'TextEdit', 'to': 'TextEdit', 'source_ref': '', 'route': 'TextEdit', 'ref': 'TextEdit', 'osmc_symbo': '', 'network': 'TextEdit', 'from': 'TextEdit', 'distance': '', 'cai_scale': 'TextEdit', 'access': '', });
lyr_refREI_LARE0610_51.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'ref_REI': '', 'type': 'TextEdit', 'to': 'TextEdit', 'source_ref': '', 'route': 'TextEdit', 'ref': 'TextEdit', 'osmc_symbo': '', 'network': 'TextEdit', 'from': 'TextEdit', 'distance': '', 'cai_scale': 'TextEdit', });
lyr_refREI_LARE0590_52.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'ref_REI': '', 'website': '', 'type': 'TextEdit', 'to': 'TextEdit', 'source_ref': '', 'route': 'TextEdit', 'ref': 'TextEdit', 'osmc_symbo': '', 'operator': '', 'network': 'TextEdit', 'from': 'TextEdit', 'cai_scale': 'TextEdit', });
lyr_refREI_LARE0470_53.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'ref_REI': '', 'type': 'TextEdit', 'to': 'TextEdit', 'source_ref': '', 'route': 'TextEdit', 'ref': 'TextEdit', 'osmc_symbo': '', 'network': 'TextEdit', 'from': 'TextEdit', 'cai_scale': 'TextEdit', });
lyr_refREI_LARE0390_54.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'ref_REI': '', 'type': 'TextEdit', 'to': 'TextEdit', 'source_ref': '', 'route': 'TextEdit', 'ref': 'TextEdit', 'osmc_symbo': '', 'network': 'TextEdit', 'from': 'TextEdit', 'cai_scale': 'TextEdit', });
lyr_refREI_LARE0320_55.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'ref_REI': '', 'type': 'TextEdit', 'to': 'TextEdit', 'source_ref': '', 'route': 'TextEdit', 'ref': 'TextEdit', 'osmc_symbo': '', 'operator': '', 'old_ref': 'TextEdit', 'network': 'TextEdit', 'from': 'TextEdit', 'distance': '', 'cai_scale': 'TextEdit', });
lyr_refREI_LARE0210_56.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'ref_REI': '', 'type': 'TextEdit', 'to': 'TextEdit', 'source_ref': '', 'route': 'TextEdit', 'ref': 'TextEdit', 'osmc_symbo': '', 'old_ref': 'TextEdit', 'network': 'TextEdit', 'from': 'TextEdit', 'descriptio': '', 'cai_scale': 'TextEdit', });
lyr_refREI_LARE020A_57.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'ref_REI': '', 'type': 'TextEdit', 'to': 'TextEdit', 'source_ref': '', 'route': 'TextEdit', 'ref': 'TextEdit', 'osmc_symbo': '', 'network': 'TextEdit', 'from': 'TextEdit', 'cai_scale': 'TextEdit', });
lyr_refREI_LARE0200_58.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'ref_REI': '', 'type': 'TextEdit', 'to': 'TextEdit', 'source_ref': '', 'route': 'TextEdit', 'ref': 'TextEdit', 'osmc_symbo': '', 'network': 'TextEdit', 'from': 'TextEdit', 'cai_scale': 'TextEdit', });
lyr_refREI_LARE0190_59.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'ref_REI': '', 'type': 'TextEdit', 'to': 'TextEdit', 'source_ref': '', 'route': 'TextEdit', 'ref': 'TextEdit', 'osmc_symbo': '', 'old_ref': 'TextEdit', 'network': 'TextEdit', 'name': '', 'length': '', 'from': 'TextEdit', 'cai_scale': 'TextEdit', });
lyr_refREI_LARE0180_60.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'ref_REI': '', 'type': 'TextEdit', 'to': 'TextEdit', 'source_ref': '', 'route': 'TextEdit', 'ref': 'TextEdit', 'osmc_symbo': '', 'operator': '', 'old_ref': 'TextEdit', 'network': 'TextEdit', 'from': 'TextEdit', 'cai_scale': 'TextEdit', });
lyr_refREI_LARE018A_61.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'ref_REI': '', 'type': 'TextEdit', 'to': 'TextEdit', 'route': 'TextEdit', 'ref': 'TextEdit', 'osmc_symbo': '', 'old_ref': 'TextEdit', 'network': 'TextEdit', 'from': 'TextEdit', 'descriptio': '', 'cai_scale': 'TextEdit', });
lyr_refREI_LARE018B_62.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'ref_REI': '', 'type': 'TextEdit', 'to': 'TextEdit', 'route': 'TextEdit', 'ref': 'TextEdit', 'osmc_symbo': '', 'old_ref': 'TextEdit', 'network': 'TextEdit', 'from': 'TextEdit', 'descriptio': '', 'cai_scale': 'TextEdit', });
lyr_refREI_LARE0140_63.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'ref_REI': '', 'type': 'TextEdit', 'to': 'TextEdit', 'source_ref': '', 'route': 'TextEdit', 'ref': 'TextEdit', 'osmc_symbo': '', 'network': 'TextEdit', 'from': 'TextEdit', 'cai_scale': 'TextEdit', });
lyr_refREI_LARE0130_64.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'ref_REI': '', 'type': 'TextEdit', 'to': 'TextEdit', 'source_ref': '', 'route': 'TextEdit', 'ref': 'TextEdit', 'osmc_symbo': '', 'network': 'TextEdit', 'from': 'TextEdit', 'cai_scale': 'TextEdit', });
lyr_refREI_LARE0120_65.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'ref_REI': '', 'type': 'TextEdit', 'to': 'TextEdit', 'source_ref': '', 'route': 'TextEdit', 'ref': 'TextEdit', 'osmc_symbo': '', 'network': 'TextEdit', 'from': 'TextEdit', 'cai_scale': 'TextEdit', });
lyr_refREI_LARE1060_66.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'ref_REI': '', 'type': 'TextEdit', 'to': 'TextEdit', 'source_ref': '', 'route': 'TextEdit', 'ref': 'TextEdit', 'osmc_symbo': '', 'network': 'TextEdit', 'from': 'TextEdit', 'cai_scale': 'TextEdit', });
lyr_refREI_LARE1080_67.set('fieldImages', {'fid': '', 'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'ref:REI': 'TextEdit', 'type': 'TextEdit', 'to': 'TextEdit', 'source:ref': 'TextEdit', 'route': 'TextEdit', 'ref': 'TextEdit', 'osmc:symbol': 'TextEdit', 'network': 'TextEdit', 'from': 'TextEdit', 'cai_scale': 'TextEdit', });
lyr_LARE8_1.set('fieldLabels', {});
lyr_DbLdPsentCAISans_2.set('fieldLabels', {'Sentiero_n': 'no label', 'ID_Palo': 'no label', 'Località': 'no label', 'Note': 'no label', 'Materiale': 'no label', 'Stato_Conservazione': 'no label', 'Data_Rilievo': 'no label', 'Rilevatore': 'no label', 'Esistente /progetto': 'no label', 'Lat Dec': 'no label', 'Long dec': 'no label', });
lyr_sentiero00_I_shp_3.set('fieldLabels', {'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', 'N.': 'no label', 'N. ex': 'no label', 'partenza': 'no label', 'Arrivo': 'no label', });
lyr_sentiero00_ii_shp_4.set('fieldLabels', {'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', 'N.': 'no label', 'N. ex': 'no label', 'Partenza': 'no label', 'Arrivo': 'no label', });
lyr_refREI_LARE8080_5.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'ref_REI': 'no label', 'type': 'no label', 'to': 'no label', 'survey_dat': 'no label', 'source_ref': 'no label', 'route': 'no label', 'roundtrip': 'no label', 'ref': 'no label', 'osmc_symbo': 'no label', 'operator': 'no label', 'old_ref': 'no label', 'network': 'no label', 'from': 'no label', 'cai_scale': 'no label', });
lyr_refREI_LARE8710_6.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'ref_REI': 'no label', 'type': 'no label', 'to': 'no label', 'source_ref': 'no label', 'route': 'no label', 'ref': 'no label', 'osmc_symbo': 'no label', 'old_ref': 'no label', 'network': 'no label', 'from': 'no label', 'cai_scale': 'no label', });
lyr_refREI_LARE8040_7.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'ref_REI': 'no label', 'type': 'no label', 'to': 'no label', 'survey_dat': 'no label', 'source_ref': 'no label', 'route': 'no label', 'ref': 'no label', 'osmc_symbo': 'no label', 'old_ref': 'no label', 'network': 'no label', 'from': 'no label', 'cai_scale': 'no label', });
lyr_refREI_LARE8010_8.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'ref_REI': 'no label', 'type': 'no label', 'to': 'no label', 'survey_dat': 'no label', 'source_ref': 'no label', 'route': 'no label', 'roundtrip': 'no label', 'ref': 'no label', 'osmc_symbo': 'no label', 'operator': 'no label', 'old_ref': 'no label', 'network': 'no label', 'from': 'no label', 'cai_scale': 'no label', });
lyr_803etichette_9.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'ref_REI': 'no label', 'type': 'no label', 'to': 'no label', 'survey_dat': 'no label', 'source_ref': 'no label', 'route': 'no label', 'roundtrip': 'no label', 'ref': 'no label', 'osmc_symbo': 'no label', 'operator': 'no label', 'old_ref': 'no label', 'network': 'no label', 'from': 'no label', 'cai_scale': 'no label', });
lyr_refREI_LARE8060_10.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'ref_REI': 'no label', 'type': 'no label', 'to': 'no label', 'survey_dat': 'no label', 'source_ref': 'no label', 'route': 'no label', 'roundtrip': 'no label', 'ref': 'no label', 'osmc_symbo': 'no label', 'operator': 'no label', 'old_ref': 'no label', 'network': 'no label', 'from': 'no label', 'cai_scale': 'no label', });
lyr_refREI_LARE8070_11.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'ref_REI': 'no label', 'type': 'no label', 'to': 'no label', 'survey_dat': 'no label', 'source_ref': 'no label', 'route': 'no label', 'ref': 'no label', 'osmc_symbo': 'no label', 'old_ref': 'no label', 'network': 'no label', 'from': 'no label', 'cai_scale': 'no label', });
lyr_refREI_LARE804A_12.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'ref_REI': 'no label', 'type': 'no label', 'to': 'no label', 'survey_dat': 'no label', 'route': 'no label', 'roundtrip': 'no label', 'ref': 'no label', 'osmc_symbo': 'no label', 'operator': 'no label', 'network': 'no label', 'from': 'no label', 'cai_scale': 'no label', });
lyr_refREI_LARE8060_13.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'ref_REI': 'no label', 'type': 'no label', 'to': 'no label', 'survey_dat': 'no label', 'source_ref': 'no label', 'route': 'no label', 'roundtrip': 'no label', 'ref': 'no label', 'osmc_symbo': 'no label', 'operator': 'no label', 'old_ref': 'no label', 'network': 'no label', 'from': 'no label', 'cai_scale': 'no label', });
lyr_refREI_LARE806A_14.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'ref_REI': 'no label', 'type': 'no label', 'to': 'no label', 'survey_dat': 'no label', 'source_ref': 'no label', 'route': 'no label', 'roundtrip': 'no label', 'ref': 'no label', 'osmc_symbo': 'no label', 'operator': 'no label', 'old_ref': 'no label', 'network': 'no label', 'from': 'no label', 'cai_scale': 'no label', });
lyr_refREI_LARE806B_15.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'ref_REI': 'no label', 'type': 'no label', 'to': 'no label', 'source_ref': 'no label', 'route': 'no label', 'ref': 'no label', 'osmc_symbo': 'no label', 'old_ref': 'no label', 'network': 'no label', 'from': 'no label', 'cai_scale': 'no label', });
lyr_refREI_LARE8050_16.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'ref_REI': 'no label', 'type': 'no label', 'to': 'no label', 'source_ref': 'no label', 'route': 'no label', 'ref': 'no label', 'osmc_symbo': 'no label', 'operator': 'no label', 'old_ref': 'no label', 'network': 'no label', 'from': 'no label', 'cai_scale': 'no label', });
lyr_refREI_LARE805A_17.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'ref_REI': 'no label', 'type': 'no label', 'to': 'no label', 'survey_dat': 'no label', 'source_ref': 'no label', 'route': 'no label', 'ref': 'no label', 'osmc_symbo': 'no label', 'old_ref': 'no label', 'network': 'no label', 'from': 'no label', 'cai_scale': 'no label', });
lyr_refREI_LARE805B_18.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'ref_REI': 'no label', 'type': 'no label', 'to': 'no label', 'source_ref': 'no label', 'route': 'no label', 'ref': 'no label', 'osmc_symbo': 'no label', 'old_ref': 'no label', 'network': 'no label', 'from': 'no label', 'cai_scale': 'no label', });
lyr_refREI_LARE805C_19.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'ref_REI': 'no label', 'type': 'no label', 'to': 'no label', 'survey_dat': 'no label', 'source_ref': 'no label', 'route': 'no label', 'roundtrip': 'no label', 'ref': 'no label', 'osmc_symbo': 'no label', 'operator': 'no label', 'old_ref': 'no label', 'network': 'no label', 'from': 'no label', 'cai_scale': 'no label', });
lyr_refREI_LARE8610_20.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'ref_REI': 'no label', 'type': 'no label', 'to': 'no label', 'route': 'no label', 'ref': 'no label', 'osmc_symbo': 'no label', 'operator': 'no label', 'old_ref': 'no label', 'network': 'no label', 'from': 'no label', 'cai_scale': 'no label', });
lyr_refREI_LARE8190_21.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'ref_REI': 'no label', 'type': 'no label', 'to': 'no label', 'survey_dat': 'no label', 'source_ref': 'no label', 'route': 'no label', 'roundtrip': 'no label', 'ref': 'no label', 'osmc_symbo': 'no label', 'operator': 'no label', 'old_ref': 'no label', 'network': 'no label', 'from': 'no label', 'cai_scale': 'no label', });
lyr_refREI_LARE8270_22.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'ref_REI': 'no label', 'type': 'no label', 'to': 'no label', 'survey_dat': 'no label', 'source_ref': 'no label', 'route': 'no label', 'roundtrip': 'no label', 'ref': 'no label', 'osmc_symbo': 'no label', 'operator': 'no label', 'old_ref': 'no label', 'network': 'no label', 'from': 'no label', 'cai_scale': 'no label', });
lyr_refREI_LARE8290_23.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'ref_REI': 'no label', 'type': 'no label', 'to': 'no label', 'survey_dat': 'no label', 'source_ref': 'no label', 'route': 'no label', 'roundtrip': 'no label', 'ref': 'no label', 'osmc_symbo': 'no label', 'operator': 'no label', 'old_ref': 'no label', 'network': 'no label', 'from': 'no label', 'cai_scale': 'no label', });
lyr_refREI_LARE8170_24.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'ref_REI': 'no label', 'via': 'no label', 'type': 'no label', 'to': 'no label', 'source_ref': 'no label', 'route': 'no label', 'ref': 'no label', 'osmc_symbo': 'no label', 'operator': 'no label', 'old_ref': 'no label', 'network': 'no label', 'from': 'no label', 'distance': 'no label', 'cai_scale': 'no label', });
lyr_refREI_LARE817B_25.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'ref_REI': 'no label', 'type': 'no label', 'to': 'no label', 'symbol_it': 'no label', 'symbol': 'no label', 'source_ref': 'no label', 'route': 'no label', 'ref': 'no label', 'osmc_symbo': 'no label', 'operator': 'no label', 'old_ref': 'no label', 'network': 'no label', 'from': 'no label', 'distance': 'no label', 'cai_scale': 'no label', });
lyr_refREI_LARE861B_26.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'ref_REI': 'no label', 'type': 'no label', 'to': 'no label', 'symbol_it': 'no label', 'symbol': 'no label', 'survey_dat': 'no label', 'source_ref': 'no label', 'rwn_name': 'no label', 'route': 'no label', 'ref': 'no label', 'osmc_symbo': 'no label', 'operator': 'no label', 'old_ref': 'no label', 'network': 'no label', 'from': 'no label', 'cai_scale': 'no label', });
lyr_refREI_LARE861C_27.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'ref_REI': 'no label', 'type': 'no label', 'to': 'no label', 'source_ref': 'no label', 'route': 'no label', 'ref': 'no label', 'osmc_symbo': 'no label', 'old_ref': 'no label', 'network': 'no label', 'from': 'no label', 'cai_scale': 'no label', });
lyr_refREI_LARE8650_28.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'ref_REI': 'no label', 'type': 'no label', 'to': 'no label', 'survey_dat': 'no label', 'source_ref': 'no label', 'route': 'no label', 'ref': 'no label', 'osmc_symbo': 'no label', 'operator': 'no label', 'old_ref': 'no label', 'network': 'no label', 'from': 'no label', 'cai_scale': 'no label', });
lyr_refREI_LARE8630_29.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'ref_REI': 'no label', 'type': 'no label', 'to': 'no label', 'survey_dat': 'no label', 'source_ref': 'no label', 'route': 'no label', 'roundtrip': 'no label', 'ref': 'no label', 'osmc_symbo': 'no label', 'old_ref': 'no label', 'network': 'no label', 'from': 'no label', 'cai_scale': 'no label', });
lyr_refREI_LARE8150_30.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'ref_REI': 'no label', 'type': 'no label', 'to': 'no label', 'survey_dat': 'no label', 'source_ref': 'no label', 'route': 'no label', 'roundtrip': 'no label', 'ref': 'no label', 'osmc_symbo': 'no label', 'operator': 'no label', 'old_ref': 'no label', 'network': 'no label', 'from': 'no label', 'cai_scale': 'no label', });
lyr_refREI_LARE8230_31.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'ref_REI': 'no label', 'type': 'no label', 'to': 'no label', 'survey_dat': 'no label', 'source_ref': 'no label', 'route': 'no label', 'roundtrip': 'no label', 'ref': 'no label', 'osmc_symbo': 'no label', 'operator': 'no label', 'old_ref': 'no label', 'network': 'no label', 'from': 'no label', 'cai_scale': 'no label', });
lyr_refREI_LARE8090_32.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'ref_REI': 'no label', 'type': 'no label', 'to': 'no label', 'survey_dat': 'no label', 'source_ref': 'no label', 'route': 'no label', 'roundtrip': 'no label', 'ref': 'no label', 'osmc_symbo': 'no label', 'old_ref': 'no label', 'network': 'no label', 'from': 'no label', 'cai_scale': 'no label', });
lyr_refREI_LARE809A_33.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'ref_REI': 'no label', 'type': 'no label', 'to': 'no label', 'survey_dat': 'no label', 'source_ref': 'no label', 'route': 'no label', 'ref': 'no label', 'osmc_symbo': 'no label', 'old_ref': 'no label', 'network': 'no label', 'from': 'no label', 'cai_scale': 'no label', });
lyr_refREI_LARE8120_34.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'ref_REI': 'no label', 'type': 'no label', 'to': 'no label', 'survey_dat': 'no label', 'source_ref': 'no label', 'route': 'no label', 'roundtrip': 'no label', 'ref': 'no label', 'osmc_symbo': 'no label', 'operator': 'no label', 'old_ref': 'no label', 'network': 'no label', 'from': 'no label', 'cai_scale': 'no label', });
lyr_refREI_LARE812A_35.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'ref_REI': 'no label', 'type': 'no label', 'to': 'no label', 'survey_dat': 'no label', 'source_ref': 'no label', 'route': 'no label', 'roundtrip': 'no label', 'ref': 'no label', 'osmc_symbo': 'no label', 'operator': 'no label', 'old_ref': 'no label', 'network': 'no label', 'from': 'no label', 'cai_scale': 'no label', });
lyr_refREI_LARE808A_36.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'ref_REI': 'no label', 'type': 'no label', 'to': 'no label', 'survey_dat': 'no label', 'source_ref': 'no label', 'route': 'no label', 'roundtrip': 'no label', 'ref': 'no label', 'osmc_symbo': 'no label', 'operator': 'no label', 'old_ref': 'no label', 'network': 'no label', 'from': 'no label', 'cai_scale': 'no label', });
lyr_refREI_LARE808B_37.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'ref_REI': 'no label', 'type': 'no label', 'to': 'no label', 'survey_dat': 'no label', 'source_ref': 'no label', 'route': 'no label', 'roundtrip': 'no label', 'ref': 'no label', 'osmc_symbo': 'no label', 'operator': 'no label', 'old_ref': 'no label', 'network': 'no label', 'from': 'no label', 'cai_scale': 'no label', });
lyr_refREI_LARE0940_38.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'ref_REI': 'no label', 'type': 'no label', 'to': 'no label', 'source_ref': 'no label', 'route': 'no label', 'ref': 'no label', 'osmc_symbo': 'no label', 'old_ref': 'no label', 'network': 'no label', 'from': 'no label', 'cai_scale': 'no label', });
lyr_refREI_LARE094A_39.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'ref_REI': 'no label', 'type': 'no label', 'to': 'no label', 'source_ref': 'no label', 'route': 'no label', 'ref': 'no label', 'osmc_symbo': 'no label', 'operator': 'no label', 'old_ref': 'no label', 'network': 'no label', 'from': 'no label', 'cai_scale': 'no label', });
lyr_refREI_LARE094B_40.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'ref_REI': 'no label', 'type': 'no label', 'to': 'no label', 'source_ref': 'no label', 'route': 'no label', 'ref': 'no label', 'osmc_symbo': 'no label', 'operator': 'no label', 'old_ref': 'no label', 'network': 'no label', 'from': 'no label', 'cai_scale': 'no label', });
lyr_refREI_LARE0930_41.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'ref_REI': 'no label', 'type': 'no label', 'to': 'no label', 'source_ref': 'no label', 'route': 'no label', 'ref': 'no label', 'osmc_symbo': 'no label', 'network': 'no label', 'from': 'no label', 'cai_scale': 'no label', 'access': 'no label', });
lyr_refREI_LARE0910_42.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'ref_REI': 'no label', 'type': 'no label', 'to': 'no label', 'source_ref': 'no label', 'route': 'no label', 'ref': 'no label', 'osmc_symbo': 'no label', 'network': 'no label', 'from': 'no label', 'cai_scale': 'no label', 'access': 'no label', });
lyr_refREI_LARE0880_43.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'ref_REI': 'no label', 'type': 'no label', 'to': 'no label', 'source_ref': 'no label', 'route': 'no label', 'ref': 'no label', 'osmc_symbo': 'no label', 'operator': 'no label', 'network': 'no label', 'from': 'no label', 'cai_scale': 'no label', });
lyr_refREI_LARE0870_44.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'ref_REI': 'no label', 'type': 'no label', 'to': 'no label', 'source_ref': 'no label', 'route': 'no label', 'ref': 'no label', 'osmc_symbo': 'no label', 'network': 'no label', 'from': 'no label', 'cai_scale': 'no label', });
lyr_refREI_LARE0850_45.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'ref_REI': 'no label', 'type': 'no label', 'to': 'no label', 'source_ref': 'no label', 'route': 'no label', 'ref': 'no label', 'osmc_symbo': 'no label', 'network': 'no label', 'from': 'no label', 'cai_scale': 'no label', });
lyr_refREI_LARE0840_46.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'ref_REI': 'no label', 'type': 'no label', 'to': 'no label', 'source_ref': 'no label', 'route': 'no label', 'ref': 'no label', 'osmc_symbo': 'no label', 'network': 'no label', 'from': 'no label', 'cai_scale': 'no label', });
lyr_refREI_LARE0800_47.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'ref_REI': 'no label', 'type': 'no label', 'to': 'no label', 'source_ref': 'no label', 'route': 'no label', 'ref': 'no label', 'osmc_symbo': 'no label', 'network': 'no label', 'from': 'no label', 'cai_scale': 'no label', });
lyr_refREI_LARE0780_48.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'ref_REI': 'no label', 'type': 'no label', 'to': 'no label', 'source_ref': 'no label', 'route': 'no label', 'ref': 'no label', 'osmc_symbo': 'no label', 'network': 'no label', 'from': 'no label', 'cai_scale': 'no label', });
lyr_refREI_LARE0750_49.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'ref_REI': 'no label', 'type': 'no label', 'to': 'no label', 'source_ref': 'no label', 'route': 'no label', 'ref': 'no label', 'osmc_symbo': 'no label', 'network': 'no label', 'from': 'no label', 'cai_scale': 'no label', });
lyr_refREI_LARE0660_50.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'ref_REI': 'no label', 'type': 'no label', 'to': 'no label', 'source_ref': 'no label', 'route': 'no label', 'ref': 'no label', 'osmc_symbo': 'no label', 'network': 'no label', 'from': 'no label', 'distance': 'no label', 'cai_scale': 'no label', 'access': 'no label', });
lyr_refREI_LARE0610_51.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'ref_REI': 'no label', 'type': 'no label', 'to': 'no label', 'source_ref': 'no label', 'route': 'no label', 'ref': 'no label', 'osmc_symbo': 'no label', 'network': 'no label', 'from': 'no label', 'distance': 'no label', 'cai_scale': 'no label', });
lyr_refREI_LARE0590_52.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'ref_REI': 'no label', 'website': 'no label', 'type': 'no label', 'to': 'no label', 'source_ref': 'no label', 'route': 'no label', 'ref': 'no label', 'osmc_symbo': 'no label', 'operator': 'no label', 'network': 'no label', 'from': 'no label', 'cai_scale': 'no label', });
lyr_refREI_LARE0470_53.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'ref_REI': 'no label', 'type': 'no label', 'to': 'no label', 'source_ref': 'no label', 'route': 'no label', 'ref': 'no label', 'osmc_symbo': 'no label', 'network': 'no label', 'from': 'no label', 'cai_scale': 'no label', });
lyr_refREI_LARE0390_54.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'ref_REI': 'no label', 'type': 'no label', 'to': 'no label', 'source_ref': 'no label', 'route': 'no label', 'ref': 'no label', 'osmc_symbo': 'no label', 'network': 'no label', 'from': 'no label', 'cai_scale': 'no label', });
lyr_refREI_LARE0320_55.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'ref_REI': 'no label', 'type': 'no label', 'to': 'no label', 'source_ref': 'no label', 'route': 'no label', 'ref': 'no label', 'osmc_symbo': 'no label', 'operator': 'no label', 'old_ref': 'no label', 'network': 'no label', 'from': 'no label', 'distance': 'no label', 'cai_scale': 'no label', });
lyr_refREI_LARE0210_56.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'ref_REI': 'no label', 'type': 'no label', 'to': 'no label', 'source_ref': 'no label', 'route': 'no label', 'ref': 'no label', 'osmc_symbo': 'no label', 'old_ref': 'no label', 'network': 'no label', 'from': 'no label', 'descriptio': 'no label', 'cai_scale': 'no label', });
lyr_refREI_LARE020A_57.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'ref_REI': 'no label', 'type': 'no label', 'to': 'no label', 'source_ref': 'no label', 'route': 'no label', 'ref': 'no label', 'osmc_symbo': 'no label', 'network': 'no label', 'from': 'no label', 'cai_scale': 'no label', });
lyr_refREI_LARE0200_58.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'ref_REI': 'no label', 'type': 'no label', 'to': 'no label', 'source_ref': 'no label', 'route': 'no label', 'ref': 'no label', 'osmc_symbo': 'no label', 'network': 'no label', 'from': 'no label', 'cai_scale': 'no label', });
lyr_refREI_LARE0190_59.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'ref_REI': 'no label', 'type': 'no label', 'to': 'no label', 'source_ref': 'no label', 'route': 'no label', 'ref': 'no label', 'osmc_symbo': 'no label', 'old_ref': 'no label', 'network': 'no label', 'name': 'no label', 'length': 'no label', 'from': 'no label', 'cai_scale': 'no label', });
lyr_refREI_LARE0180_60.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'ref_REI': 'no label', 'type': 'no label', 'to': 'no label', 'source_ref': 'no label', 'route': 'no label', 'ref': 'no label', 'osmc_symbo': 'no label', 'operator': 'no label', 'old_ref': 'no label', 'network': 'no label', 'from': 'no label', 'cai_scale': 'no label', });
lyr_refREI_LARE018A_61.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'ref_REI': 'no label', 'type': 'no label', 'to': 'no label', 'route': 'no label', 'ref': 'no label', 'osmc_symbo': 'no label', 'old_ref': 'no label', 'network': 'no label', 'from': 'no label', 'descriptio': 'no label', 'cai_scale': 'no label', });
lyr_refREI_LARE018B_62.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'ref_REI': 'no label', 'type': 'no label', 'to': 'no label', 'route': 'no label', 'ref': 'no label', 'osmc_symbo': 'no label', 'old_ref': 'no label', 'network': 'no label', 'from': 'no label', 'descriptio': 'no label', 'cai_scale': 'no label', });
lyr_refREI_LARE0140_63.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'ref_REI': 'no label', 'type': 'no label', 'to': 'no label', 'source_ref': 'no label', 'route': 'no label', 'ref': 'no label', 'osmc_symbo': 'no label', 'network': 'no label', 'from': 'no label', 'cai_scale': 'no label', });
lyr_refREI_LARE0130_64.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'ref_REI': 'no label', 'type': 'no label', 'to': 'no label', 'source_ref': 'no label', 'route': 'no label', 'ref': 'no label', 'osmc_symbo': 'no label', 'network': 'no label', 'from': 'no label', 'cai_scale': 'no label', });
lyr_refREI_LARE0120_65.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'ref_REI': 'no label', 'type': 'no label', 'to': 'no label', 'source_ref': 'no label', 'route': 'no label', 'ref': 'no label', 'osmc_symbo': 'no label', 'network': 'no label', 'from': 'no label', 'cai_scale': 'no label', });
lyr_refREI_LARE1060_66.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'ref_REI': 'no label', 'type': 'no label', 'to': 'no label', 'source_ref': 'no label', 'route': 'no label', 'ref': 'no label', 'osmc_symbo': 'no label', 'network': 'no label', 'from': 'no label', 'cai_scale': 'no label', });
lyr_refREI_LARE1080_67.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'ref:REI': 'no label', 'type': 'no label', 'to': 'no label', 'source:ref': 'no label', 'route': 'no label', 'ref': 'no label', 'osmc:symbol': 'no label', 'network': 'no label', 'from': 'no label', 'cai_scale': 'no label', });
lyr_refREI_LARE1080_67.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});