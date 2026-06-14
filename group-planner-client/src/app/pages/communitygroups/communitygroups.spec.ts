import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Communitygroups } from './communitygroups.component';

describe('Communitygroups', () => {
  let component: Communitygroups;
  let fixture: ComponentFixture<Communitygroups>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Communitygroups],
    }).compileComponents();

    fixture = TestBed.createComponent(Communitygroups);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
