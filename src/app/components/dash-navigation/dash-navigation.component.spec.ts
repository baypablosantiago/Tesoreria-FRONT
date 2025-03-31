import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashNavigationComponent } from './dash-navigation.component';

describe('DashNavigationComponent', () => {
  let component: DashNavigationComponent;
  let fixture: ComponentFixture<DashNavigationComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [DashNavigationComponent],
      imports: [
        MatButtonModule,
        MatIconModule,
        MatListModule,
        MatSidenavModule,
        MatToolbarModule,
      ]
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
