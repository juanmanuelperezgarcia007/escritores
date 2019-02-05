import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesescritorComponent } from './detallesescritor.component';

describe('DetallesescritorComponent', () => {
  let component: DetallesescritorComponent;
  let fixture: ComponentFixture<DetallesescritorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetallesescritorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallesescritorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
