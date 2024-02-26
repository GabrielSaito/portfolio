import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimateEntryComponent } from './animate-entry.component';

describe('AnimateEntryComponent', () => {
  let component: AnimateEntryComponent;
  let fixture: ComponentFixture<AnimateEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimateEntryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimateEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
