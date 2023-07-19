import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CatalogoDenunciasPage } from './catalogo-denuncias.page';

describe('CatalogoDenunciasPage', () => {
  let component: CatalogoDenunciasPage;
  let fixture: ComponentFixture<CatalogoDenunciasPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CatalogoDenunciasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
