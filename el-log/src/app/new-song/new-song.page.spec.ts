import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewSongPage } from './new-song.page';

describe('NewSongPage', () => {
  let component: NewSongPage;
  let fixture: ComponentFixture<NewSongPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewSongPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewSongPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
