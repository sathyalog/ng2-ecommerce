import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http, RequestOptions } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { HeaderComponent } from './home/header.component';
import { ProfileComponent } from './home/profile.component';
import { CartPageComponent } from './home/cart-page.component';
import { ProductListComponent } from './products/product-list.component';
import { ProductDetailComponent } from './products/product-detail.component';
import { ProductDetailGuard } from './products/product-guard';
import { ProductListGuard } from './products/product-list.guard';
import { ProductFilterPipe } from './products/product-filter.pipe';
import { StarComponent } from './shared/star.component';
import { CartButtonComponent } from './shared/cart-floating.component';
import { AuthHttp, AuthConfig } from 'angular2-jwt';

export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp(new AuthConfig({}), http, options);
}

@NgModule({
  imports: [BrowserModule, FormsModule, HttpModule,
    RouterModule.forRoot([
      {path: 'products', component: ProductListComponent, canActivate: [ProductListGuard]},
      {
        path: 'product/:id', // get product id in URL of PDP page */
        component: ProductDetailComponent
      },
      {path: 'profile', component: ProfileComponent},
      {path: 'welcome', component: WelcomeComponent},
      {path: 'cart', component: CartPageComponent},
      {path: '', redirectTo: 'welcome', pathMatch: 'full'},
      {path: '**', redirectTo: 'welcome', pathMatch: 'full'}
    ])
  ],
  declarations: [AppComponent, ProductListComponent,
    ProductFilterPipe, StarComponent, WelcomeComponent,
    ProductDetailComponent, HeaderComponent, ProfileComponent,
    CartButtonComponent, CartPageComponent],
  providers: [ProductDetailGuard, ProductListGuard, {
    provide: AuthHttp,
    useFactory: authHttpServiceFactory,
    deps: [Http, RequestOptions]
  }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
/*{ path: '', redirectTo: 'welcome', pathMatch: 'full' },
 { path: '**', redirectTo: 'welcome', pathMatch: 'full' }*/
