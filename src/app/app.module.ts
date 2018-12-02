// app modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';

// firebase
import { environment } from '../environments/environment';
import * as firebase from 'firebase';

// components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BannerComponent } from './components/banner/banner.component';
import { BrandsComponent } from './components/brands/brands.component';
import { ProductsComponent } from './components/products/products.component';
import { BlogComponent } from './components/blog/blog.component';
import { FooterComponent } from './components/footer/footer.component';
import { PromoComponent } from './components/promo/promo.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { GoogleFormComponent } from './pages/google-form/google-form.component';
import { LoginComponent } from './components/login/login.component';

// services
import { FirebaseAuthService } from './services/firebase-auth.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BannerComponent,
    BrandsComponent,
    ProductsComponent,
    BlogComponent,
    FooterComponent,
    HomepageComponent,
    PromoComponent,
    PageNotFoundComponent,
    DashboardComponent,
    GoogleFormComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomepageComponent
      }, {
        path: 'home',
        component: HomepageComponent
      }, {
        path: 'form/:formID',
        component: GoogleFormComponent,
        data: {
          type: 'edit'
        }
      }, {
        path: 'dash',
        component: DashboardComponent
      }, {
        path: 'login',
        component: LoginComponent
      }, {
        path: '404',
        component: PageNotFoundComponent
      }, {
        path: '**',
        redirectTo: '/404'
      }
    ])
  ],
  providers: [
    {
      provide: APP_BASE_HREF,
      useValue: '/#'
    },
    FirebaseAuthService
  ],
  bootstrap: [AppComponent],
})

export class AppModule {
  constructor() {
    firebase.initializeApp(environment.firebaseConfigData)
  }
}
