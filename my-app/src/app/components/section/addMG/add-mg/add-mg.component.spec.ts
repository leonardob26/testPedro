import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMGComponent } from './add-mg.component';

describe('AddMGComponent', () => {
  let component: AddMGComponent;
  let fixture: ComponentFixture<AddMGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddMGComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
