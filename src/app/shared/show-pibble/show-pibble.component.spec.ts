import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowPibbleComponent } from './show-pibble.component';

describe('ShowPibbleComponent', () => {
  let component: ShowPibbleComponent;
  let fixture: ComponentFixture<ShowPibbleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowPibbleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowPibbleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
