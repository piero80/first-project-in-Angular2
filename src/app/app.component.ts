import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  countries = [
    {id:1001,name:'Italy',lat:42,lng:12},
    {id:1002,name:'USA',lat:111,lng:33},
    {id:1003,name:'Gibuti',lat:11, lng:44}
  ];

  zoom: number = 8;

  myLat:number = 45;
  myLng:number = 14;
  
  updateMap(tab){
    this.myLat = tab.lat;
    this.myLng = tab.lng;
  }
}
