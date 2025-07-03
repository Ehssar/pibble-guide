import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OGPibbComponent } from './og-pibb.component';

describe('OGPibbComponent', () => {
  let component: OGPibbComponent;
  let fixture: ComponentFixture<OGPibbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OGPibbComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OGPibbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
