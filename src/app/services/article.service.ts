import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  articles=[{
    nom:'PC',
    prix:'400',date:new Date()},
    {nom:'Imprimante',
    prix:'200',date:new Date()}];


  article={nom:'',prix:'',date:null};

  constructor() { }

    addArticle(article){
      this.articles.push(article);

    }

    getAllArticle(){
      return this.articles;
    }

}
