import { Component } from '@angular/core';
import { InfoService } from '../info.service';

@Component({
  selector: 'worldMapSvg',
  templateUrl: './world.component.svg',
  styleUrls: ['./worldMapSvg.component.css']
})
export class WorldMapSvg {

  constructor(private infoService: InfoService) {}

  countryClick(countryName: string) {
    this.infoService.getCountryDataByName(countryName);
  }
  

  getCountryName(clickedCountry: string) {
    let countryName = clickedCountry;
    this.infoService.getCountryDataByName(countryName);
  }
}
