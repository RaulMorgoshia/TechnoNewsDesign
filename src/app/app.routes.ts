import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { NgModule } from '@angular/core';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },        // Default route
  { path: 'about', component: AboutComponent },  // Route for the About page
  { path: 'contact', component: ContactComponent },  // Route for the About page
  { path: '**', redirectTo: '', pathMatch: 'full' }  // Wildcard route to handle 404s
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }