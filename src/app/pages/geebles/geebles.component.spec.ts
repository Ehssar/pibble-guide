import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeeblesComponent } from './geebles.component';

describe('GeeblesComponent', () => {
  let component: GeeblesComponent;
  let fixture: ComponentFixture<GeeblesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeeblesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeeblesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
