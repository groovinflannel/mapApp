import { Attribute, Component } from '@angular/core';
import { WorldMapSvgService } from './worldMapSvg.service';

@Component({
  selector: 'worldMapSvg',
  templateUrl: './world.component.svg',
  styleUrls: ['./worldMapSvg.component.css']
})
export class WorldMapSvg {

  country$;

  constructor(private worldMapSvgService: WorldMapSvgService, @Attribute('name') public name: string) {}
  
  getCountryData() {
    this.worldMapSvgService.fetchSpecificCountryData().subscribe(res => {
      this.country$ = res[1];
      this.name = '';

      console.log(this.country$);
    });
    return this.country$;
  }

  getCountryName(clickedCountry: string) {
    let countryName = clickedCountry;
    console.log(countryName);
  }
}