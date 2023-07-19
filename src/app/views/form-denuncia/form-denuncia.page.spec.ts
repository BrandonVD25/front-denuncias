import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormDenunciaPage } from './form-denuncia.page';

describe('FormDenunciaPage', () => {
  let component: FormDenunciaPage;
  let fixture: ComponentFixture<FormDenunciaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FormDenunciaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
