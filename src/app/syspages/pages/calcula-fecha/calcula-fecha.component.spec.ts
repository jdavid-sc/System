import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculaFechaComponent } from './calcula-fecha.component';

describe('CalculaFechaComponent', () => {
  let component: CalculaFechaComponent;
  let fixture: ComponentFixture<CalculaFechaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CalculaFechaComponent]
    });
    fixture = TestBed.createComponent(CalculaFechaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
