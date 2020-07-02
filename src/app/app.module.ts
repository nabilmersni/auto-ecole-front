import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule, FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/public/home/home.component';
import { TestComponent } from './components/test/test.component';
import { HeaderComponent } from './components/public/header/header.component';
import { FooterComponent } from './components/public/footer/footer.component';
import { LoaderComponent } from './components/public/loader/loader.component';
import { LoginComponent } from './components/public/login/login.component';
import { RegisterComponent } from './components/public/register/register.component';
import { Page404Component } from './components/page404/page404.component';
import {HttpClientModule} from '@angular/common/http';
import { DashboardComponent } from './components/private/dashboard/dashboard.component';
import { SidebarComponent } from './components/private/sidebar/sidebar.component';
import { ListUsersComponent } from './components/private/gestion user/list-users/list-users.component';
import { ListMeetingUserComponent } from './components/private/list-meeting-user/list-meeting-user.component';
import { ListMeetingMoniteurComponent } from './components/private/list-meeting-moniteur/list-meeting-moniteur.component';
import { ListVehiculeComponent } from './components/private/gestion_car/list-vehicule/list-vehicule.component';
import { ListMoniteursComponent } from './components/private/gestion_monitor/list-moniteurs/list-moniteurs.component';
import { AddUserComponent } from './components/private/gestion user/add-user/add-user.component';
import { UpdateUserComponent } from './components/private/gestion user/update-user/update-user.component';
import { AddCarComponent } from './components/private/gestion_car/add-car/add-car.component';
import { UpdateCarComponent } from './components/private/gestion_car/update-car/update-car.component';
import { AddMonitorComponent } from './components/private/gestion_monitor/add-monitor/add-monitor.component';
import { UpdateMonitorComponent } from './components/private/gestion_monitor/update-monitor/update-monitor.component';
import { TopbarComponent } from './components/private/topbar/topbar.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TestComponent,
    HeaderComponent,
    FooterComponent,
    LoaderComponent,
    LoginComponent,
    RegisterComponent,
    Page404Component,
    DashboardComponent,
    SidebarComponent,
    ListUsersComponent,
    ListMeetingUserComponent,
    ListMeetingMoniteurComponent,
    ListVehiculeComponent,
    ListMoniteursComponent,
    AddUserComponent,
    UpdateUserComponent,
    AddCarComponent,
    UpdateCarComponent,
    AddMonitorComponent,
    UpdateMonitorComponent,
    TopbarComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
