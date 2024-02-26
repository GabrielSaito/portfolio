import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanvasBoxComponentComponent } from './canvas-box-component.component';

describe('CanvasBoxComponentComponent', () => {
  let component: CanvasBoxComponentComponent;
  let fixture: ComponentFixture<CanvasBoxComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CanvasBoxComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CanvasBoxComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
