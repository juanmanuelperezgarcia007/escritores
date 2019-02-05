import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilEscritorComponent } from './perfil-escritor.component';

describe('PerfilEscritorComponent', () => {
  let component: PerfilEscritorComponent;
  let fixture: ComponentFixture<PerfilEscritorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfilEscritorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilEscritorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
