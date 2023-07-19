import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginDenunciaPage } from './login-denuncia.page';

describe('LoginDenunciaPage', () => {
  let component: LoginDenunciaPage;
  let fixture: ComponentFixture<LoginDenunciaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LoginDenunciaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
