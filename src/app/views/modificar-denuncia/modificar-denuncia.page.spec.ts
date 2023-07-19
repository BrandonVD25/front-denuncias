import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModificarDenunciaPage } from './modificar-denuncia.page';

describe('ModificarDenunciaPage', () => {
  let component: ModificarDenunciaPage;
  let fixture: ComponentFixture<ModificarDenunciaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ModificarDenunciaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
