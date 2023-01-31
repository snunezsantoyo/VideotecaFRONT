import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './components/menu/menu.component';


const routes : Routes = [{
  path: 'menu',
  component: MenuComponent
},
{
  path: '**',
  redirectTo: 'menu'
}

];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot (routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
