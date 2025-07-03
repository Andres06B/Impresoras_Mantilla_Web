import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonesWc } from './botones-wc';

describe('BotonesWc', () => {
  let component: BotonesWc;
  let fixture: ComponentFixture<BotonesWc>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BotonesWc]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotonesWc);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
