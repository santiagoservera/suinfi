import { Routes } from '@angular/router';
//Importacion de componentes
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { FaqsComponent } from './pages/faqs/faqs.component';


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

];
