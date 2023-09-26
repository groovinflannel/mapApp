import { Component } from '@angular/core';
import { WorldMapSvgService } from './worldMapSvg.service';
import { InfoService } from '../info.service';

@Component({
  selector: 'worldMapSvg',
  templateUrl: './world.component.svg',
  styleUrls: ['./worldMapSvg.component.css']
})
export class WorldMapSvg {

  cName = '';
  capital = '';
  region = '';
  incomeLevel = '';
  longitude = '';
  latitude = '';
  countryObj = {
    "name": '',
    "capital": '',
    "region": '',
    "incomeLevel": '',
    "longitude": '',
    "latitude": ''
  };

  constructor(private worldMapSvgService: WorldMapSvgService) {}
  
  getCountryDataById(countryId: string) {
    this.worldMapSvgService.fetchAllCountryData().subscribe(res => {

      for (let i = 0; i < res[1].length; i++) {
        if (countryId === res[1][i]["id"]) {
          this.cName = res[1][i]["name"];
          this.capital = res[1][i]["capitalCity"];
          this.region = res[1][i]["region"]["value"];
          this.incomeLevel = res[1][i]["incomeLevel"]["value"];
          this.longitude = res[1][i]["longitude"];
          this.latitude = res[1][i]["latitude"];

          this.countryObj.name = this.cName;
          this.countryObj.capital = this.capital;
          this.countryObj.region = this.region;
          this.countryObj.incomeLevel = this.incomeLevel;
          this.countryObj.longitude = this.longitude;
          this.countryObj.latitude = this.latitude;
        }
      }
      

      console.log(`Country: ${this.cName}, Capital: ${this.capital}, Region: ${this.region}, Income level: ${this.incomeLevel}, 
      Longitude: ${this.longitude}, Latitude: ${this.latitude}`);



      return this.countryObj;
    });

  }

  getCountryName(clickedCountry: string) {
    let countryName = clickedCountry;
    this.getCountryDataById(countryName);
  }
}
