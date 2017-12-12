import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminverifComponent } from './adminverif.component';

describe('AdminverifComponent', () => {
  let component: AdminverifComponent;
  let fixture: ComponentFixture<AdminverifComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminverifComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminverifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
