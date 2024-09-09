import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrutinizerReportComponent } from './scrutinizer-report.component';

describe('ScrutinizerReportComponent', () => {
  let component: ScrutinizerReportComponent;
  let fixture: ComponentFixture<ScrutinizerReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScrutinizerReportComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScrutinizerReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
