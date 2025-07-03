import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Serviciosw } from './serviciosw';

describe('Serviciosw', () => {
  let component: Serviciosw;
  let fixture: ComponentFixture<Serviciosw>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Serviciosw]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Serviciosw);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
