import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InaiModalPage } from './inai-modal.page';

describe('InaiModalPage', () => {
  let component: InaiModalPage;
  let fixture: ComponentFixture<InaiModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InaiModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InaiModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
