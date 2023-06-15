import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { EquiposComponent } from './equipos/equipos.component';

const routes: Routes = [
  {path: 'partidos',component:ContentComponent},
  // {path: 'apuestas',component:ApuestasComponent},
  {path: 'equipos', component:EquiposComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
