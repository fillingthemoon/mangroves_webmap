mapboxgl.accessToken = 'pk.eyJ1IjoiZmlsbGluZ3RoZW1vb24iLCJhIjoiY2tpaGxrbjZmMDNicTJ4bThmd3preWJvbyJ9.ca_X_SaaPktyuEBL2RzoRA';

var map = new mapboxgl.Map({
  container: 'map', // container id
  style: 'mapbox://styles/mapbox/dark-v9', // style URL
  center: [103.9515, 1.3782], // starting position [lng, lat]
  zoom: 17 // starting zoom
});


map.on('load', function () {
  map.addSource('old_mgvs', {
    'type': 'geojson',
    'data': 
    {"type":"FeatureCollection","features":[{"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[103.95017739695905,1.3777020106402242],[103.95042297508465,1.3775213745363566],[103.9506307803335,1.3775403773019628],[103.95083386043025,1.3775118476598511],[103.95102749323769,1.3774500456339207],[103.95106999469866,1.3773692380617029],[103.95120223379952,1.3773692314840755],[103.95136752776364,1.377269404743955],[103.95155643817834,1.3772171094373713],[103.95177841257907,1.3772503711832114],[103.95185870952248,1.3774309911299327],[103.95194844625337,1.377492779045417],[103.95206651688149,1.3774927731285644],[103.95216569338312,1.377435729008323],[103.95227431835757,1.377435723555296],[103.9523923863865,1.3773834317394424],[103.95250100899655,1.3773358936554847],[103.95247266850744,1.3772645961498835],[103.95245377414108,1.3772028046929239],[103.9524537658818,1.3770364405197102],[103.95244431645848,1.3769603888010895],[103.95252932658208,1.3769461247391452],[103.95253404279532,1.3768130331630704],[103.95260961010051,1.3768558087188398],[103.95260489294657,1.3769698872463716],[103.9525434995405,1.3770364360057867],[103.95261434851867,1.3771695237775707],[103.95272298152146,1.3773311292143753],[103.95275604933958,1.3774927384565698],[103.95275605265265,1.377559284124892],[103.95276550445665,1.3776828684609719],[103.95285996522784,1.377768422410658],[103.95293081306261,1.3778777438588241],[103.95299694187351,1.3780631177343161],[103.95307723964983,1.3782579974138744],[103.95308197126137,1.3784338678664632],[103.95312448050313,1.3785099179059943],[103.95314032665813,1.378612237222942],[103.9531984604233,1.3787009794680458],[103.9530170242073,1.378771097887406],[103.95292824072486,1.3787711023769407],[103.95287892127293,1.3788654246844279],[103.95277041084454,1.3789200363739427],[103.95266189991645,1.3789647196572707],[103.95248433466259,1.3789994780134973],[103.95241528428902,1.379068980302588],[103.952311707242,1.3791434485278375],[103.95221799625358,1.3792427372576295],[103.95205029752596,1.379312244494005],[103.95185300453049,1.3793867174035828],[103.95175928958598,1.379406578902244],[103.95165077640699,1.379406584333817],[103.9514485509713,1.3794810574581335],[103.95131537961282,1.3795604913227866],[103.95117233974588,1.3795654626565415],[103.9511673980484,1.3793768232621486],[103.95114273059124,1.37926761206733],[103.9509898181051,1.3791137294447022],[103.95091582576346,1.378989628095723],[103.95078264808419,1.3789399927000725],[103.95060507963443,1.3789102163021092],[103.95051629176957,1.378820865079986],[103.95039790408055,1.378622302891313],[103.95029431438503,1.378438632567195],[103.95028444422599,1.3783294206269834],[103.95024004329004,1.3781407831717365],[103.95024497013775,1.3780266062986657],[103.95024496674927,1.377957107480683],[103.9501808434255,1.3779173970360759],[103.95019563510488,1.377803219675815],[103.95017739695905,1.3777020106402242]]]},"properties":{"id":null}}]}
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

map.on('load', function () {
  map.addSource('new_mgvs', {
    'type': 'geojson',
    'data': 
    {"type":"FeatureCollection","features":[{"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[103.95276550445665,1.3776828684609719],[103.95285996522784,1.377768422410658],[103.95293081306261,1.3778777438588241],[103.95299694187351,1.3780631177343161],[103.95307723964983,1.3782579974138744],[103.95308197126137,1.3784338678664632],[103.95312448050313,1.3785099179059943],[103.95314032665813,1.378612237222942],[103.9531984604233,1.3787009794680458],[103.9530170242073,1.378771097887406],[103.95292824072486,1.3787711023769407],[103.95287892127293,1.3788654246844279],[103.95277041084454,1.3789200363739427],[103.95266189991645,1.3789647196572707],[103.95248433466259,1.3789994780134973],[103.95241528428902,1.379068980302588],[103.95229134304668,1.379158598371266],[103.9522616299844,1.3791502581752555],[103.95219399092466,1.379110289494278],[103.95214946559898,1.37899310576903],[103.95214261234182,1.3789103866103884],[103.95214260926595,1.378848346983365],[103.95217192910555,1.3786482186190925],[103.95220566050256,1.378503904046901],[103.95225626138178,1.3783638331231909],[103.95233216553468,1.3782110274375252],[103.95241228720755,1.3780624660343104],[103.9525430143652,1.3778672126212363],[103.95260205301526,1.3777908087130581],[103.95272013262837,1.3776846903529636],[103.95277073959276,1.3776677098153765],[103.95276550445665,1.3776828684609719]]]},"properties":{"id":null}}]}
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
});