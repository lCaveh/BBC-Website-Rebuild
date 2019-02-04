import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { MainNews } from './mainnews.model';

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
