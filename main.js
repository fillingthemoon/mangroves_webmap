// Create map
mapboxgl.accessToken = 'pk.eyJ1IjoiZmlsbGluZ3RoZW1vb24iLCJhIjoiY2tpaGxrbjZmMDNicTJ4bThmd3preWJvbyJ9.ca_X_SaaPktyuEBL2RzoRA';

var beforeMap = new mapboxgl.Map({
  container: 'before', // container id
  style: 'mapbox://styles/mapbox/light-v10', // style URL
  center: [103.954, 1.3782], // starting position [lng, lat]
  zoom: 16 // starting zoom
});

var afterMap = new mapboxgl.Map({
  container: 'after',
  style: 'mapbox://styles/mapbox/satellite-v9',
  center: [103.954, 1.3782],
  zoom: 16
});

// A selector or reference to HTML element
var container = '#comparison-container';

var map = new mapboxgl.Compare(beforeMap, afterMap, container, {
  orientation: 'vertical' // Optional. Sets the orientation of swiper to horizontal or vertical, defaults to vertical
});

// Add GeoJSON files

baMapArr = [beforeMap];
for (baMap of baMapArr) {
  baMap.on('load', function () {
    // Load in new and old mangrove polygons
    no_mgvs_arr = ["new_mgvs", "old_mgvs"]
    for (no_mgvs of no_mgvs_arr) {
      color = no_mgvs == "new_mgvs" ? '#008888' : '#ed5826';
      baMap.addSource(no_mgvs, {
        'type': 'geojson',
        'data': 'https://sgmangroves.com/geojsons/' + no_mgvs + '.json'
      });
      baMap.addLayer({
        'id': no_mgvs,
        'type': 'fill',
        'source': no_mgvs,
        'layout': {
          'visibility': 'visible' // make layer visible by default
        },
        'paint': {
          'fill-color': color,
          'fill-opacity': 0.2
        }
      });
    }

    // Load in new and old mangrove plots
    plots = ["buff_n1", "buff_n2", "buff_n3", "buff_n4", "buff_o1", "buff_o2", "buff_o3", "buff_o4"];
    for (i in plots) {
      color = plots[i].includes("_n") ? "#036569" : "#8f470d";
      baMap.addSource(plots[i], {
        'type': 'geojson',
        'data': 'https://sgmangroves.com/geojsons/' + plots[i] + '.json'
      });
      baMap.addLayer({
        'id': plots[i],
        'type': 'fill',
        'source': plots[i],
        'layout': {
          'visibility': 'visible' // make layer visible by default
        },
        'paint': {
          'fill-color': color,
          'fill-opacity': 1
        }
      });
    }

    html_popup_txt = [
      "<b>Plot ID:</b> N1 <br><br>"
      + "<b>Mangrove species:</b> <br> - Avicennia officinalis <br> - Bruguiera cylindrica <br> - Rhizophora apiculata <br> - Rhizophora mucronata <br> - Sonneratia alba <br><br>"
      + "<b>Total AGB (Mg/ha):</b> <br> ~260 <br><br>"
      + "<b>Total Soil Carbon (Mg/ha):</b> <br> ~135",

      "<b>Plot ID:</b> N2 <br><br>"
      + "<b>Mangrove species:</b> <br> - Avicennia alba <br> - Avicennia officinalis <br> - Avicennia rumphiana <br> - Bruguiera cylindrica <br> - Rhizophora apiculata <br> - Thespesia populnea <br><br>"
      + "<b>Total AGB (Mg/ha):</b> <br> ~145 <br><br>"
      + "<b>Total Soil Carbon (Mg/ha):</b> <br> ~200",

      "<b>Plot ID:</b> N3 <br><br>"
      + "<b>Mangrove species:</b> <br> - Avicennia rumphiana <br> - Bruguiera cylindrica <br> - Xylocarpus moluccensis <br><br>"
      + "<b>Total AGB (Mg/ha):</b> <br> ~100 <br><br>"
      + "<b>Total Soil Carbon (Mg/ha):</b> <br> ~330",

      "<b>Plot ID:</b> N4 <br><br>"
      + "<b>Mangrove species:</b> <br> - Avicennia alba <br> - Avicennia officinalis <br> - Bruguiera cylindrica <br> - Rhizophora mucronata <br> - Rhizophora stylosa <br> - Sonneratia alba <br><br>"
      + "<b>Total AGB (Mg/ha):</b> <br> ~590 <br><br>"
      + "<b>Total Soil Carbon (Mg/ha):</b> <br> ~180",

      "<b>Plot ID:</b> O1 <br><br>"
      + "<b>Mangrove species:</b> <br> - Avicennia alba <br> - Bruguiera cylindrica <br> - Rhizophora mucronata <br> - Sonneratia alba <br><br>"
      + "<b>Total AGB (Mg/ha):</b> <br> ~380 <br><br>"
      + "<b>Total Soil Carbon (Mg/ha):</b> <br> ~300",

      "<b>Plot ID:</b> O2 <br><br>"
      + "<b>Mangrove species:</b> <br> - Bruguiera cylindrica <br> - Bruguiera gymnorrhiza <br><br>"
      + "<b>Total AGB (Mg/ha):</b> <br> ~170 <br><br>"
      + "<b>Total Soil Carbon (Mg/ha):</b> <br> ~790",

      "<b>Plot ID:</b> O3 <br><br>"
      + "<b>Mangrove species:</b> <br> - Avicennia alba <br> - Bruguiera cylindrica <br> - Rhizophora mucronata <br> - Rhizophora stylosa <br> - Xylocarpus moluccensis <br><br>"
      + "<b>Total AGB (Mg/ha):</b> <br> ~265 <br><br>"
      + "<b>Total Soil Carbon (Mg/ha):</b> <br> ~275",

      "<b>Plot ID:</b> O4 <br><br>"
      + "<b>Mangrove species:</b> <br> - Avicennia rumphiana <br> - Bruguiera cylindrica <br> - Rhizophora mucronata <br> - Sonneratia alba <br><br>"
      + "<b>Total AGB (Mg/ha):</b> <br> ~920 <br><br>"
      + "<b>Total Soil Carbon (Mg/ha):</b> <br> ~175",
    ];

    // Popup for points
    baMap.on('click', plots[0], function (e) {
      new mapboxgl.Popup()
        .setLngLat(e.lngLat)
        .setHTML(html_popup_txt[0])
        .addTo(baMap);
    });
    // Change the cursor to a pointer when the mouse is over the states layer.
    baMap.on('mouseenter', plots[0], function () {
      baMap.getCanvas().style.cursor = 'pointer';
    });
    // Change it back to a pointer when it leaves.
    baMap.on('mouseleave', plots[0], function () {
      baMap.getCanvas().style.cursor = '';
    });

    baMap.on('click', plots[1], function (e) {
      new mapboxgl.Popup()
        .setLngLat(e.lngLat)
        .setHTML(html_popup_txt[1])
        .addTo(baMap);
    });
    // Change the cursor to a pointer when the mouse is over the states layer.
    baMap.on('mouseenter', plots[1], function () {
      baMap.getCanvas().style.cursor = 'pointer';
    });
    // Change it back to a pointer when it leaves.
    baMap.on('mouseleave', plots[1], function () {
      baMap.getCanvas().style.cursor = '';
    });

    baMap.on('click', plots[2], function (e) {
      new mapboxgl.Popup()
        .setLngLat(e.lngLat)
        .setHTML(html_popup_txt[2])
        .addTo(baMap);
    });
    // Change the cursor to a pointer when the mouse is over the states layer.
    baMap.on('mouseenter', plots[2], function () {
      baMap.getCanvas().style.cursor = 'pointer';
    });
    // Change it back to a pointer when it leaves.
    baMap.on('mouseleave', plots[2], function () {
      baMap.getCanvas().style.cursor = '';
    });

    baMap.on('click', plots[3], function (e) {
      new mapboxgl.Popup()
        .setLngLat(e.lngLat)
        .setHTML(html_popup_txt[3])
        .addTo(baMap);
    });
    // Change the cursor to a pointer when the mouse is over the states layer.
    baMap.on('mouseenter', plots[3], function () {
      baMap.getCanvas().style.cursor = 'pointer';
    });
    // Change it back to a pointer when it leaves.
    baMap.on('mouseleave', plots[3], function () {
      baMap.getCanvas().style.cursor = '';
    });

    baMap.on('click', plots[4], function (e) {
      new mapboxgl.Popup()
        .setLngLat(e.lngLat)
        .setHTML(html_popup_txt[4])
        .addTo(baMap);
    });
    // Change the cursor to a pointer when the mouse is over the states layer.
    baMap.on('mouseenter', plots[4], function () {
      baMap.getCanvas().style.cursor = 'pointer';
    });
    // Change it back to a pointer when it leaves.
    baMap.on('mouseleave', plots[4], function () {
      baMap.getCanvas().style.cursor = '';
    });

    baMap.on('click', plots[5], function (e) {
      new mapboxgl.Popup()
        .setLngLat(e.lngLat)
        .setHTML(html_popup_txt[5])
        .addTo(baMap);
    });
    // Change the cursor to a pointer when the mouse is over the states layer.
    baMap.on('mouseenter', plots[5], function () {
      baMap.getCanvas().style.cursor = 'pointer';
    });
    // Change it back to a pointer when it leaves.
    baMap.on('mouseleave', plots[5], function () {
      baMap.getCanvas().style.cursor = '';
    });

    baMap.on('click', plots[6], function (e) {
      new mapboxgl.Popup()
        .setLngLat(e.lngLat)
        .setHTML(html_popup_txt[6])
        .addTo(baMap);
    });
    // Change the cursor to a pointer when the mouse is over the states layer.
    baMap.on('mouseenter', plots[6], function () {
      baMap.getCanvas().style.cursor = 'pointer';
    });
    // Change it back to a pointer when it leaves.
    baMap.on('mouseleave', plots[6], function () {
      baMap.getCanvas().style.cursor = '';
    });

    baMap.on('click', plots[7], function (e) {
      new mapboxgl.Popup()
        .setLngLat(e.lngLat)
        .setHTML(html_popup_txt[7])
        .addTo(baMap);
    });
    // Change the cursor to a pointer when the mouse is over the states layer.
    baMap.on('mouseenter', plots[7], function () {
      baMap.getCanvas().style.cursor = 'pointer';
    });
    // Change it back to a pointer when it leaves.
    baMap.on('mouseleave', plots[7], function () {
      baMap.getCanvas().style.cursor = '';
    });

    baMap.on('click', plots[8], function (e) {
      new mapboxgl.Popup()
        .setLngLat(e.lngLat)
        .setHTML(html_popup_txt[8])
        .addTo(baMap);
    });
    // Change the cursor to a pointer when the mouse is over the states layer.
    baMap.on('mouseenter', plots[8], function () {
      baMap.getCanvas().style.cursor = 'pointer';
    });
    // Change it back to a pointer when it leaves.
    baMap.on('mouseleave', plots[8], function () {
      baMap.getCanvas().style.cursor = '';
    });

    baMap.addControl(new mapboxgl.ScaleControl({position: 'bottom-right'}));
  });
}

// Legend
var layers = ['New mangrove area', 'Plots (new mangroves)', 'Old mangrove area', 'Plots (old mangroves)'];
var colors = ['#ed5826', '#8f470d', '#008888', '#036569']

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
