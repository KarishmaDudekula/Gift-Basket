import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipientcomponentComponent } from './recipientcomponent.component';

describe('RecipientcomponentComponent', () => {
  let component: RecipientcomponentComponent;
  let fixture: ComponentFixture<RecipientcomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipientcomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipientcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
