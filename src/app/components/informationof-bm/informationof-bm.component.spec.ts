import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationofBMComponent } from './informationof-bm.component';

describe('InformationofBMComponent', () => {
  let component: InformationofBMComponent;
  let fixture: ComponentFixture<InformationofBMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InformationofBMComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InformationofBMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
