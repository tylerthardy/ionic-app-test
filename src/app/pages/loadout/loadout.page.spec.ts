import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LoadoutPage } from './loadout.page';

describe('LoadoutPage', () => {
  let component: LoadoutPage;
  let fixture: ComponentFixture<LoadoutPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadoutPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LoadoutPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
