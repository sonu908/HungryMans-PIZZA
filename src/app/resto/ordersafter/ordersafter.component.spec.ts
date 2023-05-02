import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersafterComponent } from './ordersafter.component';

describe('OrdersafterComponent', () => {
  let component: OrdersafterComponent;
  let fixture: ComponentFixture<OrdersafterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdersafterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrdersafterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
