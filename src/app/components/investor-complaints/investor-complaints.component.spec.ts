import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestorComplaintsComponent } from './investor-complaints.component';

describe('InvestorComplaintsComponent', () => {
  let component: InvestorComplaintsComponent;
  let fixture: ComponentFixture<InvestorComplaintsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvestorComplaintsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InvestorComplaintsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
