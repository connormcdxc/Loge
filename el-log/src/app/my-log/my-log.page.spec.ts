import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MyLogPage } from './my-log.page';

describe('MyLogPage', () => {
  let component: MyLogPage;
  let fixture: ComponentFixture<MyLogPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyLogPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MyLogPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
