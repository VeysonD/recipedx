import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadModalSuccessComponent } from './upload-modal-success.component';

describe('UploadModalSuccessComponent', () => {
  let component: UploadModalSuccessComponent;
  let fixture: ComponentFixture<UploadModalSuccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadModalSuccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadModalSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
