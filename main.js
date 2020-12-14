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
      'visibility': 'visible' // make layer visible by default
    },
    'paint': {
      'fill-color': '#008888',
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
      'visibility': 'visible' // make layer visible by default
    },
    'paint': {
      'fill-color': '#ed5826',
      'fill-opacity': 0.2
    }
  });

  // load in new plots
  map.addSource('buff_n1', {
    'type': 'geojson',
    'data': 'https://fillingthemoon.github.io/mangroves_webmap/geojsons/buff_n1.json'
  });
  map.addLayer({
    'id': 'buff_n1',
    'type': 'fill',
    'source': 'buff_n1',
    'layout': {
      'visibility': 'visible' // make layer visible by default
    },
    'paint': {
      'fill-color': '#036569',
      'fill-opacity': 1
    }
  });

  map.addSource('buff_n2', {
    'type': 'geojson',
    'data': 'https://fillingthemoon.github.io/mangroves_webmap/geojsons/buff_n2.json'
  });
  map.addLayer({
    'id': 'buff_n2',
    'type': 'fill',
    'source': 'buff_n2',
    'layout': {
      'visibility': 'visible' // make layer visible by default
    },
    'paint': {
      'fill-color': '#036569',
      'fill-opacity': 1
    }
  });

  map.addSource('buff_n3', {
    'type': 'geojson',
    'data': 'https://fillingthemoon.github.io/mangroves_webmap/geojsons/buff_n3.json'
  });
  map.addLayer({
    'id': 'buff_n3',
    'type': 'fill',
    'source': 'buff_n3',
    'layout': {
      'visibility': 'visible' // make layer visible by default
    },
    'paint': {
      'fill-color': '#036569',
      'fill-opacity': 1
    }
  });

  map.addSource('buff_n4', {
    'type': 'geojson',
    'data': 'https://fillingthemoon.github.io/mangroves_webmap/geojsons/buff_n4.json'
  });
  map.addLayer({
    'id': 'buff_n4',
    'type': 'fill',
    'source': 'buff_n4',
    'layout': {
      'visibility': 'visible' // make layer visible by default
    },
    'paint': {
      'fill-color': '#036569',
      'fill-opacity': 1
    }
  });

  // Load in old plots
  map.addSource('buff_o1', {
    'type': 'geojson',
    'data': 'https://fillingthemoon.github.io/mangroves_webmap/geojsons/buff_o1.json'
  });
  map.addLayer({
    'id': 'buff_o1',
    'type': 'fill',
    'source': 'buff_o1',
   'layout': {
      'visibility': 'visible' // make layer visible by default
    },
    'paint': {
      'fill-color': '#8f470d',
      'fill-opacity': 1
    }
  });

  map.addSource('buff_o2', {
    'type': 'geojson',
    'data': 'https://fillingthemoon.github.io/mangroves_webmap/geojsons/buff_o2.json'
  });
  map.addLayer({
    'id': 'buff_o2',
    'type': 'fill',
    'source': 'buff_o2',
   'layout': {
      'visibility': 'visible' // make layer visible by default
    },
    'paint': {
      'fill-color': '#8f470d',
      'fill-opacity': 1
    }
  });

  map.addSource('buff_o3', {
    'type': 'geojson',
    'data': 'https://fillingthemoon.github.io/mangroves_webmap/geojsons/buff_o3.json'
  });
  map.addLayer({
    'id': 'buff_o3',
    'type': 'fill',
    'source': 'buff_o3',
   'layout': {
      'visibility': 'visible' // make layer visible by default
    },
    'paint': {
      'fill-color': '#8f470d',
      'fill-opacity': 1
    }
  });

  map.addSource('buff_o4', {
    'type': 'geojson',
    'data': 'https://fillingthemoon.github.io/mangroves_webmap/geojsons/buff_o4.json'
  });
  map.addLayer({
    'id': 'buff_o4',
    'type': 'fill',
    'source': 'buff_o4',
   'layout': {
      'visibility': 'visible' // make layer visible by default
    },
    'paint': {
      'fill-color': '#8f470d',
      'fill-opacity': 1
    }
  });


  // Popup for points
  map.on('click', 'buff_n1', function (e) {
    new mapboxgl.Popup()
      .setLngLat(e.lngLat)
      .setHTML("id venenatis a condimentum vitae sapien pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis")
      .addTo(map);
  });

  // Change the cursor to a pointer when the mouse is over the states layer.
  map.on('mouseenter', 'buff_n1', function () {
    map.getCanvas().style.cursor = 'pointer';
  });

  // Change it back to a pointer when it leaves.
  map.on('mouseleave', 'buff_n1', function () {
    map.getCanvas().style.cursor = '';
  });

  map.on('click', 'buff_n2', function (e) {
    new mapboxgl.Popup()
      .setLngLat(e.lngLat)
      .setHTML("id venenatis a condimentum vitae sapien pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis")
      .addTo(map);
  });

  // Change the cursor to a pointer when the mouse is over the states layer.
  map.on('mouseenter', 'buff_n2', function () {
    map.getCanvas().style.cursor = 'pointer';
  });

  // Change it back to a pointer when it leaves.
  map.on('mouseleave', 'buff_n2', function () {
    map.getCanvas().style.cursor = '';
  });

  map.on('click', 'buff_n3', function (e) {
    new mapboxgl.Popup()
      .setLngLat(e.lngLat)
      .setHTML("id venenatis a condimentum vitae sapien pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis")
      .addTo(map);
  });

  // Change the cursor to a pointer when the mouse is over the states layer.
  map.on('mouseenter', 'buff_n3', function () {
    map.getCanvas().style.cursor = 'pointer';
  });

  // Change it back to a pointer when it leaves.
  map.on('mouseleave', 'buff_n3', function () {
    map.getCanvas().style.cursor = '';
  });

  map.on('click', 'buff_n4', function (e) {
    new mapboxgl.Popup()
      .setLngLat(e.lngLat)
      .setHTML("id venenatis a condimentum vitae sapien pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis")
      .addTo(map);
  });

  // Change the cursor to a pointer when the mouse is over the states layer.
  map.on('mouseenter', 'buff_n4', function () {
    map.getCanvas().style.cursor = 'pointer';
  });

  // Change it back to a pointer when it leaves.
  map.on('mouseleave', 'buff_n4', function () {
    map.getCanvas().style.cursor = '';
  });

  map.on('click', 'buff_o1', function (e) {
    new mapboxgl.Popup()
      .setLngLat(e.lngLat)
      .setHTML("id venenatis a condimentum vitae sapien pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis")
      .addTo(map);
  });

  map.on('mouseenter', 'buff_o1', function () {
    map.getCanvas().style.cursor = 'pointer';
  });

  map.on('mouseleave', 'buff_o1', function () {
    map.getCanvas().style.cursor = '';
  });

  map.on('click', 'buff_o2', function (e) {
    new mapboxgl.Popup()
      .setLngLat(e.lngLat)
      .setHTML("id venenatis a condimentum vitae sapien pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis")
      .addTo(map);
  });

  map.on('mouseenter', 'buff_o2', function () {
    map.getCanvas().style.cursor = 'pointer';
  });

  map.on('mouseleave', 'buff_o2', function () {
    map.getCanvas().style.cursor = '';
  });

  map.on('click', 'buff_o3', function (e) {
    new mapboxgl.Popup()
      .setLngLat(e.lngLat)
      .setHTML("id venenatis a condimentum vitae sapien pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis")
      .addTo(map);
  });

  map.on('mouseenter', 'buff_o3', function () {
    map.getCanvas().style.cursor = 'pointer';
  });

  map.on('mouseleave', 'buff_o3', function () {
    map.getCanvas().style.cursor = '';
  });

  map.on('click', 'buff_o4', function (e) {
    new mapboxgl.Popup()
      .setLngLat(e.lngLat)
      .setHTML("id venenatis a condimentum vitae sapien pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis")
      .addTo(map);
  });

  map.on('mouseenter', 'buff_o4', function () {
    map.getCanvas().style.cursor = 'pointer';
  });

  map.on('mouseleave', 'buff_o4', function () {
    map.getCanvas().style.cursor = '';
  });

  map.addControl(new mapboxgl.ScaleControl({position: 'bottom-right'}));
});


// enumerate ids of the layers
var layers = ['New mangrove area', 'Plots (new mangroves)', 'Old mangrove area', 'Plots (old mangroves)'];
var colors = ['#ED5826', '#8f470d', '#088', '#036569']

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
