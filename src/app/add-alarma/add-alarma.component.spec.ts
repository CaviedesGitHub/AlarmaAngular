import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAlarmaComponent } from './add-alarma.component';

describe('AddAlarmaComponent', () => {
  let component: AddAlarmaComponent;
  let fixture: ComponentFixture<AddAlarmaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAlarmaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddAlarmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
