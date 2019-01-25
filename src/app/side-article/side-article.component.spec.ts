import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideArticleComponent } from './side-article.component';

describe('SideArticleComponent', () => {
  let component: SideArticleComponent;
  let fixture: ComponentFixture<SideArticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideArticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
