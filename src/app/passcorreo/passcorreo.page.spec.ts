import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PasscorreoPage } from './passcorreo.page';

describe('PasscorreoPage', () => {
  let component: PasscorreoPage;
  let fixture: ComponentFixture<PasscorreoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PasscorreoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
