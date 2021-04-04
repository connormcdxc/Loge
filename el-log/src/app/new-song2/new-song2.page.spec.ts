import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewSong2Page } from './new-song2.page';

describe('NewSong2Page', () => {
  let component: NewSong2Page;
  let fixture: ComponentFixture<NewSong2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewSong2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewSong2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
