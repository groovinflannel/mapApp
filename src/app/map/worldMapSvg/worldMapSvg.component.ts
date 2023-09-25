import { Attribute, Component } from '@angular/core';
import { WorldMapSvgService } from './worldMapSvg.service';

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

  constructor(private worldMapSvgService: WorldMapSvgService) {}
  
  getCountryData(countryName: string) {
    this.worldMapSvgService.fetchAllCountryData().subscribe(res => {

      for (let i = 0; i < res[1].length; i++) {
        if (countryName === res[1][i]["name"]) {
          this.cName = countryName;
          this.capital = res[1][i]["capitalCity"];
          this.region = res[1][i]["region"]["value"];
          this.incomeLevel = res[1][i]["incomeLevel"]["value"];
          this.longitude = res[1][i]["longitude"];
          this.latitude = res[1][i]["latitude"];
        }
      }
      

      console.log(`Country: ${this.cName}, Capital: ${this.capital}, Region: ${this.region}, Income level: ${this.incomeLevel}, 
      Longitude: ${this.longitude}, Latitude: ${this.latitude}`);
    });
  }

  getCountryName(clickedCountry: string) {
    let countryName = clickedCountry;
    this.getCountryData(countryName);
  }
}