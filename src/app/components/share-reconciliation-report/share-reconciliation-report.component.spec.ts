import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareReconciliationReportComponent } from './share-reconciliation-report.component';

describe('ShareReconciliationReportComponent', () => {
  let component: ShareReconciliationReportComponent;
  let fixture: ComponentFixture<ShareReconciliationReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShareReconciliationReportComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShareReconciliationReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
