import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceDiseno } from './service-diseno';

describe('ServiceDiseno', () => {
  let component: ServiceDiseno;
  let fixture: ComponentFixture<ServiceDiseno>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceDiseno]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceDiseno);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
