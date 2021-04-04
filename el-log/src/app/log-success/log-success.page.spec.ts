import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LogSuccessPage } from './log-success.page';

describe('LogSuccessPage', () => {
  let component: LogSuccessPage;
  let fixture: ComponentFixture<LogSuccessPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogSuccessPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LogSuccessPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
