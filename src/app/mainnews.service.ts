import { Injectable } from '@angular/core';
import { MainNews } from './mainnews.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class MainnewsService {
  mainNews: FirebaseListObservable<any[]>;
  sideNews: FirebaseListObservable<any[]>;
  constructor(private database: AngularFireDatabase) {
    this.mainNews = database.list('mainnews');
    this.sideNews = database.list('sidenews');
  }
  getMainNews(){
    return this.mainNews;
  }
  getSideNews(){
    return this.sideNews;
  }
  addMainNews(newMainNews: MainNews) {
  this.mainNews.push(newMainNews);
}
}
