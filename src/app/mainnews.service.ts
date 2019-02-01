import { Injectable } from '@angular/core';
import { MainNews } from './mainnews.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class MainnewsService {
mainNews: FirebaseListObservable<any[]>;
  constructor(private database: AngularFireDatabase) {
    this.mainNews = database.list('mainnews');
  }
  getMainNews(){
  return this.mainNews;
}
}
