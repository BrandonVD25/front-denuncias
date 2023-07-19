import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DenunciaClientePage } from './denuncia-cliente.page';

describe('DenunciaClientePage', () => {
  let component: DenunciaClientePage;
  let fixture: ComponentFixture<DenunciaClientePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DenunciaClientePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
