import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { ParentChildCompComponent } from './components/parent-child-comp/parent-child-comp.component';
import { PracticaComponent } from './components/practica/practica.component';
import { DificultadesComponent } from './components/dificultades/dificultades.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    DataBindingComponent,
    ParentChildCompComponent,
    PracticaComponent,
    DificultadesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
