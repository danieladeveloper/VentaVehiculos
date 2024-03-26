import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailVehiculoComponent } from './detail-vehiculo.component';

describe('DetailVehiculoComponent', () => {
  let component: DetailVehiculoComponent;
  let fixture: ComponentFixture<DetailVehiculoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetailVehiculoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailVehiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
