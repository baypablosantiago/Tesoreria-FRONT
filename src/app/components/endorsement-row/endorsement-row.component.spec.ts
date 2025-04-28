import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EndorsementRowComponent } from './endorsement-row.component';

describe('EndorsementRowComponent', () => {
  let component: EndorsementRowComponent;
  let fixture: ComponentFixture<EndorsementRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EndorsementRowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EndorsementRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
