import { Component } from '@angular/core';
import { InfoService } from '../info.service';

@Component({
  selector: 'worldMapSvg',
  templateUrl: './world.component.svg',
  styleUrls: ['./worldMapSvg.component.css']
})
export class WorldMapSvg {

  constructor(private infoService: InfoService) {}

  countryClick(countryId: string) {
    this.infoService.getCountryDataById(countryId);
  }
  

  getCountryName(clickedCountry: string) {
    let countryName = clickedCountry;
    this.infoService.getCountryDataById(countryName);
  }
}
