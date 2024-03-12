import { Routes } from '@angular/router';
//Importacion de componentes Software Factory
import { WelcomeComponent } from './pages/softwareFactory/welcome/welcome.component';
import { HomeComponent } from './pages/softwareFactory/home/home.component';
import { AboutComponent } from './pages/softwareFactory/about/about.component';
import { FaqsComponent } from './pages/softwareFactory/faqs/faqs.component';
//Import routes Ecommerce
import { HomeECComponent } from "./pages/ecommerce/home/home.component";
import { SearchProductComponent } from './components/ecommerce/search-product/search-product.component';
import { AuthComponent } from './pages/ecommerce/auth/auth.component';
import { LoginComponent } from './components/ecommerce/login/login.component';
import { RegisterComponent } from './components/ecommerce/register/register.component';
import { CreateProductComponent } from './components/ecommerce/create-product/create-product.component';
import { YourProductsComponent } from './components/ecommerce/your-products/your-products.component';
import { NewProductComponent } from './components/ecommerce/new-product/new-product.component';
import { ProfileComponent } from './pages/ecommerce/profile/profile.component';
import { AccountComponent } from './components/ecommerce/account/account.component';
import { SecurityComponent } from './components/ecommerce/security/security.component';
import { CardsComponent } from './components/ecommerce/cards/cards.component';

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
{
    path: 'ecommerce/search',
    component: SearchProductComponent
},
{
    path: 'auth',
    component: AuthComponent,
    children: [
        { path: '', redirectTo: 'login', pathMatch: 'full' },
        { path: 'login', component: LoginComponent },
        { path: 'register', component: RegisterComponent }
    ]
}, 
{
    path: 'createProduct',
    component: CreateProductComponent,
    children: [
        { path: '', redirectTo: 'yourProduct', pathMatch: 'full' },
        { path: 'yourProduct', component: YourProductsComponent },
        { path: 'newProduct', component: NewProductComponent }
    ]
}, 
{
    path: 'ecommerce/profile',
    component: ProfileComponent,
    children: [
        { path: '', redirectTo: 'account', pathMatch: 'full'  },
        { path: 'account', component: AccountComponent },
        { path: 'security', component: SecurityComponent },
        { path: 'cards', component: CardsComponent}
    ]
},

];
