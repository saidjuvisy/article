import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {
 
  page=1;
  per_page=20;

  constructor(private http:Http) { }

  search(motCles:string){
    return  this.http.get("https://pixabay.com/api/?key=9001930-815c7b6ae748af2a202a36583&q="+motCles+"&per_page="+this.per_page+"&page="+this.page)
    .pipe(map(resp=>resp.json()));
  
  }

}

