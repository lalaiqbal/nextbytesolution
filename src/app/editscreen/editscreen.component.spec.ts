import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditscreenComponent } from './editscreen.component';

describe('EditscreenComponent', () => {
  let component: EditscreenComponent;
  let fixture: ComponentFixture<EditscreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditscreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditscreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
