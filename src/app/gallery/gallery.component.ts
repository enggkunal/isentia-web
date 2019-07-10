import { Component, OnInit } from '@angular/core';
import { GalleryService } from "./gallery.service";
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-gallery',
  	templateUrl: './gallery.component.html',
  })

export class GalleryComponent implements OnInit {

  /**
   * [searchForm description]
   * @type {FormGroup}
   */
  searchForm: FormGroup;

	/**
	 * photos photos
	 * @type {any}
	 */
	photos: any;

	constructor(
    private GalleryService: GalleryService,
    private formBuilder: FormBuilder,  
    ) { 

  }

  ngOnInit() {
  	this.getPhotos();
    this.createShareForm();
  }

  /**
   * [createShareForm description]
   */
  createShareForm(){
    this.searchForm = this.formBuilder.group({
      q: ['', Validators.required],
    });
  }

  /**
   * [createRange description]
   * @param {[type]} number [description]
   */
  createRange(number, pages){
    var items: number[] = [];
    for(var i = number; (i <= pages && i != (number + 10)); i++){
       
       items.push(i);
    }
    return items;
  }
  /**
   * [getPhotos description]
   */
  getPhotos(page = 0){
    let q = '';

    if(this.searchForm){
      q = this.searchForm.value.q;
    }

    this.GalleryService.getFlikrData(q, page)
  		.subscribe(
  				(res) => {
  					this.photos = res["data"];
  				}
  			)
  }
}