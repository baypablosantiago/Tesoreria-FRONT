import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolicyDeleteComponent } from './policy-delete.component';

describe('PolicyDeleteComponent', () => {
  let component: PolicyDeleteComponent;
  let fixture: ComponentFixture<PolicyDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PolicyDeleteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PolicyDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
