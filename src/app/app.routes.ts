import { Routes } from '@angular/router';
//Importacion de componentes Software Factory
import { WelcomeComponent } from './pages/softwareFactory/welcome/welcome.component';
import { HomeComponent } from './pages/softwareFactory/home/home.component';
import { AboutComponent } from './pages/softwareFactory/about/about.component';
import { FaqsComponent } from './pages/softwareFactory/faqs/faqs.component';
//Import routes Ecommerce
import { HomeECComponent } from "./pages/ecommerce/home/home.component";

//Routes
export const routes: Routes = [
    {
        path: 'welcome',
        component: WelcomeComponent
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: '',
        component: WelcomeComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'faqs',
        component: FaqsComponent
    },
    
    { path: '',
     redirectTo: '/home', 
     pathMatch: 'full' },

    
//Routes ecommerce

{
    path: 'ecommerce',
    component: HomeECComponent
}, 
];
