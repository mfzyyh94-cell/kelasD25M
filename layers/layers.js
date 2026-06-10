var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_FinalBuilding_1 = new ol.format.GeoJSON();
var features_FinalBuilding_1 = format_FinalBuilding_1.readFeatures(json_FinalBuilding_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FinalBuilding_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FinalBuilding_1.addFeatures(features_FinalBuilding_1);
var lyr_FinalBuilding_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FinalBuilding_1, 
                style: style_FinalBuilding_1,
                popuplayertitle: 'Final Building',
                interactive: true,
                title: '<img src="styles/legend/FinalBuilding_1.png" /> Final Building'
            });

lyr_OSMStandard_0.setVisible(true);lyr_FinalBuilding_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_FinalBuilding_1];
lyr_FinalBuilding_1.set('fieldAliases', {'building': 'building', 'name': 'name', 'capacity_p': 'capacity_p', 'building_l': 'building_l', 'Luas': 'Luas (m²)', });
lyr_FinalBuilding_1.set('fieldImages', {'building': 'TextEdit', 'name': 'TextEdit', 'capacity_p': 'TextEdit', 'building_l': 'TextEdit', 'Luas': 'TextEdit', });
lyr_FinalBuilding_1.set('fieldLabels', {'building': 'inline label - visible with data', 'name': 'inline label - visible with data', 'capacity_p': 'inline label - visible with data', 'building_l': 'inline label - visible with data', 'Luas': 'inline label - visible with data', });
lyr_FinalBuilding_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});