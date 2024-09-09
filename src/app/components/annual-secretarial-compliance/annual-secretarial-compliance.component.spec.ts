import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnualSecretarialComplianceComponent } from './annual-secretarial-compliance.component';

describe('AnnualSecretarialComplianceComponent', () => {
  let component: AnnualSecretarialComplianceComponent;
  let fixture: ComponentFixture<AnnualSecretarialComplianceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnnualSecretarialComplianceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AnnualSecretarialComplianceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
