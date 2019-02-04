import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  name:any;
  sub:any;
  mainNews :FirebaseListObservable<any[]>;
  sideNews :FirebaseListObservable<any[]>;
  constructor( private route:ActivatedRoute,private mainNewsService:MainnewsService ) { }
  ngOnInit() {
    this.sub =this.route. params.subscribe(params=>{
      this.name = params['name'];
      if (this.name==="home"){
        this.name='headline';
      }
    })
    this.mainNews = this.mainNewsService.getMainNews();
    this.sideNews = this.mainNewsService.getSideNews();
  }

}
