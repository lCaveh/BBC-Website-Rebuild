import { Component, OnInit } from '@angular/core';
import { MainNews } from '../mainnews.model';
import { MainnewsService} from '../mainnews.service'
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [MainnewsService]
})
export class HomeComponent implements OnInit {
  mainNews :FirebaseListObservable<any[]>;
  constructor(private mainNewsService:MainnewsService) { }
  ngOnInit() {
    this.mainNews = this.mainNewsService.getMainNews();
  }

}
