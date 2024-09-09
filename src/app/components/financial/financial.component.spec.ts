import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FINANCIALComponent } from './financial.component';

describe('FINANCIALComponent', () => {
  let component: FINANCIALComponent;
  let fixture: ComponentFixture<FINANCIALComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FINANCIALComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FINANCIALComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
