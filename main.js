mapboxgl.accessToken = 'pk.eyJ1IjoiZmlsbGluZ3RoZW1vb24iLCJhIjoiY2tpaGxrbjZmMDNicTJ4bThmd3preWJvbyJ9.ca_X_SaaPktyuEBL2RzoRA';

var map = new mapboxgl.Map({
  container: 'map', // container id
  style: 'mapbox://styles/mapbox/dark-v9', // style URL
  center: [103.9515, 1.3782], // starting position [lng, lat]
  zoom: 17 // starting zoom
});

map.on('load', function () {
  // Load in new mangroves
  map.addSource('new_mgvs', {
    'type': 'geojson',
    'data': 'https://fillingthemoon.github.io/mangroves_webmap/geojsons/new_mgvs.json'
  });
  map.addLayer({
    'id': 'new_mgvs',
    'type': 'fill',
    'source': 'new_mgvs',
    'layout': {},
    'paint': {
      'fill-color': '#ed5826',
      'fill-opacity': 0.3
    }
  });

  // Load in new mangroves
  map.addSource('old_mgvs', {
    'type': 'geojson',
    'data': 'https://fillingthemoon.github.io/mangroves_webmap/geojsons/old_mgvs.json'
  });
  map.addLayer({
    'id': 'old_mgvs',
    'type': 'fill',
    'source': 'old_mgvs',
    'layout': {},
    'paint': {
      'fill-color': '#088',
      'fill-opacity': 0.3
    }
  });
});

// Create legend
var layers = ['New Mangroves', 'Old Mangroves']
var colors = ['#ED5826', '#088']

for (i = 0; i < layers.length; i++) {
  var layer = layers[i];
  var color = colors[i];
  var item = document.createElement('div');
  var key = document.createElement('span');
  key.className = 'legend-key';
  key.style.backgroundColor = color;

  var value = document.createElement('span');
  value.innerHTML = layer;
  item.appendChild(key);
  item.appendChild(value);
  legend.appendChild(item);
}


