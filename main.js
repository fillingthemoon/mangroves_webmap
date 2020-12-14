// Create map
mapboxgl.accessToken = 'pk.eyJ1IjoiZmlsbGluZ3RoZW1vb24iLCJhIjoiY2tpaGxrbjZmMDNicTJ4bThmd3preWJvbyJ9.ca_X_SaaPktyuEBL2RzoRA';

var map = new mapboxgl.Map({
  container: 'map', // container id
  style: 'mapbox://styles/mapbox/dark-v9', // style URL
  center: [103.9515, 1.3782], // starting position [lng, lat]
  zoom: 16 // starting zoom
});


// Add GeoJSON files
map.on('load', function () {
  // Load in new mangroves
  map.addSource('new_mgvs', {
    'type': 'geojson',
    'data': 'https://fillingthemoon.github.io/mangroves_webmap/geojsons/new_mgvs.json'
  });
  map.addLayer({
    'id': 'New mangroves',
    'type': 'fill',
    'source': 'new_mgvs',
    'layout': {
      // make layer visible by default
      'visibility': 'visible'
    },
    'paint': {
      'fill-color': '#ed5826',
      'fill-opacity': 0.2
    }
  });

  // Load in new mangroves
  map.addSource('old_mgvs', {
    'type': 'geojson',
    'data': 'https://fillingthemoon.github.io/mangroves_webmap/geojsons/old_mgvs.json'
  });
  map.addLayer({
    'id': 'Old mangroves',
    'type': 'fill',
    'source': 'old_mgvs',
    'layout': {
      // make layer visible by default
      'visibility': 'visible'
    },
    'paint': {
      'fill-color': '#008888',
      'fill-opacity': 0.2
    }
  });

  // load in new plots
  map.addSource('buff_new', {
    'type': 'geojson',
    'data': 'https://fillingthemoon.github.io/mangroves_webmap/geojsons/buff_new.json'
  });
  map.addLayer({
    'id': 'Buffered new',
    'type': 'fill',
    'source': 'buff_new',
    'layout': {
      // make layer visible by default
      'visibility': 'visible'
    },
    'paint': {
      'fill-color': '#8f470d',
      'fill-opacity': 1
    }
  });

  // Load in old plots
  map.addSource('buff_old', {
    'type': 'geojson',
    'data': 'https://fillingthemoon.github.io/mangroves_webmap/geojsons/buff_old.json'
  });
  map.addLayer({
    'id': 'Buffered old',
    'type': 'fill',
    'source': 'buff_old',
   'layout': {
      // make layer visible by default
      'visibility': 'visible'
    },
    'paint': {
      'fill-color': '#036569',
      'fill-opacity': 1
    }
  });

  // Popup for points
  map.on('click', 'Buffered old', function (e) {
    new mapboxgl.Popup()
      .setLngLat(e.lngLat)
      .setHTML("id venenatis a condimentum vitae sapien pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis")
      .addTo(map);
  });

  // Change the cursor to a pointer when the mouse is over the states layer.
  map.on('mouseenter', 'Buffered old', function () {
    map.getCanvas().style.cursor = 'pointer';
  });

  // Change it back to a pointer when it leaves.
  map.on('mouseleave', 'Buffered old', function () {
    map.getCanvas().style.cursor = '';
  });

  // Popup for points
  map.on('click', 'Buffered new', function (e) {
    new mapboxgl.Popup()
      .setLngLat(e.lngLat)
      .setHTML("id venenatis a condimentum vitae sapien pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis")
      .addTo(map);
  });

  // Change the cursor to a pointer when the mouse is over the states layer.
  map.on('mouseenter', 'Buffered new', function () {
    map.getCanvas().style.cursor = 'pointer';
  });

  // Change it back to a pointer when it leaves.
  map.on('mouseleave', 'Buffered new', function () {
    map.getCanvas().style.cursor = '';
  });
});

// enumerate ids of the layers
var toggleableLayerIds = ['New mangroves', 'Buffered new', 'Old mangroves', 'Buffered old'];
var colors = ['#ED5826', '#8f470d', '#088', '#036569']

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

  var map_container_div = document.getElementById('map-container');
  var menu_div = document.getElementById('menu');
  menu_div.appendChild(link);
  map_container_div.appendChild(menu_div);
}
