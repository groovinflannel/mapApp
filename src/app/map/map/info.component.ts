import { Component } from '@angular/core';
import { InfoService } from '../info.service';
import { WorldMapSvgService } from '../worldMapSvg/worldMapSvg.service';

@Component({
  selector: 'app-root',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css'],
})
export class InfoComponent {

  title = 'mapApp';  

  constructor(private worldMapSvgService: WorldMapSvgService, private infoService: InfoService) {}

  countryDisplay = this.infoService.returnCountryObject();

  logDisplay() {
    console.log(this.countryDisplay);
  }

}
