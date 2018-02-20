import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { CallbackComponent } from './callback.component';
import { AuthService } from '../services/auth/auth.service';

describe('CallbackComponent', () => {
  let component: CallbackComponent;
  let fixture: ComponentFixture<CallbackComponent>;

  const authServiceStub = {
    //TODO: fill in stub
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallbackComponent ],
      imports: [ RouterTestingModule ],
      // providers: [ {provide: AuthService, useValue: authServiceStub} ],
      providers: [ AuthService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create a callback component', () => {
    expect(component).toBeTruthy();
  });

  it('should display "Loading..."', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('p').textContent).toContain('Loading ...');
  });
});
