import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttachmentUploaderComponent } from './attachment-uploader.component';

describe('AttachmentUploaderComponent', () => {
  let component: AttachmentUploaderComponent;
  let fixture: ComponentFixture<AttachmentUploaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AttachmentUploaderComponent]
    });
    fixture = TestBed.createComponent(AttachmentUploaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
