import { Routes } from '@angular/router';

export const APP_ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'products',
  },
  // quando temos mais de uma rota padrão
  {
    path: 'products',
    loadChildren: () =>
      import('./products/products.routes').then(
        (route) => route.PRODUCTS_ROUTES
      ),
  },

  // usado quando apenas tem rota padrão
  {
    path: 'cart',
    loadComponent: () =>
      import('./cart/cart/cart.component').then(
        (component) => component.CartComponent
      ),
  },
];
