import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RoutingModule } from './routing.module';
import { DetailsComponent } from './details/details.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    RoutingModule,
    SharedModule
  ],
  declarations: [
    HomeComponent,
    DetailsComponent
  ]
})
export class PagesModule { }
