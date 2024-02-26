import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniChromeComponent } from './mini-chrome.component';

describe('MiniChromeComponent', () => {
  let component: MiniChromeComponent;
  let fixture: ComponentFixture<MiniChromeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiniChromeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiniChromeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
