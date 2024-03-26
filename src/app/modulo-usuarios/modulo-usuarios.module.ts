import { Injectable, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { AddUsuarioComponent } from './add-usuario/add-usuario.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { DetailUsuarioComponent } from './detail-usuario/detail-usuario.component';
//import { HttpClient } from '@angular/common/http';
//import { Observable } from 'rxjs';



@NgModule({
  declarations: [
    UsuariosComponent,
    AddUsuarioComponent,
    DetailUsuarioComponent
  ],
  exports:[
    UsuariosComponent,
    AddUsuarioComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule
    /*
    Injectable,
    HttpClient,
    Observable
    */
  ]
})
export class ModuloUsuariosModule { }