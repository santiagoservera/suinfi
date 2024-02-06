import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatWspComponent } from './chat-wsp.component';

describe('ChatWspComponent', () => {
  let component: ChatWspComponent;
  let fixture: ComponentFixture<ChatWspComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChatWspComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChatWspComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
