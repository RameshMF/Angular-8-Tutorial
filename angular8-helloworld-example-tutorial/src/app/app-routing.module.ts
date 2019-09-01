import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { NgforComponent } from './ngfor/ngfor.component';
import { NgifComponent } from './ngif/ngif.component';
import { NgSwitchComponent } from './ng-switch/ng-switch.component';

const routes: Routes = [
  {path: '', component: HelloWorldComponent},
  {path: 'hello-world', component: HelloWorldComponent},
  {path: 'ng-for', component: NgforComponent},
  {path: 'ng-if', component: NgifComponent},
  {path: 'ng-switch', component: NgSwitchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }