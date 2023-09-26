import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapRoutingModule } from './map-routing.module';
import { MapComponent } from './map/info.component';
import { MapService } from './map.service'; 
 

@NgModule({
  declarations: [
    MapComponent
  ],
  imports: [
    CommonModule,
    MapRoutingModule
  ], 
  providers: [ MapService ]
})
export class MapModule { }
