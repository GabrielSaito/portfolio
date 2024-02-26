import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WindowsAudioComponent } from './windows-audio.component';

describe('WindowsAudioComponent', () => {
  let component: WindowsAudioComponent;
  let fixture: ComponentFixture<WindowsAudioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WindowsAudioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WindowsAudioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
