import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConversionesComponent } from './conversiones.component';

describe('ConversionesComponent', () => {
  let component: ConversionesComponent;
  let fixture: ComponentFixture<ConversionesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConversionesComponent]
    });
    fixture = TestBed.createComponent(ConversionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
