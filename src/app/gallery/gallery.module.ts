import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryComponent } from "./gallery.component";
import { GalleryService } from './gallery.service';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [GalleryComponent],
  imports: [
    ReactiveFormsModule,
  	HttpClientModule,
    CommonModule
  ],
  exports: [
  	GalleryComponent
  ],
  providers: [
  	GalleryService,

  ]
})
export class GalleryModule {

}
