'use string'
//=====================================================================
//                       STANDART FUNCTION
//=====================================================================
function elemID(a){
	return document.getElementById(a);
	}
function elemCLASS(elem){
	let arrayClass = document.getElementsByClassName(elem)
	let arrayClassResult = []
	for(i=0; i<arrayClass.length; i++){
		arrayClassResult.push(arrayClass[i].id)
		}
	return arrayClassResult
	}
function funcByClass (CLASS, func){
	let newArray = elemCLASS (CLASS).slice()
	for(i=0; i<newArray.length; i++){
		elemID(newArray[i]).onclick = func
		}
	}	
function newElem(elem, cssID, cssCLASS, parent){
	let a = document.createElement(elem)
	a.id = cssID
	a.setAttribute("class", cssCLASS)
    elemID(parent).appendChild(a)
	}
function changeClass(elem, oldclass, newclass){
	document.getElementById(elem).classList.remove(oldclass)
	document.getElementById(elem).classList.add(newclass)
	}
function keepCLASS(IDelem, nameClass){
	return elemID(IDelem).classList.contains(nameClass)
	}
//=====================================================================
//                	  CREATE ELEMENT FOR FILTRATION							// Need in optimisation!
//=====================================================================
let filterElemArr = []
function createElemFilter(){
	newElem('div', 'pnlFilter', 'pnlFilterCollapse', 'pnlLeft')
	newElem('div', 'pnlFilterHead', 
								'pnlFilterHeadCollapse', 'pnlFilter')
	newElem('div', 'pnlFilterBody', 'visOff', 'pnlFilter')
	newElem('div', 'pnlFilterBodyType', 
								'pnlFilterSubBody', 'pnlFilterBody')
	newElem('div', 'type1', 'filter filterOn', 'pnlFilterBody')
	newElem('div', 'type2', 'filter filterOn', 'pnlFilterBody')
	newElem('div', 'type3', 'filter filterOn', 'pnlFilterBody')
	newElem('div', 'type4', 'filter filterOn', 'pnlFilterBody')
	newElem('div', 'type5', 'filter filterOn', 'pnlFilterBody')
	newElem('div', 'type6', 'filter filterOn', 'pnlFilterBody')
	newElem('div', 'type7', 'filter filterOn', 'pnlFilterBody')
	newElem('div', 'type8', 'filter filterOn', 'pnlFilterBody')
	newElem('div', 'type9', 'filter filterOn', 'pnlFilterBody')
	newElem('div', 'filterDiv1', 'filterDiv', 'pnlFilterBody')
	newElem('div', 'pnlFilterBodyView', 
								'pnlFilterSubBody', 'pnlFilterBody')
	newElem('div', 'view1', 'filter filterOff', 'pnlFilterBody')
	newElem('div', 'view2', 'filter filterOff', 'pnlFilterBody')
	newElem('div', 'view3', 'filter filterOff', 'pnlFilterBody')
	newElem('div', 'view4', 'filter filterOff', 'pnlFilterBody')
	newElem('div', 'view5', 'filter filterOff', 'pnlFilterBody')
	newElem('div', 'view6', 'filter filterOff', 'pnlFilterBody')
	newElem('div', 'filterDiv2', 'filterDiv', 'pnlFilterBody')
	newElem('div', 'pnlFilterBodyCategory', 
								'pnlFilterSubBody', 'pnlFilterBody')
	newElem('div', 'category1', 'filter filterOff', 'pnlFilterBody')
//---------------------------------------------------------------------
	elemID('pnlFilterHead').innerHTML = 'Фільтр'
	elemID('pnlFilterBodyType').innerHTML = 'Тип об\'єкта'
	elemID('type1').innerHTML = 'Комплекс будівель'
	elemID('type2').innerHTML = 'Могила'
	elemID('type3').innerHTML = 'Будинок'
	elemID('type4').innerHTML = 'Садиба'
	elemID('type5').innerHTML = 'Пам\'ятник'
	elemID('type6').innerHTML = 'Городище'
	elemID('type7').innerHTML = 'Могильник'
	elemID('type8').innerHTML = 'Музей–заповідник'
	elemID('type9').innerHTML = 'Музей'
	elemID('view1').innerHTML = 'Пам\'ятка історії'
	elemID('view2').innerHTML = 'Пам\'ятка монументального мистецтва'
	elemID('view3').innerHTML = 'Пам\'ятка археології'
	elemID('pnlFilterBodyView').innerHTML = 'Вид об\'єкта'
	elemID('view4').innerHTML = 'Заповідник'
	elemID('view5').innerHTML = 
							'Парк-пам\'ятка садово-паркового мистецтва'
	elemID('view6').innerHTML = 'Пам\'ятка архітектури'
	elemID('pnlFilterBodyCategory').innerHTML = 'Категорія об\'єкта'
	elemID('category1').innerHTML = 'Національного значення'
//---------------------------------------------------------------------		
	filterElemArr.push(['type1','type',elemID('type1').innerHTML])
	filterElemArr.push(['type2','type',elemID('type2').innerHTML])
	filterElemArr.push(['type3','type',elemID('type3').innerHTML])
	filterElemArr.push(['type4','type',elemID('type4').innerHTML])
	filterElemArr.push(['type5','type',elemID('type5').innerHTML])
	filterElemArr.push(['type6','type',elemID('type6').innerHTML])
	filterElemArr.push(['type7','type',elemID('type7').innerHTML])
	filterElemArr.push(['type8','type',elemID('type8').innerHTML])
	filterElemArr.push(['type9','type',elemID('type9').innerHTML])
	filterElemArr.push(['view1','view',elemID('view1').innerHTML])
	filterElemArr.push(['view2','view',elemID('view2').innerHTML])
	filterElemArr.push(['view3','view',elemID('view3').innerHTML])
	filterElemArr.push(['view4','view',elemID('view4').innerHTML])
	filterElemArr.push(['view5','view',elemID('view5').innerHTML])
	filterElemArr.push(['view6','view',elemID('view6').innerHTML])
	filterElemArr.push(['category1','category',
										elemID('category1').innerHTML])
	}
createElemFilter()
//=====================================================================
//                       DESIGN FUNCTION
//=====================================================================	
const avScreenH = document.documentElement.clientHeight
const avScreenW = window.screen.width	
elemID('map').style.height = (avScreenH-40) + 'px'
newElem('div', 'pnlInfo', 'pnlInfoTop visOff', 'pnlLeft')
newElem('div', 'pnlInfoHead', 'pnl', 'pnlInfo')
newElem('div', 'pnlInfoBody', 'pnl', 'pnlInfo')
elemID('pnlInfoHead').innerHTML = 'Інформація'
elemID('pnlFilterHead').innerHTML = 'Фільтр'
//=====================================================================
//                	 	 LEAFLET CUSTOMS
//=====================================================================
const wmsSat = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/' +
											'World_Imagery/MapServer/tile/{z}/{y}/{x}',
											{
												maxZoom: 18,
												attribution:'Tiles &copy;<a href="http://www.esri.com/" target="_blank"> Esri</a> — Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP'
											}
    )
const wmsLabels = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/' +
	'Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}',
	{
		maxZoom: 18,
		attribution:'HERE, Garmin, &copy; <a href="http://osm.org/copyright" target="_blank">OpenStreetMap</a> contributors, and the GIS user community'
	}
)
const wmsOSM = L.tileLayer('https://c.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	    maxZoom: 18,
		attribution: '&copy; <a href="http://osm.org/copyright" target="_blank">OpenStreetMap</a> contributors'
        }
    )
const attribute = 'Created by <a href="https://www.linkedin.com/in/anton-biatov/"' +
										' target="_blank">Anton Biatov</a> & '+
										'<a href="https://vsempo.xyz/" '+
										' target="_blank">Sergey Golubev</a> | ' +
										'<a href="https://github.com/ABiatov/kharkiv-history-heritage"'+
										' target="_blank">Code on GitHub</a>'
let map = L.map('map').setView([50, 36], 10)
	map.attributionControl.addAttribution(attribute)
let leafOSM = wmsOSM.addTo(map)
let leafSat = L.layerGroup([wmsSat, wmsLabels]);

var baseMaps = {
    "OpenStreetMap": leafOSM,
    "Imagery with Labels": leafSat
	}
let controlLeaf = L.control.layers(baseMaps,).addTo(map);
map.zoomControl.setPosition('bottomleft')
controlLeaf.setPosition('topleft')
let selectMarker
const Icons = {
	icoReserveOff: L.icon({
					iconUrl: 'leaflet/images/icoReserveOff.png',
					shadowUrl: 'leaflet/images/marker-shadow.png',
					iconSize:     [25, 41],
					shadowSize:   [50, 64],
					iconAnchor:   [22, 41],
					shadowAnchor: [25, 61],
					}),
	icoReserveOn: L.icon({
					iconUrl: 'leaflet/images/icoReserveOn.png',
					shadowUrl: 'leaflet/images/marker-shadow.png',
					iconSize:     [25, 41],
					shadowSize:   [50, 64],
					iconAnchor:   [22, 41],
					shadowAnchor: [25, 61],
					}),	
	icoMonumentOff: L.icon({
					iconUrl: 'leaflet/images/icoMonumentOff.png',
					shadowUrl: 'leaflet/images/marker-shadow.png',
					iconSize:     [25, 41],
					shadowSize:   [50, 64],
					iconAnchor:   [22, 41],
					shadowAnchor: [25, 61],
					}),
	icoMonumentOn: L.icon({
					iconUrl: 'leaflet/images/icoMonumentOn.png',
					shadowUrl: 'leaflet/images/marker-shadow.png',
					iconSize:     [25, 41],
					shadowSize:   [50, 64],
					iconAnchor:   [22, 41],
					shadowAnchor: [25, 61],
					}),
	icoHystoryOff: L.icon({
					iconUrl: 'leaflet/images/icoHystoryOff.png',
					shadowUrl: 'leaflet/images/marker-shadow.png',
					iconSize:     [25, 41],
					shadowSize:   [50, 64],
					iconAnchor:   [22, 41],
					shadowAnchor: [25, 61],
					}),
	icoHystoryOn: L.icon({
					iconUrl: 'leaflet/images/icoHystoryOn.png',
					shadowUrl: 'leaflet/images/marker-shadow.png',
					iconSize:     [25, 41],
					shadowSize:   [50, 64],
					iconAnchor:   [22, 41],
					shadowAnchor: [25, 61],
					}),			
	icoGardenOff: L.icon({
					iconUrl: 'leaflet/images/icoGardenOff.png',
					shadowUrl: 'leaflet/images/marker-shadow.png',
					iconSize:     [25, 41],
					shadowSize:   [50, 64],
					iconAnchor:   [22, 41],
					shadowAnchor: [25, 61],
					}),				
	icoGardenOn: L.icon({
					iconUrl: 'leaflet/images/icoGardenOn.png',
					shadowUrl: 'leaflet/images/marker-shadow.png',
					iconSize:     [25, 41],
					shadowSize:   [50, 64],
					iconAnchor:   [22, 41],
					shadowAnchor: [25, 61],
					}),		
	icoArchitectureOff: L.icon({
					iconUrl: 'leaflet/images/icoArchitectureOff.png',
					shadowUrl: 'leaflet/images/marker-shadow.png',
					iconSize:     [25, 41],
					shadowSize:   [50, 64],
					iconAnchor:   [22, 41],
					shadowAnchor: [25, 61],
					}),
	icoArchitectureOn: L.icon({
					iconUrl: 'leaflet/images/icoArchitectureOn.png',
					shadowUrl: 'leaflet/images/marker-shadow.png',
					iconSize:     [25, 41],
					shadowSize:   [50, 64],
					iconAnchor:   [22, 41],
					shadowAnchor: [25, 61],
					}),
	icoArcheologyOff: L.icon({
					iconUrl: 'leaflet/images/icoArcheologyOff.png',
					shadowUrl: 'leaflet/images/marker-shadow.png',
					iconSize:     [25, 41],
					shadowSize:   [50, 64],
					iconAnchor:   [22, 41],
					shadowAnchor: [25, 61],
					}),
	icoArcheologyOn: L.icon({
					iconUrl: 'leaflet/images/icoArcheologyOn.png',
					shadowUrl: 'leaflet/images/marker-shadow.png',
					iconSize:     [25, 41],
					shadowSize:   [50, 64],
					iconAnchor:   [22, 41],
					shadowAnchor: [25, 61],
					}),	
	}
let Layer = {
	national: L.layerGroup(),
	archeology: L.layerGroup(),
	architecture: L.layerGroup(),
	garden: L.layerGroup(),
	hystory: L.layerGroup(),
	monument: L.layerGroup(),
	reserve: L.layerGroup(),
	complex: L.layerGroup(),
	mogila: L.layerGroup(),
	budinok: L.layerGroup(),
	sadiba: L.layerGroup(),
	pamiatnik: L.layerGroup(),
	gorodishe: L.layerGroup(),
	mogilnik: L.layerGroup(),
	zapovednik: L.layerGroup(),
	muzei: L.layerGroup(),
	}
function iconsForType (a, b){
	let tempIcon
	if(!b){
		if(a == "заповідник"){
			tempIcon = Icons.icoReserveOff
			}
		if(a == "пам'ятка історії"){
			tempIcon = Icons.icoHystoryOff
			}
		if(a == "пам'ятка монументального мистецтва"){
			tempIcon = Icons.icoMonumentOff
			}			
		if(a == "пам'ятка археології"){
			tempIcon = Icons.icoArcheologyOff
			}				
		if(a == "Парк-пам'ятка садово-паркового мистецтва"){
			tempIcon = Icons.icoGardenOff
			}			
		if(a == "Пам'ятка архітектури"){
			tempIcon = Icons.icoArchitectureOff
			}
		}else{
			if(a == "заповідник"){
				tempIcon = Icons.icoReserveOn
				}
			if(a == "пам'ятка історії"){
				tempIcon = Icons.icoHystoryOn
				}
			if(a == "пам'ятка монументального мистецтва"){
				tempIcon = Icons.icoMonumentOn
				}			
			if(a == "пам'ятка археології"){
				tempIcon = Icons.icoArcheologyOn
				}				
			if(a == "Парк-пам'ятка садово-паркового мистецтва"){
				tempIcon = Icons.icoGardenOn
				}			
			if(a == "Пам'ятка архітектури"){
				tempIcon = Icons.icoArchitectureOn
				}			
			}
	return tempIcon
	}
//=====================================================================
//              			  FILTER
//=====================================================================
function addRemoveLayer(e, l){
	if(keepCLASS(e, 'filterOn')){
		l.addTo(map)
		}else{
			map.removeLayer(l)
			}	
	}	
function checkLayerVisible(){
	addRemoveLayer('type1', Layer.complex)
	addRemoveLayer('type2', Layer.mogila)
	addRemoveLayer('type3', Layer.budinok)
	addRemoveLayer('type4', Layer.sadiba)
	addRemoveLayer('type5', Layer.pamiatnik)
	addRemoveLayer('type6', Layer.gorodishe)
	addRemoveLayer('type7', Layer.mogilnik)
	addRemoveLayer('type8', Layer.zapovednik)
	addRemoveLayer('type9', Layer.muzei)
	addRemoveLayer('view1', Layer.hystory)
	addRemoveLayer('view2', Layer.monument)
	addRemoveLayer('view3', Layer.archeology)
	addRemoveLayer('view4', Layer.reserve)
	addRemoveLayer('view5', Layer.garden)
	addRemoveLayer('view6', Layer.architecture)
	addRemoveLayer('category1', Layer.national)
	}
	checkLayerVisible()	
funcByClass ('filter', function(){
	if(keepCLASS(this.id, 'filterOn')){
			changeClass(this.id, 'filterOn', 'filterOff')
				}else{
					changeClass(this.id, 'filterOff', 'filterOn')
					}
	if(this.id == 'type1' || 
		this.id == 'type2' || 
		this.id == 'type3' || 
		this.id == 'type4' || 
		this.id == 'type5' || 
		this.id == 'type6' || 
		this.id == 'type7' || 
		this.id == 'type8' || 
		this.id == 'type9'){
			changeClass('view1', 'filterOn', 'filterOff')
			changeClass('view2', 'filterOn', 'filterOff')
			changeClass('view3', 'filterOn', 'filterOff')
			changeClass('view4', 'filterOn', 'filterOff')
			changeClass('category1', 'filterOn', 'filterOff')		
			}			
	if(this.id == 'view1' || 
		this.id == 'view2' || 
		this.id == 'view3' || 
		this.id == 'view4'){
			changeClass('type1', 'filterOn', 'filterOff')
			changeClass('type2', 'filterOn', 'filterOff')
			changeClass('type3', 'filterOn', 'filterOff')
			changeClass('type4', 'filterOn', 'filterOff')
			changeClass('type5', 'filterOn', 'filterOff')
			changeClass('type6', 'filterOn', 'filterOff')
			changeClass('type7', 'filterOn', 'filterOff')
			changeClass('type8', 'filterOn', 'filterOff')
			changeClass('type9', 'filterOn', 'filterOff')
			changeClass('category1', 'filterOn', 'filterOff')		
			}					
	if(this.id == 'category1'){
			changeClass('type1', 'filterOn', 'filterOff')
			changeClass('type2', 'filterOn', 'filterOff')
			changeClass('type3', 'filterOn', 'filterOff')
			changeClass('type4', 'filterOn', 'filterOff')
			changeClass('type5', 'filterOn', 'filterOff')
			changeClass('type6', 'filterOn', 'filterOff')
			changeClass('type7', 'filterOn', 'filterOff')
			changeClass('type8', 'filterOn', 'filterOff')
			changeClass('type9', 'filterOn', 'filterOff')
			changeClass('view1', 'filterOn', 'filterOff')
			changeClass('view2', 'filterOn', 'filterOff')
			changeClass('view3', 'filterOn', 'filterOff')
			changeClass('view4', 'filterOn', 'filterOff')		
			}			
	checkLayerVisible()
	})
//=====================================================================
//              		COLLAPSE & EXPAND FILTER-PANEL
//=====================================================================
elemID('pnlFilterHead').onclick = ()=> {
	if(elemID('pnlFilter').classList.contains('pnlFilterCollapse')){
		changeClass('pnlLeft', 'pnlLeftClose', 'pnlLeftOpen')
		changeClass('pnlFilter', 'pnlFilterCollapse', 
													'pnlFilterExpand')
		changeClass('pnlFilterHead', 'pnlFilterHeadCollapse', 
												'pnlFilterHeadExpand')
		changeClass('pnlFilterBody', 'visOff', 'visOn')
		changeClass('pnlInfo', 'pnlInfoTop', 'pnlInfoBottom')		
		}else{
			changeClass('pnlFilter', 'pnlFilterExpand', 
												'pnlFilterCollapse')
			changeClass('pnlFilterHead', 'pnlFilterHeadExpand', 
											'pnlFilterHeadCollapse')
			changeClass('pnlFilterBody', 'visOn', 'visOff')
			changeClass('pnlInfo', 'pnlInfoBottom', 'pnlInfoTop')
			if(!keepCLASS('pnlInfo', 'pnlInfoBottom')){changeClass('pnlLeft', 'pnlLeftOpen', 'pnlLeftClose')}
		//			
			}
	}
//=====================================================================
//            				 CREATE MARKERS
//=====================================================================
function createMarkerLayer(arr, text, layer, onOff){
	for (i=0; i<data.length; i++){
		if(!onOff){
			if(arr[i].view == text){
				let marker = L.marker([data[i].lat, data[i].long],
									{icon: iconsForType (arr[i].view)})
				marker.on('click', markerOnClick)										
				layer.addLayer(marker)
				}else{
					if(arr[i].type == text){
						let marker = L.marker([data[i].lat, data[i].long],
									{icon: iconsForType (arr[i].view)})
						marker.on('click', markerOnClick)										
						layer.addLayer(marker)
						}
					}	
				}
			}
	}
createMarkerLayer(data, "заповідник", Layer.national)
createMarkerLayer(data, "пам'ятка історії", Layer.national)
createMarkerLayer(data, "пам'ятка монументального мистецтва", 
														Layer.national)
createMarkerLayer(data, "пам'ятка археології", Layer.national)
createMarkerLayer(data, "Парк-пам'ятка садово-паркового мистецтва", 
														Layer.national)
createMarkerLayer(data, "Пам'ятка архітектури", Layer.national)
//---------------------------------------------------------------------
createMarkerLayer(data, "заповідник", Layer.reserve)
createMarkerLayer(data, "пам'ятка історії", Layer.hystory)	
createMarkerLayer(data, "пам'ятка монументального мистецтва", 
														Layer.monument)	
createMarkerLayer(data, "пам'ятка археології", Layer.archeology)	
createMarkerLayer(data, "Парк-пам'ятка садово-паркового мистецтва", 
														Layer.garden)		
createMarkerLayer(data, "Пам'ятка архітектури", Layer.architecture)	
//---------------------------------------------------------------------
createMarkerLayer(data, "Комплекс будівель", Layer.complex)
createMarkerLayer(data, "Могила", Layer.mogila)
createMarkerLayer(data, "Будинок", Layer.budinok)
createMarkerLayer(data, "Садиба", Layer.sadiba)
createMarkerLayer(data, "Пам'ятник", Layer.pamiatnik)
createMarkerLayer(data, "Городище", Layer.gorodishe)
createMarkerLayer(data, "Могильник", Layer.mogilnik)
createMarkerLayer(data, "музей–заповідник", Layer.zapovednik)
createMarkerLayer(data, "Музей", Layer.muzei)
//=====================================================================
//            			CLICK ON THE MARKER
//=====================================================================	
function markerOnClick(e){
	function selectedMarkers(arr, text){
		if(arr.view == text){
			selectMarker = L.marker([arr.lat, arr.long],
							{icon: iconsForType (arr.view, true)})
											.on('click', markerOnClick)								
			selectMarker.addTo(map)
			}	
		}	
		if(selectMarker){
			map.removeLayer(selectMarker)
			}
		for (i=0; i<data.length; i++){
			if (e.latlng.lat == data[i].lat && 
										e.latlng.lng == data[i].long){											
				selectedMarkers(data[i], "заповідник")									
				selectedMarkers(data[i], "пам'ятка історії")
				selectedMarkers(data[i], 
								"пам'ятка монументального мистецтва")
				selectedMarkers(data[i], "пам'ятка археології")
				selectedMarkers(data[i], 
							"Парк-пам'ятка садово-паркового мистецтва")
				selectedMarkers(data[i], "Пам'ятка архітектури")							
													
				changeClass('pnlLeft', 'pnlLeftClose', 'pnlLeftOpen')
				changeClass('pnlInfo', 'visOff', 'visOn')
				changeClass('pnlFilterBody', 'visOff', 'visOn')
				changeClass('pnlFilterHead', 'pnlFilterHeadCollapse', 
												'pnlFilterHeadExpand')
				elemID('pnlInfoBody').innerHTML = '<H3>'+ data[i].name + 
								'</H3>' + '<p>' + '<H4>' + 
								data[i].time + '</H4>' + '<p>' + 
								"Вид пам'ятки: " + 
								data[i].view + '<p>' +
								'Охоронний номер: <a href="' + 
								data[i].doclink + 
								'" target="_blank"><docnum>' + 
								data[i].num + '<p>' + '</a>' +
								'<img src=' + data[i].img + '>' + 
								data[i].info
			}
		}
	}
//=====================================================================
//            			CLICK ON THE MAP
//=====================================================================	
map.on('click', function(e){
	map.removeLayer(selectMarker)
    changeClass('pnlLeft', 'pnlLeftOpen', 'pnlLeftClose')
    changeClass('pnlInfo', 'visOn', 'visOff')
    changeClass('pnlFilter', 'pnlFilterExpand', 'pnlFilterCollapse')
    changeClass('pnlFilterBody', 'visOn', 'visOff')
    changeClass('pnlFilterHead', 'pnlFilterHeadExpand', 
											'pnlFilterHeadCollapse')
    elemID('pnlFilterHead').innerHTML = 'Фильтр'
});
