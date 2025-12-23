

//=====================================================================
//                        LEAFLET CUSTOM
//=====================================================================
function drawRay (a,currcolor,curropacity,azim,lt,lng) {
  // Отрисовка луча на лефлете
  // a - длина луча
  // currcolor - цвет луча
  // curropacity - прозрачность луча
  // d - угол при вершине из которой исходит луч
    L.polyline([
                [lt, lng],
                [lt+ (Math.cos(azim*degTorad)/a),
                 lng+(Math.sin(azim*degTorad)/a)]
               ],
               {color: currcolor, opacity: curropacity}).addTo(mymap);
    }
function drawpoint (a,b,c,currcolor,e,curropacity,g) { 
  // Отрисовка точки на лефлете
  // a - широта точки
  // b - долгота точки
  // c - диаметр точки
  // d - цвет заливки
  // e - цвет обводки
  // f - прозрачность заливки
  // g - содержание всплывающей подсказки на точке
    L.circle([a, b], c, {
                         color: currcolor,
                         fillColor: e,
                         fillOpacity: curropacity,
                         }).addTo(mymap).bindPopup(g);
  }





