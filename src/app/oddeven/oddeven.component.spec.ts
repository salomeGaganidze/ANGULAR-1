import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OddevenComponent } from './oddeven.component';

describe('OddevenComponent', () => {
  let component: OddevenComponent;
  let fixture: ComponentFixture<OddevenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OddevenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OddevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
