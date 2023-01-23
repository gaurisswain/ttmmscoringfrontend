import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlntComponent } from './blnt.component';

describe('BlntComponent', () => {
  let component: BlntComponent;
  let fixture: ComponentFixture<BlntComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlntComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
