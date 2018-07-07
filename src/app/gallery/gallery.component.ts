import { Component, OnInit } from '@angular/core';
import { GalleryService } from '../services/gallery.service';
import {map} from 'rxjs/operators';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  pagePhotos:any;

  constructor(private galleryService:GalleryService) { }

  ngOnInit() {
  }

  onSearch(data){
    this.galleryService.search(data.motCles)
    .subscribe(data=>{
      console.log(data);
      this.pagePhotos=data;})
  }

}
