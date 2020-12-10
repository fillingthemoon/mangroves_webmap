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
    'id': 'New Mangroves',
    'type': 'fill',
    'source': 'new_mgvs',
    'layout': {
      // make layer visible by default
      'visibility': 'visible'
    },
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
    'id': 'Old Mangroves',
    'type': 'fill',
    'source': 'old_mgvs',
    'layout': {
      // make layer visible by default
      'visibility': 'visible'
    },
    'paint': {
      'fill-color': '#088',
      'fill-opacity': 0.3
    }
  });
});


// enumerate ids of the layers
var toggleableLayerIds = ['New Mangroves', 'Old Mangroves'];
var colors = ['#ED5826', '#088']

// set up the corresponding toggle button for each layer
for (var i = 0; i < toggleableLayerIds.length; i++) {
  var id = toggleableLayerIds[i];

  var link = document.createElement('a');
  link.href = '#';
  link.className = 'active';
  link.textContent = id;
  var color = colors[i];
  link.style.backgroundColor = color;

  link.onclick = function (e) {
    var clickedLayer = this.textContent;
    e.preventDefault();
    e.stopPropagation();

    var visibility = map.getLayoutProperty(clickedLayer, 'visibility');

    // toggle layer visibility by changing the layout object's visibility property
    if (visibility === 'visible') {
      map.setLayoutProperty(clickedLayer, 'visibility', 'none');
      this.className = '';
      console.log('1');
    } else {
      this.className = 'active';
      map.setLayoutProperty(clickedLayer, 'visibility', 'visible');
      console.log('2');
    }
  };

  var layers = document.getElementById('menu');
  layers.appendChild(link);
}
