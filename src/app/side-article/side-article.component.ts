import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-side-article',
  templateUrl: './side-article.component.html',
  styleUrls: ['./side-article.component.css']
})
export class SideArticleComponent implements OnInit {
  @Input() sideNews:any;
  constructor() { }

  ngOnInit() {
  }

}
