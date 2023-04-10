import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactUsFormNewComponent } from './contact-us-form-new.component';

describe('ContactUsFormNewComponent', () => {
  let component: ContactUsFormNewComponent;
  let fixture: ComponentFixture<ContactUsFormNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactUsFormNewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactUsFormNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
