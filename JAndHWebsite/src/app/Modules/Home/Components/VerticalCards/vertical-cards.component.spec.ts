import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerticalCardsComponent } from './vertical-cards.component';

describe('VerticalCardsComponent', () => {
  let component: VerticalCardsComponent;
  let fixture: ComponentFixture<VerticalCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerticalCardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerticalCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
