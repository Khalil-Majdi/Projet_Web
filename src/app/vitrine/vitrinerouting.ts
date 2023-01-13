import { Routes } from '@angular/router';

import { InscriptionComponent } from '../inscription/inscription.component';
import { LoginComponent } from '../login/login.component';
import {contactComponent}from'../contact/contact';
import {descriptionComponent}from'../description/description';
import {acceuilComponent}from'../acceuil/acceuil';
export const vitrineRoutes: Routes = [
    {
        path: '',
        redirectTo: 'acceuil',
        pathMatch: 'full',
      },
    { path: 'inscription',  component: InscriptionComponent  },
    { path: 'login',  component: LoginComponent  },
    { path: 'contact',  component: contactComponent  },
    { path: 'description',  component: descriptionComponent  },
    { path: 'acceuil',  component: acceuilComponent  },
];
