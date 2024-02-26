import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlitchEffectComponent } from './glitch-effect.component';

describe('GlitchEffectComponent', () => {
  let component: GlitchEffectComponent;
  let fixture: ComponentFixture<GlitchEffectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlitchEffectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GlitchEffectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
