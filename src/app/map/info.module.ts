import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapRoutingModule } from './info-routing.module';
import { InfoComponent } from './map/info.component';
import { InfoService } from './info.service'; 
 

@NgModule({
  declarations: [
    InfoComponent
  ],
  imports: [
    CommonModule,
    MapRoutingModule
  ], 
  providers: [ InfoService ]
})
export class MapModule { }
