import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewspapersPublicationComponent } from './newspapers-publication.component';

describe('NewspapersPublicationComponent', () => {
  let component: NewspapersPublicationComponent;
  let fixture: ComponentFixture<NewspapersPublicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewspapersPublicationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewspapersPublicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
