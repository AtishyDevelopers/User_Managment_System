import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { environment } from 'src/environments/environment';
import * as L from 'leaflet';
import "leaflet/dist/images/marker-shadow.png";

@Component({
  selector: 'app-register-employee',
  templateUrl: './register-employee.component.html',
  styleUrls: ['./register-employee.component.scss']
})
export class RegisterEmployeeComponent implements OnInit, AfterViewInit {

  baseUrl = environment.baseUrl;
  registerEmployeeHeaderName: string = "Register Employee";

  public lat = 23.234442;
  public lng = 77.435387;
  currentLat: any;
  currentLng: any;
  public zoom = 17;
  public center: number | undefined;
  //shownHistory$ = new Subject<LocationPacket[]>();
  map: L.Map | any;

  constructor(private api: ApiService) { 
    // this.api.Get(this.baseUrl+'/api/Employees').subscribe(res=>{
    //   console.log(res)
    // })
    this.api.Get(this.baseUrl+'/api/Users/getall').subscribe(res=>{
      console.log(res)
    })
  }
  ngAfterViewInit(): void {
    this.initMap();
  }

  employeeForm = new FormGroup({
    employeeId: new FormControl(0), 
    employeeName: new FormControl(''),
    age: new FormControl(''),
    department: new FormControl(''),
    status: new FormControl('')
  });

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.employeeForm.value)
    let res = {
      "employeeName": this.employeeForm.get('employeeName')?.value,
      "age": parseInt(this.employeeForm.get('age')?.value),
      "department": this.employeeForm.get('department')?.value,
      "status": this.employeeForm.get('status')?.value
    }
     
    this.api.Post(this.baseUrl+'/api/Employees',JSON.stringify(res)).subscribe(data=>{    
      console.log(data)
      alert('Employee added successfully!!!')
    });
  }

  initMap(){
    // let tile1 = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    //   attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    // }) //.addTo(this.map);

    // let tile2 = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    //   attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
    // })

    let tile1 =  L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}',{
      maxZoom: 20,
      subdomains:['mt0','mt1','mt2','mt3']
    });

    let tile2 = L.tileLayer('http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}',{
      maxZoom: 20,
      subdomains:['mt0','mt1','mt2','mt3']
    });

    this.map = L.map('map',{
      zoomControl: false,
      //fullscreenControl: true,      
      layers: [tile1]        
    }).setView([28.644800, 77.216721], 11);
    //this.layerGroup = L.layerGroup().addTo(this.map)
    
    L.control.zoom({
      position:'bottomright'
    }).addTo(this.map);

    L.control.layers({
      "Map": tile1, 
      // "Google Street": tile3, 
      // "Satellite": googleSat,
      "Satellite": tile2
    }).addTo(this.map);

    // this.routeControl =  L.Routing.control({
    //   waypoints: [
    //     L.latLng(25.878994400196202, 84.7670538498232),
    //     L.latLng(23.966175871265044, 80.33160417896914),
    //     L.latLng(23.926013033021192, 77.63350329253537)
    //   ],
    //   createMarker: function (i: number, waypoint: any, n: number) {         
    //     const marker = L.marker(waypoint.latLng).bindPopup('hi')
    //     return marker;
    //   }          
    // }).addTo(this.map);

    // this.routeControl.on('waypointschanged',(e)=>{
    //   console.log(e)
    // });

      const icon = L.divIcon({
        className: 'custom-div-icon',
        html: "<div style='background-color:#c30b82;' class='marker-pin'></div><i class='material-icons'>weekend</i>",
        iconSize: [30, 42],
        iconAnchor: [15, 42]
      });

      const icon1 = L.divIcon({
        className: 'custom-div-icon',
            html: "<div style='background-color:#4838cc;' class='marker-pin'></div><i class='fa fa-camera awesome'>",
            iconSize: [30, 42],
            iconAnchor: [15, 42]
      })

      const icon2 = L.divIcon({
				className: 'custom-div-icon',
        html: "<div style='background-color:#4838cc;' class='marker-pin'></div><i class='fa fa-camera awesome'>",
        iconSize: [30, 42],
        iconAnchor: [15, 42]
    });

    const icon3 = L.divIcon({
      className: 'svg-prop',
      html: '<svg><path fill="green" stroke="black" transform="rotate(290.9 25 25)" d="M29.395,0H17.636c-3.117,0-5.643,3.467-5.643,6.584v34.804c0,3.116,2.526,5.644,5.643,5.644h11.759   c3.116,0,5.644-2.527,5.644-5.644V6.584C35.037,3.467,32.511,0,29.395,0z M34.05,14.188v11.665l-2.729,0.351v-4.806L34.05,14.188z    M32.618,10.773c-1.016,3.9-2.219,8.51-2.219,8.51H16.631l-2.222-8.51C14.41,10.773,23.293,7.755,32.618,10.773z M15.741,21.713   v4.492l-2.73-0.349V14.502L15.741,21.713z M13.011,37.938V27.579l2.73,0.343v8.196L13.011,37.938z M14.568,40.882l2.218-3.336   h13.771l2.219,3.336H14.568z M31.321,35.805v-7.872l2.729-0.355v10.048L31.321,35.805" />Sorry, your browser does not support inline SVG.</svg>',
      iconSize: [30, 42],
      iconAnchor: [15, 42],
      popupAnchor: [10, -20]
  });

//   const icon3 = L.divIcon({
//     className: 'svg-prop',
//     html: '<svg><path fill="green" transform="rotate(290.9 25 25)" d="M29.395,0H17.636c-3.117,0-5.643,3.467-5.643,6.584v34.804c0,3.116,2.526,5.644,5.643,5.644h11.759   c3.116,0,5.644-2.527,5.644-5.644V6.584C35.037,3.467,32.511,0,29.395,0z M34.05,14.188v11.665l-2.729,0.351v-4.806L34.05,14.188z    M32.618,10.773c-1.016,3.9-2.219,8.51-2.219,8.51H16.631l-2.222-8.51C14.41,10.773,23.293,7.755,32.618,10.773z M15.741,21.713   v4.492l-2.73-0.349V14.502L15.741,21.713z M13.011,37.938V27.579l2.73,0.343v8.196L13.011,37.938z M14.568,40.882l2.218-3.336   h13.771l2.219,3.336H14.568z M31.321,35.805v-7.872l2.729-0.355v10.048L31.321,35.805" />Sorry, your browser does not support inline SVG.</svg>',
//     iconSize: [20, 32],
//     iconAnchor: [10, 32],
//     popupAnchor: [10, -20]
// });
      
  
      //L.marker([53, 12], { icon: icon2 }).addTo(this.map);
      //L.marker([28.6, 77], { icon: icon3 }).addTo(this.map).bindPopup('Delhi');
      //L.marker([28.6, 77]).addTo(this.map).bindPopup('Delhi')
    //  L.marker([28.6, 77]).addTo(this.map).bindPopup('Delhi').bindTooltip('Test label',{permanent: true, direction: 'right'})
    // L.marker([34, 77]).addTo(this.map).bindPopup('Leh').openPopup();;

    var latlngs = [
      [45.51, -122.68],
      [37.77, -122.43],
      [34.04, -118.2]
  ];
  
    //L.polyline(latlngs, {color: 'red'}).addTo(this.map);

    var svgElement = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svgElement.setAttribute('xmlns', "http://www.w3.org/2000/svg");
    svgElement.setAttribute('viewBox', "0 0 200 200");
    svgElement.innerHTML = '<rect width="200" height="200"/><rect x="75" y="23" width="50" height="50" style="fill:red"/><rect x="75" y="123" width="50" height="50" style="fill:#0013ff"/>';
    var svgElementBounds = [ [ 32, -130 ], [ 13, -100 ] ];
    //L.svgOverlay(svgElement, svgElementBounds).addTo(this.map);

    this.map.on('click', (e:any) =>{
      this.mapClick(e)
    } );
    //this.map.closePopup();
  }

  mapClick(e:any){    
    //console.log(e)
    let lat = e.latlng.lat;
    let lng = e.latlng.lng;
    console.log(lat, lng)
    
    L.popup()
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(this.map);
    let mkr = L.marker([lat, lng]).addTo(this?.map).bindPopup("You clicked the map at " + e.latlng.toString())    
    mkr.bindPopup('Delhi')    
  }

}
