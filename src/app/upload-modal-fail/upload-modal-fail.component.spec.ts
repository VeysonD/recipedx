import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadModalFailComponent } from './upload-modal-fail.component';

describe('UploadModalComponent', () => {
  let component: UploadModalFailComponent;
  let fixture: ComponentFixture<UploadModalFailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadModalFailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadModalFailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
