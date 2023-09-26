import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { InfoComponent } from './map/map/info.component';
import { MapService } from './map/map.service';
import { WorldMapSvg } from './map/worldMapSvg/worldMapSvg.component';
import { WorldMapSvgService } from './map/worldMapSvg/worldMapSvg.service';

const routes: Routes = [
  {
    path: '',
    component: InfoComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    InfoComponent, 
    WorldMapSvg
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
  ],
  providers: [MapService, WorldMapSvgService ],
  bootstrap: [InfoComponent]
})
export class AppModule { }
