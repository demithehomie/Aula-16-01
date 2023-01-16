import { Component, ElementRef, ViewChild } from '@angular/core';
import { GoogleMap } from '@capacitor/google-maps';
import { environment } from 'src/environments/environment';

@Component({
  template: `
    <capacitor-google-map #map></capacitor-google-map>
    <button 
    
      (click)="createMap()" 
      style="padding: 30px; font-size: 30px; margin:30px"
      >Clique aqui para ativar o mapa</button>
  `,
  styles: [
    `
      capacitor-google-map {
        display: inline-block;
        width: fit-screen;
        height: 1080px;
        border: 10px solid #fff;
      }
    `,
  ],
})


export class HomePage {
  @ViewChild('map')
  mapRef: ElementRef<HTMLElement>;
  newMap: GoogleMap;

  async createMap() {
    this.newMap = await GoogleMap.create({
      id: 'my-cool-map',
      element: this.mapRef.nativeElement,
      apiKey: environment.apiKey  ,
      config: {
        center: {
          lat: -22.91193282949598,   //-22.91193282949598, -43.17237027589816
          lng: -43.17237027589816,
        },
        zoom: 15,
      },
    });
 
 
 

    
 
 
  }
}