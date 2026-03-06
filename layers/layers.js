ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([-43.864446, -22.945797, -43.767355, -22.892234]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_UnidadesdeConservao_1 = new ol.format.GeoJSON();
var features_UnidadesdeConservao_1 = format_UnidadesdeConservao_1.readFeatures(json_UnidadesdeConservao_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_UnidadesdeConservao_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UnidadesdeConservao_1.addFeatures(features_UnidadesdeConservao_1);
var lyr_UnidadesdeConservao_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UnidadesdeConservao_1, 
                style: style_UnidadesdeConservao_1,
                popuplayertitle: 'Unidades de Conservação ',
                interactive: true,
                title: '<img src="styles/legend/UnidadesdeConservao_1.png" /> Unidades de Conservação '
            });
var format_reasUrbanaseRurais_2 = new ol.format.GeoJSON();
var features_reasUrbanaseRurais_2 = format_reasUrbanaseRurais_2.readFeatures(json_reasUrbanaseRurais_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasUrbanaseRurais_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasUrbanaseRurais_2.addFeatures(features_reasUrbanaseRurais_2);
var lyr_reasUrbanaseRurais_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasUrbanaseRurais_2, 
                style: style_reasUrbanaseRurais_2,
                popuplayertitle: 'Áreas Urbanas e Rurais ',
                interactive: true,
                title: '<img src="styles/legend/reasUrbanaseRurais_2.png" /> Áreas Urbanas e Rurais '
            });
var format_FundeadourosLongoPrazo_3 = new ol.format.GeoJSON();
var features_FundeadourosLongoPrazo_3 = format_FundeadourosLongoPrazo_3.readFeatures(json_FundeadourosLongoPrazo_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_FundeadourosLongoPrazo_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FundeadourosLongoPrazo_3.addFeatures(features_FundeadourosLongoPrazo_3);
var lyr_FundeadourosLongoPrazo_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FundeadourosLongoPrazo_3, 
                style: style_FundeadourosLongoPrazo_3,
                popuplayertitle: 'Fundeadouros - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/FundeadourosLongoPrazo_3.png" /> Fundeadouros - Longo Prazo '
            });
var format_FundeadourosMdioPrazo_4 = new ol.format.GeoJSON();
var features_FundeadourosMdioPrazo_4 = format_FundeadourosMdioPrazo_4.readFeatures(json_FundeadourosMdioPrazo_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_FundeadourosMdioPrazo_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FundeadourosMdioPrazo_4.addFeatures(features_FundeadourosMdioPrazo_4);
var lyr_FundeadourosMdioPrazo_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FundeadourosMdioPrazo_4, 
                style: style_FundeadourosMdioPrazo_4,
                popuplayertitle: 'Fundeadouros - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/FundeadourosMdioPrazo_4.png" /> Fundeadouros - Médio Prazo '
            });
var format_FundeadourosCurtoPrazo_5 = new ol.format.GeoJSON();
var features_FundeadourosCurtoPrazo_5 = format_FundeadourosCurtoPrazo_5.readFeatures(json_FundeadourosCurtoPrazo_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_FundeadourosCurtoPrazo_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FundeadourosCurtoPrazo_5.addFeatures(features_FundeadourosCurtoPrazo_5);
var lyr_FundeadourosCurtoPrazo_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FundeadourosCurtoPrazo_5, 
                style: style_FundeadourosCurtoPrazo_5,
                popuplayertitle: 'Fundeadouros - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/FundeadourosCurtoPrazo_5.png" /> Fundeadouros - Curto Prazo '
            });
var format_FundeadourosSituaoAtual_6 = new ol.format.GeoJSON();
var features_FundeadourosSituaoAtual_6 = format_FundeadourosSituaoAtual_6.readFeatures(json_FundeadourosSituaoAtual_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_FundeadourosSituaoAtual_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FundeadourosSituaoAtual_6.addFeatures(features_FundeadourosSituaoAtual_6);
var lyr_FundeadourosSituaoAtual_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FundeadourosSituaoAtual_6, 
                style: style_FundeadourosSituaoAtual_6,
                popuplayertitle: 'Fundeadouros - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/FundeadourosSituaoAtual_6.png" /> Fundeadouros - Situação Atual '
            });
var format_BaciasdeEvoluoLongoPrazo_7 = new ol.format.GeoJSON();
var features_BaciasdeEvoluoLongoPrazo_7 = format_BaciasdeEvoluoLongoPrazo_7.readFeatures(json_BaciasdeEvoluoLongoPrazo_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_BaciasdeEvoluoLongoPrazo_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BaciasdeEvoluoLongoPrazo_7.addFeatures(features_BaciasdeEvoluoLongoPrazo_7);
var lyr_BaciasdeEvoluoLongoPrazo_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BaciasdeEvoluoLongoPrazo_7, 
                style: style_BaciasdeEvoluoLongoPrazo_7,
                popuplayertitle: 'Bacias de Evolução - Longo Prazo',
                interactive: true,
                title: '<img src="styles/legend/BaciasdeEvoluoLongoPrazo_7.png" /> Bacias de Evolução - Longo Prazo'
            });
var format_BaciasdeEvoluoMdioPrazo_8 = new ol.format.GeoJSON();
var features_BaciasdeEvoluoMdioPrazo_8 = format_BaciasdeEvoluoMdioPrazo_8.readFeatures(json_BaciasdeEvoluoMdioPrazo_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_BaciasdeEvoluoMdioPrazo_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BaciasdeEvoluoMdioPrazo_8.addFeatures(features_BaciasdeEvoluoMdioPrazo_8);
var lyr_BaciasdeEvoluoMdioPrazo_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BaciasdeEvoluoMdioPrazo_8, 
                style: style_BaciasdeEvoluoMdioPrazo_8,
                popuplayertitle: 'Bacias de Evolução - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/BaciasdeEvoluoMdioPrazo_8.png" /> Bacias de Evolução - Médio Prazo '
            });
var format_BaciasdeEvoluoCurtoPrazo_9 = new ol.format.GeoJSON();
var features_BaciasdeEvoluoCurtoPrazo_9 = format_BaciasdeEvoluoCurtoPrazo_9.readFeatures(json_BaciasdeEvoluoCurtoPrazo_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_BaciasdeEvoluoCurtoPrazo_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BaciasdeEvoluoCurtoPrazo_9.addFeatures(features_BaciasdeEvoluoCurtoPrazo_9);
var lyr_BaciasdeEvoluoCurtoPrazo_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BaciasdeEvoluoCurtoPrazo_9, 
                style: style_BaciasdeEvoluoCurtoPrazo_9,
                popuplayertitle: 'Bacias de Evolução - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/BaciasdeEvoluoCurtoPrazo_9.png" /> Bacias de Evolução - Curto Prazo '
            });
var format_BaciasdeEvoluoSituaoAtual_10 = new ol.format.GeoJSON();
var features_BaciasdeEvoluoSituaoAtual_10 = format_BaciasdeEvoluoSituaoAtual_10.readFeatures(json_BaciasdeEvoluoSituaoAtual_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_BaciasdeEvoluoSituaoAtual_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BaciasdeEvoluoSituaoAtual_10.addFeatures(features_BaciasdeEvoluoSituaoAtual_10);
var lyr_BaciasdeEvoluoSituaoAtual_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BaciasdeEvoluoSituaoAtual_10, 
                style: style_BaciasdeEvoluoSituaoAtual_10,
                popuplayertitle: 'Bacias de Evolução - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/BaciasdeEvoluoSituaoAtual_10.png" /> Bacias de Evolução - Situação Atual '
            });
var format_CanaisdeAcessoLongoPrazo_11 = new ol.format.GeoJSON();
var features_CanaisdeAcessoLongoPrazo_11 = format_CanaisdeAcessoLongoPrazo_11.readFeatures(json_CanaisdeAcessoLongoPrazo_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_CanaisdeAcessoLongoPrazo_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CanaisdeAcessoLongoPrazo_11.addFeatures(features_CanaisdeAcessoLongoPrazo_11);
var lyr_CanaisdeAcessoLongoPrazo_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CanaisdeAcessoLongoPrazo_11, 
                style: style_CanaisdeAcessoLongoPrazo_11,
                popuplayertitle: 'Canais de Acesso - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/CanaisdeAcessoLongoPrazo_11.png" /> Canais de Acesso - Longo Prazo '
            });
var format_CanaisdeAcessoMdioPrazo_12 = new ol.format.GeoJSON();
var features_CanaisdeAcessoMdioPrazo_12 = format_CanaisdeAcessoMdioPrazo_12.readFeatures(json_CanaisdeAcessoMdioPrazo_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_CanaisdeAcessoMdioPrazo_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CanaisdeAcessoMdioPrazo_12.addFeatures(features_CanaisdeAcessoMdioPrazo_12);
var lyr_CanaisdeAcessoMdioPrazo_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CanaisdeAcessoMdioPrazo_12, 
                style: style_CanaisdeAcessoMdioPrazo_12,
                popuplayertitle: 'Canais de Acesso - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/CanaisdeAcessoMdioPrazo_12.png" /> Canais de Acesso - Médio Prazo '
            });
var format_CanaisdeAcessoCurtoPrazo_13 = new ol.format.GeoJSON();
var features_CanaisdeAcessoCurtoPrazo_13 = format_CanaisdeAcessoCurtoPrazo_13.readFeatures(json_CanaisdeAcessoCurtoPrazo_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_CanaisdeAcessoCurtoPrazo_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CanaisdeAcessoCurtoPrazo_13.addFeatures(features_CanaisdeAcessoCurtoPrazo_13);
var lyr_CanaisdeAcessoCurtoPrazo_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CanaisdeAcessoCurtoPrazo_13, 
                style: style_CanaisdeAcessoCurtoPrazo_13,
                popuplayertitle: 'Canais de Acesso - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/CanaisdeAcessoCurtoPrazo_13.png" /> Canais de Acesso - Curto Prazo '
            });
var format_CanaisdeAcessoSituaoAtual_14 = new ol.format.GeoJSON();
var features_CanaisdeAcessoSituaoAtual_14 = format_CanaisdeAcessoSituaoAtual_14.readFeatures(json_CanaisdeAcessoSituaoAtual_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_CanaisdeAcessoSituaoAtual_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CanaisdeAcessoSituaoAtual_14.addFeatures(features_CanaisdeAcessoSituaoAtual_14);
var lyr_CanaisdeAcessoSituaoAtual_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CanaisdeAcessoSituaoAtual_14, 
                style: style_CanaisdeAcessoSituaoAtual_14,
                popuplayertitle: 'Canais de Acesso - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/CanaisdeAcessoSituaoAtual_14.png" /> Canais de Acesso - Situação Atual '
            });
var format_AcessosFerroviriosInternosLongoPrazo_15 = new ol.format.GeoJSON();
var features_AcessosFerroviriosInternosLongoPrazo_15 = format_AcessosFerroviriosInternosLongoPrazo_15.readFeatures(json_AcessosFerroviriosInternosLongoPrazo_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AcessosFerroviriosInternosLongoPrazo_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcessosFerroviriosInternosLongoPrazo_15.addFeatures(features_AcessosFerroviriosInternosLongoPrazo_15);
var lyr_AcessosFerroviriosInternosLongoPrazo_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcessosFerroviriosInternosLongoPrazo_15, 
                style: style_AcessosFerroviriosInternosLongoPrazo_15,
                popuplayertitle: 'Acessos Ferroviários Internos - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/AcessosFerroviriosInternosLongoPrazo_15.png" /> Acessos Ferroviários Internos - Longo Prazo '
            });
var format_AcessosFerroviriosInternosMdioPrazo_16 = new ol.format.GeoJSON();
var features_AcessosFerroviriosInternosMdioPrazo_16 = format_AcessosFerroviriosInternosMdioPrazo_16.readFeatures(json_AcessosFerroviriosInternosMdioPrazo_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AcessosFerroviriosInternosMdioPrazo_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcessosFerroviriosInternosMdioPrazo_16.addFeatures(features_AcessosFerroviriosInternosMdioPrazo_16);
var lyr_AcessosFerroviriosInternosMdioPrazo_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcessosFerroviriosInternosMdioPrazo_16, 
                style: style_AcessosFerroviriosInternosMdioPrazo_16,
                popuplayertitle: 'Acessos Ferroviários Internos - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/AcessosFerroviriosInternosMdioPrazo_16.png" /> Acessos Ferroviários Internos - Médio Prazo '
            });
var format_AcessosFerroviriosInternosCurtoPrazo_17 = new ol.format.GeoJSON();
var features_AcessosFerroviriosInternosCurtoPrazo_17 = format_AcessosFerroviriosInternosCurtoPrazo_17.readFeatures(json_AcessosFerroviriosInternosCurtoPrazo_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AcessosFerroviriosInternosCurtoPrazo_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcessosFerroviriosInternosCurtoPrazo_17.addFeatures(features_AcessosFerroviriosInternosCurtoPrazo_17);
var lyr_AcessosFerroviriosInternosCurtoPrazo_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcessosFerroviriosInternosCurtoPrazo_17, 
                style: style_AcessosFerroviriosInternosCurtoPrazo_17,
                popuplayertitle: 'Acessos Ferroviários Internos - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/AcessosFerroviriosInternosCurtoPrazo_17.png" /> Acessos Ferroviários Internos - Curto Prazo '
            });
var format_AcessosFerroviriosInternosSituaoAtual_18 = new ol.format.GeoJSON();
var features_AcessosFerroviriosInternosSituaoAtual_18 = format_AcessosFerroviriosInternosSituaoAtual_18.readFeatures(json_AcessosFerroviriosInternosSituaoAtual_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AcessosFerroviriosInternosSituaoAtual_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcessosFerroviriosInternosSituaoAtual_18.addFeatures(features_AcessosFerroviriosInternosSituaoAtual_18);
var lyr_AcessosFerroviriosInternosSituaoAtual_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcessosFerroviriosInternosSituaoAtual_18, 
                style: style_AcessosFerroviriosInternosSituaoAtual_18,
                popuplayertitle: 'Acessos Ferroviários Internos - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/AcessosFerroviriosInternosSituaoAtual_18.png" /> Acessos Ferroviários Internos - Situação Atual '
            });
var format_AcessosRodoviriosInternosLongoPrazo_19 = new ol.format.GeoJSON();
var features_AcessosRodoviriosInternosLongoPrazo_19 = format_AcessosRodoviriosInternosLongoPrazo_19.readFeatures(json_AcessosRodoviriosInternosLongoPrazo_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AcessosRodoviriosInternosLongoPrazo_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcessosRodoviriosInternosLongoPrazo_19.addFeatures(features_AcessosRodoviriosInternosLongoPrazo_19);
var lyr_AcessosRodoviriosInternosLongoPrazo_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcessosRodoviriosInternosLongoPrazo_19, 
                style: style_AcessosRodoviriosInternosLongoPrazo_19,
                popuplayertitle: 'Acessos Rodoviários Internos - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/AcessosRodoviriosInternosLongoPrazo_19.png" /> Acessos Rodoviários Internos - Longo Prazo '
            });
var format_AcessosRodoviriosInternosMdioPrazo_20 = new ol.format.GeoJSON();
var features_AcessosRodoviriosInternosMdioPrazo_20 = format_AcessosRodoviriosInternosMdioPrazo_20.readFeatures(json_AcessosRodoviriosInternosMdioPrazo_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AcessosRodoviriosInternosMdioPrazo_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcessosRodoviriosInternosMdioPrazo_20.addFeatures(features_AcessosRodoviriosInternosMdioPrazo_20);
var lyr_AcessosRodoviriosInternosMdioPrazo_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcessosRodoviriosInternosMdioPrazo_20, 
                style: style_AcessosRodoviriosInternosMdioPrazo_20,
                popuplayertitle: 'Acessos Rodoviários Internos - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/AcessosRodoviriosInternosMdioPrazo_20.png" /> Acessos Rodoviários Internos - Médio Prazo '
            });
var format_AcessosRodoviriosInternosCurtoPrazo_21 = new ol.format.GeoJSON();
var features_AcessosRodoviriosInternosCurtoPrazo_21 = format_AcessosRodoviriosInternosCurtoPrazo_21.readFeatures(json_AcessosRodoviriosInternosCurtoPrazo_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AcessosRodoviriosInternosCurtoPrazo_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcessosRodoviriosInternosCurtoPrazo_21.addFeatures(features_AcessosRodoviriosInternosCurtoPrazo_21);
var lyr_AcessosRodoviriosInternosCurtoPrazo_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcessosRodoviriosInternosCurtoPrazo_21, 
                style: style_AcessosRodoviriosInternosCurtoPrazo_21,
                popuplayertitle: 'Acessos Rodoviários Internos - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/AcessosRodoviriosInternosCurtoPrazo_21.png" /> Acessos Rodoviários Internos - Curto Prazo '
            });
var format_AcessosRodoviriosInternosSituaoAtual_22 = new ol.format.GeoJSON();
var features_AcessosRodoviriosInternosSituaoAtual_22 = format_AcessosRodoviriosInternosSituaoAtual_22.readFeatures(json_AcessosRodoviriosInternosSituaoAtual_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AcessosRodoviriosInternosSituaoAtual_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcessosRodoviriosInternosSituaoAtual_22.addFeatures(features_AcessosRodoviriosInternosSituaoAtual_22);
var lyr_AcessosRodoviriosInternosSituaoAtual_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcessosRodoviriosInternosSituaoAtual_22, 
                style: style_AcessosRodoviriosInternosSituaoAtual_22,
                popuplayertitle: 'Acessos Rodoviários Internos - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/AcessosRodoviriosInternosSituaoAtual_22.png" /> Acessos Rodoviários Internos - Situação Atual '
            });
var format_AcessosRodoviriosExternos_23 = new ol.format.GeoJSON();
var features_AcessosRodoviriosExternos_23 = format_AcessosRodoviriosExternos_23.readFeatures(json_AcessosRodoviriosExternos_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AcessosRodoviriosExternos_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcessosRodoviriosExternos_23.addFeatures(features_AcessosRodoviriosExternos_23);
var lyr_AcessosRodoviriosExternos_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcessosRodoviriosExternos_23, 
                style: style_AcessosRodoviriosExternos_23,
                popuplayertitle: 'Acessos Rodoviários Externos ',
                interactive: true,
                title: '<img src="styles/legend/AcessosRodoviriosExternos_23.png" /> Acessos Rodoviários Externos '
            });
var format_reaseInstalaesAlfandegadas_24 = new ol.format.GeoJSON();
var features_reaseInstalaesAlfandegadas_24 = format_reaseInstalaesAlfandegadas_24.readFeatures(json_reaseInstalaesAlfandegadas_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reaseInstalaesAlfandegadas_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaseInstalaesAlfandegadas_24.addFeatures(features_reaseInstalaesAlfandegadas_24);
var lyr_reaseInstalaesAlfandegadas_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaseInstalaesAlfandegadas_24, 
                style: style_reaseInstalaesAlfandegadas_24,
                popuplayertitle: 'Áreas e Instalações Alfandegadas ',
                interactive: true,
                title: '<img src="styles/legend/reaseInstalaesAlfandegadas_24.png" /> Áreas e Instalações Alfandegadas '
            });
var format_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_25 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_25 = format_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_25.readFeatures(json_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_25.addFeatures(features_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_25);
var lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_25, 
                style: style_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_25,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias Disponíveis para Exploração Indireta - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_25.png" /> Áreas Não Afetas às Operações Portuárias Disponíveis para Exploração Indireta - Longo Prazo '
            });
var format_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_26 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_26 = format_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_26.readFeatures(json_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_26.addFeatures(features_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_26);
var lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_26, 
                style: style_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_26,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias Disponíveis para Exploração Indireta - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_26.png" /> Áreas Não Afetas às Operações Portuárias Disponíveis para Exploração Indireta - Médio Prazo '
            });
var format_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_27 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_27 = format_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_27.readFeatures(json_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_27.addFeatures(features_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_27);
var lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_27, 
                style: style_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_27,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias Disponíveis para Exploração Indireta - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_27.png" /> Áreas Não Afetas às Operações Portuárias Disponíveis para Exploração Indireta - Curto Prazo '
            });
var format_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_28 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_28 = format_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_28.readFeatures(json_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_28.addFeatures(features_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_28);
var lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_28, 
                style: style_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_28,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias Disponíveis para Exploração Indireta - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_28.png" /> Áreas Não Afetas às Operações Portuárias Disponíveis para Exploração Indireta - Situação Atual '
            });
var format_reasNoAfetassOperaesPorturiasemExploraoIndiretaLongoPrazo_29 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasemExploraoIndiretaLongoPrazo_29 = format_reasNoAfetassOperaesPorturiasemExploraoIndiretaLongoPrazo_29.readFeatures(json_reasNoAfetassOperaesPorturiasemExploraoIndiretaLongoPrazo_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasNoAfetassOperaesPorturiasemExploraoIndiretaLongoPrazo_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasemExploraoIndiretaLongoPrazo_29.addFeatures(features_reasNoAfetassOperaesPorturiasemExploraoIndiretaLongoPrazo_29);
var lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaLongoPrazo_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasemExploraoIndiretaLongoPrazo_29, 
                style: style_reasNoAfetassOperaesPorturiasemExploraoIndiretaLongoPrazo_29,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias em Exploração Indireta - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasemExploraoIndiretaLongoPrazo_29.png" /> Áreas Não Afetas às Operações Portuárias em Exploração Indireta - Longo Prazo '
            });
var format_reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_30 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_30 = format_reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_30.readFeatures(json_reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_30.addFeatures(features_reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_30);
var lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_30, 
                style: style_reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_30,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias em Exploração Indireta - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_30.png" /> Áreas Não Afetas às Operações Portuárias em Exploração Indireta - Médio Prazo '
            });
var format_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_31 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_31 = format_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_31.readFeatures(json_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_31.addFeatures(features_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_31);
var lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_31, 
                style: style_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_31,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias em Exploração Indireta - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_31.png" /> Áreas Não Afetas às Operações Portuárias em Exploração Indireta - Curto Prazo '
            });
var format_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_32 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_32 = format_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_32.readFeatures(json_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_32.addFeatures(features_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_32);
var lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_32 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_32, 
                style: style_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_32,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias em Exploração Indireta - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_32.png" /> Áreas Não Afetas às Operações Portuárias em Exploração Indireta - Situação Atual '
            });
var format_reasNoAfetassOperaesPorturiasLongoPrazo_33 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasLongoPrazo_33 = format_reasNoAfetassOperaesPorturiasLongoPrazo_33.readFeatures(json_reasNoAfetassOperaesPorturiasLongoPrazo_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasNoAfetassOperaesPorturiasLongoPrazo_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasLongoPrazo_33.addFeatures(features_reasNoAfetassOperaesPorturiasLongoPrazo_33);
var lyr_reasNoAfetassOperaesPorturiasLongoPrazo_33 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasLongoPrazo_33, 
                style: style_reasNoAfetassOperaesPorturiasLongoPrazo_33,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasLongoPrazo_33.png" /> Áreas Não Afetas às Operações Portuárias - Longo Prazo '
            });
var format_reasNoAfetassOperaesPorturiasMdioPrazo_34 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasMdioPrazo_34 = format_reasNoAfetassOperaesPorturiasMdioPrazo_34.readFeatures(json_reasNoAfetassOperaesPorturiasMdioPrazo_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasNoAfetassOperaesPorturiasMdioPrazo_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasMdioPrazo_34.addFeatures(features_reasNoAfetassOperaesPorturiasMdioPrazo_34);
var lyr_reasNoAfetassOperaesPorturiasMdioPrazo_34 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasMdioPrazo_34, 
                style: style_reasNoAfetassOperaesPorturiasMdioPrazo_34,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasMdioPrazo_34.png" /> Áreas Não Afetas às Operações Portuárias - Médio Prazo '
            });
var format_reasNoAfetassOperaesPorturiasCurtoPrazo_35 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasCurtoPrazo_35 = format_reasNoAfetassOperaesPorturiasCurtoPrazo_35.readFeatures(json_reasNoAfetassOperaesPorturiasCurtoPrazo_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasNoAfetassOperaesPorturiasCurtoPrazo_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasCurtoPrazo_35.addFeatures(features_reasNoAfetassOperaesPorturiasCurtoPrazo_35);
var lyr_reasNoAfetassOperaesPorturiasCurtoPrazo_35 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasCurtoPrazo_35, 
                style: style_reasNoAfetassOperaesPorturiasCurtoPrazo_35,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasCurtoPrazo_35.png" /> Áreas Não Afetas às Operações Portuárias - Curto Prazo '
            });
var format_reasNoAfetassOperaesPorturiasSituaoAtual_36 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasSituaoAtual_36 = format_reasNoAfetassOperaesPorturiasSituaoAtual_36.readFeatures(json_reasNoAfetassOperaesPorturiasSituaoAtual_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasNoAfetassOperaesPorturiasSituaoAtual_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasSituaoAtual_36.addFeatures(features_reasNoAfetassOperaesPorturiasSituaoAtual_36);
var lyr_reasNoAfetassOperaesPorturiasSituaoAtual_36 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasSituaoAtual_36, 
                style: style_reasNoAfetassOperaesPorturiasSituaoAtual_36,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasSituaoAtual_36.png" /> Áreas Não Afetas às Operações Portuárias - Situação Atual '
            });
var format_AcostagemLongoPrazo_37 = new ol.format.GeoJSON();
var features_AcostagemLongoPrazo_37 = format_AcostagemLongoPrazo_37.readFeatures(json_AcostagemLongoPrazo_37, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AcostagemLongoPrazo_37 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcostagemLongoPrazo_37.addFeatures(features_AcostagemLongoPrazo_37);
var lyr_AcostagemLongoPrazo_37 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcostagemLongoPrazo_37, 
                style: style_AcostagemLongoPrazo_37,
                popuplayertitle: 'Acostagem - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/AcostagemLongoPrazo_37.png" /> Acostagem - Longo Prazo '
            });
var format_AcostagemMdioPrazo_38 = new ol.format.GeoJSON();
var features_AcostagemMdioPrazo_38 = format_AcostagemMdioPrazo_38.readFeatures(json_AcostagemMdioPrazo_38, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AcostagemMdioPrazo_38 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcostagemMdioPrazo_38.addFeatures(features_AcostagemMdioPrazo_38);
var lyr_AcostagemMdioPrazo_38 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcostagemMdioPrazo_38, 
                style: style_AcostagemMdioPrazo_38,
                popuplayertitle: 'Acostagem - Médio Prazo',
                interactive: true,
                title: '<img src="styles/legend/AcostagemMdioPrazo_38.png" /> Acostagem - Médio Prazo'
            });
var format_AcostagemCurtoPrazo_39 = new ol.format.GeoJSON();
var features_AcostagemCurtoPrazo_39 = format_AcostagemCurtoPrazo_39.readFeatures(json_AcostagemCurtoPrazo_39, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AcostagemCurtoPrazo_39 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcostagemCurtoPrazo_39.addFeatures(features_AcostagemCurtoPrazo_39);
var lyr_AcostagemCurtoPrazo_39 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcostagemCurtoPrazo_39, 
                style: style_AcostagemCurtoPrazo_39,
                popuplayertitle: 'Acostagem - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/AcostagemCurtoPrazo_39.png" /> Acostagem - Curto Prazo '
            });
var format_AcostagemSituaoAtual_40 = new ol.format.GeoJSON();
var features_AcostagemSituaoAtual_40 = format_AcostagemSituaoAtual_40.readFeatures(json_AcostagemSituaoAtual_40, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AcostagemSituaoAtual_40 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcostagemSituaoAtual_40.addFeatures(features_AcostagemSituaoAtual_40);
var lyr_AcostagemSituaoAtual_40 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcostagemSituaoAtual_40, 
                style: style_AcostagemSituaoAtual_40,
                popuplayertitle: 'Acostagem - Situação Atual',
                interactive: true,
                title: '<img src="styles/legend/AcostagemSituaoAtual_40.png" /> Acostagem - Situação Atual'
            });
var format_ArmazenagemLongoPrazo_41 = new ol.format.GeoJSON();
var features_ArmazenagemLongoPrazo_41 = format_ArmazenagemLongoPrazo_41.readFeatures(json_ArmazenagemLongoPrazo_41, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ArmazenagemLongoPrazo_41 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ArmazenagemLongoPrazo_41.addFeatures(features_ArmazenagemLongoPrazo_41);
var lyr_ArmazenagemLongoPrazo_41 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ArmazenagemLongoPrazo_41, 
                style: style_ArmazenagemLongoPrazo_41,
                popuplayertitle: 'Armazenagem - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/ArmazenagemLongoPrazo_41.png" /> Armazenagem - Longo Prazo '
            });
var format_ArmazenagemMdioPrazo_42 = new ol.format.GeoJSON();
var features_ArmazenagemMdioPrazo_42 = format_ArmazenagemMdioPrazo_42.readFeatures(json_ArmazenagemMdioPrazo_42, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ArmazenagemMdioPrazo_42 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ArmazenagemMdioPrazo_42.addFeatures(features_ArmazenagemMdioPrazo_42);
var lyr_ArmazenagemMdioPrazo_42 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ArmazenagemMdioPrazo_42, 
                style: style_ArmazenagemMdioPrazo_42,
                popuplayertitle: 'Armazenagem - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/ArmazenagemMdioPrazo_42.png" /> Armazenagem - Médio Prazo '
            });
var format_ArmazenagemCurtoPrazo_43 = new ol.format.GeoJSON();
var features_ArmazenagemCurtoPrazo_43 = format_ArmazenagemCurtoPrazo_43.readFeatures(json_ArmazenagemCurtoPrazo_43, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ArmazenagemCurtoPrazo_43 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ArmazenagemCurtoPrazo_43.addFeatures(features_ArmazenagemCurtoPrazo_43);
var lyr_ArmazenagemCurtoPrazo_43 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ArmazenagemCurtoPrazo_43, 
                style: style_ArmazenagemCurtoPrazo_43,
                popuplayertitle: 'Armazenagem - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/ArmazenagemCurtoPrazo_43.png" /> Armazenagem - Curto Prazo '
            });
var format_ArmazenagemSituaoAtual_44 = new ol.format.GeoJSON();
var features_ArmazenagemSituaoAtual_44 = format_ArmazenagemSituaoAtual_44.readFeatures(json_ArmazenagemSituaoAtual_44, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ArmazenagemSituaoAtual_44 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ArmazenagemSituaoAtual_44.addFeatures(features_ArmazenagemSituaoAtual_44);
var lyr_ArmazenagemSituaoAtual_44 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ArmazenagemSituaoAtual_44, 
                style: style_ArmazenagemSituaoAtual_44,
                popuplayertitle: 'Armazenagem - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/ArmazenagemSituaoAtual_44.png" /> Armazenagem - Situação Atual '
            });
var format_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_45 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_45 = format_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_45.readFeatures(json_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_45, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_45 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_45.addFeatures(features_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_45);
var lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_45 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_45, 
                style: style_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_45,
                popuplayertitle: 'Áreas Afetas ás Operações Portuárias Disponíveis para Arrendamento - Longo Prazo',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_45.png" /> Áreas Afetas ás Operações Portuárias Disponíveis para Arrendamento - Longo Prazo'
            });
var format_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_46 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_46 = format_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_46.readFeatures(json_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_46, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_46 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_46.addFeatures(features_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_46);
var lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_46 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_46, 
                style: style_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_46,
                popuplayertitle: 'Áreas Afetas ás Operações Portuárias Disponíveis para Arrendamento - Médio Prazo',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_46.png" /> Áreas Afetas ás Operações Portuárias Disponíveis para Arrendamento - Médio Prazo'
            });
var format_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_47 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_47 = format_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_47.readFeatures(json_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_47, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_47 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_47.addFeatures(features_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_47);
var lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_47 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_47, 
                style: style_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_47,
                popuplayertitle: 'Áreas Afetas ás Operações Portuárias Disponíveis para Arrendamento - Curto Prazo',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_47.png" /> Áreas Afetas ás Operações Portuárias Disponíveis para Arrendamento - Curto Prazo'
            });
var format_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_48 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_48 = format_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_48.readFeatures(json_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_48, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_48 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_48.addFeatures(features_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_48);
var lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_48 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_48, 
                style: style_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_48,
                popuplayertitle: 'Áreas Afetas ás Operações Portuárias Disponíveis para Arrendamento - Situação Atual',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_48.png" /> Áreas Afetas ás Operações Portuárias Disponíveis para Arrendamento - Situação Atual'
            });
var format_reasAfetassOperaesPorturiasArrendadasLongoPrazo_49 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasArrendadasLongoPrazo_49 = format_reasAfetassOperaesPorturiasArrendadasLongoPrazo_49.readFeatures(json_reasAfetassOperaesPorturiasArrendadasLongoPrazo_49, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasAfetassOperaesPorturiasArrendadasLongoPrazo_49 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasArrendadasLongoPrazo_49.addFeatures(features_reasAfetassOperaesPorturiasArrendadasLongoPrazo_49);
var lyr_reasAfetassOperaesPorturiasArrendadasLongoPrazo_49 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasArrendadasLongoPrazo_49, 
                style: style_reasAfetassOperaesPorturiasArrendadasLongoPrazo_49,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias Arrendadas - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasArrendadasLongoPrazo_49.png" /> Áreas Afetas às Operações Portuárias Arrendadas - Longo Prazo '
            });
var format_reasAfetassOperaesPorturiasArrendadasMdioPrazo_50 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasArrendadasMdioPrazo_50 = format_reasAfetassOperaesPorturiasArrendadasMdioPrazo_50.readFeatures(json_reasAfetassOperaesPorturiasArrendadasMdioPrazo_50, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasAfetassOperaesPorturiasArrendadasMdioPrazo_50 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasArrendadasMdioPrazo_50.addFeatures(features_reasAfetassOperaesPorturiasArrendadasMdioPrazo_50);
var lyr_reasAfetassOperaesPorturiasArrendadasMdioPrazo_50 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasArrendadasMdioPrazo_50, 
                style: style_reasAfetassOperaesPorturiasArrendadasMdioPrazo_50,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias Arrendadas - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasArrendadasMdioPrazo_50.png" /> Áreas Afetas às Operações Portuárias Arrendadas - Médio Prazo '
            });
var format_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_51 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_51 = format_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_51.readFeatures(json_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_51, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_51 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_51.addFeatures(features_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_51);
var lyr_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_51 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_51, 
                style: style_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_51,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias Arrendadas - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasArrendadasCurtoPrazo_51.png" /> Áreas Afetas às Operações Portuárias Arrendadas - Curto Prazo '
            });
var format_reasAfetassOperaesPorturiasArrendadasSituaoAtual_52 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasArrendadasSituaoAtual_52 = format_reasAfetassOperaesPorturiasArrendadasSituaoAtual_52.readFeatures(json_reasAfetassOperaesPorturiasArrendadasSituaoAtual_52, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasAfetassOperaesPorturiasArrendadasSituaoAtual_52 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasArrendadasSituaoAtual_52.addFeatures(features_reasAfetassOperaesPorturiasArrendadasSituaoAtual_52);
var lyr_reasAfetassOperaesPorturiasArrendadasSituaoAtual_52 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasArrendadasSituaoAtual_52, 
                style: style_reasAfetassOperaesPorturiasArrendadasSituaoAtual_52,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias Arrendadas - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasArrendadasSituaoAtual_52.png" /> Áreas Afetas às Operações Portuárias Arrendadas - Situação Atual '
            });
var format_ArmazmparaInspeo_53 = new ol.format.GeoJSON();
var features_ArmazmparaInspeo_53 = format_ArmazmparaInspeo_53.readFeatures(json_ArmazmparaInspeo_53, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ArmazmparaInspeo_53 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ArmazmparaInspeo_53.addFeatures(features_ArmazmparaInspeo_53);
var lyr_ArmazmparaInspeo_53 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ArmazmparaInspeo_53, 
                style: style_ArmazmparaInspeo_53,
                popuplayertitle: 'Armazém para Inspeção',
                interactive: true,
                title: '<img src="styles/legend/ArmazmparaInspeo_53.png" /> Armazém para Inspeção'
            });
var format_CargaGeraleGranelSlido_54 = new ol.format.GeoJSON();
var features_CargaGeraleGranelSlido_54 = format_CargaGeraleGranelSlido_54.readFeatures(json_CargaGeraleGranelSlido_54, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_CargaGeraleGranelSlido_54 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CargaGeraleGranelSlido_54.addFeatures(features_CargaGeraleGranelSlido_54);
var lyr_CargaGeraleGranelSlido_54 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CargaGeraleGranelSlido_54, 
                style: style_CargaGeraleGranelSlido_54,
                popuplayertitle: 'Carga Geral e Granel Sólido',
                interactive: true,
                title: '<img src="styles/legend/CargaGeraleGranelSlido_54.png" /> Carga Geral e Granel Sólido'
            });
var format_CargaGeraleProdutosSiderrgicos_55 = new ol.format.GeoJSON();
var features_CargaGeraleProdutosSiderrgicos_55 = format_CargaGeraleProdutosSiderrgicos_55.readFeatures(json_CargaGeraleProdutosSiderrgicos_55, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_CargaGeraleProdutosSiderrgicos_55 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CargaGeraleProdutosSiderrgicos_55.addFeatures(features_CargaGeraleProdutosSiderrgicos_55);
var lyr_CargaGeraleProdutosSiderrgicos_55 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CargaGeraleProdutosSiderrgicos_55, 
                style: style_CargaGeraleProdutosSiderrgicos_55,
                popuplayertitle: 'Carga Geral e Produtos Siderúrgicos',
                interactive: true,
                title: '<img src="styles/legend/CargaGeraleProdutosSiderrgicos_55.png" /> Carga Geral e Produtos Siderúrgicos'
            });
var format_ProdutosSiderrgicos_56 = new ol.format.GeoJSON();
var features_ProdutosSiderrgicos_56 = format_ProdutosSiderrgicos_56.readFeatures(json_ProdutosSiderrgicos_56, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ProdutosSiderrgicos_56 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ProdutosSiderrgicos_56.addFeatures(features_ProdutosSiderrgicos_56);
var lyr_ProdutosSiderrgicos_56 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ProdutosSiderrgicos_56, 
                style: style_ProdutosSiderrgicos_56,
                popuplayertitle: 'Produtos Siderúrgicos',
                interactive: true,
                title: '<img src="styles/legend/ProdutosSiderrgicos_56.png" /> Produtos Siderúrgicos'
            });
var format_CarvoMineralCoqueePetcoke_57 = new ol.format.GeoJSON();
var features_CarvoMineralCoqueePetcoke_57 = format_CarvoMineralCoqueePetcoke_57.readFeatures(json_CarvoMineralCoqueePetcoke_57, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_CarvoMineralCoqueePetcoke_57 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CarvoMineralCoqueePetcoke_57.addFeatures(features_CarvoMineralCoqueePetcoke_57);
var lyr_CarvoMineralCoqueePetcoke_57 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CarvoMineralCoqueePetcoke_57, 
                style: style_CarvoMineralCoqueePetcoke_57,
                popuplayertitle: 'Carvão Mineral, Coque e Petcoke',
                interactive: true,
                title: '<img src="styles/legend/CarvoMineralCoqueePetcoke_57.png" /> Carvão Mineral, Coque e Petcoke'
            });
var format_CarvoeMinriodeFerro_58 = new ol.format.GeoJSON();
var features_CarvoeMinriodeFerro_58 = format_CarvoeMinriodeFerro_58.readFeatures(json_CarvoeMinriodeFerro_58, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_CarvoeMinriodeFerro_58 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CarvoeMinriodeFerro_58.addFeatures(features_CarvoeMinriodeFerro_58);
var lyr_CarvoeMinriodeFerro_58 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CarvoeMinriodeFerro_58, 
                style: style_CarvoeMinriodeFerro_58,
                popuplayertitle: 'Carvão e Minério de Ferro',
                interactive: true,
                title: '<img src="styles/legend/CarvoeMinriodeFerro_58.png" /> Carvão e Minério de Ferro'
            });
var format_MinriodeFerro_59 = new ol.format.GeoJSON();
var features_MinriodeFerro_59 = format_MinriodeFerro_59.readFeatures(json_MinriodeFerro_59, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_MinriodeFerro_59 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MinriodeFerro_59.addFeatures(features_MinriodeFerro_59);
var lyr_MinriodeFerro_59 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MinriodeFerro_59, 
                style: style_MinriodeFerro_59,
                popuplayertitle: 'Minério de Ferro',
                interactive: true,
                title: '<img src="styles/legend/MinriodeFerro_59.png" /> Minério de Ferro'
            });
var format_ContinereseCargaGeral_60 = new ol.format.GeoJSON();
var features_ContinereseCargaGeral_60 = format_ContinereseCargaGeral_60.readFeatures(json_ContinereseCargaGeral_60, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ContinereseCargaGeral_60 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ContinereseCargaGeral_60.addFeatures(features_ContinereseCargaGeral_60);
var lyr_ContinereseCargaGeral_60 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ContinereseCargaGeral_60, 
                style: style_ContinereseCargaGeral_60,
                popuplayertitle: 'Contêineres e Carga Geral',
                interactive: true,
                title: '<img src="styles/legend/ContinereseCargaGeral_60.png" /> Contêineres e Carga Geral'
            });
var format_ContineresVazios_61 = new ol.format.GeoJSON();
var features_ContineresVazios_61 = format_ContineresVazios_61.readFeatures(json_ContineresVazios_61, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ContineresVazios_61 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ContineresVazios_61.addFeatures(features_ContineresVazios_61);
var lyr_ContineresVazios_61 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ContineresVazios_61, 
                style: style_ContineresVazios_61,
                popuplayertitle: 'Contêineres Vazios',
                interactive: true,
                title: '<img src="styles/legend/ContineresVazios_61.png" /> Contêineres Vazios'
            });
var format_Contineres_62 = new ol.format.GeoJSON();
var features_Contineres_62 = format_Contineres_62.readFeatures(json_Contineres_62, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Contineres_62 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Contineres_62.addFeatures(features_Contineres_62);
var lyr_Contineres_62 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Contineres_62, 
                style: style_Contineres_62,
                popuplayertitle: 'Contêineres',
                interactive: true,
                title: '<img src="styles/legend/Contineres_62.png" /> Contêineres'
            });
var format_GranisSlidosdeOrigemnoVegetal_63 = new ol.format.GeoJSON();
var features_GranisSlidosdeOrigemnoVegetal_63 = format_GranisSlidosdeOrigemnoVegetal_63.readFeatures(json_GranisSlidosdeOrigemnoVegetal_63, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_GranisSlidosdeOrigemnoVegetal_63 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GranisSlidosdeOrigemnoVegetal_63.addFeatures(features_GranisSlidosdeOrigemnoVegetal_63);
var lyr_GranisSlidosdeOrigemnoVegetal_63 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GranisSlidosdeOrigemnoVegetal_63, 
                style: style_GranisSlidosdeOrigemnoVegetal_63,
                popuplayertitle: 'Granéis Sólidos de Origem não Vegetal',
                interactive: true,
                title: '<img src="styles/legend/GranisSlidosdeOrigemnoVegetal_63.png" /> Granéis Sólidos de Origem não Vegetal'
            });
var format_GranisSlidosMinerais_64 = new ol.format.GeoJSON();
var features_GranisSlidosMinerais_64 = format_GranisSlidosMinerais_64.readFeatures(json_GranisSlidosMinerais_64, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_GranisSlidosMinerais_64 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GranisSlidosMinerais_64.addFeatures(features_GranisSlidosMinerais_64);
var lyr_GranisSlidosMinerais_64 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GranisSlidosMinerais_64, 
                style: style_GranisSlidosMinerais_64,
                popuplayertitle: 'Granéis Sólidos Minerais',
                interactive: true,
                title: '<img src="styles/legend/GranisSlidosMinerais_64.png" /> Granéis Sólidos Minerais'
            });
var format_GranelSlido_65 = new ol.format.GeoJSON();
var features_GranelSlido_65 = format_GranelSlido_65.readFeatures(json_GranelSlido_65, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_GranelSlido_65 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GranelSlido_65.addFeatures(features_GranelSlido_65);
var lyr_GranelSlido_65 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GranelSlido_65, 
                style: style_GranelSlido_65,
                popuplayertitle: 'Granel Sólido',
                interactive: true,
                title: '<img src="styles/legend/GranelSlido_65.png" /> Granel Sólido'
            });
var format_GranelLquido_66 = new ol.format.GeoJSON();
var features_GranelLquido_66 = format_GranelLquido_66.readFeatures(json_GranelLquido_66, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_GranelLquido_66 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GranelLquido_66.addFeatures(features_GranelLquido_66);
var lyr_GranelLquido_66 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GranelLquido_66, 
                style: style_GranelLquido_66,
                popuplayertitle: 'Granel Líquido',
                interactive: true,
                title: '<img src="styles/legend/GranelLquido_66.png" /> Granel Líquido'
            });
var format_Multiuso_67 = new ol.format.GeoJSON();
var features_Multiuso_67 = format_Multiuso_67.readFeatures(json_Multiuso_67, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Multiuso_67 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Multiuso_67.addFeatures(features_Multiuso_67);
var lyr_Multiuso_67 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Multiuso_67, 
                style: style_Multiuso_67,
                popuplayertitle: 'Multiuso ',
                interactive: true,
                title: '<img src="styles/legend/Multiuso_67.png" /> Multiuso '
            });
var format_Caf_68 = new ol.format.GeoJSON();
var features_Caf_68 = format_Caf_68.readFeatures(json_Caf_68, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Caf_68 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Caf_68.addFeatures(features_Caf_68);
var lyr_Caf_68 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Caf_68, 
                style: style_Caf_68,
                popuplayertitle: 'Café',
                interactive: true,
                title: '<img src="styles/legend/Caf_68.png" /> Café'
            });
var format_ArmazmparaInspeo_69 = new ol.format.GeoJSON();
var features_ArmazmparaInspeo_69 = format_ArmazmparaInspeo_69.readFeatures(json_ArmazmparaInspeo_69, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ArmazmparaInspeo_69 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ArmazmparaInspeo_69.addFeatures(features_ArmazmparaInspeo_69);
var lyr_ArmazmparaInspeo_69 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ArmazmparaInspeo_69, 
                style: style_ArmazmparaInspeo_69,
                popuplayertitle: 'Armazém para Inspeção',
                interactive: true,
                title: '<img src="styles/legend/ArmazmparaInspeo_69.png" /> Armazém para Inspeção'
            });
var format_CargaGeraleGranelSlido_70 = new ol.format.GeoJSON();
var features_CargaGeraleGranelSlido_70 = format_CargaGeraleGranelSlido_70.readFeatures(json_CargaGeraleGranelSlido_70, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_CargaGeraleGranelSlido_70 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CargaGeraleGranelSlido_70.addFeatures(features_CargaGeraleGranelSlido_70);
var lyr_CargaGeraleGranelSlido_70 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CargaGeraleGranelSlido_70, 
                style: style_CargaGeraleGranelSlido_70,
                popuplayertitle: 'Carga Geral e Granel Sólido',
                interactive: true,
                title: '<img src="styles/legend/CargaGeraleGranelSlido_70.png" /> Carga Geral e Granel Sólido'
            });
var format_CargaGeraleProdutosSiderrgicos_71 = new ol.format.GeoJSON();
var features_CargaGeraleProdutosSiderrgicos_71 = format_CargaGeraleProdutosSiderrgicos_71.readFeatures(json_CargaGeraleProdutosSiderrgicos_71, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_CargaGeraleProdutosSiderrgicos_71 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CargaGeraleProdutosSiderrgicos_71.addFeatures(features_CargaGeraleProdutosSiderrgicos_71);
var lyr_CargaGeraleProdutosSiderrgicos_71 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CargaGeraleProdutosSiderrgicos_71, 
                style: style_CargaGeraleProdutosSiderrgicos_71,
                popuplayertitle: 'Carga Geral e Produtos Siderúrgicos',
                interactive: true,
                title: '<img src="styles/legend/CargaGeraleProdutosSiderrgicos_71.png" /> Carga Geral e Produtos Siderúrgicos'
            });
var format_ProdutosSiderrgicos_72 = new ol.format.GeoJSON();
var features_ProdutosSiderrgicos_72 = format_ProdutosSiderrgicos_72.readFeatures(json_ProdutosSiderrgicos_72, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ProdutosSiderrgicos_72 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ProdutosSiderrgicos_72.addFeatures(features_ProdutosSiderrgicos_72);
var lyr_ProdutosSiderrgicos_72 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ProdutosSiderrgicos_72, 
                style: style_ProdutosSiderrgicos_72,
                popuplayertitle: 'Produtos Siderúrgicos',
                interactive: true,
                title: '<img src="styles/legend/ProdutosSiderrgicos_72.png" /> Produtos Siderúrgicos'
            });
var format_CarvoMineralCoqueePetcoke_73 = new ol.format.GeoJSON();
var features_CarvoMineralCoqueePetcoke_73 = format_CarvoMineralCoqueePetcoke_73.readFeatures(json_CarvoMineralCoqueePetcoke_73, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_CarvoMineralCoqueePetcoke_73 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CarvoMineralCoqueePetcoke_73.addFeatures(features_CarvoMineralCoqueePetcoke_73);
var lyr_CarvoMineralCoqueePetcoke_73 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CarvoMineralCoqueePetcoke_73, 
                style: style_CarvoMineralCoqueePetcoke_73,
                popuplayertitle: 'Carvão Mineral, Coque e Petcoke',
                interactive: true,
                title: '<img src="styles/legend/CarvoMineralCoqueePetcoke_73.png" /> Carvão Mineral, Coque e Petcoke'
            });
var format_CarvoeMinriodeFerro_74 = new ol.format.GeoJSON();
var features_CarvoeMinriodeFerro_74 = format_CarvoeMinriodeFerro_74.readFeatures(json_CarvoeMinriodeFerro_74, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_CarvoeMinriodeFerro_74 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CarvoeMinriodeFerro_74.addFeatures(features_CarvoeMinriodeFerro_74);
var lyr_CarvoeMinriodeFerro_74 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CarvoeMinriodeFerro_74, 
                style: style_CarvoeMinriodeFerro_74,
                popuplayertitle: 'Carvão e Minério de Ferro',
                interactive: true,
                title: '<img src="styles/legend/CarvoeMinriodeFerro_74.png" /> Carvão e Minério de Ferro'
            });
var format_MinriodeFerro_75 = new ol.format.GeoJSON();
var features_MinriodeFerro_75 = format_MinriodeFerro_75.readFeatures(json_MinriodeFerro_75, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_MinriodeFerro_75 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MinriodeFerro_75.addFeatures(features_MinriodeFerro_75);
var lyr_MinriodeFerro_75 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MinriodeFerro_75, 
                style: style_MinriodeFerro_75,
                popuplayertitle: 'Minério de Ferro',
                interactive: true,
                title: '<img src="styles/legend/MinriodeFerro_75.png" /> Minério de Ferro'
            });
var format_ContinereseCargaGeral_76 = new ol.format.GeoJSON();
var features_ContinereseCargaGeral_76 = format_ContinereseCargaGeral_76.readFeatures(json_ContinereseCargaGeral_76, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ContinereseCargaGeral_76 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ContinereseCargaGeral_76.addFeatures(features_ContinereseCargaGeral_76);
var lyr_ContinereseCargaGeral_76 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ContinereseCargaGeral_76, 
                style: style_ContinereseCargaGeral_76,
                popuplayertitle: 'Contêineres e Carga Geral',
                interactive: true,
                title: '<img src="styles/legend/ContinereseCargaGeral_76.png" /> Contêineres e Carga Geral'
            });
var format_ContineresVazios_77 = new ol.format.GeoJSON();
var features_ContineresVazios_77 = format_ContineresVazios_77.readFeatures(json_ContineresVazios_77, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ContineresVazios_77 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ContineresVazios_77.addFeatures(features_ContineresVazios_77);
var lyr_ContineresVazios_77 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ContineresVazios_77, 
                style: style_ContineresVazios_77,
                popuplayertitle: 'Contêineres Vazios',
                interactive: true,
                title: '<img src="styles/legend/ContineresVazios_77.png" /> Contêineres Vazios'
            });
var format_Contineres_78 = new ol.format.GeoJSON();
var features_Contineres_78 = format_Contineres_78.readFeatures(json_Contineres_78, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Contineres_78 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Contineres_78.addFeatures(features_Contineres_78);
var lyr_Contineres_78 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Contineres_78, 
                style: style_Contineres_78,
                popuplayertitle: 'Contêineres',
                interactive: true,
                title: '<img src="styles/legend/Contineres_78.png" /> Contêineres'
            });
var format_GranisSlidosdeOrigemnoVegetal_79 = new ol.format.GeoJSON();
var features_GranisSlidosdeOrigemnoVegetal_79 = format_GranisSlidosdeOrigemnoVegetal_79.readFeatures(json_GranisSlidosdeOrigemnoVegetal_79, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_GranisSlidosdeOrigemnoVegetal_79 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GranisSlidosdeOrigemnoVegetal_79.addFeatures(features_GranisSlidosdeOrigemnoVegetal_79);
var lyr_GranisSlidosdeOrigemnoVegetal_79 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GranisSlidosdeOrigemnoVegetal_79, 
                style: style_GranisSlidosdeOrigemnoVegetal_79,
                popuplayertitle: 'Granéis Sólidos de Origem não Vegetal',
                interactive: true,
                title: '<img src="styles/legend/GranisSlidosdeOrigemnoVegetal_79.png" /> Granéis Sólidos de Origem não Vegetal'
            });
var format_GranisSlidosMinerais_80 = new ol.format.GeoJSON();
var features_GranisSlidosMinerais_80 = format_GranisSlidosMinerais_80.readFeatures(json_GranisSlidosMinerais_80, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_GranisSlidosMinerais_80 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GranisSlidosMinerais_80.addFeatures(features_GranisSlidosMinerais_80);
var lyr_GranisSlidosMinerais_80 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GranisSlidosMinerais_80, 
                style: style_GranisSlidosMinerais_80,
                popuplayertitle: 'Granéis Sólidos Minerais',
                interactive: true,
                title: '<img src="styles/legend/GranisSlidosMinerais_80.png" /> Granéis Sólidos Minerais'
            });
var format_GranelSlido_81 = new ol.format.GeoJSON();
var features_GranelSlido_81 = format_GranelSlido_81.readFeatures(json_GranelSlido_81, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_GranelSlido_81 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GranelSlido_81.addFeatures(features_GranelSlido_81);
var lyr_GranelSlido_81 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GranelSlido_81, 
                style: style_GranelSlido_81,
                popuplayertitle: 'Granel Sólido',
                interactive: true,
                title: '<img src="styles/legend/GranelSlido_81.png" /> Granel Sólido'
            });
var format_GranelLquido_82 = new ol.format.GeoJSON();
var features_GranelLquido_82 = format_GranelLquido_82.readFeatures(json_GranelLquido_82, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_GranelLquido_82 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GranelLquido_82.addFeatures(features_GranelLquido_82);
var lyr_GranelLquido_82 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GranelLquido_82, 
                style: style_GranelLquido_82,
                popuplayertitle: 'Granel Líquido',
                interactive: true,
                title: '<img src="styles/legend/GranelLquido_82.png" /> Granel Líquido'
            });
var format_Multiuso_83 = new ol.format.GeoJSON();
var features_Multiuso_83 = format_Multiuso_83.readFeatures(json_Multiuso_83, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Multiuso_83 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Multiuso_83.addFeatures(features_Multiuso_83);
var lyr_Multiuso_83 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Multiuso_83, 
                style: style_Multiuso_83,
                popuplayertitle: 'Multiuso',
                interactive: true,
                title: '<img src="styles/legend/Multiuso_83.png" /> Multiuso'
            });
var format_Caf_84 = new ol.format.GeoJSON();
var features_Caf_84 = format_Caf_84.readFeatures(json_Caf_84, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Caf_84 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Caf_84.addFeatures(features_Caf_84);
var lyr_Caf_84 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Caf_84, 
                style: style_Caf_84,
                popuplayertitle: 'Café',
                interactive: true,
                title: '<img src="styles/legend/Caf_84.png" /> Café'
            });
var format_ArmazmparaInspeo_85 = new ol.format.GeoJSON();
var features_ArmazmparaInspeo_85 = format_ArmazmparaInspeo_85.readFeatures(json_ArmazmparaInspeo_85, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ArmazmparaInspeo_85 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ArmazmparaInspeo_85.addFeatures(features_ArmazmparaInspeo_85);
var lyr_ArmazmparaInspeo_85 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ArmazmparaInspeo_85, 
                style: style_ArmazmparaInspeo_85,
                popuplayertitle: 'Armazém para Inspeção',
                interactive: true,
                title: '<img src="styles/legend/ArmazmparaInspeo_85.png" /> Armazém para Inspeção'
            });
var format_ArmazmdeCaf_86 = new ol.format.GeoJSON();
var features_ArmazmdeCaf_86 = format_ArmazmdeCaf_86.readFeatures(json_ArmazmdeCaf_86, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ArmazmdeCaf_86 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ArmazmdeCaf_86.addFeatures(features_ArmazmdeCaf_86);
var lyr_ArmazmdeCaf_86 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ArmazmdeCaf_86, 
                style: style_ArmazmdeCaf_86,
                popuplayertitle: 'Armazém de Café',
                interactive: true,
                title: '<img src="styles/legend/ArmazmdeCaf_86.png" /> Armazém de Café'
            });
var format_CargaGeraleGranelSlido_87 = new ol.format.GeoJSON();
var features_CargaGeraleGranelSlido_87 = format_CargaGeraleGranelSlido_87.readFeatures(json_CargaGeraleGranelSlido_87, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_CargaGeraleGranelSlido_87 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CargaGeraleGranelSlido_87.addFeatures(features_CargaGeraleGranelSlido_87);
var lyr_CargaGeraleGranelSlido_87 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CargaGeraleGranelSlido_87, 
                style: style_CargaGeraleGranelSlido_87,
                popuplayertitle: 'Carga Geral e Granel Sólido',
                interactive: true,
                title: '<img src="styles/legend/CargaGeraleGranelSlido_87.png" /> Carga Geral e Granel Sólido'
            });
var format_CargaGeraleProdutosSiderrgicos_88 = new ol.format.GeoJSON();
var features_CargaGeraleProdutosSiderrgicos_88 = format_CargaGeraleProdutosSiderrgicos_88.readFeatures(json_CargaGeraleProdutosSiderrgicos_88, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_CargaGeraleProdutosSiderrgicos_88 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CargaGeraleProdutosSiderrgicos_88.addFeatures(features_CargaGeraleProdutosSiderrgicos_88);
var lyr_CargaGeraleProdutosSiderrgicos_88 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CargaGeraleProdutosSiderrgicos_88, 
                style: style_CargaGeraleProdutosSiderrgicos_88,
                popuplayertitle: 'Carga Geral e Produtos Siderúrgicos',
                interactive: true,
                title: '<img src="styles/legend/CargaGeraleProdutosSiderrgicos_88.png" /> Carga Geral e Produtos Siderúrgicos'
            });
var format_ProdutosSiderrgicos_89 = new ol.format.GeoJSON();
var features_ProdutosSiderrgicos_89 = format_ProdutosSiderrgicos_89.readFeatures(json_ProdutosSiderrgicos_89, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ProdutosSiderrgicos_89 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ProdutosSiderrgicos_89.addFeatures(features_ProdutosSiderrgicos_89);
var lyr_ProdutosSiderrgicos_89 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ProdutosSiderrgicos_89, 
                style: style_ProdutosSiderrgicos_89,
                popuplayertitle: 'Produtos Siderúrgicos',
                interactive: true,
                title: '<img src="styles/legend/ProdutosSiderrgicos_89.png" /> Produtos Siderúrgicos'
            });
var format_CarvoMineralCoqueePetcoke_90 = new ol.format.GeoJSON();
var features_CarvoMineralCoqueePetcoke_90 = format_CarvoMineralCoqueePetcoke_90.readFeatures(json_CarvoMineralCoqueePetcoke_90, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_CarvoMineralCoqueePetcoke_90 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CarvoMineralCoqueePetcoke_90.addFeatures(features_CarvoMineralCoqueePetcoke_90);
var lyr_CarvoMineralCoqueePetcoke_90 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CarvoMineralCoqueePetcoke_90, 
                style: style_CarvoMineralCoqueePetcoke_90,
                popuplayertitle: 'Carvão Mineral, Coque e Petcoke',
                interactive: true,
                title: '<img src="styles/legend/CarvoMineralCoqueePetcoke_90.png" /> Carvão Mineral, Coque e Petcoke'
            });
var format_CarvoeMinriodeFerro_91 = new ol.format.GeoJSON();
var features_CarvoeMinriodeFerro_91 = format_CarvoeMinriodeFerro_91.readFeatures(json_CarvoeMinriodeFerro_91, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_CarvoeMinriodeFerro_91 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CarvoeMinriodeFerro_91.addFeatures(features_CarvoeMinriodeFerro_91);
var lyr_CarvoeMinriodeFerro_91 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CarvoeMinriodeFerro_91, 
                style: style_CarvoeMinriodeFerro_91,
                popuplayertitle: 'Carvão e Minério de Ferro',
                interactive: true,
                title: '<img src="styles/legend/CarvoeMinriodeFerro_91.png" /> Carvão e Minério de Ferro'
            });
var format_MinriodeFerro_92 = new ol.format.GeoJSON();
var features_MinriodeFerro_92 = format_MinriodeFerro_92.readFeatures(json_MinriodeFerro_92, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_MinriodeFerro_92 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MinriodeFerro_92.addFeatures(features_MinriodeFerro_92);
var lyr_MinriodeFerro_92 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MinriodeFerro_92, 
                style: style_MinriodeFerro_92,
                popuplayertitle: 'Minério de Ferro',
                interactive: true,
                title: '<img src="styles/legend/MinriodeFerro_92.png" /> Minério de Ferro'
            });
var format_ContinereseCargaGeral_93 = new ol.format.GeoJSON();
var features_ContinereseCargaGeral_93 = format_ContinereseCargaGeral_93.readFeatures(json_ContinereseCargaGeral_93, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ContinereseCargaGeral_93 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ContinereseCargaGeral_93.addFeatures(features_ContinereseCargaGeral_93);
var lyr_ContinereseCargaGeral_93 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ContinereseCargaGeral_93, 
                style: style_ContinereseCargaGeral_93,
                popuplayertitle: 'Contêineres e Carga Geral',
                interactive: true,
                title: '<img src="styles/legend/ContinereseCargaGeral_93.png" /> Contêineres e Carga Geral'
            });
var format_ContineresVazios_94 = new ol.format.GeoJSON();
var features_ContineresVazios_94 = format_ContineresVazios_94.readFeatures(json_ContineresVazios_94, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ContineresVazios_94 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ContineresVazios_94.addFeatures(features_ContineresVazios_94);
var lyr_ContineresVazios_94 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ContineresVazios_94, 
                style: style_ContineresVazios_94,
                popuplayertitle: 'Contêineres Vazios',
                interactive: true,
                title: '<img src="styles/legend/ContineresVazios_94.png" /> Contêineres Vazios'
            });
var format_Contineres_95 = new ol.format.GeoJSON();
var features_Contineres_95 = format_Contineres_95.readFeatures(json_Contineres_95, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Contineres_95 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Contineres_95.addFeatures(features_Contineres_95);
var lyr_Contineres_95 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Contineres_95, 
                style: style_Contineres_95,
                popuplayertitle: 'Contêineres',
                interactive: true,
                title: '<img src="styles/legend/Contineres_95.png" /> Contêineres'
            });
var format_GranisSlidosdeOrigemnoVegetal_96 = new ol.format.GeoJSON();
var features_GranisSlidosdeOrigemnoVegetal_96 = format_GranisSlidosdeOrigemnoVegetal_96.readFeatures(json_GranisSlidosdeOrigemnoVegetal_96, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_GranisSlidosdeOrigemnoVegetal_96 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GranisSlidosdeOrigemnoVegetal_96.addFeatures(features_GranisSlidosdeOrigemnoVegetal_96);
var lyr_GranisSlidosdeOrigemnoVegetal_96 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GranisSlidosdeOrigemnoVegetal_96, 
                style: style_GranisSlidosdeOrigemnoVegetal_96,
                popuplayertitle: 'Granéis Sólidos de Origem não Vegetal',
                interactive: true,
                title: '<img src="styles/legend/GranisSlidosdeOrigemnoVegetal_96.png" /> Granéis Sólidos de Origem não Vegetal'
            });
var format_GranisSlidosMinerais_97 = new ol.format.GeoJSON();
var features_GranisSlidosMinerais_97 = format_GranisSlidosMinerais_97.readFeatures(json_GranisSlidosMinerais_97, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_GranisSlidosMinerais_97 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GranisSlidosMinerais_97.addFeatures(features_GranisSlidosMinerais_97);
var lyr_GranisSlidosMinerais_97 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GranisSlidosMinerais_97, 
                style: style_GranisSlidosMinerais_97,
                popuplayertitle: 'Granéis Sólidos Minerais',
                interactive: true,
                title: '<img src="styles/legend/GranisSlidosMinerais_97.png" /> Granéis Sólidos Minerais'
            });
var format_GranelSlido_98 = new ol.format.GeoJSON();
var features_GranelSlido_98 = format_GranelSlido_98.readFeatures(json_GranelSlido_98, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_GranelSlido_98 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GranelSlido_98.addFeatures(features_GranelSlido_98);
var lyr_GranelSlido_98 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GranelSlido_98, 
                style: style_GranelSlido_98,
                popuplayertitle: 'Granel Sólido',
                interactive: true,
                title: '<img src="styles/legend/GranelSlido_98.png" /> Granel Sólido'
            });
var format_Multiuso_99 = new ol.format.GeoJSON();
var features_Multiuso_99 = format_Multiuso_99.readFeatures(json_Multiuso_99, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Multiuso_99 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Multiuso_99.addFeatures(features_Multiuso_99);
var lyr_Multiuso_99 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Multiuso_99, 
                style: style_Multiuso_99,
                popuplayertitle: 'Multiuso',
                interactive: true,
                title: '<img src="styles/legend/Multiuso_99.png" /> Multiuso'
            });
var format_CargaGeraleProdutosSiderrgicos_100 = new ol.format.GeoJSON();
var features_CargaGeraleProdutosSiderrgicos_100 = format_CargaGeraleProdutosSiderrgicos_100.readFeatures(json_CargaGeraleProdutosSiderrgicos_100, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_CargaGeraleProdutosSiderrgicos_100 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CargaGeraleProdutosSiderrgicos_100.addFeatures(features_CargaGeraleProdutosSiderrgicos_100);
var lyr_CargaGeraleProdutosSiderrgicos_100 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CargaGeraleProdutosSiderrgicos_100, 
                style: style_CargaGeraleProdutosSiderrgicos_100,
                popuplayertitle: 'Carga Geral e Produtos Siderúrgicos',
                interactive: true,
                title: '<img src="styles/legend/CargaGeraleProdutosSiderrgicos_100.png" /> Carga Geral e Produtos Siderúrgicos'
            });
var format_ProdutosSiderrgicos_101 = new ol.format.GeoJSON();
var features_ProdutosSiderrgicos_101 = format_ProdutosSiderrgicos_101.readFeatures(json_ProdutosSiderrgicos_101, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ProdutosSiderrgicos_101 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ProdutosSiderrgicos_101.addFeatures(features_ProdutosSiderrgicos_101);
var lyr_ProdutosSiderrgicos_101 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ProdutosSiderrgicos_101, 
                style: style_ProdutosSiderrgicos_101,
                popuplayertitle: 'Produtos Siderúrgicos',
                interactive: true,
                title: '<img src="styles/legend/ProdutosSiderrgicos_101.png" /> Produtos Siderúrgicos'
            });
var format_CarvoMineralCoqueePetcoke_102 = new ol.format.GeoJSON();
var features_CarvoMineralCoqueePetcoke_102 = format_CarvoMineralCoqueePetcoke_102.readFeatures(json_CarvoMineralCoqueePetcoke_102, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_CarvoMineralCoqueePetcoke_102 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CarvoMineralCoqueePetcoke_102.addFeatures(features_CarvoMineralCoqueePetcoke_102);
var lyr_CarvoMineralCoqueePetcoke_102 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CarvoMineralCoqueePetcoke_102, 
                style: style_CarvoMineralCoqueePetcoke_102,
                popuplayertitle: 'Carvão Mineral, Coque e Petcoke',
                interactive: true,
                title: '<img src="styles/legend/CarvoMineralCoqueePetcoke_102.png" /> Carvão Mineral, Coque e Petcoke'
            });
var format_CarvoeMinriodeFerro_103 = new ol.format.GeoJSON();
var features_CarvoeMinriodeFerro_103 = format_CarvoeMinriodeFerro_103.readFeatures(json_CarvoeMinriodeFerro_103, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_CarvoeMinriodeFerro_103 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CarvoeMinriodeFerro_103.addFeatures(features_CarvoeMinriodeFerro_103);
var lyr_CarvoeMinriodeFerro_103 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CarvoeMinriodeFerro_103, 
                style: style_CarvoeMinriodeFerro_103,
                popuplayertitle: 'Carvão e Minério de Ferro',
                interactive: true,
                title: '<img src="styles/legend/CarvoeMinriodeFerro_103.png" /> Carvão e Minério de Ferro'
            });
var format_MinriodeFerro_104 = new ol.format.GeoJSON();
var features_MinriodeFerro_104 = format_MinriodeFerro_104.readFeatures(json_MinriodeFerro_104, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_MinriodeFerro_104 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MinriodeFerro_104.addFeatures(features_MinriodeFerro_104);
var lyr_MinriodeFerro_104 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MinriodeFerro_104, 
                style: style_MinriodeFerro_104,
                popuplayertitle: 'Minério de Ferro',
                interactive: true,
                title: '<img src="styles/legend/MinriodeFerro_104.png" /> Minério de Ferro'
            });
var format_ContinereseCargaGeral_105 = new ol.format.GeoJSON();
var features_ContinereseCargaGeral_105 = format_ContinereseCargaGeral_105.readFeatures(json_ContinereseCargaGeral_105, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ContinereseCargaGeral_105 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ContinereseCargaGeral_105.addFeatures(features_ContinereseCargaGeral_105);
var lyr_ContinereseCargaGeral_105 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ContinereseCargaGeral_105, 
                style: style_ContinereseCargaGeral_105,
                popuplayertitle: 'Contêineres e Carga Geral',
                interactive: true,
                title: '<img src="styles/legend/ContinereseCargaGeral_105.png" /> Contêineres e Carga Geral'
            });
var format_ContineresVazios_106 = new ol.format.GeoJSON();
var features_ContineresVazios_106 = format_ContineresVazios_106.readFeatures(json_ContineresVazios_106, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ContineresVazios_106 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ContineresVazios_106.addFeatures(features_ContineresVazios_106);
var lyr_ContineresVazios_106 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ContineresVazios_106, 
                style: style_ContineresVazios_106,
                popuplayertitle: 'Contêineres Vazios',
                interactive: true,
                title: '<img src="styles/legend/ContineresVazios_106.png" /> Contêineres Vazios'
            });
var format_Contineres_107 = new ol.format.GeoJSON();
var features_Contineres_107 = format_Contineres_107.readFeatures(json_Contineres_107, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Contineres_107 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Contineres_107.addFeatures(features_Contineres_107);
var lyr_Contineres_107 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Contineres_107, 
                style: style_Contineres_107,
                popuplayertitle: 'Contêineres',
                interactive: true,
                title: '<img src="styles/legend/Contineres_107.png" /> Contêineres'
            });
var format_GranisSlidosdeOrigemnoVegetal_108 = new ol.format.GeoJSON();
var features_GranisSlidosdeOrigemnoVegetal_108 = format_GranisSlidosdeOrigemnoVegetal_108.readFeatures(json_GranisSlidosdeOrigemnoVegetal_108, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_GranisSlidosdeOrigemnoVegetal_108 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GranisSlidosdeOrigemnoVegetal_108.addFeatures(features_GranisSlidosdeOrigemnoVegetal_108);
var lyr_GranisSlidosdeOrigemnoVegetal_108 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GranisSlidosdeOrigemnoVegetal_108, 
                style: style_GranisSlidosdeOrigemnoVegetal_108,
                popuplayertitle: 'Granéis Sólidos de Origem não Vegetal',
                interactive: true,
                title: '<img src="styles/legend/GranisSlidosdeOrigemnoVegetal_108.png" /> Granéis Sólidos de Origem não Vegetal'
            });
var format_GranisSlidosMinerais_109 = new ol.format.GeoJSON();
var features_GranisSlidosMinerais_109 = format_GranisSlidosMinerais_109.readFeatures(json_GranisSlidosMinerais_109, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_GranisSlidosMinerais_109 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GranisSlidosMinerais_109.addFeatures(features_GranisSlidosMinerais_109);
var lyr_GranisSlidosMinerais_109 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GranisSlidosMinerais_109, 
                style: style_GranisSlidosMinerais_109,
                popuplayertitle: 'Granéis Sólidos Minerais',
                interactive: true,
                title: '<img src="styles/legend/GranisSlidosMinerais_109.png" /> Granéis Sólidos Minerais'
            });
var format_GranelSlido_110 = new ol.format.GeoJSON();
var features_GranelSlido_110 = format_GranelSlido_110.readFeatures(json_GranelSlido_110, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_GranelSlido_110 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GranelSlido_110.addFeatures(features_GranelSlido_110);
var lyr_GranelSlido_110 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GranelSlido_110, 
                style: style_GranelSlido_110,
                popuplayertitle: 'Granel Sólido',
                interactive: true,
                title: '<img src="styles/legend/GranelSlido_110.png" /> Granel Sólido'
            });
var format_Armazenagem_111 = new ol.format.GeoJSON();
var features_Armazenagem_111 = format_Armazenagem_111.readFeatures(json_Armazenagem_111, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Armazenagem_111 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Armazenagem_111.addFeatures(features_Armazenagem_111);
var lyr_Armazenagem_111 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Armazenagem_111, 
                style: style_Armazenagem_111,
                popuplayertitle: 'Armazenagem',
                interactive: true,
                title: '<img src="styles/legend/Armazenagem_111.png" /> Armazenagem'
            });
var format_Multiuso_112 = new ol.format.GeoJSON();
var features_Multiuso_112 = format_Multiuso_112.readFeatures(json_Multiuso_112, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Multiuso_112 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Multiuso_112.addFeatures(features_Multiuso_112);
var lyr_Multiuso_112 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Multiuso_112, 
                style: style_Multiuso_112,
                popuplayertitle: 'Multiuso',
                interactive: true,
                title: '<img src="styles/legend/Multiuso_112.png" /> Multiuso'
            });
var format_Caf_113 = new ol.format.GeoJSON();
var features_Caf_113 = format_Caf_113.readFeatures(json_Caf_113, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Caf_113 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Caf_113.addFeatures(features_Caf_113);
var lyr_Caf_113 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Caf_113, 
                style: style_Caf_113,
                popuplayertitle: 'Café',
                interactive: true,
                title: '<img src="styles/legend/Caf_113.png" /> Café'
            });
var format_reasAfetassOperaesPorturiasLongoPrazo_114 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasLongoPrazo_114 = format_reasAfetassOperaesPorturiasLongoPrazo_114.readFeatures(json_reasAfetassOperaesPorturiasLongoPrazo_114, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasAfetassOperaesPorturiasLongoPrazo_114 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasLongoPrazo_114.addFeatures(features_reasAfetassOperaesPorturiasLongoPrazo_114);
var lyr_reasAfetassOperaesPorturiasLongoPrazo_114 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasLongoPrazo_114, 
                style: style_reasAfetassOperaesPorturiasLongoPrazo_114,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasLongoPrazo_114.png" /> Áreas Afetas às Operações Portuárias - Longo Prazo '
            });
var format_reasAfetassOperaesPorturiasMdioPrazo_115 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasMdioPrazo_115 = format_reasAfetassOperaesPorturiasMdioPrazo_115.readFeatures(json_reasAfetassOperaesPorturiasMdioPrazo_115, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasAfetassOperaesPorturiasMdioPrazo_115 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasMdioPrazo_115.addFeatures(features_reasAfetassOperaesPorturiasMdioPrazo_115);
var lyr_reasAfetassOperaesPorturiasMdioPrazo_115 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasMdioPrazo_115, 
                style: style_reasAfetassOperaesPorturiasMdioPrazo_115,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasMdioPrazo_115.png" /> Áreas Afetas às Operações Portuárias - Médio Prazo '
            });
var format_reasAfetassOperaesPorturiasCurtoPrazo_116 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasCurtoPrazo_116 = format_reasAfetassOperaesPorturiasCurtoPrazo_116.readFeatures(json_reasAfetassOperaesPorturiasCurtoPrazo_116, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasAfetassOperaesPorturiasCurtoPrazo_116 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasCurtoPrazo_116.addFeatures(features_reasAfetassOperaesPorturiasCurtoPrazo_116);
var lyr_reasAfetassOperaesPorturiasCurtoPrazo_116 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasCurtoPrazo_116, 
                style: style_reasAfetassOperaesPorturiasCurtoPrazo_116,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasCurtoPrazo_116.png" /> Áreas Afetas às Operações Portuárias - Curto Prazo '
            });
var format_reasAfetassOperaesPorturiasSituaoAtual_117 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasSituaoAtual_117 = format_reasAfetassOperaesPorturiasSituaoAtual_117.readFeatures(json_reasAfetassOperaesPorturiasSituaoAtual_117, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasAfetassOperaesPorturiasSituaoAtual_117 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasSituaoAtual_117.addFeatures(features_reasAfetassOperaesPorturiasSituaoAtual_117);
var lyr_reasAfetassOperaesPorturiasSituaoAtual_117 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasSituaoAtual_117, 
                style: style_reasAfetassOperaesPorturiasSituaoAtual_117,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasSituaoAtual_117.png" /> Áreas Afetas às Operações Portuárias - Situação Atual '
            });
var format_PoligonaldareadoPortoOrganizadodeItagua_118 = new ol.format.GeoJSON();
var features_PoligonaldareadoPortoOrganizadodeItagua_118 = format_PoligonaldareadoPortoOrganizadodeItagua_118.readFeatures(json_PoligonaldareadoPortoOrganizadodeItagua_118, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_PoligonaldareadoPortoOrganizadodeItagua_118 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PoligonaldareadoPortoOrganizadodeItagua_118.addFeatures(features_PoligonaldareadoPortoOrganizadodeItagua_118);
var lyr_PoligonaldareadoPortoOrganizadodeItagua_118 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PoligonaldareadoPortoOrganizadodeItagua_118, 
                style: style_PoligonaldareadoPortoOrganizadodeItagua_118,
                popuplayertitle: 'Poligonal da Área do Porto Organizado de Itaguaí',
                interactive: true,
                title: '<img src="styles/legend/PoligonaldareadoPortoOrganizadodeItagua_118.png" /> Poligonal da Área do Porto Organizado de Itaguaí'
            });
var group_PoligonaldareadoPortoOrganizado = new ol.layer.Group({
                                layers: [lyr_PoligonaldareadoPortoOrganizadodeItagua_118,],
                                fold: 'open',
                                title: 'Poligonal da Área do Porto Organizado '});
var group_reasAfetassOperaesPorturias = new ol.layer.Group({
                                layers: [lyr_reasAfetassOperaesPorturiasLongoPrazo_114,lyr_reasAfetassOperaesPorturiasMdioPrazo_115,lyr_reasAfetassOperaesPorturiasCurtoPrazo_116,lyr_reasAfetassOperaesPorturiasSituaoAtual_117,],
                                fold: 'open',
                                title: 'Áreas Afetas às Operações Portuárias '});
var group_reasAfetassOperaesPorturiasporPerfildeCargaSituaoAtual = new ol.layer.Group({
                                layers: [lyr_CargaGeraleProdutosSiderrgicos_100,lyr_ProdutosSiderrgicos_101,lyr_CarvoMineralCoqueePetcoke_102,lyr_CarvoeMinriodeFerro_103,lyr_MinriodeFerro_104,lyr_ContinereseCargaGeral_105,lyr_ContineresVazios_106,lyr_Contineres_107,lyr_GranisSlidosdeOrigemnoVegetal_108,lyr_GranisSlidosMinerais_109,lyr_GranelSlido_110,lyr_Armazenagem_111,lyr_Multiuso_112,lyr_Caf_113,],
                                fold: 'open',
                                title: 'Áreas Afetas às Operações Portuárias por Perfil de Carga - Situação Atual '});
var group_reasAfetassOperaesPorturiasporPerfildeCargaCurtoPrazo = new ol.layer.Group({
                                layers: [lyr_ArmazmparaInspeo_85,lyr_ArmazmdeCaf_86,lyr_CargaGeraleGranelSlido_87,lyr_CargaGeraleProdutosSiderrgicos_88,lyr_ProdutosSiderrgicos_89,lyr_CarvoMineralCoqueePetcoke_90,lyr_CarvoeMinriodeFerro_91,lyr_MinriodeFerro_92,lyr_ContinereseCargaGeral_93,lyr_ContineresVazios_94,lyr_Contineres_95,lyr_GranisSlidosdeOrigemnoVegetal_96,lyr_GranisSlidosMinerais_97,lyr_GranelSlido_98,lyr_Multiuso_99,],
                                fold: 'open',
                                title: 'Áreas Afetas às Operações Portuárias por Perfil de Carga - Curto Prazo'});
var group_reasAfetassOperaesPorturiasporPerfildeCargaMdioPrazo = new ol.layer.Group({
                                layers: [lyr_ArmazmparaInspeo_69,lyr_CargaGeraleGranelSlido_70,lyr_CargaGeraleProdutosSiderrgicos_71,lyr_ProdutosSiderrgicos_72,lyr_CarvoMineralCoqueePetcoke_73,lyr_CarvoeMinriodeFerro_74,lyr_MinriodeFerro_75,lyr_ContinereseCargaGeral_76,lyr_ContineresVazios_77,lyr_Contineres_78,lyr_GranisSlidosdeOrigemnoVegetal_79,lyr_GranisSlidosMinerais_80,lyr_GranelSlido_81,lyr_GranelLquido_82,lyr_Multiuso_83,lyr_Caf_84,],
                                fold: 'open',
                                title: 'Áreas Afetas às Operações Portuárias por Perfil de Carga - Médio Prazo'});
var group_reasAfetassOperaesPorturiasporPerfildeCargaLongoPrazo = new ol.layer.Group({
                                layers: [lyr_ArmazmparaInspeo_53,lyr_CargaGeraleGranelSlido_54,lyr_CargaGeraleProdutosSiderrgicos_55,lyr_ProdutosSiderrgicos_56,lyr_CarvoMineralCoqueePetcoke_57,lyr_CarvoeMinriodeFerro_58,lyr_MinriodeFerro_59,lyr_ContinereseCargaGeral_60,lyr_ContineresVazios_61,lyr_Contineres_62,lyr_GranisSlidosdeOrigemnoVegetal_63,lyr_GranisSlidosMinerais_64,lyr_GranelSlido_65,lyr_GranelLquido_66,lyr_Multiuso_67,lyr_Caf_68,],
                                fold: 'open',
                                title: 'Áreas Afetas às Operações Portuárias por Perfil de Carga - Longo Prazo'});
var group_reasAfetassOperaesPorturiasArrendadas = new ol.layer.Group({
                                layers: [lyr_reasAfetassOperaesPorturiasArrendadasLongoPrazo_49,lyr_reasAfetassOperaesPorturiasArrendadasMdioPrazo_50,lyr_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_51,lyr_reasAfetassOperaesPorturiasArrendadasSituaoAtual_52,],
                                fold: 'open',
                                title: 'Áreas Afetas às Operações Portuárias Arrendadas '});
var group_reasAfetassOperaesPorturiasDisponveisparaArrendamento = new ol.layer.Group({
                                layers: [lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_45,lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_46,lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_47,lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_48,],
                                fold: 'open',
                                title: 'Áreas Afetas às Operações Portuárias Disponíveis para Arrendamento '});
var group_Armazenagem = new ol.layer.Group({
                                layers: [lyr_ArmazenagemLongoPrazo_41,lyr_ArmazenagemMdioPrazo_42,lyr_ArmazenagemCurtoPrazo_43,lyr_ArmazenagemSituaoAtual_44,],
                                fold: 'open',
                                title: 'Armazenagem '});
var group_Acostagem = new ol.layer.Group({
                                layers: [lyr_AcostagemLongoPrazo_37,lyr_AcostagemMdioPrazo_38,lyr_AcostagemCurtoPrazo_39,lyr_AcostagemSituaoAtual_40,],
                                fold: 'open',
                                title: 'Acostagem '});
var group_reasNoAfetassOperaesPorturias = new ol.layer.Group({
                                layers: [lyr_reasNoAfetassOperaesPorturiasLongoPrazo_33,lyr_reasNoAfetassOperaesPorturiasMdioPrazo_34,lyr_reasNoAfetassOperaesPorturiasCurtoPrazo_35,lyr_reasNoAfetassOperaesPorturiasSituaoAtual_36,],
                                fold: 'open',
                                title: 'Áreas Não Afetas às Operações Portuárias '});
var group_reasNoAfetassOperaesPorturiasemExploraoIndireta = new ol.layer.Group({
                                layers: [lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaLongoPrazo_29,lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_30,lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_31,lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_32,],
                                fold: 'open',
                                title: 'Áreas Não Afetas às Operações Portuárias em Exploração Indireta '});
var group_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndireta = new ol.layer.Group({
                                layers: [lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_25,lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_26,lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_27,lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_28,],
                                fold: 'open',
                                title: 'Áreas Não Afetas às Operações Portuárias Disponíveis para Exploração Indireta '});
var group_reaseInstalaesAlfandegadas = new ol.layer.Group({
                                layers: [lyr_reaseInstalaesAlfandegadas_24,],
                                fold: 'open',
                                title: 'Áreas e Instalações Alfandegadas '});
var group_AcessosRodoviriosExternos = new ol.layer.Group({
                                layers: [lyr_AcessosRodoviriosExternos_23,],
                                fold: 'open',
                                title: 'Acessos Rodoviários Externos '});
var group_AcessosRodoviriosInternos = new ol.layer.Group({
                                layers: [lyr_AcessosRodoviriosInternosLongoPrazo_19,lyr_AcessosRodoviriosInternosMdioPrazo_20,lyr_AcessosRodoviriosInternosCurtoPrazo_21,lyr_AcessosRodoviriosInternosSituaoAtual_22,],
                                fold: 'open',
                                title: 'Acessos Rodoviários Internos '});
var group_AcessosFerroviriosInternos = new ol.layer.Group({
                                layers: [lyr_AcessosFerroviriosInternosLongoPrazo_15,lyr_AcessosFerroviriosInternosMdioPrazo_16,lyr_AcessosFerroviriosInternosCurtoPrazo_17,lyr_AcessosFerroviriosInternosSituaoAtual_18,],
                                fold: 'open',
                                title: 'Acessos Ferroviários Internos '});
var group_CanaisdeAcesso = new ol.layer.Group({
                                layers: [lyr_CanaisdeAcessoLongoPrazo_11,lyr_CanaisdeAcessoMdioPrazo_12,lyr_CanaisdeAcessoCurtoPrazo_13,lyr_CanaisdeAcessoSituaoAtual_14,],
                                fold: 'open',
                                title: 'Canais de Acesso '});
var group_BaciasdeEvoluo = new ol.layer.Group({
                                layers: [lyr_BaciasdeEvoluoLongoPrazo_7,lyr_BaciasdeEvoluoMdioPrazo_8,lyr_BaciasdeEvoluoCurtoPrazo_9,lyr_BaciasdeEvoluoSituaoAtual_10,],
                                fold: 'open',
                                title: 'Bacias de Evolução '});
var group_Fundeadouros = new ol.layer.Group({
                                layers: [lyr_FundeadourosLongoPrazo_3,lyr_FundeadourosMdioPrazo_4,lyr_FundeadourosCurtoPrazo_5,lyr_FundeadourosSituaoAtual_6,],
                                fold: 'open',
                                title: 'Fundeadouros '});
var group_reasUrbanaseRurais = new ol.layer.Group({
                                layers: [lyr_reasUrbanaseRurais_2,],
                                fold: 'open',
                                title: 'Áreas Urbanas e Rurais '});
var group_UnidadesdeConservao = new ol.layer.Group({
                                layers: [lyr_UnidadesdeConservao_1,],
                                fold: 'open',
                                title: 'Unidades de Conservação '});

lyr_GoogleSatellite_0.setVisible(true);lyr_UnidadesdeConservao_1.setVisible(false);lyr_reasUrbanaseRurais_2.setVisible(false);lyr_FundeadourosLongoPrazo_3.setVisible(false);lyr_FundeadourosMdioPrazo_4.setVisible(false);lyr_FundeadourosCurtoPrazo_5.setVisible(false);lyr_FundeadourosSituaoAtual_6.setVisible(false);lyr_BaciasdeEvoluoLongoPrazo_7.setVisible(false);lyr_BaciasdeEvoluoMdioPrazo_8.setVisible(false);lyr_BaciasdeEvoluoCurtoPrazo_9.setVisible(false);lyr_BaciasdeEvoluoSituaoAtual_10.setVisible(false);lyr_CanaisdeAcessoLongoPrazo_11.setVisible(false);lyr_CanaisdeAcessoMdioPrazo_12.setVisible(false);lyr_CanaisdeAcessoCurtoPrazo_13.setVisible(false);lyr_CanaisdeAcessoSituaoAtual_14.setVisible(false);lyr_AcessosFerroviriosInternosLongoPrazo_15.setVisible(false);lyr_AcessosFerroviriosInternosMdioPrazo_16.setVisible(false);lyr_AcessosFerroviriosInternosCurtoPrazo_17.setVisible(false);lyr_AcessosFerroviriosInternosSituaoAtual_18.setVisible(false);lyr_AcessosRodoviriosInternosLongoPrazo_19.setVisible(false);lyr_AcessosRodoviriosInternosMdioPrazo_20.setVisible(false);lyr_AcessosRodoviriosInternosCurtoPrazo_21.setVisible(false);lyr_AcessosRodoviriosInternosSituaoAtual_22.setVisible(false);lyr_AcessosRodoviriosExternos_23.setVisible(false);lyr_reaseInstalaesAlfandegadas_24.setVisible(false);lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_25.setVisible(false);lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_26.setVisible(false);lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_27.setVisible(false);lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_28.setVisible(false);lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaLongoPrazo_29.setVisible(false);lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_30.setVisible(false);lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_31.setVisible(false);lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_32.setVisible(false);lyr_reasNoAfetassOperaesPorturiasLongoPrazo_33.setVisible(false);lyr_reasNoAfetassOperaesPorturiasMdioPrazo_34.setVisible(false);lyr_reasNoAfetassOperaesPorturiasCurtoPrazo_35.setVisible(false);lyr_reasNoAfetassOperaesPorturiasSituaoAtual_36.setVisible(false);lyr_AcostagemLongoPrazo_37.setVisible(false);lyr_AcostagemMdioPrazo_38.setVisible(false);lyr_AcostagemCurtoPrazo_39.setVisible(false);lyr_AcostagemSituaoAtual_40.setVisible(false);lyr_ArmazenagemLongoPrazo_41.setVisible(false);lyr_ArmazenagemMdioPrazo_42.setVisible(false);lyr_ArmazenagemCurtoPrazo_43.setVisible(false);lyr_ArmazenagemSituaoAtual_44.setVisible(false);lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_45.setVisible(false);lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_46.setVisible(false);lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_47.setVisible(false);lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_48.setVisible(false);lyr_reasAfetassOperaesPorturiasArrendadasLongoPrazo_49.setVisible(false);lyr_reasAfetassOperaesPorturiasArrendadasMdioPrazo_50.setVisible(false);lyr_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_51.setVisible(false);lyr_reasAfetassOperaesPorturiasArrendadasSituaoAtual_52.setVisible(false);lyr_ArmazmparaInspeo_53.setVisible(false);lyr_CargaGeraleGranelSlido_54.setVisible(false);lyr_CargaGeraleProdutosSiderrgicos_55.setVisible(false);lyr_ProdutosSiderrgicos_56.setVisible(false);lyr_CarvoMineralCoqueePetcoke_57.setVisible(false);lyr_CarvoeMinriodeFerro_58.setVisible(false);lyr_MinriodeFerro_59.setVisible(false);lyr_ContinereseCargaGeral_60.setVisible(false);lyr_ContineresVazios_61.setVisible(false);lyr_Contineres_62.setVisible(false);lyr_GranisSlidosdeOrigemnoVegetal_63.setVisible(false);lyr_GranisSlidosMinerais_64.setVisible(false);lyr_GranelSlido_65.setVisible(false);lyr_GranelLquido_66.setVisible(false);lyr_Multiuso_67.setVisible(false);lyr_Caf_68.setVisible(false);lyr_ArmazmparaInspeo_69.setVisible(false);lyr_CargaGeraleGranelSlido_70.setVisible(false);lyr_CargaGeraleProdutosSiderrgicos_71.setVisible(false);lyr_ProdutosSiderrgicos_72.setVisible(false);lyr_CarvoMineralCoqueePetcoke_73.setVisible(false);lyr_CarvoeMinriodeFerro_74.setVisible(false);lyr_MinriodeFerro_75.setVisible(false);lyr_ContinereseCargaGeral_76.setVisible(false);lyr_ContineresVazios_77.setVisible(false);lyr_Contineres_78.setVisible(false);lyr_GranisSlidosdeOrigemnoVegetal_79.setVisible(false);lyr_GranisSlidosMinerais_80.setVisible(false);lyr_GranelSlido_81.setVisible(false);lyr_GranelLquido_82.setVisible(false);lyr_Multiuso_83.setVisible(false);lyr_Caf_84.setVisible(false);lyr_ArmazmparaInspeo_85.setVisible(false);lyr_ArmazmdeCaf_86.setVisible(false);lyr_CargaGeraleGranelSlido_87.setVisible(false);lyr_CargaGeraleProdutosSiderrgicos_88.setVisible(false);lyr_ProdutosSiderrgicos_89.setVisible(false);lyr_CarvoMineralCoqueePetcoke_90.setVisible(false);lyr_CarvoeMinriodeFerro_91.setVisible(false);lyr_MinriodeFerro_92.setVisible(false);lyr_ContinereseCargaGeral_93.setVisible(false);lyr_ContineresVazios_94.setVisible(false);lyr_Contineres_95.setVisible(false);lyr_GranisSlidosdeOrigemnoVegetal_96.setVisible(false);lyr_GranisSlidosMinerais_97.setVisible(false);lyr_GranelSlido_98.setVisible(false);lyr_Multiuso_99.setVisible(false);lyr_CargaGeraleProdutosSiderrgicos_100.setVisible(false);lyr_ProdutosSiderrgicos_101.setVisible(false);lyr_CarvoMineralCoqueePetcoke_102.setVisible(false);lyr_CarvoeMinriodeFerro_103.setVisible(false);lyr_MinriodeFerro_104.setVisible(false);lyr_ContinereseCargaGeral_105.setVisible(false);lyr_ContineresVazios_106.setVisible(false);lyr_Contineres_107.setVisible(false);lyr_GranisSlidosdeOrigemnoVegetal_108.setVisible(false);lyr_GranisSlidosMinerais_109.setVisible(false);lyr_GranelSlido_110.setVisible(false);lyr_Armazenagem_111.setVisible(false);lyr_Multiuso_112.setVisible(false);lyr_Caf_113.setVisible(false);lyr_reasAfetassOperaesPorturiasLongoPrazo_114.setVisible(false);lyr_reasAfetassOperaesPorturiasMdioPrazo_115.setVisible(false);lyr_reasAfetassOperaesPorturiasCurtoPrazo_116.setVisible(false);lyr_reasAfetassOperaesPorturiasSituaoAtual_117.setVisible(false);lyr_PoligonaldareadoPortoOrganizadodeItagua_118.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,group_UnidadesdeConservao,group_reasUrbanaseRurais,group_Fundeadouros,group_BaciasdeEvoluo,group_CanaisdeAcesso,group_AcessosFerroviriosInternos,group_AcessosRodoviriosInternos,group_AcessosRodoviriosExternos,group_reaseInstalaesAlfandegadas,group_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndireta,group_reasNoAfetassOperaesPorturiasemExploraoIndireta,group_reasNoAfetassOperaesPorturias,group_Acostagem,group_Armazenagem,group_reasAfetassOperaesPorturiasDisponveisparaArrendamento,group_reasAfetassOperaesPorturiasArrendadas,group_reasAfetassOperaesPorturiasporPerfildeCargaLongoPrazo,group_reasAfetassOperaesPorturiasporPerfildeCargaMdioPrazo,group_reasAfetassOperaesPorturiasporPerfildeCargaCurtoPrazo,group_reasAfetassOperaesPorturiasporPerfildeCargaSituaoAtual,group_reasAfetassOperaesPorturias,group_PoligonaldareadoPortoOrganizado];
lyr_UnidadesdeConservao_1.set('fieldAliases', {'Nome': 'Nome', 'Inst_Legal': 'Instrumento Legal ', 'Área': 'Área (m²) ', });
lyr_reasUrbanaseRurais_2.set('fieldAliases', {'Tipo': 'Tipo de Área ', 'Ins_Legal': 'Instrumento Legal ', 'Área': 'Área (m²) ', });
lyr_FundeadourosLongoPrazo_3.set('fieldAliases', {'Função': 'Função', 'Calado': 'Calado (m) ', });
lyr_FundeadourosMdioPrazo_4.set('fieldAliases', {'Função': 'Função', 'Calado': 'Calado (m) ', });
lyr_FundeadourosCurtoPrazo_5.set('fieldAliases', {'Função': 'Função', 'Calado': 'Calado (m) ', });
lyr_FundeadourosSituaoAtual_6.set('fieldAliases', {'Função': 'Função', 'Calado': 'Calado (m) ', });
lyr_BaciasdeEvoluoLongoPrazo_7.set('fieldAliases', {'Calado': 'Calado (m) ', 'Funcao': 'Função ', });
lyr_BaciasdeEvoluoMdioPrazo_8.set('fieldAliases', {'Calado': 'Calado (m) ', 'Funcao': 'Função ', });
lyr_BaciasdeEvoluoCurtoPrazo_9.set('fieldAliases', {'Calado': 'Calado (m) ', 'Funcao': 'Função ', });
lyr_BaciasdeEvoluoSituaoAtual_10.set('fieldAliases', {'Calado': 'Calado (m) ', 'Funcao': 'Função ', });
lyr_CanaisdeAcessoLongoPrazo_11.set('fieldAliases', {'Trecho': 'Trecho', 'Calado': 'Calado (m) ', });
lyr_CanaisdeAcessoMdioPrazo_12.set('fieldAliases', {'Trecho': 'Trecho', 'Calado': 'Calado (m) ', });
lyr_CanaisdeAcessoCurtoPrazo_13.set('fieldAliases', {'Trecho': 'Trecho', 'Calado': 'Calado (m) ', });
lyr_CanaisdeAcessoSituaoAtual_14.set('fieldAliases', {'Trecho': 'Trecho', 'Calado': 'Calado (m) ', });
lyr_AcessosFerroviriosInternosLongoPrazo_15.set('fieldAliases', {'Nome': 'Nome', 'Operador': 'Operador', });
lyr_AcessosFerroviriosInternosMdioPrazo_16.set('fieldAliases', {'Nome': 'Nome', 'Operador': 'Operador', });
lyr_AcessosFerroviriosInternosCurtoPrazo_17.set('fieldAliases', {'Nome': 'Nome', 'Operador': 'Operador', });
lyr_AcessosFerroviriosInternosSituaoAtual_18.set('fieldAliases', {'Nome': 'Nome', 'Operador': 'Operador', });
lyr_AcessosRodoviriosInternosLongoPrazo_19.set('fieldAliases', {'Ident': 'Identificação ', 'N_Pista': 'Número de Pistas de Rolamento ', });
lyr_AcessosRodoviriosInternosMdioPrazo_20.set('fieldAliases', {'Ident': 'Identificação ', 'N_Pista': 'Número de Pistas de Rolamento ', });
lyr_AcessosRodoviriosInternosCurtoPrazo_21.set('fieldAliases', {'Ident': 'Identificação ', 'N_Pista': 'Número de Pistas de Rolamento ', });
lyr_AcessosRodoviriosInternosSituaoAtual_22.set('fieldAliases', {'Ident': 'Identificação ', 'N_Pista': 'Número de Pistas de Rolamento ', });
lyr_AcessosRodoviriosExternos_23.set('fieldAliases', {'Nome': 'Nome', 'Sigla': 'Sigla', 'Jurisdicao': 'Jurisdição ', });
lyr_reaseInstalaesAlfandegadas_24.set('fieldAliases', {'Ins_Legal': 'Instrumento Legal ', });
lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_25.set('fieldAliases', {'T_Explo': 'Tipo de Exploração ', 'Área': 'Área (m²) ', 'Util_Area': 'Utilização Atual da Área ', 'Nome': 'Nome', });
lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_26.set('fieldAliases', {'T_Explo': 'Tipo de Exploração ', 'Área': 'Área (m²) ', 'Util_Area': 'Utilização Atual da Área ', 'Nome': 'Nome', });
lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_27.set('fieldAliases', {'Nome': 'Nome', 'T_Explo': 'Tipo de Exploração ', 'Área': 'Área (m²) ', 'Util_Area': 'Utilização Atual da Área ', });
lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_28.set('fieldAliases', {'Nome': 'Nome', 'T_Explo': 'Tipo de Exploração ', 'Área': 'Área (m²) ', 'Util_Area': 'Utilização Atual da Área ', });
lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaLongoPrazo_29.set('fieldAliases', {'Nome': 'Nome', 'T_Cessao': 'Tipo de Cessão ', 'Respons': 'Responsável ', 'D_Inicio': 'Data de Início do Contrato ', 'D_Term': 'Data de Término do Contrato ', 'A_Desenv': 'Atividade Desenvolvida ', 'Área': 'Área (m²) ', });
lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_30.set('fieldAliases', {'Nome': 'Nome', 'T_Cessao': 'Tipo de Cessão ', 'Respons': 'Responsável ', 'D_Inicio': 'Data de Início do Contrato ', 'D_Term': 'Data de Término do Contrato ', 'A_Desenv': 'Atividade Desenvolvida ', 'Área': 'Área (m²) ', });
lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_31.set('fieldAliases', {'Nome': 'Nome', 'T_Cessao': 'Tipo de Cessão ', 'Respons': 'Responsável ', 'D_Inicio': 'Data de Início do Contrato ', 'D_Term': 'Data de Término do Contrato ', 'A_Desenv': 'Atividade Desenvolvida ', 'Área': 'Área (m²) ', });
lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_32.set('fieldAliases', {'Nome': 'Nome', 'T_Cessao': 'Tipo de Cessão ', 'Respons': 'Responsável ', 'D_Inicio': 'Data de Início do Contrato ', 'D_Term': 'Data de Término do Contrato ', 'A_Desenv': 'Atividade Desenvolvida ', 'Área': 'Área (m²) ', });
lyr_reasNoAfetassOperaesPorturiasLongoPrazo_33.set('fieldAliases', {'Nome': 'Nome', 'Destinacao': 'Destinação ', 'Área': 'Área (m²) ', });
lyr_reasNoAfetassOperaesPorturiasMdioPrazo_34.set('fieldAliases', {'Nome': 'Nome', 'Destinacao': 'Destinação ', 'Área': 'Área (m²) ', });
lyr_reasNoAfetassOperaesPorturiasCurtoPrazo_35.set('fieldAliases', {'Nome': 'Nome', 'Destinacao': 'Destinação ', 'Área': 'Área (m²) ', });
lyr_reasNoAfetassOperaesPorturiasSituaoAtual_36.set('fieldAliases', {'Nome': 'Nome', 'Destinacao': 'Destinação ', 'Área': 'Área (m²) ', });
lyr_AcostagemLongoPrazo_37.set('fieldAliases', {'Id. Cais': 'Identificador do Cais ', 'Id. Berco': 'Identificador do Berço ', 'C. Const.': 'Características Construtivas ', 'Calado': 'Calado (m) ', 'Per. Carga': 'Perfil de Carga ', 'Comp.': 'Comprimento (m) ', 'Profund.': 'Profundidade (m) ', });
lyr_AcostagemMdioPrazo_38.set('fieldAliases', {'Id. Cais': 'Identificador do Cais ', 'Id. Berco': 'Identificador do Berço ', 'C. Const.': 'Características Construtivas ', 'Calado': 'Calado (m) ', 'Per. Carga': 'Perfil de Carga ', 'Comp.': 'Comprimento (m) ', 'Profund.': 'Profundidade (m) ', });
lyr_AcostagemCurtoPrazo_39.set('fieldAliases', {'Id. Cais': 'Identificador do Cais ', 'Id. Berco': 'Identificador do Berço ', 'C_Const.': 'Características Construtivas', 'Calado': 'Calado (m) ', 'Per. Carga': 'Perfil de Carga ', 'Comp.': 'Comprimento (m) ', 'Profund.': 'Profundidade (m) ', });
lyr_AcostagemSituaoAtual_40.set('fieldAliases', {'Id. Cais': 'Identificador do Cais ', 'Id. Berco': 'Identificador do Berço ', 'C. Const.': 'Características Construtivas ', 'Calado': 'Calado (m) ', 'Per. Carga': 'Perfil de Carga ', 'Comp.': 'Comprimento (m) ', 'Profund.': 'Profundidade (m) ', });
lyr_ArmazenagemLongoPrazo_41.set('fieldAliases', {'T.Instal.': 'Tipo da Instalação ', 'Capacidade': 'Capacidade', 'Área': 'Área (m²) ', 'Volume': 'Volume (m³) ', });
lyr_ArmazenagemMdioPrazo_42.set('fieldAliases', {'T.Instal.': 'Tipo da Instalação ', 'Capacidade': 'Capacidade', 'Área': 'Área (m²) ', 'Volume': 'Volume (m³) ', });
lyr_ArmazenagemCurtoPrazo_43.set('fieldAliases', {'T.Instal.': 'Tipo da Instalação ', 'Capacidade': 'Capacidade', 'Área': 'Área (m²) ', 'Volume': 'Volume (m³) ', });
lyr_ArmazenagemSituaoAtual_44.set('fieldAliases', {'T.Instal.': 'Tipo da Instalação ', 'Capacidade': 'Capacidade', 'Área': 'Área (m²) ', 'Volume': 'Volume (m³) ', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_45.set('fieldAliases', {'Nome': 'Nome', 'Área': 'Área (m²) ', 'Perfil': 'Perfil de Carga ', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_46.set('fieldAliases', {'Nome': 'Nome', 'Área': 'Área (m²) ', 'Perfil': 'Perfil de Carga ', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_47.set('fieldAliases', {'Nome': 'Nome', 'Área': 'Área (m²) ', 'Perfil': 'Perfil de Carga ', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_48.set('fieldAliases', {'Nome': 'Nome', 'Área': 'Área (m²) ', 'Perfil': 'Perfil de Carga ', });
lyr_reasAfetassOperaesPorturiasArrendadasLongoPrazo_49.set('fieldAliases', {'Perfil': 'Perfil de Carga ', 'Área': 'Área (m²) ', 'Arrend': 'Arrendatário ', 'N_Cont': 'Número do Contrato ', 'D_Inicio': 'Data Início do Contrato ', 'D_Term': 'Data do Término do Contrato ', 'P_Prorrog': 'Possibilidade de Prorrogação ', });
lyr_reasAfetassOperaesPorturiasArrendadasMdioPrazo_50.set('fieldAliases', {'Perfil': 'Perfil de Carga ', 'Área': 'Área (m²) ', 'Arrend': 'Arrendatário ', 'N_Cont': 'Número do Contrato ', 'D_Inicio': 'Data Início do Contrato ', 'D_Term': 'Data do Término do Contrato ', 'P_Prorrog': 'Possibilidade de Prorrogação ', });
lyr_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_51.set('fieldAliases', {'Área': 'Área (m²) ', 'Perfil': 'Perfil de Carga ', 'Arrend': 'Arrendatário ', 'N_Cont': 'Número do Contrato ', 'D_Inicio': 'Data Início do Contrato ', 'D_Term': 'Data do Término do Contrato ', 'P_Prorrog': 'Possibilidade de Prorrogação ', });
lyr_reasAfetassOperaesPorturiasArrendadasSituaoAtual_52.set('fieldAliases', {'Área': 'Área (m²) ', 'Perfil': 'Perfil de Carga ', 'Arrend': 'Arrendatário ', 'N_Cont': 'Número do Contrato ', 'D_Inicio': 'Data Início do Contrato ', 'D_Term': 'Data do Término do Contrato ', 'P_Prorrog': 'Possibilidade de Prorrogação ', });
lyr_ArmazmparaInspeo_53.set('fieldAliases', {'Perfil de': 'Perfil de Carga ', 'Tipo de In': 'Tipo de Instalação ', 'Área (m²': 'Área (m²) ', 'Nome': 'Nome', });
lyr_CargaGeraleGranelSlido_54.set('fieldAliases', {'Perfil de': 'Perfil de Carga ', 'Tipo de In': 'Tipo de Instalação ', 'Área (m²': 'Área (m²) ', 'Nome': 'Nome', });
lyr_CargaGeraleProdutosSiderrgicos_55.set('fieldAliases', {'Perfil de': 'Perfil de Carga ', 'Tipo de In': 'Tipo de Instalação ', 'Área (m²': 'Área (m²) ', 'Nome': 'Nome', });
lyr_ProdutosSiderrgicos_56.set('fieldAliases', {'Perfil de': 'Perfil de Carga ', 'Tipo de In': 'Tipo de Instalação ', 'Área (m²': 'Área (m²) ', 'Nome': 'Nome', });
lyr_CarvoMineralCoqueePetcoke_57.set('fieldAliases', {'Perfil de': 'Perfil de Carga ', 'Tipo de In': 'Tipo de Instalação ', 'Área (m²': 'Área (m²) ', 'Nome': 'Nome', });
lyr_CarvoeMinriodeFerro_58.set('fieldAliases', {'Perfil de': 'Perfil de Carga ', 'Tipo de In': 'Tipo de Instalação ', 'Área (m²': 'Área (m²) ', 'Nome': 'Nome', });
lyr_MinriodeFerro_59.set('fieldAliases', {'Perfil de': 'Perfil de Carga ', 'Tipo de In': 'Tipo de Instalação ', 'Área (m²': 'Área (m²) ', 'Nome': 'Nome', });
lyr_ContinereseCargaGeral_60.set('fieldAliases', {'Perfil de': 'Perfil de Carga ', 'Tipo de In': 'Tipo de Instalação ', 'Área (m²': 'Área (m²) ', 'Nome': 'Nome', });
lyr_ContineresVazios_61.set('fieldAliases', {'Perfil de': 'Perfil de Carga ', 'Tipo de In': 'Tipo de Instalação ', 'Área (m²': 'Área (m²) ', 'Nome': 'Nome', });
lyr_Contineres_62.set('fieldAliases', {'Perfil de': 'Perfil de Carga ', 'Tipo de In': 'Tipo de Instalação ', 'Área (m²': 'Área (m²) ', 'Nome': 'Nome', });
lyr_GranisSlidosdeOrigemnoVegetal_63.set('fieldAliases', {'Perfil de': 'Perfil de Carga ', 'Tipo de In': 'Tipo de Instalação ', 'Área (m²': 'Área (m²) ', 'Nome': 'Nome', });
lyr_GranisSlidosMinerais_64.set('fieldAliases', {'Perfil de': 'Perfil de Carga ', 'Tipo de In': 'Tipo de Instalação ', 'Área (m²': 'Área (m²) ', 'Nome': 'Nome', });
lyr_GranelSlido_65.set('fieldAliases', {'Perfil de': 'Perfil de Carga ', 'Tipo de In': 'Tipo de Instalação ', 'Área (m²': 'Área (m²) ', 'Nome': 'Nome', });
lyr_GranelLquido_66.set('fieldAliases', {'Perfil de': 'Perfil de Carga ', 'Tipo de In': 'Tipo de Instalação ', 'Área (m²': 'Área (m²) ', 'Nome': 'Nome', });
lyr_Multiuso_67.set('fieldAliases', {'Perfil de': 'Perfil de Carga ', 'Tipo de In': 'Tipo de Instalação ', 'Área (m²': 'Área (m²) ', 'Nome': 'Nome', });
lyr_Caf_68.set('fieldAliases', {'Perfil de': 'Perfil de Carga ', 'Tipo de In': 'Tipo de Instalação ', 'Área (m²': 'Área (m²) ', 'Nome': 'Nome', });
lyr_ArmazmparaInspeo_69.set('fieldAliases', {'Perfil de': 'Perfil de Carga ', 'Tipo de In': 'Tipo de Instalação ', 'Área (m²': 'Área (m²) ', 'Nome': 'Nome', });
lyr_CargaGeraleGranelSlido_70.set('fieldAliases', {'Perfil de': 'Perfil de Carga ', 'Tipo de In': 'Tipo de Instalação ', 'Área (m²': 'Área (m²) ', 'Nome': 'Nome', });
lyr_CargaGeraleProdutosSiderrgicos_71.set('fieldAliases', {'Perfil de': 'Perfil de Carga ', 'Tipo de In': 'Tipo de Instalação ', 'Área (m²': 'Área (m²) ', 'Nome': 'Nome', });
lyr_ProdutosSiderrgicos_72.set('fieldAliases', {'Perfil de': 'Perfil de Carga ', 'Tipo de In': 'Tipo de Instalação ', 'Área (m²': 'Área (m²) ', 'Nome': 'Nome', });
lyr_CarvoMineralCoqueePetcoke_73.set('fieldAliases', {'Perfil de': 'Perfil de Carga ', 'Tipo de In': 'Tipo de Instalação ', 'Área (m²': 'Área (m²) ', 'Nome': 'Nome', });
lyr_CarvoeMinriodeFerro_74.set('fieldAliases', {'Perfil de': 'Perfil de Carga ', 'Tipo de In': 'Tipo de Instalação ', 'Área (m²': 'Área (m²) ', 'Nome': 'Nome', });
lyr_MinriodeFerro_75.set('fieldAliases', {'Perfil de': 'Perfil de Carga ', 'Tipo de In': 'Tipo de Instalação ', 'Área (m²': 'Área (m²) ', 'Nome': 'Nome', });
lyr_ContinereseCargaGeral_76.set('fieldAliases', {'Perfil de': 'Perfil de Carga ', 'Tipo de In': 'Tipo de Instalação ', 'Área (m²': 'Área (m²) ', 'Nome': 'Nome', });
lyr_ContineresVazios_77.set('fieldAliases', {'Perfil de': 'Perfil de Carga ', 'Tipo de In': 'Tipo de Instalação ', 'Área (m²': 'Área (m²) ', 'Nome': 'Nome', });
lyr_Contineres_78.set('fieldAliases', {'Perfil de': 'Perfil de Carga ', 'Tipo de In': 'Tipo de Instalação ', 'Área (m²': 'Área (m²) ', 'Nome': 'Nome', });
lyr_GranisSlidosdeOrigemnoVegetal_79.set('fieldAliases', {'Perfil de': 'Perfil de Carga ', 'Tipo de In': 'Tipo de Instalação ', 'Área (m²': 'Área (m²) ', 'Nome': 'Nome', });
lyr_GranisSlidosMinerais_80.set('fieldAliases', {'Perfil de': 'Perfil de Carga ', 'Tipo de In': 'Tipo de Instalação ', 'Área (m²': 'Área (m²) ', 'Nome': 'Nome', });
lyr_GranelSlido_81.set('fieldAliases', {'Perfil de': 'Perfil de Carga ', 'Tipo de In': 'Tipo de Instalação ', 'Área (m²': 'Área (m²) ', 'Nome': 'Nome', });
lyr_GranelLquido_82.set('fieldAliases', {'Perfil de': 'Perfil de Carga ', 'Tipo de In': 'Tipo de Instalação ', 'Área (m²': 'Área (m²) ', 'Nome': 'Nome', });
lyr_Multiuso_83.set('fieldAliases', {'Perfil de': 'Perfil de Carga ', 'Tipo de In': 'Tipo de Instalação ', 'Área (m²': 'Área (m²) ', 'Nome': 'Nome', });
lyr_Caf_84.set('fieldAliases', {'Perfil de': 'Perfil de Carga ', 'Tipo de In': 'Tipo de Instalação ', 'Área (m²': 'Área (m²) ', 'Nome': 'Nome', });
lyr_ArmazmparaInspeo_85.set('fieldAliases', {'Área (m²': 'Área (m²) ', 'Nome': 'Nome', 'Perfil de': 'Perfil de Carga ', 'Tipo de In': 'Tipo de Instalação ', });
lyr_ArmazmdeCaf_86.set('fieldAliases', {'Área (m²': 'Área (m²) ', 'Nome': 'Nome', 'Perfil de': 'Perfil de Carga ', 'Tipo de In': 'Tipo de Instalação ', });
lyr_CargaGeraleGranelSlido_87.set('fieldAliases', {'Área (m²': 'Área (m²) ', 'Nome': 'Nome', 'Perfil de': 'Perfil de Carga ', 'Tipo de In': 'Tipo de Instalação ', });
lyr_CargaGeraleProdutosSiderrgicos_88.set('fieldAliases', {'Área (m²': 'Área (m²) ', 'Nome': 'Nome', 'Perfil de': 'Perfil de Carga ', 'Tipo de In': 'Tipo de Instalação ', });
lyr_ProdutosSiderrgicos_89.set('fieldAliases', {'Área (m²': 'Área (m²) ', 'Nome': 'Nome', 'Perfil de': 'Perfil de Carga ', 'Tipo de In': 'Tipo de Instalação ', });
lyr_CarvoMineralCoqueePetcoke_90.set('fieldAliases', {'Área (m²': 'Área (m²) ', 'Nome': 'Nome', 'Perfil de': 'Perfil de Carga ', 'Tipo de In': 'Tipo de Instalação ', });
lyr_CarvoeMinriodeFerro_91.set('fieldAliases', {'Área (m²': 'Área (m²) ', 'Nome': 'Nome', 'Perfil de': 'Perfil de Carga ', 'Tipo de In': 'Tipo de Instalação ', });
lyr_MinriodeFerro_92.set('fieldAliases', {'Área (m²': 'Área (m²) ', 'Nome': 'Nome', 'Perfil de': 'Perfil de Carga ', 'Tipo de In': 'Tipo de Instalação ', });
lyr_ContinereseCargaGeral_93.set('fieldAliases', {'Área (m²': 'Área (m²) ', 'Nome': 'Nome', 'Perfil de': 'Perfil de Carga ', 'Tipo de In': 'Tipo de Instalação ', });
lyr_ContineresVazios_94.set('fieldAliases', {'Área (m²': 'Área (m²) ', 'Nome': 'Nome', 'Perfil de': 'Perfil de Carga ', 'Tipo de In': 'Tipo de Instalação ', });
lyr_Contineres_95.set('fieldAliases', {'Área (m²': 'Área (m²) ', 'Nome': 'Nome', 'Perfil de': 'Perfil de Carga ', 'Tipo de In': 'Tipo de Instalação ', });
lyr_GranisSlidosdeOrigemnoVegetal_96.set('fieldAliases', {'Área (m²': 'Área (m²) ', 'Nome': 'Nome', 'Perfil de': 'Perfil de Carga ', 'Tipo de In': 'Tipo de Instalação ', });
lyr_GranisSlidosMinerais_97.set('fieldAliases', {'Área (m²': 'Área (m²) ', 'Nome': 'Nome', 'Perfil de': 'Perfil de Carga ', 'Tipo de In': 'Tipo de Instalação ', });
lyr_GranelSlido_98.set('fieldAliases', {'Área (m²': 'Área (m²) ', 'Nome': 'Nome', 'Perfil de': 'Perfil de Carga ', 'Tipo de In': 'Tipo de Instalação ', });
lyr_Multiuso_99.set('fieldAliases', {'Área (m²': 'Área (m²) ', 'Nome': 'Nome', 'Perfil de': 'Perfil de Carga ', 'Tipo de In': 'Tipo de Instalação ', });
lyr_CargaGeraleProdutosSiderrgicos_100.set('fieldAliases', {'Área (m²': 'Área (m²) ', 'Nome': 'Nome', 'Perfil de': 'Perfil de Carga ', 'Tipo de In': 'Tipo de Instalação ', });
lyr_ProdutosSiderrgicos_101.set('fieldAliases', {'Área': 'Área (m²) ', 'Nome': 'Nome', 'Perfil': 'Perfil de Carga ', 'T_Instal': 'Tipo de Instalação ', });
lyr_CarvoMineralCoqueePetcoke_102.set('fieldAliases', {'Área (m²': 'Área (m²) ', 'Nome': 'Nome', 'Perfil de': 'Perfil de Carga ', 'Tipo de In': 'Tipo de Instalação ', });
lyr_CarvoeMinriodeFerro_103.set('fieldAliases', {'Área (m²': 'Área (m²) ', 'Nome': 'Nome', 'Perfil de': 'Perfil de Carga ', 'Tipo de In': 'Tipo de Instalação ', });
lyr_MinriodeFerro_104.set('fieldAliases', {'Área (m²': 'Área (m²) ', 'Nome': 'Nome', 'Perfil de': 'Perfil de Carga ', 'Tipo de In': 'Tipo de Instalação ', });
lyr_ContinereseCargaGeral_105.set('fieldAliases', {'Área (m²': 'Área (m²) ', 'Nome': 'Nome', 'Perfil de': 'Perfil de Carga ', 'Tipo de In': 'Tipo de Instalação ', });
lyr_ContineresVazios_106.set('fieldAliases', {'Área (m²': 'Área (m²) ', 'Nome': 'Nome', 'Perfil de': 'Perfil de Carga ', 'Tipo de In': 'Tipo de Instalação ', });
lyr_Contineres_107.set('fieldAliases', {'Área (m²': 'Área (m²) ', 'Nome': 'Nome', 'Perfil de': 'Perfil de Carga ', 'Tipo de In': 'Tipo de Instalação ', });
lyr_GranisSlidosdeOrigemnoVegetal_108.set('fieldAliases', {'Área (m²': 'Área (m²) ', 'Nome': 'Nome', 'Perfil de': 'Perfil de Carga ', 'Tipo de In': 'Tipo de Instalação ', });
lyr_GranisSlidosMinerais_109.set('fieldAliases', {'Área (m²': 'Área (m²)', 'Nome': 'Nome', 'Perfil de': 'Perfil de Carga ', 'Tipo de In': 'Tipo de Instalação ', });
lyr_GranelSlido_110.set('fieldAliases', {'Área (m²': 'Área (m²)', 'Nome': 'Nome', 'Perfil de': 'Perfil de Carga ', 'Tipo de In': 'Tipo de Instalação ', });
lyr_Armazenagem_111.set('fieldAliases', {'Área (m²': 'Área (m²) ', 'Nome': 'Nome', 'Perfil de': 'Perfil de Carga ', 'Tipo de In': 'Tipo de Instalação ', });
lyr_Multiuso_112.set('fieldAliases', {'Área (m²': 'Área (m²) ', 'Nome': 'Nome', 'Perfil de': 'Perfil de Carga ', 'Tipo de In': 'Tipo de Instalação ', });
lyr_Caf_113.set('fieldAliases', {'Área (m²': 'Área (m²) ', 'Nome': 'Nome', 'Perfil de': 'Perfil de Carga ', 'Tipo de In': 'Tipo de Instalação ', });
lyr_reasAfetassOperaesPorturiasLongoPrazo_114.set('fieldAliases', {'Perfil': 'Perfil de Carga ', 'T_Instal': 'Tipo de Instalação ', 'Área': 'Área (m²) ', 'Nome': 'Nome', });
lyr_reasAfetassOperaesPorturiasMdioPrazo_115.set('fieldAliases', {'Perfil': 'Perfil de Carga ', 'T_Instal': 'Tipo de Instalação ', 'Área': 'Área (m²) ', 'Nome': 'Nome', });
lyr_reasAfetassOperaesPorturiasCurtoPrazo_116.set('fieldAliases', {'Área': 'Área (m²) ', 'Nome': 'Nome', 'Perfil': 'Perfil de Carga ', 'T_Instal': 'Tipo de Instalação ', });
lyr_reasAfetassOperaesPorturiasSituaoAtual_117.set('fieldAliases', {'Área': 'Área (m²) ', 'Nome': 'Nome', 'Perfil': 'Perfil de Carga ', 'T_Instal': 'Tipo de Instalação ', });
lyr_PoligonaldareadoPortoOrganizadodeItagua_118.set('fieldAliases', {'Ins_Legal': 'Instrumento Legal ', 'Anexo': 'Anexo', });
lyr_UnidadesdeConservao_1.set('fieldImages', {'Nome': 'TextEdit', 'Inst_Legal': 'TextEdit', 'Área': 'TextEdit', });
lyr_reasUrbanaseRurais_2.set('fieldImages', {'Tipo': 'TextEdit', 'Ins_Legal': 'TextEdit', 'Área': 'TextEdit', });
lyr_FundeadourosLongoPrazo_3.set('fieldImages', {'Função': 'TextEdit', 'Calado': 'TextEdit', });
lyr_FundeadourosMdioPrazo_4.set('fieldImages', {'Função': 'TextEdit', 'Calado': 'TextEdit', });
lyr_FundeadourosCurtoPrazo_5.set('fieldImages', {'Função': 'TextEdit', 'Calado': 'TextEdit', });
lyr_FundeadourosSituaoAtual_6.set('fieldImages', {'Função': 'TextEdit', 'Calado': 'TextEdit', });
lyr_BaciasdeEvoluoLongoPrazo_7.set('fieldImages', {'Calado': 'TextEdit', 'Funcao': 'TextEdit', });
lyr_BaciasdeEvoluoMdioPrazo_8.set('fieldImages', {'Calado': 'TextEdit', 'Funcao': 'TextEdit', });
lyr_BaciasdeEvoluoCurtoPrazo_9.set('fieldImages', {'Calado': 'TextEdit', 'Funcao': 'TextEdit', });
lyr_BaciasdeEvoluoSituaoAtual_10.set('fieldImages', {'Calado': 'TextEdit', 'Funcao': 'TextEdit', });
lyr_CanaisdeAcessoLongoPrazo_11.set('fieldImages', {'Trecho': 'TextEdit', 'Calado': 'TextEdit', });
lyr_CanaisdeAcessoMdioPrazo_12.set('fieldImages', {'Trecho': 'TextEdit', 'Calado': 'TextEdit', });
lyr_CanaisdeAcessoCurtoPrazo_13.set('fieldImages', {'Trecho': 'TextEdit', 'Calado': 'TextEdit', });
lyr_CanaisdeAcessoSituaoAtual_14.set('fieldImages', {'Trecho': 'TextEdit', 'Calado': 'TextEdit', });
lyr_AcessosFerroviriosInternosLongoPrazo_15.set('fieldImages', {'Nome': '', 'Operador': '', });
lyr_AcessosFerroviriosInternosMdioPrazo_16.set('fieldImages', {'Nome': '', 'Operador': '', });
lyr_AcessosFerroviriosInternosCurtoPrazo_17.set('fieldImages', {'Nome': '', 'Operador': '', });
lyr_AcessosFerroviriosInternosSituaoAtual_18.set('fieldImages', {'Nome': '', 'Operador': '', });
lyr_AcessosRodoviriosInternosLongoPrazo_19.set('fieldImages', {'Ident': 'TextEdit', 'N_Pista': 'Range', });
lyr_AcessosRodoviriosInternosMdioPrazo_20.set('fieldImages', {'Ident': 'TextEdit', 'N_Pista': 'Range', });
lyr_AcessosRodoviriosInternosCurtoPrazo_21.set('fieldImages', {'Ident': 'TextEdit', 'N_Pista': 'Range', });
lyr_AcessosRodoviriosInternosSituaoAtual_22.set('fieldImages', {'Ident': 'TextEdit', 'N_Pista': 'Range', });
lyr_AcessosRodoviriosExternos_23.set('fieldImages', {'Nome': 'TextEdit', 'Sigla': 'TextEdit', 'Jurisdicao': 'TextEdit', });
lyr_reaseInstalaesAlfandegadas_24.set('fieldImages', {'Ins_Legal': 'TextEdit', });
lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_25.set('fieldImages', {'T_Explo': 'TextEdit', 'Área': 'TextEdit', 'Util_Area': 'TextEdit', 'Nome': 'TextEdit', });
lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_26.set('fieldImages', {'T_Explo': 'TextEdit', 'Área': 'TextEdit', 'Util_Area': 'TextEdit', 'Nome': 'TextEdit', });
lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_27.set('fieldImages', {'Nome': 'TextEdit', 'T_Explo': 'TextEdit', 'Área': 'TextEdit', 'Util_Area': 'TextEdit', });
lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_28.set('fieldImages', {'Nome': 'TextEdit', 'T_Explo': 'TextEdit', 'Área': 'TextEdit', 'Util_Area': 'TextEdit', });
lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaLongoPrazo_29.set('fieldImages', {'Nome': 'TextEdit', 'T_Cessao': 'TextEdit', 'Respons': 'TextEdit', 'D_Inicio': 'TextEdit', 'D_Term': 'TextEdit', 'A_Desenv': 'TextEdit', 'Área': 'TextEdit', });
lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_30.set('fieldImages', {'Nome': 'TextEdit', 'T_Cessao': 'TextEdit', 'Respons': 'TextEdit', 'D_Inicio': 'TextEdit', 'D_Term': 'TextEdit', 'A_Desenv': 'TextEdit', 'Área': 'TextEdit', });
lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_31.set('fieldImages', {'Nome': 'TextEdit', 'T_Cessao': 'TextEdit', 'Respons': 'TextEdit', 'D_Inicio': 'TextEdit', 'D_Term': 'TextEdit', 'A_Desenv': 'TextEdit', 'Área': 'TextEdit', });
lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_32.set('fieldImages', {'Nome': 'TextEdit', 'T_Cessao': 'TextEdit', 'Respons': 'TextEdit', 'D_Inicio': 'TextEdit', 'D_Term': 'TextEdit', 'A_Desenv': 'TextEdit', 'Área': 'TextEdit', });
lyr_reasNoAfetassOperaesPorturiasLongoPrazo_33.set('fieldImages', {'Nome': 'TextEdit', 'Destinacao': 'TextEdit', 'Área': 'TextEdit', });
lyr_reasNoAfetassOperaesPorturiasMdioPrazo_34.set('fieldImages', {'Nome': 'TextEdit', 'Destinacao': 'TextEdit', 'Área': 'TextEdit', });
lyr_reasNoAfetassOperaesPorturiasCurtoPrazo_35.set('fieldImages', {'Nome': 'TextEdit', 'Destinacao': 'TextEdit', 'Área': 'TextEdit', });
lyr_reasNoAfetassOperaesPorturiasSituaoAtual_36.set('fieldImages', {'Nome': 'TextEdit', 'Destinacao': 'TextEdit', 'Área': 'TextEdit', });
lyr_AcostagemLongoPrazo_37.set('fieldImages', {'Id. Cais': 'TextEdit', 'Id. Berco': 'TextEdit', 'C. Const.': 'TextEdit', 'Calado': 'TextEdit', 'Per. Carga': 'TextEdit', 'Comp.': 'TextEdit', 'Profund.': 'TextEdit', });
lyr_AcostagemMdioPrazo_38.set('fieldImages', {'Id. Cais': 'TextEdit', 'Id. Berco': 'TextEdit', 'C. Const.': 'TextEdit', 'Calado': 'TextEdit', 'Per. Carga': 'TextEdit', 'Comp.': 'TextEdit', 'Profund.': 'TextEdit', });
lyr_AcostagemCurtoPrazo_39.set('fieldImages', {'Id. Cais': 'TextEdit', 'Id. Berco': 'TextEdit', 'C_Const.': 'TextEdit', 'Calado': 'TextEdit', 'Per. Carga': 'TextEdit', 'Comp.': 'TextEdit', 'Profund.': 'TextEdit', });
lyr_AcostagemSituaoAtual_40.set('fieldImages', {'Id. Cais': 'TextEdit', 'Id. Berco': 'TextEdit', 'C. Const.': 'TextEdit', 'Calado': 'TextEdit', 'Per. Carga': 'TextEdit', 'Comp.': 'TextEdit', 'Profund.': 'TextEdit', });
lyr_ArmazenagemLongoPrazo_41.set('fieldImages', {'T.Instal.': 'TextEdit', 'Capacidade': 'TextEdit', 'Área': 'TextEdit', 'Volume': 'TextEdit', });
lyr_ArmazenagemMdioPrazo_42.set('fieldImages', {'T.Instal.': 'TextEdit', 'Capacidade': 'TextEdit', 'Área': 'TextEdit', 'Volume': 'TextEdit', });
lyr_ArmazenagemCurtoPrazo_43.set('fieldImages', {'T.Instal.': 'TextEdit', 'Capacidade': 'TextEdit', 'Área': 'TextEdit', 'Volume': 'TextEdit', });
lyr_ArmazenagemSituaoAtual_44.set('fieldImages', {'T.Instal.': 'TextEdit', 'Capacidade': 'TextEdit', 'Área': 'TextEdit', 'Volume': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_45.set('fieldImages', {'Nome': 'TextEdit', 'Área': 'TextEdit', 'Perfil': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_46.set('fieldImages', {'Nome': 'TextEdit', 'Área': 'TextEdit', 'Perfil': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_47.set('fieldImages', {'Nome': 'TextEdit', 'Área': 'TextEdit', 'Perfil': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_48.set('fieldImages', {'Nome': 'TextEdit', 'Área': 'TextEdit', 'Perfil': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasArrendadasLongoPrazo_49.set('fieldImages', {'Perfil': 'TextEdit', 'Área': 'TextEdit', 'Arrend': 'TextEdit', 'N_Cont': 'TextEdit', 'D_Inicio': 'TextEdit', 'D_Term': 'TextEdit', 'P_Prorrog': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasArrendadasMdioPrazo_50.set('fieldImages', {'Perfil': 'TextEdit', 'Área': 'TextEdit', 'Arrend': 'TextEdit', 'N_Cont': 'TextEdit', 'D_Inicio': 'TextEdit', 'D_Term': 'TextEdit', 'P_Prorrog': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_51.set('fieldImages', {'Área': 'TextEdit', 'Perfil': 'TextEdit', 'Arrend': 'TextEdit', 'N_Cont': 'TextEdit', 'D_Inicio': 'TextEdit', 'D_Term': 'TextEdit', 'P_Prorrog': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasArrendadasSituaoAtual_52.set('fieldImages', {'Área': 'TextEdit', 'Perfil': 'TextEdit', 'Arrend': 'TextEdit', 'N_Cont': 'TextEdit', 'D_Inicio': 'TextEdit', 'D_Term': 'TextEdit', 'P_Prorrog': 'TextEdit', });
lyr_ArmazmparaInspeo_53.set('fieldImages', {'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', 'Área (m²': 'TextEdit', 'Nome': 'TextEdit', });
lyr_CargaGeraleGranelSlido_54.set('fieldImages', {'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', 'Área (m²': 'TextEdit', 'Nome': 'TextEdit', });
lyr_CargaGeraleProdutosSiderrgicos_55.set('fieldImages', {'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', 'Área (m²': 'TextEdit', 'Nome': 'TextEdit', });
lyr_ProdutosSiderrgicos_56.set('fieldImages', {'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', 'Área (m²': 'TextEdit', 'Nome': 'TextEdit', });
lyr_CarvoMineralCoqueePetcoke_57.set('fieldImages', {'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', 'Área (m²': 'TextEdit', 'Nome': 'TextEdit', });
lyr_CarvoeMinriodeFerro_58.set('fieldImages', {'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', 'Área (m²': 'TextEdit', 'Nome': 'TextEdit', });
lyr_MinriodeFerro_59.set('fieldImages', {'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', 'Área (m²': 'TextEdit', 'Nome': 'TextEdit', });
lyr_ContinereseCargaGeral_60.set('fieldImages', {'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', 'Área (m²': 'TextEdit', 'Nome': 'TextEdit', });
lyr_ContineresVazios_61.set('fieldImages', {'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', 'Área (m²': 'TextEdit', 'Nome': 'TextEdit', });
lyr_Contineres_62.set('fieldImages', {'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', 'Área (m²': 'TextEdit', 'Nome': 'TextEdit', });
lyr_GranisSlidosdeOrigemnoVegetal_63.set('fieldImages', {'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', 'Área (m²': 'TextEdit', 'Nome': 'TextEdit', });
lyr_GranisSlidosMinerais_64.set('fieldImages', {'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', 'Área (m²': 'TextEdit', 'Nome': 'TextEdit', });
lyr_GranelSlido_65.set('fieldImages', {'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', 'Área (m²': 'TextEdit', 'Nome': 'TextEdit', });
lyr_GranelLquido_66.set('fieldImages', {'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', 'Área (m²': 'TextEdit', 'Nome': 'TextEdit', });
lyr_Multiuso_67.set('fieldImages', {'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', 'Área (m²': 'TextEdit', 'Nome': 'TextEdit', });
lyr_Caf_68.set('fieldImages', {'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', 'Área (m²': 'TextEdit', 'Nome': 'TextEdit', });
lyr_ArmazmparaInspeo_69.set('fieldImages', {'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', 'Área (m²': 'TextEdit', 'Nome': 'TextEdit', });
lyr_CargaGeraleGranelSlido_70.set('fieldImages', {'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', 'Área (m²': 'TextEdit', 'Nome': 'TextEdit', });
lyr_CargaGeraleProdutosSiderrgicos_71.set('fieldImages', {'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', 'Área (m²': 'TextEdit', 'Nome': 'TextEdit', });
lyr_ProdutosSiderrgicos_72.set('fieldImages', {'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', 'Área (m²': 'TextEdit', 'Nome': 'TextEdit', });
lyr_CarvoMineralCoqueePetcoke_73.set('fieldImages', {'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', 'Área (m²': 'TextEdit', 'Nome': 'TextEdit', });
lyr_CarvoeMinriodeFerro_74.set('fieldImages', {'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', 'Área (m²': 'TextEdit', 'Nome': 'TextEdit', });
lyr_MinriodeFerro_75.set('fieldImages', {'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', 'Área (m²': 'TextEdit', 'Nome': 'TextEdit', });
lyr_ContinereseCargaGeral_76.set('fieldImages', {'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', 'Área (m²': 'TextEdit', 'Nome': 'TextEdit', });
lyr_ContineresVazios_77.set('fieldImages', {'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', 'Área (m²': 'TextEdit', 'Nome': 'TextEdit', });
lyr_Contineres_78.set('fieldImages', {'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', 'Área (m²': 'TextEdit', 'Nome': 'TextEdit', });
lyr_GranisSlidosdeOrigemnoVegetal_79.set('fieldImages', {'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', 'Área (m²': 'TextEdit', 'Nome': 'TextEdit', });
lyr_GranisSlidosMinerais_80.set('fieldImages', {'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', 'Área (m²': 'TextEdit', 'Nome': 'TextEdit', });
lyr_GranelSlido_81.set('fieldImages', {'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', 'Área (m²': 'TextEdit', 'Nome': 'TextEdit', });
lyr_GranelLquido_82.set('fieldImages', {'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', 'Área (m²': 'TextEdit', 'Nome': 'TextEdit', });
lyr_Multiuso_83.set('fieldImages', {'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', 'Área (m²': 'TextEdit', 'Nome': 'TextEdit', });
lyr_Caf_84.set('fieldImages', {'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', 'Área (m²': 'TextEdit', 'Nome': 'TextEdit', });
lyr_ArmazmparaInspeo_85.set('fieldImages', {'Área (m²': 'TextEdit', 'Nome': 'TextEdit', 'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', });
lyr_ArmazmdeCaf_86.set('fieldImages', {'Área (m²': 'TextEdit', 'Nome': 'TextEdit', 'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', });
lyr_CargaGeraleGranelSlido_87.set('fieldImages', {'Área (m²': 'TextEdit', 'Nome': 'TextEdit', 'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', });
lyr_CargaGeraleProdutosSiderrgicos_88.set('fieldImages', {'Área (m²': 'TextEdit', 'Nome': 'TextEdit', 'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', });
lyr_ProdutosSiderrgicos_89.set('fieldImages', {'Área (m²': 'TextEdit', 'Nome': 'TextEdit', 'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', });
lyr_CarvoMineralCoqueePetcoke_90.set('fieldImages', {'Área (m²': 'TextEdit', 'Nome': 'TextEdit', 'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', });
lyr_CarvoeMinriodeFerro_91.set('fieldImages', {'Área (m²': 'TextEdit', 'Nome': 'TextEdit', 'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', });
lyr_MinriodeFerro_92.set('fieldImages', {'Área (m²': 'TextEdit', 'Nome': 'TextEdit', 'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', });
lyr_ContinereseCargaGeral_93.set('fieldImages', {'Área (m²': 'TextEdit', 'Nome': 'TextEdit', 'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', });
lyr_ContineresVazios_94.set('fieldImages', {'Área (m²': 'TextEdit', 'Nome': 'TextEdit', 'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', });
lyr_Contineres_95.set('fieldImages', {'Área (m²': 'TextEdit', 'Nome': 'TextEdit', 'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', });
lyr_GranisSlidosdeOrigemnoVegetal_96.set('fieldImages', {'Área (m²': 'TextEdit', 'Nome': 'TextEdit', 'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', });
lyr_GranisSlidosMinerais_97.set('fieldImages', {'Área (m²': 'TextEdit', 'Nome': 'TextEdit', 'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', });
lyr_GranelSlido_98.set('fieldImages', {'Área (m²': 'TextEdit', 'Nome': 'TextEdit', 'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', });
lyr_Multiuso_99.set('fieldImages', {'Área (m²': 'TextEdit', 'Nome': 'TextEdit', 'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', });
lyr_CargaGeraleProdutosSiderrgicos_100.set('fieldImages', {'Área (m²': 'TextEdit', 'Nome': 'TextEdit', 'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', });
lyr_ProdutosSiderrgicos_101.set('fieldImages', {'Área': 'TextEdit', 'Nome': 'TextEdit', 'Perfil': 'TextEdit', 'T_Instal': 'TextEdit', });
lyr_CarvoMineralCoqueePetcoke_102.set('fieldImages', {'Área (m²': 'TextEdit', 'Nome': 'TextEdit', 'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', });
lyr_CarvoeMinriodeFerro_103.set('fieldImages', {'Área (m²': 'TextEdit', 'Nome': 'TextEdit', 'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', });
lyr_MinriodeFerro_104.set('fieldImages', {'Área (m²': 'TextEdit', 'Nome': 'TextEdit', 'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', });
lyr_ContinereseCargaGeral_105.set('fieldImages', {'Área (m²': 'TextEdit', 'Nome': 'TextEdit', 'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', });
lyr_ContineresVazios_106.set('fieldImages', {'Área (m²': 'TextEdit', 'Nome': 'TextEdit', 'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', });
lyr_Contineres_107.set('fieldImages', {'Área (m²': 'TextEdit', 'Nome': 'TextEdit', 'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', });
lyr_GranisSlidosdeOrigemnoVegetal_108.set('fieldImages', {'Área (m²': 'TextEdit', 'Nome': 'TextEdit', 'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', });
lyr_GranisSlidosMinerais_109.set('fieldImages', {'Área (m²': 'TextEdit', 'Nome': 'TextEdit', 'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', });
lyr_GranelSlido_110.set('fieldImages', {'Área (m²': 'TextEdit', 'Nome': 'TextEdit', 'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', });
lyr_Armazenagem_111.set('fieldImages', {'Área (m²': 'TextEdit', 'Nome': 'TextEdit', 'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', });
lyr_Multiuso_112.set('fieldImages', {'Área (m²': 'TextEdit', 'Nome': 'TextEdit', 'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', });
lyr_Caf_113.set('fieldImages', {'Área (m²': 'TextEdit', 'Nome': 'TextEdit', 'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasLongoPrazo_114.set('fieldImages', {'Perfil': 'TextEdit', 'T_Instal': 'TextEdit', 'Área': 'TextEdit', 'Nome': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasMdioPrazo_115.set('fieldImages', {'Perfil': 'TextEdit', 'T_Instal': 'TextEdit', 'Área': 'TextEdit', 'Nome': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasCurtoPrazo_116.set('fieldImages', {'Área': 'TextEdit', 'Nome': 'TextEdit', 'Perfil': 'TextEdit', 'T_Instal': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasSituaoAtual_117.set('fieldImages', {'Área': 'TextEdit', 'Nome': 'TextEdit', 'Perfil': 'TextEdit', 'T_Instal': 'TextEdit', });
lyr_PoligonaldareadoPortoOrganizadodeItagua_118.set('fieldImages', {'Ins_Legal': 'TextEdit', 'Anexo': 'TextEdit', });
lyr_UnidadesdeConservao_1.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Inst_Legal': 'inline label - visible with data', 'Área': 'inline label - visible with data', });
lyr_reasUrbanaseRurais_2.set('fieldLabels', {'Tipo': 'inline label - visible with data', 'Ins_Legal': 'inline label - visible with data', 'Área': 'inline label - visible with data', });
lyr_FundeadourosLongoPrazo_3.set('fieldLabels', {'Função': 'inline label - visible with data', 'Calado': 'inline label - visible with data', });
lyr_FundeadourosMdioPrazo_4.set('fieldLabels', {'Função': 'inline label - visible with data', 'Calado': 'inline label - visible with data', });
lyr_FundeadourosCurtoPrazo_5.set('fieldLabels', {'Função': 'inline label - visible with data', 'Calado': 'inline label - visible with data', });
lyr_FundeadourosSituaoAtual_6.set('fieldLabels', {'Função': 'inline label - visible with data', 'Calado': 'inline label - visible with data', });
lyr_BaciasdeEvoluoLongoPrazo_7.set('fieldLabels', {'Calado': 'inline label - visible with data', 'Funcao': 'inline label - visible with data', });
lyr_BaciasdeEvoluoMdioPrazo_8.set('fieldLabels', {'Calado': 'inline label - visible with data', 'Funcao': 'inline label - visible with data', });
lyr_BaciasdeEvoluoCurtoPrazo_9.set('fieldLabels', {'Calado': 'inline label - visible with data', 'Funcao': 'inline label - visible with data', });
lyr_BaciasdeEvoluoSituaoAtual_10.set('fieldLabels', {'Calado': 'inline label - visible with data', 'Funcao': 'inline label - visible with data', });
lyr_CanaisdeAcessoLongoPrazo_11.set('fieldLabels', {'Trecho': 'inline label - visible with data', 'Calado': 'inline label - visible with data', });
lyr_CanaisdeAcessoMdioPrazo_12.set('fieldLabels', {'Trecho': 'inline label - visible with data', 'Calado': 'inline label - visible with data', });
lyr_CanaisdeAcessoCurtoPrazo_13.set('fieldLabels', {'Trecho': 'inline label - visible with data', 'Calado': 'inline label - visible with data', });
lyr_CanaisdeAcessoSituaoAtual_14.set('fieldLabels', {'Trecho': 'inline label - visible with data', 'Calado': 'inline label - visible with data', });
lyr_AcessosFerroviriosInternosLongoPrazo_15.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Operador': 'inline label - visible with data', });
lyr_AcessosFerroviriosInternosMdioPrazo_16.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Operador': 'inline label - visible with data', });
lyr_AcessosFerroviriosInternosCurtoPrazo_17.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Operador': 'inline label - visible with data', });
lyr_AcessosFerroviriosInternosSituaoAtual_18.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Operador': 'inline label - visible with data', });
lyr_AcessosRodoviriosInternosLongoPrazo_19.set('fieldLabels', {'Ident': 'inline label - visible with data', 'N_Pista': 'inline label - visible with data', });
lyr_AcessosRodoviriosInternosMdioPrazo_20.set('fieldLabels', {'Ident': 'inline label - visible with data', 'N_Pista': 'inline label - visible with data', });
lyr_AcessosRodoviriosInternosCurtoPrazo_21.set('fieldLabels', {'Ident': 'inline label - visible with data', 'N_Pista': 'inline label - visible with data', });
lyr_AcessosRodoviriosInternosSituaoAtual_22.set('fieldLabels', {'Ident': 'inline label - visible with data', 'N_Pista': 'inline label - visible with data', });
lyr_AcessosRodoviriosExternos_23.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Sigla': 'inline label - visible with data', 'Jurisdicao': 'inline label - visible with data', });
lyr_reaseInstalaesAlfandegadas_24.set('fieldLabels', {'Ins_Legal': 'inline label - visible with data', });
lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_25.set('fieldLabels', {'T_Explo': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Util_Area': 'inline label - visible with data', 'Nome': 'inline label - visible with data', });
lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_26.set('fieldLabels', {'T_Explo': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Util_Area': 'inline label - visible with data', 'Nome': 'inline label - visible with data', });
lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_27.set('fieldLabels', {'Nome': 'inline label - visible with data', 'T_Explo': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Util_Area': 'inline label - visible with data', });
lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_28.set('fieldLabels', {'Nome': 'inline label - visible with data', 'T_Explo': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Util_Area': 'inline label - visible with data', });
lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaLongoPrazo_29.set('fieldLabels', {'Nome': 'inline label - visible with data', 'T_Cessao': 'inline label - visible with data', 'Respons': 'inline label - visible with data', 'D_Inicio': 'inline label - visible with data', 'D_Term': 'inline label - visible with data', 'A_Desenv': 'inline label - visible with data', 'Área': 'inline label - visible with data', });
lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_30.set('fieldLabels', {'Nome': 'inline label - visible with data', 'T_Cessao': 'inline label - visible with data', 'Respons': 'inline label - visible with data', 'D_Inicio': 'inline label - visible with data', 'D_Term': 'inline label - visible with data', 'A_Desenv': 'inline label - visible with data', 'Área': 'inline label - visible with data', });
lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_31.set('fieldLabels', {'Nome': 'inline label - visible with data', 'T_Cessao': 'inline label - visible with data', 'Respons': 'inline label - visible with data', 'D_Inicio': 'inline label - visible with data', 'D_Term': 'inline label - visible with data', 'A_Desenv': 'inline label - visible with data', 'Área': 'inline label - visible with data', });
lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_32.set('fieldLabels', {'Nome': 'inline label - visible with data', 'T_Cessao': 'inline label - visible with data', 'Respons': 'inline label - visible with data', 'D_Inicio': 'inline label - visible with data', 'D_Term': 'inline label - visible with data', 'A_Desenv': 'inline label - visible with data', 'Área': 'inline label - visible with data', });
lyr_reasNoAfetassOperaesPorturiasLongoPrazo_33.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Destinacao': 'inline label - visible with data', 'Área': 'inline label - visible with data', });
lyr_reasNoAfetassOperaesPorturiasMdioPrazo_34.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Destinacao': 'inline label - visible with data', 'Área': 'inline label - visible with data', });
lyr_reasNoAfetassOperaesPorturiasCurtoPrazo_35.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Destinacao': 'inline label - visible with data', 'Área': 'inline label - visible with data', });
lyr_reasNoAfetassOperaesPorturiasSituaoAtual_36.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Destinacao': 'inline label - visible with data', 'Área': 'inline label - visible with data', });
lyr_AcostagemLongoPrazo_37.set('fieldLabels', {'Id. Cais': 'inline label - visible with data', 'Id. Berco': 'inline label - visible with data', 'C. Const.': 'inline label - visible with data', 'Calado': 'inline label - visible with data', 'Per. Carga': 'inline label - visible with data', 'Comp.': 'inline label - visible with data', 'Profund.': 'inline label - visible with data', });
lyr_AcostagemMdioPrazo_38.set('fieldLabels', {'Id. Cais': 'inline label - visible with data', 'Id. Berco': 'inline label - visible with data', 'C. Const.': 'inline label - visible with data', 'Calado': 'inline label - visible with data', 'Per. Carga': 'inline label - visible with data', 'Comp.': 'inline label - visible with data', 'Profund.': 'inline label - visible with data', });
lyr_AcostagemCurtoPrazo_39.set('fieldLabels', {'Id. Cais': 'inline label - visible with data', 'Id. Berco': 'inline label - visible with data', 'C_Const.': 'inline label - visible with data', 'Calado': 'inline label - visible with data', 'Per. Carga': 'inline label - visible with data', 'Comp.': 'inline label - visible with data', 'Profund.': 'inline label - visible with data', });
lyr_AcostagemSituaoAtual_40.set('fieldLabels', {'Id. Cais': 'inline label - visible with data', 'Id. Berco': 'inline label - visible with data', 'C. Const.': 'inline label - visible with data', 'Calado': 'inline label - visible with data', 'Per. Carga': 'inline label - visible with data', 'Comp.': 'inline label - visible with data', 'Profund.': 'inline label - visible with data', });
lyr_ArmazenagemLongoPrazo_41.set('fieldLabels', {'T.Instal.': 'inline label - visible with data', 'Capacidade': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Volume': 'inline label - visible with data', });
lyr_ArmazenagemMdioPrazo_42.set('fieldLabels', {'T.Instal.': 'inline label - visible with data', 'Capacidade': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Volume': 'inline label - visible with data', });
lyr_ArmazenagemCurtoPrazo_43.set('fieldLabels', {'T.Instal.': 'inline label - visible with data', 'Capacidade': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Volume': 'inline label - visible with data', });
lyr_ArmazenagemSituaoAtual_44.set('fieldLabels', {'T.Instal.': 'inline label - visible with data', 'Capacidade': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Volume': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_45.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_46.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_47.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_48.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasArrendadasLongoPrazo_49.set('fieldLabels', {'Perfil': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Arrend': 'inline label - visible with data', 'N_Cont': 'inline label - visible with data', 'D_Inicio': 'inline label - visible with data', 'D_Term': 'inline label - visible with data', 'P_Prorrog': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasArrendadasMdioPrazo_50.set('fieldLabels', {'Perfil': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Arrend': 'inline label - visible with data', 'N_Cont': 'inline label - visible with data', 'D_Inicio': 'inline label - visible with data', 'D_Term': 'inline label - visible with data', 'P_Prorrog': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_51.set('fieldLabels', {'Área': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'Arrend': 'inline label - visible with data', 'N_Cont': 'inline label - visible with data', 'D_Inicio': 'inline label - visible with data', 'D_Term': 'inline label - visible with data', 'P_Prorrog': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasArrendadasSituaoAtual_52.set('fieldLabels', {'Área': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'Arrend': 'inline label - visible with data', 'N_Cont': 'inline label - visible with data', 'D_Inicio': 'inline label - visible with data', 'D_Term': 'inline label - visible with data', 'P_Prorrog': 'inline label - visible with data', });
lyr_ArmazmparaInspeo_53.set('fieldLabels', {'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', 'Área (m²': 'inline label - visible with data', 'Nome': 'inline label - visible with data', });
lyr_CargaGeraleGranelSlido_54.set('fieldLabels', {'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', 'Área (m²': 'inline label - visible with data', 'Nome': 'inline label - visible with data', });
lyr_CargaGeraleProdutosSiderrgicos_55.set('fieldLabels', {'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', 'Área (m²': 'inline label - visible with data', 'Nome': 'inline label - visible with data', });
lyr_ProdutosSiderrgicos_56.set('fieldLabels', {'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', 'Área (m²': 'inline label - visible with data', 'Nome': 'inline label - visible with data', });
lyr_CarvoMineralCoqueePetcoke_57.set('fieldLabels', {'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', 'Área (m²': 'inline label - visible with data', 'Nome': 'inline label - visible with data', });
lyr_CarvoeMinriodeFerro_58.set('fieldLabels', {'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', 'Área (m²': 'inline label - visible with data', 'Nome': 'inline label - visible with data', });
lyr_MinriodeFerro_59.set('fieldLabels', {'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', 'Área (m²': 'inline label - visible with data', 'Nome': 'inline label - visible with data', });
lyr_ContinereseCargaGeral_60.set('fieldLabels', {'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', 'Área (m²': 'inline label - visible with data', 'Nome': 'inline label - visible with data', });
lyr_ContineresVazios_61.set('fieldLabels', {'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', 'Área (m²': 'inline label - visible with data', 'Nome': 'inline label - visible with data', });
lyr_Contineres_62.set('fieldLabels', {'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', 'Área (m²': 'inline label - visible with data', 'Nome': 'inline label - visible with data', });
lyr_GranisSlidosdeOrigemnoVegetal_63.set('fieldLabels', {'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', 'Área (m²': 'inline label - visible with data', 'Nome': 'inline label - visible with data', });
lyr_GranisSlidosMinerais_64.set('fieldLabels', {'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', 'Área (m²': 'inline label - visible with data', 'Nome': 'inline label - visible with data', });
lyr_GranelSlido_65.set('fieldLabels', {'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', 'Área (m²': 'inline label - visible with data', 'Nome': 'inline label - visible with data', });
lyr_GranelLquido_66.set('fieldLabels', {'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', 'Área (m²': 'inline label - visible with data', 'Nome': 'inline label - visible with data', });
lyr_Multiuso_67.set('fieldLabels', {'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', 'Área (m²': 'inline label - visible with data', 'Nome': 'inline label - visible with data', });
lyr_Caf_68.set('fieldLabels', {'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', 'Área (m²': 'inline label - visible with data', 'Nome': 'inline label - visible with data', });
lyr_ArmazmparaInspeo_69.set('fieldLabels', {'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', 'Área (m²': 'inline label - visible with data', 'Nome': 'inline label - visible with data', });
lyr_CargaGeraleGranelSlido_70.set('fieldLabels', {'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', 'Área (m²': 'inline label - visible with data', 'Nome': 'inline label - visible with data', });
lyr_CargaGeraleProdutosSiderrgicos_71.set('fieldLabels', {'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', 'Área (m²': 'inline label - visible with data', 'Nome': 'inline label - visible with data', });
lyr_ProdutosSiderrgicos_72.set('fieldLabels', {'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', 'Área (m²': 'inline label - visible with data', 'Nome': 'inline label - visible with data', });
lyr_CarvoMineralCoqueePetcoke_73.set('fieldLabels', {'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', 'Área (m²': 'inline label - visible with data', 'Nome': 'inline label - visible with data', });
lyr_CarvoeMinriodeFerro_74.set('fieldLabels', {'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', 'Área (m²': 'inline label - visible with data', 'Nome': 'inline label - visible with data', });
lyr_MinriodeFerro_75.set('fieldLabels', {'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', 'Área (m²': 'inline label - visible with data', 'Nome': 'inline label - visible with data', });
lyr_ContinereseCargaGeral_76.set('fieldLabels', {'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', 'Área (m²': 'inline label - visible with data', 'Nome': 'inline label - visible with data', });
lyr_ContineresVazios_77.set('fieldLabels', {'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', 'Área (m²': 'inline label - visible with data', 'Nome': 'inline label - visible with data', });
lyr_Contineres_78.set('fieldLabels', {'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', 'Área (m²': 'inline label - visible with data', 'Nome': 'inline label - visible with data', });
lyr_GranisSlidosdeOrigemnoVegetal_79.set('fieldLabels', {'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', 'Área (m²': 'inline label - visible with data', 'Nome': 'inline label - visible with data', });
lyr_GranisSlidosMinerais_80.set('fieldLabels', {'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', 'Área (m²': 'inline label - visible with data', 'Nome': 'inline label - visible with data', });
lyr_GranelSlido_81.set('fieldLabels', {'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', 'Área (m²': 'inline label - visible with data', 'Nome': 'inline label - visible with data', });
lyr_GranelLquido_82.set('fieldLabels', {'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', 'Área (m²': 'inline label - visible with data', 'Nome': 'inline label - visible with data', });
lyr_Multiuso_83.set('fieldLabels', {'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', 'Área (m²': 'inline label - visible with data', 'Nome': 'inline label - visible with data', });
lyr_Caf_84.set('fieldLabels', {'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', 'Área (m²': 'inline label - visible with data', 'Nome': 'inline label - visible with data', });
lyr_ArmazmparaInspeo_85.set('fieldLabels', {'Área (m²': 'inline label - visible with data', 'Nome': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', });
lyr_ArmazmdeCaf_86.set('fieldLabels', {'Área (m²': 'inline label - visible with data', 'Nome': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', });
lyr_CargaGeraleGranelSlido_87.set('fieldLabels', {'Área (m²': 'inline label - visible with data', 'Nome': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', });
lyr_CargaGeraleProdutosSiderrgicos_88.set('fieldLabels', {'Área (m²': 'inline label - visible with data', 'Nome': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', });
lyr_ProdutosSiderrgicos_89.set('fieldLabels', {'Área (m²': 'inline label - visible with data', 'Nome': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', });
lyr_CarvoMineralCoqueePetcoke_90.set('fieldLabels', {'Área (m²': 'inline label - visible with data', 'Nome': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', });
lyr_CarvoeMinriodeFerro_91.set('fieldLabels', {'Área (m²': 'inline label - visible with data', 'Nome': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', });
lyr_MinriodeFerro_92.set('fieldLabels', {'Área (m²': 'inline label - visible with data', 'Nome': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', });
lyr_ContinereseCargaGeral_93.set('fieldLabels', {'Área (m²': 'inline label - visible with data', 'Nome': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', });
lyr_ContineresVazios_94.set('fieldLabels', {'Área (m²': 'inline label - visible with data', 'Nome': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', });
lyr_Contineres_95.set('fieldLabels', {'Área (m²': 'inline label - visible with data', 'Nome': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', });
lyr_GranisSlidosdeOrigemnoVegetal_96.set('fieldLabels', {'Área (m²': 'inline label - visible with data', 'Nome': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', });
lyr_GranisSlidosMinerais_97.set('fieldLabels', {'Área (m²': 'inline label - visible with data', 'Nome': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', });
lyr_GranelSlido_98.set('fieldLabels', {'Área (m²': 'inline label - visible with data', 'Nome': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', });
lyr_Multiuso_99.set('fieldLabels', {'Área (m²': 'inline label - visible with data', 'Nome': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', });
lyr_CargaGeraleProdutosSiderrgicos_100.set('fieldLabels', {'Área (m²': 'inline label - visible with data', 'Nome': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', });
lyr_ProdutosSiderrgicos_101.set('fieldLabels', {'Área': 'inline label - visible with data', 'Nome': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'T_Instal': 'inline label - visible with data', });
lyr_CarvoMineralCoqueePetcoke_102.set('fieldLabels', {'Área (m²': 'inline label - visible with data', 'Nome': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', });
lyr_CarvoeMinriodeFerro_103.set('fieldLabels', {'Área (m²': 'inline label - visible with data', 'Nome': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', });
lyr_MinriodeFerro_104.set('fieldLabels', {'Área (m²': 'inline label - visible with data', 'Nome': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', });
lyr_ContinereseCargaGeral_105.set('fieldLabels', {'Área (m²': 'inline label - visible with data', 'Nome': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', });
lyr_ContineresVazios_106.set('fieldLabels', {'Área (m²': 'inline label - visible with data', 'Nome': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', });
lyr_Contineres_107.set('fieldLabels', {'Área (m²': 'inline label - visible with data', 'Nome': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', });
lyr_GranisSlidosdeOrigemnoVegetal_108.set('fieldLabels', {'Área (m²': 'inline label - visible with data', 'Nome': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', });
lyr_GranisSlidosMinerais_109.set('fieldLabels', {'Área (m²': 'inline label - visible with data', 'Nome': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', });
lyr_GranelSlido_110.set('fieldLabels', {'Área (m²': 'inline label - visible with data', 'Nome': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', });
lyr_Armazenagem_111.set('fieldLabels', {'Área (m²': 'inline label - visible with data', 'Nome': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', });
lyr_Multiuso_112.set('fieldLabels', {'Área (m²': 'inline label - visible with data', 'Nome': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', });
lyr_Caf_113.set('fieldLabels', {'Área (m²': 'inline label - visible with data', 'Nome': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasLongoPrazo_114.set('fieldLabels', {'Perfil': 'inline label - visible with data', 'T_Instal': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Nome': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasMdioPrazo_115.set('fieldLabels', {'Perfil': 'inline label - visible with data', 'T_Instal': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Nome': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasCurtoPrazo_116.set('fieldLabels', {'Área': 'inline label - visible with data', 'Nome': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'T_Instal': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasSituaoAtual_117.set('fieldLabels', {'Área': 'inline label - visible with data', 'Nome': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'T_Instal': 'inline label - visible with data', });
lyr_PoligonaldareadoPortoOrganizadodeItagua_118.set('fieldLabels', {'Ins_Legal': 'inline label - visible with data', 'Anexo': 'inline label - visible with data', });
lyr_PoligonaldareadoPortoOrganizadodeItagua_118.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});