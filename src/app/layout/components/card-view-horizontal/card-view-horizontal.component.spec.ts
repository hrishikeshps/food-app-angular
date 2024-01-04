import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardViewHorizontalComponent } from './card-view-horizontal.component';

describe('CardViewHorizontalComponent', () => {
  let component: CardViewHorizontalComponent;
  let fixture: ComponentFixture<CardViewHorizontalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardViewHorizontalComponent]
    });
    fixture = TestBed.createComponent(CardViewHorizontalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
