import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphicVisualComponent } from './graphic-visual.component';

describe('GraphicVisualComponent', () => {
  let component: GraphicVisualComponent;
  let fixture: ComponentFixture<GraphicVisualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphicVisualComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraphicVisualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
