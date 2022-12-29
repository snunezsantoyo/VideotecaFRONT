import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import {AboutComponent} from "./pages/about/about.component"
import { DirectoryComponent } from './pages/directory/directory.component';

const routes : Routes = [{
  path: 'home',
  component: HomeComponent
},
{
  path: 'about',
  component: AboutComponent
},
{
  path: 'contact',
  component: ContactComponent
},
{
  path: 'directory',
  component: DirectoryComponent
},
{
  path: '**',
  redirectTo: 'home'
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
