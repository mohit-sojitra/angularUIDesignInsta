import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyigtvComponent } from './myigtv.component';

describe('MyigtvComponent', () => {
  let component: MyigtvComponent;
  let fixture: ComponentFixture<MyigtvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyigtvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyigtvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
