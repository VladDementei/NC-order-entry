import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import ('./modules/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'wizard',
    loadChildren: () => import ('./modules/wizard/wizard.module').then(m => m.WizardModule)
  },
  {
    path: 'admin',
    loadChildren: () => import ('./modules/admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: 'checkout',
    loadChildren: () => import ('./modules/checkout/checkout.module').then(m => m.CheckoutModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
