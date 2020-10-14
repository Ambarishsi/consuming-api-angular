import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConsumingApiComponent } from './consuming-api/consuming-api.component';


const routes: Routes = [
  {path: '', redirectTo: '/test', pathMatch:'full'},
  {path: 'test', component: ConsumingApiComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


