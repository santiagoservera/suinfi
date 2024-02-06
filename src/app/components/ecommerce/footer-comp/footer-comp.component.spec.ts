import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterCompComponent } from './footer-comp.component';

describe('FooterCompComponent', () => {
  let component: FooterCompComponent;
  let fixture: ComponentFixture<FooterCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterCompComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FooterCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
