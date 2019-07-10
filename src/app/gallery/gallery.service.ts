import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from "../../environments/environment"; 

@Injectable({
  providedIn: 'root'
})
export class GalleryService {
 
  constructor(private httpClient: HttpClient) { }
 
  	/**
  	 * [getFlikrData description]
  	 */
	getFlikrData(q='', page = 0){
		
		return this.httpClient.get(environment.API_URL + q + "&page=" + page);
	}
}