import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaceShooterComponent } from './space-shooter.component';

describe('SpaceShooterComponent', () => {
  let component: SpaceShooterComponent;
  let fixture: ComponentFixture<SpaceShooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpaceShooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpaceShooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
