import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PBCupsComponent } from './pb-cups.component';

describe('PBCupsComponent', () => {
  let component: PBCupsComponent;
  let fixture: ComponentFixture<PBCupsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PBCupsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PBCupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
