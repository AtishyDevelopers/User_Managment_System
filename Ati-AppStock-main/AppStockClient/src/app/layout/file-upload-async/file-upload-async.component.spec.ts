import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileUploadAsyncComponent } from './file-upload-async.component';

describe('FileUploadAsyncComponent', () => {
  let component: FileUploadAsyncComponent;
  let fixture: ComponentFixture<FileUploadAsyncComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FileUploadAsyncComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FileUploadAsyncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
