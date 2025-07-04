import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceImpresion } from './service-impresion';

describe('ServiceImpresion', () => {
  let component: ServiceImpresion;
  let fixture: ComponentFixture<ServiceImpresion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceImpresion]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceImpresion);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
