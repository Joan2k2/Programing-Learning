import { Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { PageComponent } from './views/page/page.component';
import { VideosPageComponent } from './views/videos-page/videos-page.component';
import { SearchComponent } from './views/search/search.component';
import { CreatePageComponent } from './views/create-page/create-page.component';
import { EditPageComponent } from './views/edit-page/edit-page.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';

export const routes: Routes = [

    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'search', component: SearchComponent },
    { path: 'videos-page', component: VideosPageComponent },
    { path: 'edit-page', component: EditPageComponent },
    { path: 'create-page', component: CreatePageComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'page', component: PageComponent },
    
];
