import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VehiculoMainPageComponent } from './vehiculo-main-page.component';
import { VehiculosComponent } from '../vehiculos/vehiculos.component';

describe('VehiculoMainPageComponent', () => {
  let component: VehiculoMainPageComponent;
  let fixture: ComponentFixture<VehiculoMainPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VehiculoMainPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VehiculoMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
