import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareholdingPatternComponent } from './shareholding-pattern.component';

describe('ShareholdingPatternComponent', () => {
  let component: ShareholdingPatternComponent;
  let fixture: ComponentFixture<ShareholdingPatternComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShareholdingPatternComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShareholdingPatternComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
