import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeaComponent } from './sea.component';

describe('SeaComponent', () => {
  let component: SeaComponent;
  let fixture: ComponentFixture<SeaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeaComponent]
    });
    fixture = TestBed.createComponent(SeaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
