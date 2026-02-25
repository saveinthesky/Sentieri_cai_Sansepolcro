ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3004").setExtent([2281524.482469, 4823447.947529, 2296480.989382, 4833676.268386]);
var wms_layers = [];


        var lyr_OpenTopoMap_0 = new ol.layer.Tile({
            'title': 'OpenTopoMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://opentopomap.org/about#datenstand">OpenTopoMap (CC-BY-SA)</a>',
                url: 'https://tile.opentopomap.org/{z}/{x}/{y}.png'
            })
        });
var format_DatabasesentieriCAISansepolcroLuoghidiPosa_1 = new ol.format.GeoJSON();
var features_DatabasesentieriCAISansepolcroLuoghidiPosa_1 = format_DatabasesentieriCAISansepolcroLuoghidiPosa_1.readFeatures(json_DatabasesentieriCAISansepolcroLuoghidiPosa_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3004'});
var jsonSource_DatabasesentieriCAISansepolcroLuoghidiPosa_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DatabasesentieriCAISansepolcroLuoghidiPosa_1.addFeatures(features_DatabasesentieriCAISansepolcroLuoghidiPosa_1);
var lyr_DatabasesentieriCAISansepolcroLuoghidiPosa_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DatabasesentieriCAISansepolcroLuoghidiPosa_1, 
                style: style_DatabasesentieriCAISansepolcroLuoghidiPosa_1,
                popuplayertitle: 'Database sentieri CAI Sansepolcro - Luoghi di Posa',
                interactive: true,
                title: '<img src="styles/legend/DatabasesentieriCAISansepolcroLuoghidiPosa_1.png" /> Database sentieri CAI Sansepolcro - Luoghi di Posa'
            });
var format_sentiero00_I_shp_2 = new ol.format.GeoJSON();
var features_sentiero00_I_shp_2 = format_sentiero00_I_shp_2.readFeatures(json_sentiero00_I_shp_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3004'});
var jsonSource_sentiero00_I_shp_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sentiero00_I_shp_2.addFeatures(features_sentiero00_I_shp_2);
var lyr_sentiero00_I_shp_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_sentiero00_I_shp_2, 
                style: style_sentiero00_I_shp_2,
                popuplayertitle: 'sentiero 00_I_shp',
                interactive: true,
                title: '<img src="styles/legend/sentiero00_I_shp_2.png" /> sentiero 00_I_shp'
            });
var format_sentiero00_ii_shp_3 = new ol.format.GeoJSON();
var features_sentiero00_ii_shp_3 = format_sentiero00_ii_shp_3.readFeatures(json_sentiero00_ii_shp_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3004'});
var jsonSource_sentiero00_ii_shp_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sentiero00_ii_shp_3.addFeatures(features_sentiero00_ii_shp_3);
var lyr_sentiero00_ii_shp_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_sentiero00_ii_shp_3, 
                style: style_sentiero00_ii_shp_3,
                popuplayertitle: 'sentiero 00_ii_shp',
                interactive: true,
                title: '<img src="styles/legend/sentiero00_ii_shp_3.png" /> sentiero 00_ii_shp'
            });
var format_refREI_LARE8080_4 = new ol.format.GeoJSON();
var features_refREI_LARE8080_4 = format_refREI_LARE8080_4.readFeatures(json_refREI_LARE8080_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3004'});
var jsonSource_refREI_LARE8080_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_refREI_LARE8080_4.addFeatures(features_refREI_LARE8080_4);
var lyr_refREI_LARE8080_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_refREI_LARE8080_4, 
                style: style_refREI_LARE8080_4,
                popuplayertitle: 'ref:REI_LARE8080',
                interactive: true,
                title: '<img src="styles/legend/refREI_LARE8080_4.png" /> ref:REI_LARE8080'
            });
var format_refREI_LARE8710_5 = new ol.format.GeoJSON();
var features_refREI_LARE8710_5 = format_refREI_LARE8710_5.readFeatures(json_refREI_LARE8710_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3004'});
var jsonSource_refREI_LARE8710_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_refREI_LARE8710_5.addFeatures(features_refREI_LARE8710_5);
var lyr_refREI_LARE8710_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_refREI_LARE8710_5, 
                style: style_refREI_LARE8710_5,
                popuplayertitle: 'ref:REI_LARE8710',
                interactive: true,
                title: '<img src="styles/legend/refREI_LARE8710_5.png" /> ref:REI_LARE8710'
            });
var format_refREI_LARE8040_6 = new ol.format.GeoJSON();
var features_refREI_LARE8040_6 = format_refREI_LARE8040_6.readFeatures(json_refREI_LARE8040_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3004'});
var jsonSource_refREI_LARE8040_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_refREI_LARE8040_6.addFeatures(features_refREI_LARE8040_6);
var lyr_refREI_LARE8040_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_refREI_LARE8040_6, 
                style: style_refREI_LARE8040_6,
                popuplayertitle: 'ref:REI_LARE8040',
                interactive: true,
                title: '<img src="styles/legend/refREI_LARE8040_6.png" /> ref:REI_LARE8040'
            });
var format_refREI_LARE8010_7 = new ol.format.GeoJSON();
var features_refREI_LARE8010_7 = format_refREI_LARE8010_7.readFeatures(json_refREI_LARE8010_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3004'});
var jsonSource_refREI_LARE8010_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_refREI_LARE8010_7.addFeatures(features_refREI_LARE8010_7);
var lyr_refREI_LARE8010_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_refREI_LARE8010_7, 
                style: style_refREI_LARE8010_7,
                popuplayertitle: 'ref:REI_LARE8010',
                interactive: true,
                title: '<img src="styles/legend/refREI_LARE8010_7.png" /> ref:REI_LARE8010'
            });
var format_803etichette_8 = new ol.format.GeoJSON();
var features_803etichette_8 = format_803etichette_8.readFeatures(json_803etichette_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3004'});
var jsonSource_803etichette_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_803etichette_8.addFeatures(features_803etichette_8);
var lyr_803etichette_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_803etichette_8, 
                style: style_803etichette_8,
                popuplayertitle: '803 etichette',
                interactive: true,
                title: '<img src="styles/legend/803etichette_8.png" /> 803 etichette'
            });
var format_refREI_LARE8060_9 = new ol.format.GeoJSON();
var features_refREI_LARE8060_9 = format_refREI_LARE8060_9.readFeatures(json_refREI_LARE8060_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3004'});
var jsonSource_refREI_LARE8060_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_refREI_LARE8060_9.addFeatures(features_refREI_LARE8060_9);
var lyr_refREI_LARE8060_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_refREI_LARE8060_9, 
                style: style_refREI_LARE8060_9,
                popuplayertitle: 'ref:REI_LARE8060',
                interactive: true,
                title: '<img src="styles/legend/refREI_LARE8060_9.png" /> ref:REI_LARE8060'
            });
var format_refREI_LARE8070_10 = new ol.format.GeoJSON();
var features_refREI_LARE8070_10 = format_refREI_LARE8070_10.readFeatures(json_refREI_LARE8070_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3004'});
var jsonSource_refREI_LARE8070_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_refREI_LARE8070_10.addFeatures(features_refREI_LARE8070_10);
var lyr_refREI_LARE8070_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_refREI_LARE8070_10, 
                style: style_refREI_LARE8070_10,
                popuplayertitle: 'ref:REI_LARE8070',
                interactive: true,
                title: '<img src="styles/legend/refREI_LARE8070_10.png" /> ref:REI_LARE8070'
            });
var format_refREI_LARE804A_11 = new ol.format.GeoJSON();
var features_refREI_LARE804A_11 = format_refREI_LARE804A_11.readFeatures(json_refREI_LARE804A_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3004'});
var jsonSource_refREI_LARE804A_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_refREI_LARE804A_11.addFeatures(features_refREI_LARE804A_11);
var lyr_refREI_LARE804A_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_refREI_LARE804A_11, 
                style: style_refREI_LARE804A_11,
                popuplayertitle: 'ref:REI_LARE804A',
                interactive: true,
                title: '<img src="styles/legend/refREI_LARE804A_11.png" /> ref:REI_LARE804A'
            });
var format_refREI_LARE8060_12 = new ol.format.GeoJSON();
var features_refREI_LARE8060_12 = format_refREI_LARE8060_12.readFeatures(json_refREI_LARE8060_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3004'});
var jsonSource_refREI_LARE8060_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_refREI_LARE8060_12.addFeatures(features_refREI_LARE8060_12);
var lyr_refREI_LARE8060_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_refREI_LARE8060_12, 
                style: style_refREI_LARE8060_12,
                popuplayertitle: 'ref:REI_LARE8060',
                interactive: true,
                title: '<img src="styles/legend/refREI_LARE8060_12.png" /> ref:REI_LARE8060'
            });
var format_refREI_LARE806A_13 = new ol.format.GeoJSON();
var features_refREI_LARE806A_13 = format_refREI_LARE806A_13.readFeatures(json_refREI_LARE806A_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3004'});
var jsonSource_refREI_LARE806A_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_refREI_LARE806A_13.addFeatures(features_refREI_LARE806A_13);
var lyr_refREI_LARE806A_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_refREI_LARE806A_13, 
                style: style_refREI_LARE806A_13,
                popuplayertitle: 'ref:REI_LARE806A',
                interactive: true,
                title: '<img src="styles/legend/refREI_LARE806A_13.png" /> ref:REI_LARE806A'
            });
var format_refREI_LARE806B_14 = new ol.format.GeoJSON();
var features_refREI_LARE806B_14 = format_refREI_LARE806B_14.readFeatures(json_refREI_LARE806B_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3004'});
var jsonSource_refREI_LARE806B_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_refREI_LARE806B_14.addFeatures(features_refREI_LARE806B_14);
var lyr_refREI_LARE806B_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_refREI_LARE806B_14, 
                style: style_refREI_LARE806B_14,
                popuplayertitle: 'ref:REI_LARE806B',
                interactive: true,
                title: '<img src="styles/legend/refREI_LARE806B_14.png" /> ref:REI_LARE806B'
            });
var format_refREI_LARE8050_15 = new ol.format.GeoJSON();
var features_refREI_LARE8050_15 = format_refREI_LARE8050_15.readFeatures(json_refREI_LARE8050_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3004'});
var jsonSource_refREI_LARE8050_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_refREI_LARE8050_15.addFeatures(features_refREI_LARE8050_15);
var lyr_refREI_LARE8050_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_refREI_LARE8050_15, 
                style: style_refREI_LARE8050_15,
                popuplayertitle: 'ref:REI_LARE8050',
                interactive: true,
                title: '<img src="styles/legend/refREI_LARE8050_15.png" /> ref:REI_LARE8050'
            });
var format_refREI_LARE805A_16 = new ol.format.GeoJSON();
var features_refREI_LARE805A_16 = format_refREI_LARE805A_16.readFeatures(json_refREI_LARE805A_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3004'});
var jsonSource_refREI_LARE805A_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_refREI_LARE805A_16.addFeatures(features_refREI_LARE805A_16);
var lyr_refREI_LARE805A_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_refREI_LARE805A_16, 
                style: style_refREI_LARE805A_16,
                popuplayertitle: 'ref:REI_LARE805A',
                interactive: true,
                title: '<img src="styles/legend/refREI_LARE805A_16.png" /> ref:REI_LARE805A'
            });
var format_refREI_LARE805B_17 = new ol.format.GeoJSON();
var features_refREI_LARE805B_17 = format_refREI_LARE805B_17.readFeatures(json_refREI_LARE805B_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3004'});
var jsonSource_refREI_LARE805B_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_refREI_LARE805B_17.addFeatures(features_refREI_LARE805B_17);
var lyr_refREI_LARE805B_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_refREI_LARE805B_17, 
                style: style_refREI_LARE805B_17,
                popuplayertitle: 'ref:REI_LARE805B',
                interactive: true,
                title: '<img src="styles/legend/refREI_LARE805B_17.png" /> ref:REI_LARE805B'
            });
var format_refREI_LARE805C_18 = new ol.format.GeoJSON();
var features_refREI_LARE805C_18 = format_refREI_LARE805C_18.readFeatures(json_refREI_LARE805C_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3004'});
var jsonSource_refREI_LARE805C_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_refREI_LARE805C_18.addFeatures(features_refREI_LARE805C_18);
var lyr_refREI_LARE805C_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_refREI_LARE805C_18, 
                style: style_refREI_LARE805C_18,
                popuplayertitle: 'ref:REI_LARE805C',
                interactive: true,
                title: '<img src="styles/legend/refREI_LARE805C_18.png" /> ref:REI_LARE805C'
            });
var format_refREI_LARE8610_19 = new ol.format.GeoJSON();
var features_refREI_LARE8610_19 = format_refREI_LARE8610_19.readFeatures(json_refREI_LARE8610_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3004'});
var jsonSource_refREI_LARE8610_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_refREI_LARE8610_19.addFeatures(features_refREI_LARE8610_19);
var lyr_refREI_LARE8610_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_refREI_LARE8610_19, 
                style: style_refREI_LARE8610_19,
                popuplayertitle: 'ref:REI_LARE8610',
                interactive: true,
                title: '<img src="styles/legend/refREI_LARE8610_19.png" /> ref:REI_LARE8610'
            });
var format_refREI_LARE8190_20 = new ol.format.GeoJSON();
var features_refREI_LARE8190_20 = format_refREI_LARE8190_20.readFeatures(json_refREI_LARE8190_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3004'});
var jsonSource_refREI_LARE8190_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_refREI_LARE8190_20.addFeatures(features_refREI_LARE8190_20);
var lyr_refREI_LARE8190_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_refREI_LARE8190_20, 
                style: style_refREI_LARE8190_20,
                popuplayertitle: 'ref:REI_LARE8190',
                interactive: true,
                title: '<img src="styles/legend/refREI_LARE8190_20.png" /> ref:REI_LARE8190'
            });
var format_refREI_LARE8270_21 = new ol.format.GeoJSON();
var features_refREI_LARE8270_21 = format_refREI_LARE8270_21.readFeatures(json_refREI_LARE8270_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3004'});
var jsonSource_refREI_LARE8270_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_refREI_LARE8270_21.addFeatures(features_refREI_LARE8270_21);
var lyr_refREI_LARE8270_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_refREI_LARE8270_21, 
                style: style_refREI_LARE8270_21,
                popuplayertitle: 'ref:REI_LARE8270',
                interactive: true,
                title: '<img src="styles/legend/refREI_LARE8270_21.png" /> ref:REI_LARE8270'
            });
var format_refREI_LARE8290_22 = new ol.format.GeoJSON();
var features_refREI_LARE8290_22 = format_refREI_LARE8290_22.readFeatures(json_refREI_LARE8290_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3004'});
var jsonSource_refREI_LARE8290_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_refREI_LARE8290_22.addFeatures(features_refREI_LARE8290_22);
var lyr_refREI_LARE8290_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_refREI_LARE8290_22, 
                style: style_refREI_LARE8290_22,
                popuplayertitle: 'ref:REI_LARE8290',
                interactive: true,
                title: '<img src="styles/legend/refREI_LARE8290_22.png" /> ref:REI_LARE8290'
            });
var format_refREI_LARE8170_23 = new ol.format.GeoJSON();
var features_refREI_LARE8170_23 = format_refREI_LARE8170_23.readFeatures(json_refREI_LARE8170_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3004'});
var jsonSource_refREI_LARE8170_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_refREI_LARE8170_23.addFeatures(features_refREI_LARE8170_23);
var lyr_refREI_LARE8170_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_refREI_LARE8170_23, 
                style: style_refREI_LARE8170_23,
                popuplayertitle: 'ref:REI_LARE8170',
                interactive: true,
                title: '<img src="styles/legend/refREI_LARE8170_23.png" /> ref:REI_LARE8170'
            });
var format_refREI_LARE817B_24 = new ol.format.GeoJSON();
var features_refREI_LARE817B_24 = format_refREI_LARE817B_24.readFeatures(json_refREI_LARE817B_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3004'});
var jsonSource_refREI_LARE817B_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_refREI_LARE817B_24.addFeatures(features_refREI_LARE817B_24);
var lyr_refREI_LARE817B_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_refREI_LARE817B_24, 
                style: style_refREI_LARE817B_24,
                popuplayertitle: 'ref:REI_LARE817B',
                interactive: true,
                title: '<img src="styles/legend/refREI_LARE817B_24.png" /> ref:REI_LARE817B'
            });
var format_refREI_LARE861B_25 = new ol.format.GeoJSON();
var features_refREI_LARE861B_25 = format_refREI_LARE861B_25.readFeatures(json_refREI_LARE861B_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3004'});
var jsonSource_refREI_LARE861B_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_refREI_LARE861B_25.addFeatures(features_refREI_LARE861B_25);
var lyr_refREI_LARE861B_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_refREI_LARE861B_25, 
                style: style_refREI_LARE861B_25,
                popuplayertitle: 'ref:REI_LARE861B',
                interactive: true,
                title: '<img src="styles/legend/refREI_LARE861B_25.png" /> ref:REI_LARE861B'
            });
var format_refREI_LARE861C_26 = new ol.format.GeoJSON();
var features_refREI_LARE861C_26 = format_refREI_LARE861C_26.readFeatures(json_refREI_LARE861C_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3004'});
var jsonSource_refREI_LARE861C_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_refREI_LARE861C_26.addFeatures(features_refREI_LARE861C_26);
var lyr_refREI_LARE861C_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_refREI_LARE861C_26, 
                style: style_refREI_LARE861C_26,
                popuplayertitle: 'ref:REI_LARE861C',
                interactive: true,
                title: '<img src="styles/legend/refREI_LARE861C_26.png" /> ref:REI_LARE861C'
            });
var format_refREI_LARE8650_27 = new ol.format.GeoJSON();
var features_refREI_LARE8650_27 = format_refREI_LARE8650_27.readFeatures(json_refREI_LARE8650_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3004'});
var jsonSource_refREI_LARE8650_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_refREI_LARE8650_27.addFeatures(features_refREI_LARE8650_27);
var lyr_refREI_LARE8650_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_refREI_LARE8650_27, 
                style: style_refREI_LARE8650_27,
                popuplayertitle: 'ref:REI_LARE8650',
                interactive: true,
                title: '<img src="styles/legend/refREI_LARE8650_27.png" /> ref:REI_LARE8650'
            });
var format_refREI_LARE8630_28 = new ol.format.GeoJSON();
var features_refREI_LARE8630_28 = format_refREI_LARE8630_28.readFeatures(json_refREI_LARE8630_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3004'});
var jsonSource_refREI_LARE8630_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_refREI_LARE8630_28.addFeatures(features_refREI_LARE8630_28);
var lyr_refREI_LARE8630_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_refREI_LARE8630_28, 
                style: style_refREI_LARE8630_28,
                popuplayertitle: 'ref:REI_LARE8630',
                interactive: true,
                title: '<img src="styles/legend/refREI_LARE8630_28.png" /> ref:REI_LARE8630'
            });
var format_refREI_LARE8150_29 = new ol.format.GeoJSON();
var features_refREI_LARE8150_29 = format_refREI_LARE8150_29.readFeatures(json_refREI_LARE8150_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3004'});
var jsonSource_refREI_LARE8150_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_refREI_LARE8150_29.addFeatures(features_refREI_LARE8150_29);
var lyr_refREI_LARE8150_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_refREI_LARE8150_29, 
                style: style_refREI_LARE8150_29,
                popuplayertitle: 'ref:REI_LARE8150',
                interactive: true,
                title: '<img src="styles/legend/refREI_LARE8150_29.png" /> ref:REI_LARE8150'
            });
var format_refREI_LARE8230_30 = new ol.format.GeoJSON();
var features_refREI_LARE8230_30 = format_refREI_LARE8230_30.readFeatures(json_refREI_LARE8230_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3004'});
var jsonSource_refREI_LARE8230_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_refREI_LARE8230_30.addFeatures(features_refREI_LARE8230_30);
var lyr_refREI_LARE8230_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_refREI_LARE8230_30, 
                style: style_refREI_LARE8230_30,
                popuplayertitle: 'ref:REI_LARE8230',
                interactive: true,
                title: '<img src="styles/legend/refREI_LARE8230_30.png" /> ref:REI_LARE8230'
            });
var format_refREI_LARE8090_31 = new ol.format.GeoJSON();
var features_refREI_LARE8090_31 = format_refREI_LARE8090_31.readFeatures(json_refREI_LARE8090_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3004'});
var jsonSource_refREI_LARE8090_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_refREI_LARE8090_31.addFeatures(features_refREI_LARE8090_31);
var lyr_refREI_LARE8090_31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_refREI_LARE8090_31, 
                style: style_refREI_LARE8090_31,
                popuplayertitle: 'ref:REI_LARE8090',
                interactive: true,
                title: '<img src="styles/legend/refREI_LARE8090_31.png" /> ref:REI_LARE8090'
            });
var format_refREI_LARE809A_32 = new ol.format.GeoJSON();
var features_refREI_LARE809A_32 = format_refREI_LARE809A_32.readFeatures(json_refREI_LARE809A_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3004'});
var jsonSource_refREI_LARE809A_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_refREI_LARE809A_32.addFeatures(features_refREI_LARE809A_32);
var lyr_refREI_LARE809A_32 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_refREI_LARE809A_32, 
                style: style_refREI_LARE809A_32,
                popuplayertitle: 'ref:REI_LARE809A',
                interactive: true,
                title: '<img src="styles/legend/refREI_LARE809A_32.png" /> ref:REI_LARE809A'
            });
var format_refREI_LARE8120_33 = new ol.format.GeoJSON();
var features_refREI_LARE8120_33 = format_refREI_LARE8120_33.readFeatures(json_refREI_LARE8120_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3004'});
var jsonSource_refREI_LARE8120_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_refREI_LARE8120_33.addFeatures(features_refREI_LARE8120_33);
var lyr_refREI_LARE8120_33 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_refREI_LARE8120_33, 
                style: style_refREI_LARE8120_33,
                popuplayertitle: 'ref:REI_LARE8120',
                interactive: true,
                title: '<img src="styles/legend/refREI_LARE8120_33.png" /> ref:REI_LARE8120'
            });
var format_refREI_LARE812A_34 = new ol.format.GeoJSON();
var features_refREI_LARE812A_34 = format_refREI_LARE812A_34.readFeatures(json_refREI_LARE812A_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3004'});
var jsonSource_refREI_LARE812A_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_refREI_LARE812A_34.addFeatures(features_refREI_LARE812A_34);
var lyr_refREI_LARE812A_34 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_refREI_LARE812A_34, 
                style: style_refREI_LARE812A_34,
                popuplayertitle: 'ref:REI_LARE812A',
                interactive: true,
                title: '<img src="styles/legend/refREI_LARE812A_34.png" /> ref:REI_LARE812A'
            });
var format_refREI_LARE808A_35 = new ol.format.GeoJSON();
var features_refREI_LARE808A_35 = format_refREI_LARE808A_35.readFeatures(json_refREI_LARE808A_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3004'});
var jsonSource_refREI_LARE808A_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_refREI_LARE808A_35.addFeatures(features_refREI_LARE808A_35);
var lyr_refREI_LARE808A_35 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_refREI_LARE808A_35, 
                style: style_refREI_LARE808A_35,
                popuplayertitle: 'ref:REI_LARE808A',
                interactive: true,
                title: '<img src="styles/legend/refREI_LARE808A_35.png" /> ref:REI_LARE808A'
            });
var format_refREI_LARE808B_36 = new ol.format.GeoJSON();
var features_refREI_LARE808B_36 = format_refREI_LARE808B_36.readFeatures(json_refREI_LARE808B_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3004'});
var jsonSource_refREI_LARE808B_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_refREI_LARE808B_36.addFeatures(features_refREI_LARE808B_36);
var lyr_refREI_LARE808B_36 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_refREI_LARE808B_36, 
                style: style_refREI_LARE808B_36,
                popuplayertitle: 'ref:REI_LARE808B',
                interactive: true,
                title: '<img src="styles/legend/refREI_LARE808B_36.png" /> ref:REI_LARE808B'
            });
var format_Differenza_37 = new ol.format.GeoJSON();
var features_Differenza_37 = format_Differenza_37.readFeatures(json_Differenza_37, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3004'});
var jsonSource_Differenza_37 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Differenza_37.addFeatures(features_Differenza_37);
var lyr_Differenza_37 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Differenza_37, 
                style: style_Differenza_37,
                popuplayertitle: 'Differenza',
                interactive: true,
                title: '<img src="styles/legend/Differenza_37.png" /> Differenza'
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
                                layers: [lyr_refREI_LARE8080_4,lyr_refREI_LARE8710_5,lyr_refREI_LARE8040_6,lyr_refREI_LARE8010_7,lyr_803etichette_8,lyr_refREI_LARE8060_9,lyr_refREI_LARE8070_10,lyr_refREI_LARE804A_11,lyr_refREI_LARE8060_12,lyr_refREI_LARE806A_13,lyr_refREI_LARE806B_14,lyr_refREI_LARE8050_15,lyr_refREI_LARE805A_16,lyr_refREI_LARE805B_17,lyr_refREI_LARE805C_18,lyr_refREI_LARE8610_19,lyr_refREI_LARE8190_20,lyr_refREI_LARE8270_21,lyr_refREI_LARE8290_22,lyr_refREI_LARE8170_23,lyr_refREI_LARE817B_24,lyr_refREI_LARE861B_25,lyr_refREI_LARE861C_26,lyr_refREI_LARE8650_27,lyr_refREI_LARE8630_28,lyr_refREI_LARE8150_29,lyr_refREI_LARE8230_30,lyr_refREI_LARE8090_31,lyr_refREI_LARE809A_32,lyr_refREI_LARE8120_33,lyr_refREI_LARE812A_34,lyr_refREI_LARE808A_35,lyr_refREI_LARE808B_36,],
                                fold: 'close',
                                title: 'Sentieri LARE8- OSM'});
var group_Sentiero00 = new ol.layer.Group({
                                layers: [lyr_sentiero00_I_shp_2,lyr_sentiero00_ii_shp_3,],
                                fold: 'close',
                                title: 'Sentiero 00'});
var group_LuoghidiPosaPALI = new ol.layer.Group({
                                layers: [lyr_DatabasesentieriCAISansepolcroLuoghidiPosa_1,],
                                fold: 'open',
                                title: 'Luoghi di Posa - PALI'});
var group_Cartografiadisfondo = new ol.layer.Group({
                                layers: [lyr_OpenTopoMap_0,],
                                fold: 'close',
                                title: 'Cartografia di sfondo'});
var group_Qosm = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Qosm'});

lyr_OpenTopoMap_0.setVisible(true);lyr_DatabasesentieriCAISansepolcroLuoghidiPosa_1.setVisible(true);lyr_sentiero00_I_shp_2.setVisible(true);lyr_sentiero00_ii_shp_3.setVisible(true);lyr_refREI_LARE8080_4.setVisible(true);lyr_refREI_LARE8710_5.setVisible(true);lyr_refREI_LARE8040_6.setVisible(true);lyr_refREI_LARE8010_7.setVisible(true);lyr_803etichette_8.setVisible(true);lyr_refREI_LARE8060_9.setVisible(true);lyr_refREI_LARE8070_10.setVisible(true);lyr_refREI_LARE804A_11.setVisible(true);lyr_refREI_LARE8060_12.setVisible(true);lyr_refREI_LARE806A_13.setVisible(true);lyr_refREI_LARE806B_14.setVisible(true);lyr_refREI_LARE8050_15.setVisible(true);lyr_refREI_LARE805A_16.setVisible(true);lyr_refREI_LARE805B_17.setVisible(true);lyr_refREI_LARE805C_18.setVisible(true);lyr_refREI_LARE8610_19.setVisible(true);lyr_refREI_LARE8190_20.setVisible(true);lyr_refREI_LARE8270_21.setVisible(true);lyr_refREI_LARE8290_22.setVisible(true);lyr_refREI_LARE8170_23.setVisible(true);lyr_refREI_LARE817B_24.setVisible(true);lyr_refREI_LARE861B_25.setVisible(true);lyr_refREI_LARE861C_26.setVisible(true);lyr_refREI_LARE8650_27.setVisible(true);lyr_refREI_LARE8630_28.setVisible(true);lyr_refREI_LARE8150_29.setVisible(true);lyr_refREI_LARE8230_30.setVisible(true);lyr_refREI_LARE8090_31.setVisible(true);lyr_refREI_LARE809A_32.setVisible(true);lyr_refREI_LARE8120_33.setVisible(true);lyr_refREI_LARE812A_34.setVisible(true);lyr_refREI_LARE808A_35.setVisible(true);lyr_refREI_LARE808B_36.setVisible(true);lyr_Differenza_37.setVisible(true);lyr_refREI_LARE0940_38.setVisible(true);lyr_refREI_LARE094A_39.setVisible(true);lyr_refREI_LARE094B_40.setVisible(true);lyr_refREI_LARE0930_41.setVisible(true);lyr_refREI_LARE0910_42.setVisible(true);lyr_refREI_LARE0880_43.setVisible(true);lyr_refREI_LARE0870_44.setVisible(true);lyr_refREI_LARE0850_45.setVisible(true);lyr_refREI_LARE0840_46.setVisible(true);lyr_refREI_LARE0800_47.setVisible(true);lyr_refREI_LARE0780_48.setVisible(true);lyr_refREI_LARE0750_49.setVisible(true);lyr_refREI_LARE0660_50.setVisible(true);lyr_refREI_LARE0610_51.setVisible(true);lyr_refREI_LARE0590_52.setVisible(true);lyr_refREI_LARE0470_53.setVisible(true);lyr_refREI_LARE0390_54.setVisible(true);lyr_refREI_LARE0320_55.setVisible(true);lyr_refREI_LARE0210_56.setVisible(true);lyr_refREI_LARE020A_57.setVisible(true);lyr_refREI_LARE0200_58.setVisible(true);lyr_refREI_LARE0190_59.setVisible(true);lyr_refREI_LARE0180_60.setVisible(true);lyr_refREI_LARE018A_61.setVisible(true);lyr_refREI_LARE018B_62.setVisible(true);lyr_refREI_LARE0140_63.setVisible(true);lyr_refREI_LARE0130_64.setVisible(true);lyr_refREI_LARE0120_65.setVisible(true);lyr_refREI_LARE1060_66.setVisible(true);lyr_refREI_LARE1080_67.setVisible(true);
var layersList = [group_Cartografiadisfondo,group_LuoghidiPosaPALI,group_Sentiero00,group_SentieriLARE8OSM,lyr_Differenza_37,group_SentieriLARE0OSM,group_SentieriLARE1OSM];
lyr_DatabasesentieriCAISansepolcroLuoghidiPosa_1.set('fieldAliases', {'021': '021', 'LARE021': 'LARE021', '021/01': '021/01', 'Passo di Viamaggio': 'Passo di Viamaggio', 'CAI Sansepolcro': 'CAI Sansepolcro', 'field_6': 'field_6', 'Alpe della Luna': 'Alpe della Luna', 'Pieve Santo Stefano': 'Pieve Santo Stefano', 'Toscana': 'Toscana', 'AR': 'AR', '985': '985', '43°40\'995': '43°40\'995', '12°06\'935': '12°06\'935', 'field_14': 'field_14', 'field_15': 'field_15', 'Legno': 'Legno', 'cattivo': 'cattivo', 'feb 2026': 'feb 2026', 'Maggini': 'Maggini', 'field_20': 'field_20', 'Ripristino': 'Ripristino', '43,68325': '43,68325', '12,11558333': '12,11558333', });
lyr_sentiero00_I_shp_2.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', 'N.': 'N.', 'N. ex': 'N. ex', 'partenza': 'partenza', 'Arrivo': 'Arrivo', });
lyr_sentiero00_ii_shp_3.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', 'N.': 'N.', 'N. ex': 'N. ex', 'Partenza': 'Partenza', 'Arrivo': 'Arrivo', });
lyr_refREI_LARE8080_4.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'ref_REI': 'ref_REI', 'type': 'type', 'to': 'to', 'survey_dat': 'survey_dat', 'source_ref': 'source_ref', 'route': 'route', 'roundtrip': 'roundtrip', 'ref': 'ref', 'osmc_symbo': 'osmc_symbo', 'operator': 'operator', 'old_ref': 'old_ref', 'network': 'network', 'from': 'from', 'cai_scale': 'cai_scale', });
lyr_refREI_LARE8710_5.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'ref_REI': 'ref_REI', 'type': 'type', 'to': 'to', 'source_ref': 'source_ref', 'route': 'route', 'ref': 'ref', 'osmc_symbo': 'osmc_symbo', 'old_ref': 'old_ref', 'network': 'network', 'from': 'from', 'cai_scale': 'cai_scale', });
lyr_refREI_LARE8040_6.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'ref_REI': 'ref_REI', 'type': 'type', 'to': 'to', 'survey_dat': 'survey_dat', 'source_ref': 'source_ref', 'route': 'route', 'ref': 'ref', 'osmc_symbo': 'osmc_symbo', 'old_ref': 'old_ref', 'network': 'network', 'from': 'from', 'cai_scale': 'cai_scale', });
lyr_refREI_LARE8010_7.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'ref_REI': 'ref_REI', 'type': 'type', 'to': 'to', 'survey_dat': 'survey_dat', 'source_ref': 'source_ref', 'route': 'route', 'roundtrip': 'roundtrip', 'ref': 'ref', 'osmc_symbo': 'osmc_symbo', 'operator': 'operator', 'old_ref': 'old_ref', 'network': 'network', 'from': 'from', 'cai_scale': 'cai_scale', });
lyr_803etichette_8.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'ref_REI': 'ref_REI', 'type': 'type', 'to': 'to', 'survey_dat': 'survey_dat', 'source_ref': 'source_ref', 'route': 'route', 'roundtrip': 'roundtrip', 'ref': 'ref', 'osmc_symbo': 'osmc_symbo', 'operator': 'operator', 'old_ref': 'old_ref', 'network': 'network', 'from': 'from', 'cai_scale': 'cai_scale', });
lyr_refREI_LARE8060_9.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'ref_REI': 'ref_REI', 'type': 'type', 'to': 'to', 'survey_dat': 'survey_dat', 'source_ref': 'source_ref', 'route': 'route', 'roundtrip': 'roundtrip', 'ref': 'ref', 'osmc_symbo': 'osmc_symbo', 'operator': 'operator', 'old_ref': 'old_ref', 'network': 'network', 'from': 'from', 'cai_scale': 'cai_scale', });
lyr_refREI_LARE8070_10.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'ref_REI': 'ref_REI', 'type': 'type', 'to': 'to', 'survey_dat': 'survey_dat', 'source_ref': 'source_ref', 'route': 'route', 'ref': 'ref', 'osmc_symbo': 'osmc_symbo', 'old_ref': 'old_ref', 'network': 'network', 'from': 'from', 'cai_scale': 'cai_scale', });
lyr_refREI_LARE804A_11.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'ref_REI': 'ref_REI', 'type': 'type', 'to': 'to', 'survey_dat': 'survey_dat', 'route': 'route', 'roundtrip': 'roundtrip', 'ref': 'ref', 'osmc_symbo': 'osmc_symbo', 'operator': 'operator', 'network': 'network', 'from': 'from', 'cai_scale': 'cai_scale', });
lyr_refREI_LARE8060_12.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'ref_REI': 'ref_REI', 'type': 'type', 'to': 'to', 'survey_dat': 'survey_dat', 'source_ref': 'source_ref', 'route': 'route', 'roundtrip': 'roundtrip', 'ref': 'ref', 'osmc_symbo': 'osmc_symbo', 'operator': 'operator', 'old_ref': 'old_ref', 'network': 'network', 'from': 'from', 'cai_scale': 'cai_scale', });
lyr_refREI_LARE806A_13.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'ref_REI': 'ref_REI', 'type': 'type', 'to': 'to', 'survey_dat': 'survey_dat', 'source_ref': 'source_ref', 'route': 'route', 'roundtrip': 'roundtrip', 'ref': 'ref', 'osmc_symbo': 'osmc_symbo', 'operator': 'operator', 'old_ref': 'old_ref', 'network': 'network', 'from': 'from', 'cai_scale': 'cai_scale', });
lyr_refREI_LARE806B_14.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'ref_REI': 'ref_REI', 'type': 'type', 'to': 'to', 'source_ref': 'source_ref', 'route': 'route', 'ref': 'ref', 'osmc_symbo': 'osmc_symbo', 'old_ref': 'old_ref', 'network': 'network', 'from': 'from', 'cai_scale': 'cai_scale', });
lyr_refREI_LARE8050_15.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'ref_REI': 'ref_REI', 'type': 'type', 'to': 'to', 'source_ref': 'source_ref', 'route': 'route', 'ref': 'ref', 'osmc_symbo': 'osmc_symbo', 'operator': 'operator', 'old_ref': 'old_ref', 'network': 'network', 'from': 'from', 'cai_scale': 'cai_scale', });
lyr_refREI_LARE805A_16.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'ref_REI': 'ref_REI', 'type': 'type', 'to': 'to', 'survey_dat': 'survey_dat', 'source_ref': 'source_ref', 'route': 'route', 'ref': 'ref', 'osmc_symbo': 'osmc_symbo', 'old_ref': 'old_ref', 'network': 'network', 'from': 'from', 'cai_scale': 'cai_scale', });
lyr_refREI_LARE805B_17.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'ref_REI': 'ref_REI', 'type': 'type', 'to': 'to', 'source_ref': 'source_ref', 'route': 'route', 'ref': 'ref', 'osmc_symbo': 'osmc_symbo', 'old_ref': 'old_ref', 'network': 'network', 'from': 'from', 'cai_scale': 'cai_scale', });
lyr_refREI_LARE805C_18.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'ref_REI': 'ref_REI', 'type': 'type', 'to': 'to', 'survey_dat': 'survey_dat', 'source_ref': 'source_ref', 'route': 'route', 'roundtrip': 'roundtrip', 'ref': 'ref', 'osmc_symbo': 'osmc_symbo', 'operator': 'operator', 'old_ref': 'old_ref', 'network': 'network', 'from': 'from', 'cai_scale': 'cai_scale', });
lyr_refREI_LARE8610_19.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'ref_REI': 'ref_REI', 'type': 'type', 'to': 'to', 'route': 'route', 'ref': 'ref', 'osmc_symbo': 'osmc_symbo', 'operator': 'operator', 'old_ref': 'old_ref', 'network': 'network', 'from': 'from', 'cai_scale': 'cai_scale', });
lyr_refREI_LARE8190_20.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'ref_REI': 'ref_REI', 'type': 'type', 'to': 'to', 'survey_dat': 'survey_dat', 'source_ref': 'source_ref', 'route': 'route', 'roundtrip': 'roundtrip', 'ref': 'ref', 'osmc_symbo': 'osmc_symbo', 'operator': 'operator', 'old_ref': 'old_ref', 'network': 'network', 'from': 'from', 'cai_scale': 'cai_scale', });
lyr_refREI_LARE8270_21.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'ref_REI': 'ref_REI', 'type': 'type', 'to': 'to', 'survey_dat': 'survey_dat', 'source_ref': 'source_ref', 'route': 'route', 'roundtrip': 'roundtrip', 'ref': 'ref', 'osmc_symbo': 'osmc_symbo', 'operator': 'operator', 'old_ref': 'old_ref', 'network': 'network', 'from': 'from', 'cai_scale': 'cai_scale', });
lyr_refREI_LARE8290_22.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'ref_REI': 'ref_REI', 'type': 'type', 'to': 'to', 'survey_dat': 'survey_dat', 'source_ref': 'source_ref', 'route': 'route', 'roundtrip': 'roundtrip', 'ref': 'ref', 'osmc_symbo': 'osmc_symbo', 'operator': 'operator', 'old_ref': 'old_ref', 'network': 'network', 'from': 'from', 'cai_scale': 'cai_scale', });
lyr_refREI_LARE8170_23.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'ref_REI': 'ref_REI', 'via': 'via', 'type': 'type', 'to': 'to', 'source_ref': 'source_ref', 'route': 'route', 'ref': 'ref', 'osmc_symbo': 'osmc_symbo', 'operator': 'operator', 'old_ref': 'old_ref', 'network': 'network', 'from': 'from', 'distance': 'distance', 'cai_scale': 'cai_scale', });
lyr_refREI_LARE817B_24.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'ref_REI': 'ref_REI', 'type': 'type', 'to': 'to', 'symbol_it': 'symbol_it', 'symbol': 'symbol', 'source_ref': 'source_ref', 'route': 'route', 'ref': 'ref', 'osmc_symbo': 'osmc_symbo', 'operator': 'operator', 'old_ref': 'old_ref', 'network': 'network', 'from': 'from', 'distance': 'distance', 'cai_scale': 'cai_scale', });
lyr_refREI_LARE861B_25.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'ref_REI': 'ref_REI', 'type': 'type', 'to': 'to', 'symbol_it': 'symbol_it', 'symbol': 'symbol', 'survey_dat': 'survey_dat', 'source_ref': 'source_ref', 'rwn_name': 'rwn_name', 'route': 'route', 'ref': 'ref', 'osmc_symbo': 'osmc_symbo', 'operator': 'operator', 'old_ref': 'old_ref', 'network': 'network', 'from': 'from', 'cai_scale': 'cai_scale', });
lyr_refREI_LARE861C_26.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'ref_REI': 'ref_REI', 'type': 'type', 'to': 'to', 'source_ref': 'source_ref', 'route': 'route', 'ref': 'ref', 'osmc_symbo': 'osmc_symbo', 'old_ref': 'old_ref', 'network': 'network', 'from': 'from', 'cai_scale': 'cai_scale', });
lyr_refREI_LARE8650_27.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'ref_REI': 'ref_REI', 'type': 'type', 'to': 'to', 'survey_dat': 'survey_dat', 'source_ref': 'source_ref', 'route': 'route', 'ref': 'ref', 'osmc_symbo': 'osmc_symbo', 'operator': 'operator', 'old_ref': 'old_ref', 'network': 'network', 'from': 'from', 'cai_scale': 'cai_scale', });
lyr_refREI_LARE8630_28.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'ref_REI': 'ref_REI', 'type': 'type', 'to': 'to', 'survey_dat': 'survey_dat', 'source_ref': 'source_ref', 'route': 'route', 'roundtrip': 'roundtrip', 'ref': 'ref', 'osmc_symbo': 'osmc_symbo', 'old_ref': 'old_ref', 'network': 'network', 'from': 'from', 'cai_scale': 'cai_scale', });
lyr_refREI_LARE8150_29.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'ref_REI': 'ref_REI', 'type': 'type', 'to': 'to', 'survey_dat': 'survey_dat', 'source_ref': 'source_ref', 'route': 'route', 'roundtrip': 'roundtrip', 'ref': 'ref', 'osmc_symbo': 'osmc_symbo', 'operator': 'operator', 'old_ref': 'old_ref', 'network': 'network', 'from': 'from', 'cai_scale': 'cai_scale', });
lyr_refREI_LARE8230_30.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'ref_REI': 'ref_REI', 'type': 'type', 'to': 'to', 'survey_dat': 'survey_dat', 'source_ref': 'source_ref', 'route': 'route', 'roundtrip': 'roundtrip', 'ref': 'ref', 'osmc_symbo': 'osmc_symbo', 'operator': 'operator', 'old_ref': 'old_ref', 'network': 'network', 'from': 'from', 'cai_scale': 'cai_scale', });
lyr_refREI_LARE8090_31.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'ref_REI': 'ref_REI', 'type': 'type', 'to': 'to', 'survey_dat': 'survey_dat', 'source_ref': 'source_ref', 'route': 'route', 'roundtrip': 'roundtrip', 'ref': 'ref', 'osmc_symbo': 'osmc_symbo', 'old_ref': 'old_ref', 'network': 'network', 'from': 'from', 'cai_scale': 'cai_scale', });
lyr_refREI_LARE809A_32.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'ref_REI': 'ref_REI', 'type': 'type', 'to': 'to', 'survey_dat': 'survey_dat', 'source_ref': 'source_ref', 'route': 'route', 'ref': 'ref', 'osmc_symbo': 'osmc_symbo', 'old_ref': 'old_ref', 'network': 'network', 'from': 'from', 'cai_scale': 'cai_scale', });
lyr_refREI_LARE8120_33.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'ref_REI': 'ref_REI', 'type': 'type', 'to': 'to', 'survey_dat': 'survey_dat', 'source_ref': 'source_ref', 'route': 'route', 'roundtrip': 'roundtrip', 'ref': 'ref', 'osmc_symbo': 'osmc_symbo', 'operator': 'operator', 'old_ref': 'old_ref', 'network': 'network', 'from': 'from', 'cai_scale': 'cai_scale', });
lyr_refREI_LARE812A_34.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'ref_REI': 'ref_REI', 'type': 'type', 'to': 'to', 'survey_dat': 'survey_dat', 'source_ref': 'source_ref', 'route': 'route', 'roundtrip': 'roundtrip', 'ref': 'ref', 'osmc_symbo': 'osmc_symbo', 'operator': 'operator', 'old_ref': 'old_ref', 'network': 'network', 'from': 'from', 'cai_scale': 'cai_scale', });
lyr_refREI_LARE808A_35.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'ref_REI': 'ref_REI', 'type': 'type', 'to': 'to', 'survey_dat': 'survey_dat', 'source_ref': 'source_ref', 'route': 'route', 'roundtrip': 'roundtrip', 'ref': 'ref', 'osmc_symbo': 'osmc_symbo', 'operator': 'operator', 'old_ref': 'old_ref', 'network': 'network', 'from': 'from', 'cai_scale': 'cai_scale', });
lyr_refREI_LARE808B_36.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'ref_REI': 'ref_REI', 'type': 'type', 'to': 'to', 'survey_dat': 'survey_dat', 'source_ref': 'source_ref', 'route': 'route', 'roundtrip': 'roundtrip', 'ref': 'ref', 'osmc_symbo': 'osmc_symbo', 'operator': 'operator', 'old_ref': 'old_ref', 'network': 'network', 'from': 'from', 'cai_scale': 'cai_scale', });
lyr_Differenza_37.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'turn_lanes': 'turn_lanes', 'steepness': 'steepness', 'informal': 'informal', 'dog': 'dog', 'railway_en': 'railway_en', 'abandoned_': 'abandoned_', 'crossing_i': 'crossing_i', 'source_web': 'source_web', 'source_max': 'source_max', 'designatio': 'designatio', 'addr_city': 'addr_city', 'urb_hyg_se': 'urb_hyg_se', 'to_parking': 'to_parking', 'to_hotel': 'to_hotel', 'resident': 'resident', 'psv': 'psv', 'postal_ser': 'postal_ser', 'handcart': 'handcart', 'disabled': 'disabled', 'animal_dra': 'animal_dra', 'access_con': 'access_con', 'note_it': 'note_it', 'overgrown': 'overgrown', 'source_old': 'source_old', 'arcade_lef': 'arcade_lef', 'disused_hi': 'disused_hi', 'bridge_str': 'bridge_str', 'check_date': 'check_date', 'maxweightr': 'maxweightr', 'source_haz': 'source_haz', 'hazard': 'hazard', 'step_count': 'step_count', 'class_bicy': 'class_bicy', 'constructi': 'constructi', 'name_right': 'name_right', 'name_left': 'name_left', 'source_nam': 'source_nam', 'abandone_1': 'abandone_1', 'emergency': 'emergency', 'parking_bo': 'parking_bo', 'maxwidth': 'maxwidth', 'ref_id3kin': 'ref_id3kin', 'via_ferrat': 'via_ferrat', 'safety_rop': 'safety_rop', 'rungs': 'rungs', 'ladder': 'ladder', 'assisted_t': 'assisted_t', 'nat_name': 'nat_name', 'image': 'image', 'hiking': 'hiking', 'priority': 'priority', 'source_geo': 'source_geo', 'start_date': 'start_date', 'material': 'material', 'postal_cod': 'postal_cod', 'cycleway_l': 'cycleway_l', 'crossing_m': 'crossing_m', 'crossing': 'crossing', 'footway': 'footway', 'covered': 'covered', 'old_name': 'old_name', 'parking_la': 'parking_la', 'surface_no': 'surface_no', 'sidewalk_r': 'sidewalk_r', 'ford': 'ford', 'comment_en': 'comment_en', 'tactile_pa': 'tactile_pa', 'ramp': 'ramp', 'handrail': 'handrail', 'name_it': 'name_it', 'piste_type': 'piste_type', 'piste_groo': 'piste_groo', 'piste_diff': 'piste_diff', 'maxheight_': 'maxheight_', 'operator': 'operator', 'footway_su': 'footway_su', 'cycleway_s': 'cycleway_s', 'man_made': 'man_made', 'descriptio': 'descriptio', 'cutting': 'cutting', 'junction': 'junction', 'mountainbo': 'mountainbo', 'website': 'website', 'check_da_1': 'check_da_1', 'loc_name': 'loc_name', 'maxweight': 'maxweight', 'snowmobile': 'snowmobile', 'ski': 'ski', 'bridge_nam': 'bridge_nam', 'source_ref': 'source_ref', 'parking': 'parking', 'motor_vehi': 'motor_vehi', 'busway': 'busway', 'bus': 'bus', 'mtb_name': 'mtb_name', 'wikimedia_': 'wikimedia_', 'mtb_scale_': 'mtb_scale_', 'railway': 'railway', 'wheelchair': 'wheelchair', 'stroller': 'stroller', 'horse': 'horse', 'obstacle': 'obstacle', 'tourism': 'tourism', 'mtb': 'mtb', 'class_bi_1': 'class_bi_1', 'vehicle': 'vehicle', 'descript_1': 'descript_1', 'noname': 'noname', 'divider': 'divider', 'mtb_type': 'mtb_type', 'mtb_descri': 'mtb_descri', 'incline': 'incline', 'long_ref': 'long_ref', 'trail_visi': 'trail_visi', 'sac_scale': 'sac_scale', 'lanes_forw': 'lanes_forw', 'lanes_back': 'lanes_back', 'sidewalk_1': 'sidewalk_1', 'sidewalk_l': 'sidewalk_l', 'sidewalk_2': 'sidewalk_2', 'smoothness': 'smoothness', 'nat_ref': 'nat_ref', 'maxspeed_h': 'maxspeed_h', 'maxspeed_f': 'maxspeed_f', 'maxspeed_b': 'maxspeed_b', 'oneway_bic': 'oneway_bic', 'cycleway_1': 'cycleway_1', 'cycleway_2': 'cycleway_2', 'reg_ref': 'reg_ref', 'tracktype': 'tracktype', 'motorcycle': 'motorcycle', 'hgv': 'hgv', 'goods': 'goods', 'short_name': 'short_name', 'official_n': 'official_n', 'maxheight': 'maxheight', 'tunnel': 'tunnel', 'mtb_scal_1': 'mtb_scal_1', 'embankment': 'embankment', 'reg_name': 'reg_name', 'service': 'service', 'shoulder': 'shoulder', 'maxweight_': 'maxweight_', 'layer': 'layer', 'cycleway': 'cycleway', 'bridge': 'bridge', 'parking__1': 'parking__1', 'access': 'access', 'parking_ri': 'parking_ri', 'segregated': 'segregated', 'foot': 'foot', 'historic': 'historic', 'alt_name': 'alt_name', 'source_def': 'source_def', 'source_m_1': 'source_m_1', 'wikipedia': 'wikipedia', 'wikidata': 'wikidata', 'sidewalk_b': 'sidewalk_b', 'parking__2': 'parking__2', 'parking_le': 'parking_le', 'parking__3': 'parking__3', 'motor_ve_1': 'motor_ve_1', 'cycleway_b': 'cycleway_b', 'conveying': 'conveying', 'sidewalk_3': 'sidewalk_3', 'sidewalk': 'sidewalk', 'parking_co': 'parking_co', 'parking__4': 'parking__4', 'parking__5': 'parking__5', 'parking__6': 'parking__6', 'parking__7': 'parking__7', 'parking__8': 'parking__8', 'width': 'width', 'source_wid': 'source_wid', 'ref': 'ref', 'loc_ref': 'loc_ref', 'old_ref': 'old_ref', 'lanes': 'lanes', 'int_ref': 'int_ref', 'mtb_scale': 'mtb_scale', 'motorcar': 'motorcar', 'bicycle': 'bicycle', 'surface': 'surface', 'smoothne_1': 'smoothne_1', 'oneway': 'oneway', 'name_etymo': 'name_etymo', 'name': 'name', 'maxspeed_t': 'maxspeed_t', 'maxspeed': 'maxspeed', 'lit': 'lit', 'lane_marki': 'lane_marki', 'highway': 'highway', 'cycleway_r': 'cycleway_r', });
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
lyr_DatabasesentieriCAISansepolcroLuoghidiPosa_1.set('fieldImages', {'021': 'TextEdit', 'LARE021': 'TextEdit', '021/01': 'TextEdit', 'Passo di Viamaggio': 'TextEdit', 'CAI Sansepolcro': 'TextEdit', 'field_6': 'TextEdit', 'Alpe della Luna': 'TextEdit', 'Pieve Santo Stefano': 'TextEdit', 'Toscana': 'TextEdit', 'AR': 'TextEdit', '985': 'Range', '43°40\'995': 'TextEdit', '12°06\'935': 'TextEdit', 'field_14': 'TextEdit', 'field_15': 'TextEdit', 'Legno': 'TextEdit', 'cattivo': 'TextEdit', 'feb 2026': 'Range', 'Maggini': 'TextEdit', 'field_20': 'TextEdit', 'Ripristino': 'TextEdit', '43,68325': 'TextEdit', '12,11558333': 'TextEdit', });
lyr_sentiero00_I_shp_2.set('fieldImages', {'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'TextEdit', 'type': 'TextEdit', 'N.': 'Range', 'N. ex': 'TextEdit', 'partenza': 'TextEdit', 'Arrivo': 'TextEdit', });
lyr_sentiero00_ii_shp_3.set('fieldImages', {'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'TextEdit', 'type': 'TextEdit', 'N.': 'Range', 'N. ex': 'TextEdit', 'Partenza': 'TextEdit', 'Arrivo': 'TextEdit', });
lyr_refREI_LARE8080_4.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'ref_REI': 'TextEdit', 'type': 'TextEdit', 'to': 'TextEdit', 'survey_dat': 'TextEdit', 'source_ref': 'TextEdit', 'route': 'TextEdit', 'roundtrip': 'TextEdit', 'ref': 'TextEdit', 'osmc_symbo': 'TextEdit', 'operator': 'TextEdit', 'old_ref': 'TextEdit', 'network': 'TextEdit', 'from': 'TextEdit', 'cai_scale': 'TextEdit', });
lyr_refREI_LARE8710_5.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'ref_REI': '', 'type': 'TextEdit', 'to': 'TextEdit', 'source_ref': '', 'route': 'TextEdit', 'ref': 'TextEdit', 'osmc_symbo': '', 'old_ref': 'TextEdit', 'network': 'TextEdit', 'from': 'TextEdit', 'cai_scale': 'TextEdit', });
lyr_refREI_LARE8040_6.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'ref_REI': 'TextEdit', 'type': 'TextEdit', 'to': 'TextEdit', 'survey_dat': 'TextEdit', 'source_ref': 'TextEdit', 'route': 'TextEdit', 'ref': 'TextEdit', 'osmc_symbo': 'TextEdit', 'old_ref': 'TextEdit', 'network': 'TextEdit', 'from': 'TextEdit', 'cai_scale': 'TextEdit', });
lyr_refREI_LARE8010_7.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'ref_REI': '', 'type': 'TextEdit', 'to': 'TextEdit', 'survey_dat': '', 'source_ref': '', 'route': 'TextEdit', 'roundtrip': '', 'ref': 'TextEdit', 'osmc_symbo': '', 'operator': '', 'old_ref': 'TextEdit', 'network': 'TextEdit', 'from': 'TextEdit', 'cai_scale': 'TextEdit', });
lyr_803etichette_8.set('fieldImages', {'fid': 'TextEdit', 'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'ref_REI': 'TextEdit', 'type': 'TextEdit', 'to': 'TextEdit', 'survey_dat': 'TextEdit', 'source_ref': 'TextEdit', 'route': 'TextEdit', 'roundtrip': 'TextEdit', 'ref': 'TextEdit', 'osmc_symbo': 'TextEdit', 'operator': 'TextEdit', 'old_ref': 'TextEdit', 'network': 'TextEdit', 'from': 'TextEdit', 'cai_scale': 'TextEdit', });
lyr_refREI_LARE8060_9.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'ref_REI': '', 'type': 'TextEdit', 'to': 'TextEdit', 'survey_dat': '', 'source_ref': '', 'route': 'TextEdit', 'roundtrip': '', 'ref': 'TextEdit', 'osmc_symbo': '', 'operator': '', 'old_ref': 'TextEdit', 'network': 'TextEdit', 'from': 'TextEdit', 'cai_scale': 'TextEdit', });
lyr_refREI_LARE8070_10.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'ref_REI': '', 'type': 'TextEdit', 'to': 'TextEdit', 'survey_dat': '', 'source_ref': '', 'route': 'TextEdit', 'ref': 'TextEdit', 'osmc_symbo': '', 'old_ref': 'TextEdit', 'network': 'TextEdit', 'from': 'TextEdit', 'cai_scale': 'TextEdit', });
lyr_refREI_LARE804A_11.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'ref_REI': '', 'type': 'TextEdit', 'to': 'TextEdit', 'survey_dat': '', 'route': 'TextEdit', 'roundtrip': '', 'ref': 'TextEdit', 'osmc_symbo': '', 'operator': '', 'network': 'TextEdit', 'from': 'TextEdit', 'cai_scale': 'TextEdit', });
lyr_refREI_LARE8060_12.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'ref_REI': '', 'type': 'TextEdit', 'to': 'TextEdit', 'survey_dat': '', 'source_ref': '', 'route': 'TextEdit', 'roundtrip': '', 'ref': 'TextEdit', 'osmc_symbo': '', 'operator': '', 'old_ref': 'TextEdit', 'network': 'TextEdit', 'from': 'TextEdit', 'cai_scale': 'TextEdit', });
lyr_refREI_LARE806A_13.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'ref_REI': '', 'type': 'TextEdit', 'to': 'TextEdit', 'survey_dat': '', 'source_ref': '', 'route': 'TextEdit', 'roundtrip': '', 'ref': 'TextEdit', 'osmc_symbo': '', 'operator': '', 'old_ref': 'TextEdit', 'network': 'TextEdit', 'from': 'TextEdit', 'cai_scale': 'TextEdit', });
lyr_refREI_LARE806B_14.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'ref_REI': '', 'type': 'TextEdit', 'to': 'TextEdit', 'source_ref': '', 'route': 'TextEdit', 'ref': 'TextEdit', 'osmc_symbo': '', 'old_ref': 'TextEdit', 'network': 'TextEdit', 'from': 'TextEdit', 'cai_scale': 'TextEdit', });
lyr_refREI_LARE8050_15.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'ref_REI': '', 'type': 'TextEdit', 'to': 'TextEdit', 'source_ref': '', 'route': 'TextEdit', 'ref': 'TextEdit', 'osmc_symbo': '', 'operator': '', 'old_ref': 'TextEdit', 'network': 'TextEdit', 'from': 'TextEdit', 'cai_scale': 'TextEdit', });
lyr_refREI_LARE805A_16.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'ref_REI': '', 'type': 'TextEdit', 'to': 'TextEdit', 'survey_dat': '', 'source_ref': '', 'route': 'TextEdit', 'ref': 'TextEdit', 'osmc_symbo': '', 'old_ref': 'TextEdit', 'network': 'TextEdit', 'from': 'TextEdit', 'cai_scale': 'TextEdit', });
lyr_refREI_LARE805B_17.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'ref_REI': '', 'type': 'TextEdit', 'to': 'TextEdit', 'source_ref': '', 'route': 'TextEdit', 'ref': 'TextEdit', 'osmc_symbo': '', 'old_ref': 'TextEdit', 'network': 'TextEdit', 'from': 'TextEdit', 'cai_scale': 'TextEdit', });
lyr_refREI_LARE805C_18.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'ref_REI': '', 'type': 'TextEdit', 'to': 'TextEdit', 'survey_dat': '', 'source_ref': '', 'route': 'TextEdit', 'roundtrip': '', 'ref': 'TextEdit', 'osmc_symbo': '', 'operator': '', 'old_ref': 'TextEdit', 'network': 'TextEdit', 'from': 'TextEdit', 'cai_scale': 'TextEdit', });
lyr_refREI_LARE8610_19.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'ref_REI': '', 'type': 'TextEdit', 'to': 'TextEdit', 'route': 'TextEdit', 'ref': 'TextEdit', 'osmc_symbo': '', 'operator': '', 'old_ref': 'TextEdit', 'network': 'TextEdit', 'from': 'TextEdit', 'cai_scale': 'TextEdit', });
lyr_refREI_LARE8190_20.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'ref_REI': '', 'type': 'TextEdit', 'to': 'TextEdit', 'survey_dat': '', 'source_ref': '', 'route': 'TextEdit', 'roundtrip': '', 'ref': 'TextEdit', 'osmc_symbo': '', 'operator': '', 'old_ref': 'TextEdit', 'network': 'TextEdit', 'from': 'TextEdit', 'cai_scale': 'TextEdit', });
lyr_refREI_LARE8270_21.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'ref_REI': '', 'type': 'TextEdit', 'to': 'TextEdit', 'survey_dat': '', 'source_ref': '', 'route': 'TextEdit', 'roundtrip': '', 'ref': 'TextEdit', 'osmc_symbo': '', 'operator': '', 'old_ref': 'TextEdit', 'network': 'TextEdit', 'from': 'TextEdit', 'cai_scale': 'TextEdit', });
lyr_refREI_LARE8290_22.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'ref_REI': '', 'type': 'TextEdit', 'to': 'TextEdit', 'survey_dat': '', 'source_ref': '', 'route': 'TextEdit', 'roundtrip': '', 'ref': 'TextEdit', 'osmc_symbo': '', 'operator': '', 'old_ref': 'TextEdit', 'network': 'TextEdit', 'from': 'TextEdit', 'cai_scale': 'TextEdit', });
lyr_refREI_LARE8170_23.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'ref_REI': '', 'via': '', 'type': 'TextEdit', 'to': 'TextEdit', 'source_ref': '', 'route': 'TextEdit', 'ref': 'TextEdit', 'osmc_symbo': '', 'operator': '', 'old_ref': 'TextEdit', 'network': 'TextEdit', 'from': 'TextEdit', 'distance': '', 'cai_scale': 'TextEdit', });
lyr_refREI_LARE817B_24.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'ref_REI': '', 'type': 'TextEdit', 'to': 'TextEdit', 'symbol_it': '', 'symbol': '', 'source_ref': '', 'route': 'TextEdit', 'ref': 'TextEdit', 'osmc_symbo': '', 'operator': '', 'old_ref': 'TextEdit', 'network': 'TextEdit', 'from': 'TextEdit', 'distance': '', 'cai_scale': 'TextEdit', });
lyr_refREI_LARE861B_25.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'ref_REI': '', 'type': 'TextEdit', 'to': 'TextEdit', 'symbol_it': '', 'symbol': '', 'survey_dat': '', 'source_ref': '', 'rwn_name': '', 'route': 'TextEdit', 'ref': 'TextEdit', 'osmc_symbo': '', 'operator': '', 'old_ref': 'TextEdit', 'network': 'TextEdit', 'from': 'TextEdit', 'cai_scale': 'TextEdit', });
lyr_refREI_LARE861C_26.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'ref_REI': '', 'type': 'TextEdit', 'to': 'TextEdit', 'source_ref': '', 'route': 'TextEdit', 'ref': 'TextEdit', 'osmc_symbo': '', 'old_ref': 'TextEdit', 'network': 'TextEdit', 'from': 'TextEdit', 'cai_scale': 'TextEdit', });
lyr_refREI_LARE8650_27.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'ref_REI': '', 'type': 'TextEdit', 'to': 'TextEdit', 'survey_dat': '', 'source_ref': '', 'route': 'TextEdit', 'ref': 'TextEdit', 'osmc_symbo': '', 'operator': '', 'old_ref': 'TextEdit', 'network': 'TextEdit', 'from': 'TextEdit', 'cai_scale': 'TextEdit', });
lyr_refREI_LARE8630_28.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'ref_REI': '', 'type': 'TextEdit', 'to': 'TextEdit', 'survey_dat': '', 'source_ref': '', 'route': 'TextEdit', 'roundtrip': '', 'ref': 'TextEdit', 'osmc_symbo': '', 'old_ref': 'TextEdit', 'network': 'TextEdit', 'from': 'TextEdit', 'cai_scale': 'TextEdit', });
lyr_refREI_LARE8150_29.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'ref_REI': '', 'type': 'TextEdit', 'to': 'TextEdit', 'survey_dat': '', 'source_ref': '', 'route': 'TextEdit', 'roundtrip': '', 'ref': 'TextEdit', 'osmc_symbo': '', 'operator': '', 'old_ref': 'TextEdit', 'network': 'TextEdit', 'from': 'TextEdit', 'cai_scale': 'TextEdit', });
lyr_refREI_LARE8230_30.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'ref_REI': '', 'type': 'TextEdit', 'to': 'TextEdit', 'survey_dat': '', 'source_ref': '', 'route': 'TextEdit', 'roundtrip': '', 'ref': 'TextEdit', 'osmc_symbo': '', 'operator': '', 'old_ref': 'TextEdit', 'network': 'TextEdit', 'from': 'TextEdit', 'cai_scale': 'TextEdit', });
lyr_refREI_LARE8090_31.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'ref_REI': '', 'type': 'TextEdit', 'to': 'TextEdit', 'survey_dat': '', 'source_ref': '', 'route': 'TextEdit', 'roundtrip': '', 'ref': 'TextEdit', 'osmc_symbo': '', 'old_ref': 'TextEdit', 'network': 'TextEdit', 'from': 'TextEdit', 'cai_scale': 'TextEdit', });
lyr_refREI_LARE809A_32.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'ref_REI': '', 'type': 'TextEdit', 'to': 'TextEdit', 'survey_dat': '', 'source_ref': '', 'route': 'TextEdit', 'ref': 'TextEdit', 'osmc_symbo': '', 'old_ref': 'TextEdit', 'network': 'TextEdit', 'from': 'TextEdit', 'cai_scale': 'TextEdit', });
lyr_refREI_LARE8120_33.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'ref_REI': '', 'type': 'TextEdit', 'to': 'TextEdit', 'survey_dat': '', 'source_ref': '', 'route': 'TextEdit', 'roundtrip': '', 'ref': 'TextEdit', 'osmc_symbo': '', 'operator': '', 'old_ref': 'TextEdit', 'network': 'TextEdit', 'from': 'TextEdit', 'cai_scale': 'TextEdit', });
lyr_refREI_LARE812A_34.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'ref_REI': '', 'type': 'TextEdit', 'to': 'TextEdit', 'survey_dat': '', 'source_ref': '', 'route': 'TextEdit', 'roundtrip': '', 'ref': 'TextEdit', 'osmc_symbo': '', 'operator': '', 'old_ref': 'TextEdit', 'network': 'TextEdit', 'from': 'TextEdit', 'cai_scale': 'TextEdit', });
lyr_refREI_LARE808A_35.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'ref_REI': 'TextEdit', 'type': 'TextEdit', 'to': 'TextEdit', 'survey_dat': 'TextEdit', 'source_ref': 'TextEdit', 'route': 'TextEdit', 'roundtrip': 'TextEdit', 'ref': 'TextEdit', 'osmc_symbo': 'TextEdit', 'operator': 'TextEdit', 'old_ref': 'TextEdit', 'network': 'TextEdit', 'from': 'TextEdit', 'cai_scale': 'TextEdit', });
lyr_refREI_LARE808B_36.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'ref_REI': 'TextEdit', 'type': 'TextEdit', 'to': 'TextEdit', 'survey_dat': 'TextEdit', 'source_ref': 'TextEdit', 'route': 'TextEdit', 'roundtrip': 'TextEdit', 'ref': 'TextEdit', 'osmc_symbo': 'TextEdit', 'operator': 'TextEdit', 'old_ref': 'TextEdit', 'network': 'TextEdit', 'from': 'TextEdit', 'cai_scale': 'TextEdit', });
lyr_Differenza_37.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'turn_lanes': 'TextEdit', 'steepness': 'TextEdit', 'informal': 'TextEdit', 'dog': 'TextEdit', 'railway_en': 'TextEdit', 'abandoned_': 'TextEdit', 'crossing_i': 'TextEdit', 'source_web': 'TextEdit', 'source_max': 'TextEdit', 'designatio': 'TextEdit', 'addr_city': 'TextEdit', 'urb_hyg_se': 'TextEdit', 'to_parking': 'TextEdit', 'to_hotel': 'TextEdit', 'resident': 'TextEdit', 'psv': 'TextEdit', 'postal_ser': 'TextEdit', 'handcart': 'TextEdit', 'disabled': 'TextEdit', 'animal_dra': 'TextEdit', 'access_con': 'TextEdit', 'note_it': 'TextEdit', 'overgrown': 'TextEdit', 'source_old': 'TextEdit', 'arcade_lef': 'TextEdit', 'disused_hi': 'TextEdit', 'bridge_str': 'TextEdit', 'check_date': 'TextEdit', 'maxweightr': 'TextEdit', 'source_haz': 'TextEdit', 'hazard': 'TextEdit', 'step_count': 'TextEdit', 'class_bicy': 'TextEdit', 'constructi': 'TextEdit', 'name_right': 'TextEdit', 'name_left': 'TextEdit', 'source_nam': 'TextEdit', 'abandone_1': 'TextEdit', 'emergency': 'TextEdit', 'parking_bo': 'TextEdit', 'maxwidth': 'TextEdit', 'ref_id3kin': 'TextEdit', 'via_ferrat': 'TextEdit', 'safety_rop': 'TextEdit', 'rungs': 'TextEdit', 'ladder': 'TextEdit', 'assisted_t': 'TextEdit', 'nat_name': 'TextEdit', 'image': 'TextEdit', 'hiking': 'TextEdit', 'priority': 'TextEdit', 'source_geo': 'TextEdit', 'start_date': 'TextEdit', 'material': 'TextEdit', 'postal_cod': 'TextEdit', 'cycleway_l': 'TextEdit', 'crossing_m': 'TextEdit', 'crossing': 'TextEdit', 'footway': 'TextEdit', 'covered': 'TextEdit', 'old_name': 'TextEdit', 'parking_la': 'TextEdit', 'surface_no': 'TextEdit', 'sidewalk_r': 'TextEdit', 'ford': 'TextEdit', 'comment_en': 'TextEdit', 'tactile_pa': 'TextEdit', 'ramp': 'TextEdit', 'handrail': 'TextEdit', 'name_it': 'TextEdit', 'piste_type': 'TextEdit', 'piste_groo': 'TextEdit', 'piste_diff': 'TextEdit', 'maxheight_': 'TextEdit', 'operator': 'TextEdit', 'footway_su': 'TextEdit', 'cycleway_s': 'TextEdit', 'man_made': 'TextEdit', 'descriptio': 'TextEdit', 'cutting': 'TextEdit', 'junction': 'TextEdit', 'mountainbo': 'TextEdit', 'website': 'TextEdit', 'check_da_1': 'TextEdit', 'loc_name': 'TextEdit', 'maxweight': 'TextEdit', 'snowmobile': 'TextEdit', 'ski': 'TextEdit', 'bridge_nam': 'TextEdit', 'source_ref': 'TextEdit', 'parking': 'TextEdit', 'motor_vehi': 'TextEdit', 'busway': 'TextEdit', 'bus': 'TextEdit', 'mtb_name': 'TextEdit', 'wikimedia_': 'TextEdit', 'mtb_scale_': 'TextEdit', 'railway': 'TextEdit', 'wheelchair': 'TextEdit', 'stroller': 'TextEdit', 'horse': 'TextEdit', 'obstacle': 'TextEdit', 'tourism': 'TextEdit', 'mtb': 'TextEdit', 'class_bi_1': 'TextEdit', 'vehicle': 'TextEdit', 'descript_1': 'TextEdit', 'noname': 'TextEdit', 'divider': 'TextEdit', 'mtb_type': 'TextEdit', 'mtb_descri': 'TextEdit', 'incline': 'TextEdit', 'long_ref': 'TextEdit', 'trail_visi': 'TextEdit', 'sac_scale': 'TextEdit', 'lanes_forw': 'TextEdit', 'lanes_back': 'TextEdit', 'sidewalk_1': 'TextEdit', 'sidewalk_l': 'TextEdit', 'sidewalk_2': 'TextEdit', 'smoothness': 'TextEdit', 'nat_ref': 'TextEdit', 'maxspeed_h': 'TextEdit', 'maxspeed_f': 'TextEdit', 'maxspeed_b': 'TextEdit', 'oneway_bic': 'TextEdit', 'cycleway_1': 'TextEdit', 'cycleway_2': 'TextEdit', 'reg_ref': 'TextEdit', 'tracktype': 'TextEdit', 'motorcycle': 'TextEdit', 'hgv': 'TextEdit', 'goods': 'TextEdit', 'short_name': 'TextEdit', 'official_n': 'TextEdit', 'maxheight': 'TextEdit', 'tunnel': 'TextEdit', 'mtb_scal_1': 'TextEdit', 'embankment': 'TextEdit', 'reg_name': 'TextEdit', 'service': 'TextEdit', 'shoulder': 'TextEdit', 'maxweight_': 'TextEdit', 'layer': 'TextEdit', 'cycleway': 'TextEdit', 'bridge': 'TextEdit', 'parking__1': 'TextEdit', 'access': 'TextEdit', 'parking_ri': 'TextEdit', 'segregated': 'TextEdit', 'foot': 'TextEdit', 'historic': 'TextEdit', 'alt_name': 'TextEdit', 'source_def': 'TextEdit', 'source_m_1': 'TextEdit', 'wikipedia': 'TextEdit', 'wikidata': 'TextEdit', 'sidewalk_b': 'TextEdit', 'parking__2': 'TextEdit', 'parking_le': 'TextEdit', 'parking__3': 'TextEdit', 'motor_ve_1': 'TextEdit', 'cycleway_b': 'TextEdit', 'conveying': 'TextEdit', 'sidewalk_3': 'TextEdit', 'sidewalk': 'TextEdit', 'parking_co': 'TextEdit', 'parking__4': 'TextEdit', 'parking__5': 'TextEdit', 'parking__6': 'TextEdit', 'parking__7': 'TextEdit', 'parking__8': 'TextEdit', 'width': 'TextEdit', 'source_wid': 'TextEdit', 'ref': 'TextEdit', 'loc_ref': 'TextEdit', 'old_ref': 'TextEdit', 'lanes': 'TextEdit', 'int_ref': 'TextEdit', 'mtb_scale': 'TextEdit', 'motorcar': 'TextEdit', 'bicycle': 'TextEdit', 'surface': 'TextEdit', 'smoothne_1': 'TextEdit', 'oneway': 'TextEdit', 'name_etymo': 'TextEdit', 'name': 'TextEdit', 'maxspeed_t': 'TextEdit', 'maxspeed': 'TextEdit', 'lit': 'TextEdit', 'lane_marki': 'TextEdit', 'highway': 'TextEdit', 'cycleway_r': 'TextEdit', });
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
lyr_DatabasesentieriCAISansepolcroLuoghidiPosa_1.set('fieldLabels', {'021': 'no label', 'LARE021': 'no label', '021/01': 'no label', 'Passo di Viamaggio': 'no label', 'CAI Sansepolcro': 'no label', 'field_6': 'no label', 'Alpe della Luna': 'no label', 'Pieve Santo Stefano': 'no label', 'Toscana': 'no label', 'AR': 'no label', '985': 'no label', '43°40\'995': 'no label', '12°06\'935': 'no label', 'field_14': 'no label', 'field_15': 'no label', 'Legno': 'no label', 'cattivo': 'no label', 'feb 2026': 'no label', 'Maggini': 'no label', 'field_20': 'no label', 'Ripristino': 'no label', '43,68325': 'no label', '12,11558333': 'no label', });
lyr_sentiero00_I_shp_2.set('fieldLabels', {'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', 'N.': 'no label', 'N. ex': 'no label', 'partenza': 'no label', 'Arrivo': 'no label', });
lyr_sentiero00_ii_shp_3.set('fieldLabels', {'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', 'N.': 'no label', 'N. ex': 'no label', 'Partenza': 'no label', 'Arrivo': 'no label', });
lyr_refREI_LARE8080_4.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'ref_REI': 'no label', 'type': 'no label', 'to': 'no label', 'survey_dat': 'no label', 'source_ref': 'no label', 'route': 'no label', 'roundtrip': 'no label', 'ref': 'no label', 'osmc_symbo': 'no label', 'operator': 'no label', 'old_ref': 'no label', 'network': 'no label', 'from': 'no label', 'cai_scale': 'no label', });
lyr_refREI_LARE8710_5.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'ref_REI': 'no label', 'type': 'no label', 'to': 'no label', 'source_ref': 'no label', 'route': 'no label', 'ref': 'no label', 'osmc_symbo': 'no label', 'old_ref': 'no label', 'network': 'no label', 'from': 'no label', 'cai_scale': 'no label', });
lyr_refREI_LARE8040_6.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'ref_REI': 'no label', 'type': 'no label', 'to': 'no label', 'survey_dat': 'no label', 'source_ref': 'no label', 'route': 'no label', 'ref': 'no label', 'osmc_symbo': 'no label', 'old_ref': 'no label', 'network': 'no label', 'from': 'no label', 'cai_scale': 'no label', });
lyr_refREI_LARE8010_7.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'ref_REI': 'no label', 'type': 'no label', 'to': 'no label', 'survey_dat': 'no label', 'source_ref': 'no label', 'route': 'no label', 'roundtrip': 'no label', 'ref': 'no label', 'osmc_symbo': 'no label', 'operator': 'no label', 'old_ref': 'no label', 'network': 'no label', 'from': 'no label', 'cai_scale': 'no label', });
lyr_803etichette_8.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'ref_REI': 'no label', 'type': 'no label', 'to': 'no label', 'survey_dat': 'no label', 'source_ref': 'no label', 'route': 'no label', 'roundtrip': 'no label', 'ref': 'no label', 'osmc_symbo': 'no label', 'operator': 'no label', 'old_ref': 'no label', 'network': 'no label', 'from': 'no label', 'cai_scale': 'no label', });
lyr_refREI_LARE8060_9.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'ref_REI': 'no label', 'type': 'no label', 'to': 'no label', 'survey_dat': 'no label', 'source_ref': 'no label', 'route': 'no label', 'roundtrip': 'no label', 'ref': 'no label', 'osmc_symbo': 'no label', 'operator': 'no label', 'old_ref': 'no label', 'network': 'no label', 'from': 'no label', 'cai_scale': 'no label', });
lyr_refREI_LARE8070_10.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'ref_REI': 'no label', 'type': 'no label', 'to': 'no label', 'survey_dat': 'no label', 'source_ref': 'no label', 'route': 'no label', 'ref': 'no label', 'osmc_symbo': 'no label', 'old_ref': 'no label', 'network': 'no label', 'from': 'no label', 'cai_scale': 'no label', });
lyr_refREI_LARE804A_11.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'ref_REI': 'no label', 'type': 'no label', 'to': 'no label', 'survey_dat': 'no label', 'route': 'no label', 'roundtrip': 'no label', 'ref': 'no label', 'osmc_symbo': 'no label', 'operator': 'no label', 'network': 'no label', 'from': 'no label', 'cai_scale': 'no label', });
lyr_refREI_LARE8060_12.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'ref_REI': 'no label', 'type': 'no label', 'to': 'no label', 'survey_dat': 'no label', 'source_ref': 'no label', 'route': 'no label', 'roundtrip': 'no label', 'ref': 'no label', 'osmc_symbo': 'no label', 'operator': 'no label', 'old_ref': 'no label', 'network': 'no label', 'from': 'no label', 'cai_scale': 'no label', });
lyr_refREI_LARE806A_13.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'ref_REI': 'no label', 'type': 'no label', 'to': 'no label', 'survey_dat': 'no label', 'source_ref': 'no label', 'route': 'no label', 'roundtrip': 'no label', 'ref': 'no label', 'osmc_symbo': 'no label', 'operator': 'no label', 'old_ref': 'no label', 'network': 'no label', 'from': 'no label', 'cai_scale': 'no label', });
lyr_refREI_LARE806B_14.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'ref_REI': 'no label', 'type': 'no label', 'to': 'no label', 'source_ref': 'no label', 'route': 'no label', 'ref': 'no label', 'osmc_symbo': 'no label', 'old_ref': 'no label', 'network': 'no label', 'from': 'no label', 'cai_scale': 'no label', });
lyr_refREI_LARE8050_15.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'ref_REI': 'no label', 'type': 'no label', 'to': 'no label', 'source_ref': 'no label', 'route': 'no label', 'ref': 'no label', 'osmc_symbo': 'no label', 'operator': 'no label', 'old_ref': 'no label', 'network': 'no label', 'from': 'no label', 'cai_scale': 'no label', });
lyr_refREI_LARE805A_16.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'ref_REI': 'no label', 'type': 'no label', 'to': 'no label', 'survey_dat': 'no label', 'source_ref': 'no label', 'route': 'no label', 'ref': 'no label', 'osmc_symbo': 'no label', 'old_ref': 'no label', 'network': 'no label', 'from': 'no label', 'cai_scale': 'no label', });
lyr_refREI_LARE805B_17.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'ref_REI': 'no label', 'type': 'no label', 'to': 'no label', 'source_ref': 'no label', 'route': 'no label', 'ref': 'no label', 'osmc_symbo': 'no label', 'old_ref': 'no label', 'network': 'no label', 'from': 'no label', 'cai_scale': 'no label', });
lyr_refREI_LARE805C_18.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'ref_REI': 'no label', 'type': 'no label', 'to': 'no label', 'survey_dat': 'no label', 'source_ref': 'no label', 'route': 'no label', 'roundtrip': 'no label', 'ref': 'no label', 'osmc_symbo': 'no label', 'operator': 'no label', 'old_ref': 'no label', 'network': 'no label', 'from': 'no label', 'cai_scale': 'no label', });
lyr_refREI_LARE8610_19.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'ref_REI': 'no label', 'type': 'no label', 'to': 'no label', 'route': 'no label', 'ref': 'no label', 'osmc_symbo': 'no label', 'operator': 'no label', 'old_ref': 'no label', 'network': 'no label', 'from': 'no label', 'cai_scale': 'no label', });
lyr_refREI_LARE8190_20.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'ref_REI': 'no label', 'type': 'no label', 'to': 'no label', 'survey_dat': 'no label', 'source_ref': 'no label', 'route': 'no label', 'roundtrip': 'no label', 'ref': 'no label', 'osmc_symbo': 'no label', 'operator': 'no label', 'old_ref': 'no label', 'network': 'no label', 'from': 'no label', 'cai_scale': 'no label', });
lyr_refREI_LARE8270_21.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'ref_REI': 'no label', 'type': 'no label', 'to': 'no label', 'survey_dat': 'no label', 'source_ref': 'no label', 'route': 'no label', 'roundtrip': 'no label', 'ref': 'no label', 'osmc_symbo': 'no label', 'operator': 'no label', 'old_ref': 'no label', 'network': 'no label', 'from': 'no label', 'cai_scale': 'no label', });
lyr_refREI_LARE8290_22.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'ref_REI': 'no label', 'type': 'no label', 'to': 'no label', 'survey_dat': 'no label', 'source_ref': 'no label', 'route': 'no label', 'roundtrip': 'no label', 'ref': 'no label', 'osmc_symbo': 'no label', 'operator': 'no label', 'old_ref': 'no label', 'network': 'no label', 'from': 'no label', 'cai_scale': 'no label', });
lyr_refREI_LARE8170_23.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'ref_REI': 'no label', 'via': 'no label', 'type': 'no label', 'to': 'no label', 'source_ref': 'no label', 'route': 'no label', 'ref': 'no label', 'osmc_symbo': 'no label', 'operator': 'no label', 'old_ref': 'no label', 'network': 'no label', 'from': 'no label', 'distance': 'no label', 'cai_scale': 'no label', });
lyr_refREI_LARE817B_24.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'ref_REI': 'no label', 'type': 'no label', 'to': 'no label', 'symbol_it': 'no label', 'symbol': 'no label', 'source_ref': 'no label', 'route': 'no label', 'ref': 'no label', 'osmc_symbo': 'no label', 'operator': 'no label', 'old_ref': 'no label', 'network': 'no label', 'from': 'no label', 'distance': 'no label', 'cai_scale': 'no label', });
lyr_refREI_LARE861B_25.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'ref_REI': 'no label', 'type': 'no label', 'to': 'no label', 'symbol_it': 'no label', 'symbol': 'no label', 'survey_dat': 'no label', 'source_ref': 'no label', 'rwn_name': 'no label', 'route': 'no label', 'ref': 'no label', 'osmc_symbo': 'no label', 'operator': 'no label', 'old_ref': 'no label', 'network': 'no label', 'from': 'no label', 'cai_scale': 'no label', });
lyr_refREI_LARE861C_26.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'ref_REI': 'no label', 'type': 'no label', 'to': 'no label', 'source_ref': 'no label', 'route': 'no label', 'ref': 'no label', 'osmc_symbo': 'no label', 'old_ref': 'no label', 'network': 'no label', 'from': 'no label', 'cai_scale': 'no label', });
lyr_refREI_LARE8650_27.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'ref_REI': 'no label', 'type': 'no label', 'to': 'no label', 'survey_dat': 'no label', 'source_ref': 'no label', 'route': 'no label', 'ref': 'no label', 'osmc_symbo': 'no label', 'operator': 'no label', 'old_ref': 'no label', 'network': 'no label', 'from': 'no label', 'cai_scale': 'no label', });
lyr_refREI_LARE8630_28.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'ref_REI': 'no label', 'type': 'no label', 'to': 'no label', 'survey_dat': 'no label', 'source_ref': 'no label', 'route': 'no label', 'roundtrip': 'no label', 'ref': 'no label', 'osmc_symbo': 'no label', 'old_ref': 'no label', 'network': 'no label', 'from': 'no label', 'cai_scale': 'no label', });
lyr_refREI_LARE8150_29.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'ref_REI': 'no label', 'type': 'no label', 'to': 'no label', 'survey_dat': 'no label', 'source_ref': 'no label', 'route': 'no label', 'roundtrip': 'no label', 'ref': 'no label', 'osmc_symbo': 'no label', 'operator': 'no label', 'old_ref': 'no label', 'network': 'no label', 'from': 'no label', 'cai_scale': 'no label', });
lyr_refREI_LARE8230_30.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'ref_REI': 'no label', 'type': 'no label', 'to': 'no label', 'survey_dat': 'no label', 'source_ref': 'no label', 'route': 'no label', 'roundtrip': 'no label', 'ref': 'no label', 'osmc_symbo': 'no label', 'operator': 'no label', 'old_ref': 'no label', 'network': 'no label', 'from': 'no label', 'cai_scale': 'no label', });
lyr_refREI_LARE8090_31.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'ref_REI': 'no label', 'type': 'no label', 'to': 'no label', 'survey_dat': 'no label', 'source_ref': 'no label', 'route': 'no label', 'roundtrip': 'no label', 'ref': 'no label', 'osmc_symbo': 'no label', 'old_ref': 'no label', 'network': 'no label', 'from': 'no label', 'cai_scale': 'no label', });
lyr_refREI_LARE809A_32.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'ref_REI': 'no label', 'type': 'no label', 'to': 'no label', 'survey_dat': 'no label', 'source_ref': 'no label', 'route': 'no label', 'ref': 'no label', 'osmc_symbo': 'no label', 'old_ref': 'no label', 'network': 'no label', 'from': 'no label', 'cai_scale': 'no label', });
lyr_refREI_LARE8120_33.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'ref_REI': 'no label', 'type': 'no label', 'to': 'no label', 'survey_dat': 'no label', 'source_ref': 'no label', 'route': 'no label', 'roundtrip': 'no label', 'ref': 'no label', 'osmc_symbo': 'no label', 'operator': 'no label', 'old_ref': 'no label', 'network': 'no label', 'from': 'no label', 'cai_scale': 'no label', });
lyr_refREI_LARE812A_34.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'ref_REI': 'no label', 'type': 'no label', 'to': 'no label', 'survey_dat': 'no label', 'source_ref': 'no label', 'route': 'no label', 'roundtrip': 'no label', 'ref': 'no label', 'osmc_symbo': 'no label', 'operator': 'no label', 'old_ref': 'no label', 'network': 'no label', 'from': 'no label', 'cai_scale': 'no label', });
lyr_refREI_LARE808A_35.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'ref_REI': 'no label', 'type': 'no label', 'to': 'no label', 'survey_dat': 'no label', 'source_ref': 'no label', 'route': 'no label', 'roundtrip': 'no label', 'ref': 'no label', 'osmc_symbo': 'no label', 'operator': 'no label', 'old_ref': 'no label', 'network': 'no label', 'from': 'no label', 'cai_scale': 'no label', });
lyr_refREI_LARE808B_36.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'ref_REI': 'no label', 'type': 'no label', 'to': 'no label', 'survey_dat': 'no label', 'source_ref': 'no label', 'route': 'no label', 'roundtrip': 'no label', 'ref': 'no label', 'osmc_symbo': 'no label', 'operator': 'no label', 'old_ref': 'no label', 'network': 'no label', 'from': 'no label', 'cai_scale': 'no label', });
lyr_Differenza_37.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'turn_lanes': 'no label', 'steepness': 'no label', 'informal': 'no label', 'dog': 'no label', 'railway_en': 'no label', 'abandoned_': 'no label', 'crossing_i': 'no label', 'source_web': 'no label', 'source_max': 'no label', 'designatio': 'no label', 'addr_city': 'no label', 'urb_hyg_se': 'no label', 'to_parking': 'no label', 'to_hotel': 'no label', 'resident': 'no label', 'psv': 'no label', 'postal_ser': 'no label', 'handcart': 'no label', 'disabled': 'no label', 'animal_dra': 'no label', 'access_con': 'no label', 'note_it': 'no label', 'overgrown': 'no label', 'source_old': 'no label', 'arcade_lef': 'no label', 'disused_hi': 'no label', 'bridge_str': 'no label', 'check_date': 'no label', 'maxweightr': 'no label', 'source_haz': 'no label', 'hazard': 'no label', 'step_count': 'no label', 'class_bicy': 'no label', 'constructi': 'no label', 'name_right': 'no label', 'name_left': 'no label', 'source_nam': 'no label', 'abandone_1': 'no label', 'emergency': 'no label', 'parking_bo': 'no label', 'maxwidth': 'no label', 'ref_id3kin': 'no label', 'via_ferrat': 'no label', 'safety_rop': 'no label', 'rungs': 'no label', 'ladder': 'no label', 'assisted_t': 'no label', 'nat_name': 'no label', 'image': 'no label', 'hiking': 'no label', 'priority': 'no label', 'source_geo': 'no label', 'start_date': 'no label', 'material': 'no label', 'postal_cod': 'no label', 'cycleway_l': 'no label', 'crossing_m': 'no label', 'crossing': 'no label', 'footway': 'no label', 'covered': 'no label', 'old_name': 'no label', 'parking_la': 'no label', 'surface_no': 'no label', 'sidewalk_r': 'no label', 'ford': 'no label', 'comment_en': 'no label', 'tactile_pa': 'no label', 'ramp': 'no label', 'handrail': 'no label', 'name_it': 'no label', 'piste_type': 'no label', 'piste_groo': 'no label', 'piste_diff': 'no label', 'maxheight_': 'no label', 'operator': 'no label', 'footway_su': 'no label', 'cycleway_s': 'no label', 'man_made': 'no label', 'descriptio': 'no label', 'cutting': 'no label', 'junction': 'no label', 'mountainbo': 'no label', 'website': 'no label', 'check_da_1': 'no label', 'loc_name': 'no label', 'maxweight': 'no label', 'snowmobile': 'no label', 'ski': 'no label', 'bridge_nam': 'no label', 'source_ref': 'no label', 'parking': 'no label', 'motor_vehi': 'no label', 'busway': 'no label', 'bus': 'no label', 'mtb_name': 'no label', 'wikimedia_': 'no label', 'mtb_scale_': 'no label', 'railway': 'no label', 'wheelchair': 'no label', 'stroller': 'no label', 'horse': 'no label', 'obstacle': 'no label', 'tourism': 'no label', 'mtb': 'no label', 'class_bi_1': 'no label', 'vehicle': 'no label', 'descript_1': 'no label', 'noname': 'no label', 'divider': 'no label', 'mtb_type': 'no label', 'mtb_descri': 'no label', 'incline': 'no label', 'long_ref': 'no label', 'trail_visi': 'no label', 'sac_scale': 'no label', 'lanes_forw': 'no label', 'lanes_back': 'no label', 'sidewalk_1': 'no label', 'sidewalk_l': 'no label', 'sidewalk_2': 'no label', 'smoothness': 'no label', 'nat_ref': 'no label', 'maxspeed_h': 'no label', 'maxspeed_f': 'no label', 'maxspeed_b': 'no label', 'oneway_bic': 'no label', 'cycleway_1': 'no label', 'cycleway_2': 'no label', 'reg_ref': 'no label', 'tracktype': 'no label', 'motorcycle': 'no label', 'hgv': 'no label', 'goods': 'no label', 'short_name': 'no label', 'official_n': 'no label', 'maxheight': 'no label', 'tunnel': 'no label', 'mtb_scal_1': 'no label', 'embankment': 'no label', 'reg_name': 'no label', 'service': 'no label', 'shoulder': 'no label', 'maxweight_': 'no label', 'layer': 'no label', 'cycleway': 'no label', 'bridge': 'no label', 'parking__1': 'no label', 'access': 'no label', 'parking_ri': 'no label', 'segregated': 'no label', 'foot': 'no label', 'historic': 'no label', 'alt_name': 'no label', 'source_def': 'no label', 'source_m_1': 'no label', 'wikipedia': 'no label', 'wikidata': 'no label', 'sidewalk_b': 'no label', 'parking__2': 'no label', 'parking_le': 'no label', 'parking__3': 'no label', 'motor_ve_1': 'no label', 'cycleway_b': 'no label', 'conveying': 'no label', 'sidewalk_3': 'no label', 'sidewalk': 'no label', 'parking_co': 'no label', 'parking__4': 'no label', 'parking__5': 'no label', 'parking__6': 'no label', 'parking__7': 'no label', 'parking__8': 'no label', 'width': 'no label', 'source_wid': 'no label', 'ref': 'no label', 'loc_ref': 'no label', 'old_ref': 'no label', 'lanes': 'no label', 'int_ref': 'no label', 'mtb_scale': 'no label', 'motorcar': 'no label', 'bicycle': 'no label', 'surface': 'no label', 'smoothne_1': 'no label', 'oneway': 'no label', 'name_etymo': 'no label', 'name': 'no label', 'maxspeed_t': 'no label', 'maxspeed': 'no label', 'lit': 'no label', 'lane_marki': 'no label', 'highway': 'no label', 'cycleway_r': 'no label', });
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