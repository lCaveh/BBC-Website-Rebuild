import { Component, OnInit } from '@angular/core';
import { MainNews} from "../mainnews.model";
import { SideNews} from "../sidenews.model";
import { MainnewsService} from "../mainnews.service"
import { AuthenticationService } from '../authentication.service';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [MainnewsService,AuthenticationService]
})
export class AdminComponent implements OnInit {
  user;
  private isLoggedIn: Boolean;
  private userName: String;
  constructor(private mainNewsService:MainnewsService,public authService: AuthenticationService) {
    this.authService.user.subscribe(user => {
     if (user == null) {
       this.isLoggedIn = false;
     } else {
       this.isLoggedIn = true;
       this.userName = user.displayName;
     }
   });
   }

  ngOnInit() {
  }
  login() {
  this.authService.login();
}

logout() {
  this.authService.logout();
}
  submitMainForm(newMainType:string, newMainTitle:string, newMainDetail:string,newMainSource:string, newMainSourceUrl:string, newMainImageUrl:string){
    var mainNews: MainNews= new MainNews(newMainType, newMainTitle, newMainDetail,newMainSource, newMainSourceUrl, newMainImageUrl);
    this.mainNewsService.addMainNews(mainNews);
  }
  submitSideForm(newSideType:string, newSideTitle:string, newSideDate:string,newSideTime:string, newSideImageUrl:string){
    var sideNews: SideNews= new SideNews(newSideType, newSideTitle, newSideDate,newSideTime, newSideImageUrl);
    this.mainNewsService.addSideNews(sideNews);
  }
}
