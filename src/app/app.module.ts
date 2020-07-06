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
import { ListVehiculeComponent } from './components/private/gestion_car/list-vehicule/list-vehicule.component';
import { ListMoniteursComponent } from './components/private/gestion_monitor/list-moniteurs/list-moniteurs.component';
import { AddUserComponent } from './components/private/gestion user/add-user/add-user.component';
import { UpdateUserComponent } from './components/private/gestion user/update-user/update-user.component';
import { AddCarComponent } from './components/private/gestion_car/add-car/add-car.component';
import { UpdateCarComponent } from './components/private/gestion_car/update-car/update-car.component';
import { AddMonitorComponent } from './components/private/gestion_monitor/add-monitor/add-monitor.component';
import { UpdateMonitorComponent } from './components/private/gestion_monitor/update-monitor/update-monitor.component';
import { TopbarComponent } from './components/private/topbar/topbar.component';
import { CodeMeetListComponent } from './components/private/gestion-code-meet/code-meet-list/code-meet-list.component';
import { AddCodeMeetComponent } from './components/private/gestion-code-meet/add-code-meet/add-code-meet.component';
import { UpdateCodeMeetComponent } from './components/private/gestion-code-meet/update-code-meet/update-code-meet.component';
import { ConduiteMeetListComponent } from './components/private/gestion-conduite-meet/conduite-meet-list/conduite-meet-list.component';
import { AddConduiteMeetComponent } from './components/private/gestion-conduite-meet/add-conduite-meet/add-conduite-meet.component';
import { UpdateConduiteMeetComponent } from './components/private/gestion-conduite-meet/update-conduite-meet/update-conduite-meet.component';
import { UserCodeMeetComponent } from './components/private/gestion user/user-code-meet/user-code-meet.component';
import { UserConduiteMeetComponent } from './components/private/gestion user/user-conduite-meet/user-conduite-meet.component';
import { MonitorConduiteMeetComponent } from './components/private/gestion_monitor/monitor-conduite-meet/monitor-conduite-meet.component';
import { AccountNotActiveComponent } from './components/account-not-active/account-not-active.component';


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
    ListVehiculeComponent,
    ListMoniteursComponent,
    AddUserComponent,
    UpdateUserComponent,
    AddCarComponent,
    UpdateCarComponent,
    AddMonitorComponent,
    UpdateMonitorComponent,
    TopbarComponent,
    CodeMeetListComponent,
    AddCodeMeetComponent,
    UpdateCodeMeetComponent,
    ConduiteMeetListComponent,
    AddConduiteMeetComponent,
    UpdateConduiteMeetComponent,
    UserCodeMeetComponent,
    UserConduiteMeetComponent,
    MonitorConduiteMeetComponent,
    AccountNotActiveComponent,

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
