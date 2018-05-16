import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { PersonComponent } from './person/person.component';
import { AppRoutingModule } from './app-routing.module';
import { UserModule } from './user/user.module';
import { HttpModule } from '@angular/http';
import {GoogleAnalyticsService} from './analytics/angular-analytics.service';
import { LoginComponent } from './login/login.component';
import {ReactiveFormsModule, FormControl} from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import {FormsModule} from '@angular/forms';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'dashboard', component: DashboardComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    LoginComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule,
    HttpModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [GoogleAnalyticsService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(protected _googleAnalyicsService: GoogleAnalyticsService) {}
}
