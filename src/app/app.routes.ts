import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { MenuTableComponent } from './menu-table/menu-table.component';
import { ServiceComponent } from './service/service.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';

export const routes: Routes = [
    {'path':'',component:HomeComponent},
    {'path':'about',component:AboutComponent},
    {'path':'contact',component:ContactComponent},
    {'path':'menu-table',component:MenuTableComponent},
    {'path':'Service',component:ServiceComponent},
    {'path':'login',component:LoginComponent},
    {'path':'registration',component:RegistrationComponent},
    {'path':'**',component:PageNotFoundComponent}
];
