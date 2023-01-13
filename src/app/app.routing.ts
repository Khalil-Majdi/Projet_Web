import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { VitrineComponent } from './vitrine/vitrine.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';

  const routes: Routes =[
    {
      path: '',
      redirectTo: '/vitrine/acceuil',
      pathMatch: 'full',
    }, 
    {
      path: 'admin',
      component: AdminLayoutComponent,
      children: [{
        path: '',
        loadChildren: () => import('./layouts/admin-layout/admin-layout.module').then(m => m.AdminLayoutModule)
      }]
    },

    {
      path: 'vitrine',
      component: VitrineComponent,
      children: [{
        path: '',
        loadChildren: () => import('./vitrine/vitrinemodule').then(m => m.vitrineModule)
      }]
    }
  ];
/* {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full',
    }, {
      path: '',
      component: AdminLayoutComponent,
      children: [{
        path: '',
        loadChildren: () => import('./layouts/admin-layout/admin-layout.module').then(m => m.AdminLayoutModule)
      }]
    },
*/

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
       useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
