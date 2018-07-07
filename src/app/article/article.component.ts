import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  articles=[];
  article={nom:'',prix:'',date:null};

  constructor(private articleService:ArticleService) {
    this.articles=this.articleService.getAllArticle();
   }

  ngOnInit() {


  }

  onAddArtcile(){
    this.article.date=new Date();
    this.articleService.addArticle(this.article);
    this.articles=this.articleService.getAllArticle();
    this.article={nom:'',prix:'',date:null};
    
  }

}
