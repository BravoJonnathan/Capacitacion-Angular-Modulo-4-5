import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavigationComponent } from './components/navigation/navigation.component'; 
import { DataBindingComponent } from './components/data-binding/data-binding.component'; 
import { ParentChildCompComponent } from './components/parent-child-comp/parent-child-comp.component'; 
import { PracticaComponent } from './components/practica/practica.component'; 
import { DificultadesComponent } from './components/dificultades/dificultades.component'; 

const routes: Routes = [
  { path:'', redirectTo: '/navegacion', pathMatch: 'full' },
  { path:'navegacion', component: NavigationComponent},
  { path:'data-binding', component: DataBindingComponent},
  { path:'parentChildComponents', component: ParentChildCompComponent},
  { path:'practica', component: PracticaComponent},
  { path:'dificultades', component: DificultadesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
