import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceRedes } from './service-redes';

describe('ServiceRedes', () => {
  let component: ServiceRedes;
  let fixture: ComponentFixture<ServiceRedes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceRedes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceRedes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
