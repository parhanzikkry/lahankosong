import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminlahanComponent } from './adminlahan.component';

describe('AdminlahanComponent', () => {
  let component: AdminlahanComponent;
  let fixture: ComponentFixture<AdminlahanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminlahanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminlahanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
