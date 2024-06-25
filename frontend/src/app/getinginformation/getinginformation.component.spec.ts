import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetinginformationComponent } from './getinginformation.component';

describe('GetinginformationComponent', () => {
  let component: GetinginformationComponent;
  let fixture: ComponentFixture<GetinginformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GetinginformationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetinginformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
