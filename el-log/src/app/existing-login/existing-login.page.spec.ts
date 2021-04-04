import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExistingLoginPage } from './existing-login.page';

describe('ExistingLoginPage', () => {
  let component: ExistingLoginPage;
  let fixture: ComponentFixture<ExistingLoginPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExistingLoginPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ExistingLoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
