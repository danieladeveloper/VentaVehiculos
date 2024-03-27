import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailVehiculoComponent } from './modulo-vehiculos/detail-vehiculo/detail-vehiculo.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { VehiculoMainPageComponent } from './modulo-vehiculos/vehiculo-main-page/vehiculo-main-page.component';
import { UsuariosComponent } from './modulo-usuarios/usuarios/usuarios.component';
import { AddVehiculoComponent } from './modulo-vehiculos/add-vehiculo/add-vehiculo.component';
import { AddUsuarioComponent } from './modulo-usuarios/add-usuario/add-usuario.component';
import { DetailUsuarioComponent } from './modulo-usuarios/detail-usuario/detail-usuario.component';
import { VerVehiculoComponent } from './modulo-vehiculos/ver-vehiculo/ver-vehiculo.component';

const routes: Routes = [

  {
    path: '',
    component: VehiculoMainPageComponent
  },
  {
    path: 'vehiculo/:id',
    component: DetailVehiculoComponent
  },
  {
    path: 'ver/:id',
    component: VerVehiculoComponent
  },
  {
    path: 'nuevo',
    component: AddVehiculoComponent
  },
  {
    path: 'usuarios',
    component: UsuariosComponent
  },
  {
    path: 'usuario/:id',
    component: DetailUsuarioComponent
  },
  {
    path: 'nuevousuario',
    component: AddUsuarioComponent
  },
  {
    path: '**',
    component: NotFoundPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
