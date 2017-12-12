import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminpublisherComponent } from './adminpublisher.component';

describe('AdminpublisherComponent', () => {
  let component: AdminpublisherComponent;
  let fixture: ComponentFixture<AdminpublisherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminpublisherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminpublisherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
