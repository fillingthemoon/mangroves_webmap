mapboxgl.accessToken = 'pk.eyJ1IjoiZmlsbGluZ3RoZW1vb24iLCJhIjoiY2tpaGxrbjZmMDNicTJ4bThmd3preWJvbyJ9.ca_X_SaaPktyuEBL2RzoRA';

var map = new mapboxgl.Map({
  container: 'map', // container id
  style: 'mapbox://styles/mapbox/dark-v9', // style URL
  center: [103.9515, 1.3782], // starting position [lng, lat]
  zoom: 16 // starting zoom
});

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
      'fill-opacity': 0.3
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
      'fill-opacity': 0.3
    }
  });

  // load in new plots
  map.addSource('new_plots', {
    'type': 'geojson',
    'data': 'https://fillingthemoon.github.io/mangroves_webmap/geojsons/new_plots_rdm.json'
  });
  map.addLayer({
    'id': 'Plots for new mangroves',
    'type': 'fill',
    'source': 'new_plots',
    'layout': {
      // make layer visible by default
      'visibility': 'visible'
    },
    'paint': {
      'fill-color': '#632a18',
      'fill-opacity': 1
    }
  });

  // Load in old plots
  map.addSource('old_plots', {
    'type': 'geojson',
    'data': 'https://fillingthemoon.github.io/mangroves_webmap/geojsons/old_plots_rdm.json'
  });
  map.addLayer({
    'id': 'Plots for old mangroves',
    'type': 'fill',
    'source': 'old_plots',
    'layout': {
      // make layer visible by default
      'visibility': 'visible'
    },
    'paint': {
      'fill-color': '#013636',
      'fill-opacity': 1
    }
  });
});


// enumerate ids of the layers
var toggleableLayerIds = ['New mangroves', 'Plots for new mangroves', 'Old mangroves', 'Plots for old mangroves'];
var colors = ['#ED5826', '#632a18', '#088', '#035454']

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
