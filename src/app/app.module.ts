import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MapComponent } from './map/map/map.component';
import { MapService } from './map/map.service';
import { WorldMapSvg } from './map/worldMapSvg/worldMapSvg.component';

const routes: Routes = [
  {
    path: '',
    component: MapComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    MapComponent, 
    WorldMapSvg
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
  ],
  providers: [MapService ],
  bootstrap: [MapComponent]
})
export class AppModule { }
