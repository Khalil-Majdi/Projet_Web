import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InscriptionComponent } from '../inscription/inscription.component';
import { vitrineRoutes } from './vitrinerouting';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatRippleModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';
import { LoginComponent } from '../login/login.component';
import {contactComponent}from'../contact/contact';
import {descriptionComponent}from'../description/description';
import {acceuilComponent}from'../acceuil/acceuil';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(vitrineRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
  ],
  declarations: [
    InscriptionComponent,
    LoginComponent,
    contactComponent,
    descriptionComponent,
    acceuilComponent,
  ]
})

export class vitrineModule {}
