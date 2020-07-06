import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/public/home/home.component';
import { TestComponent } from './components/test/test.component';
import { LoginComponent } from './components/public/login/login.component';
import { RegisterComponent } from './components/public/register/register.component';
import { Page404Component } from './components/page404/page404.component';
import { DashboardComponent } from './components/private/dashboard/dashboard.component';
import { ListUsersComponent } from './components/private/gestion user/list-users/list-users.component';
import { ListVehiculeComponent } from './components/private/gestion_car/list-vehicule/list-vehicule.component';
import { ListMoniteursComponent } from './components/private/gestion_monitor/list-moniteurs/list-moniteurs.component';
import { AddUserComponent } from './components/private/gestion user/add-user/add-user.component';
import { UpdateUserComponent } from './components/private/gestion user/update-user/update-user.component';
import { AddCarComponent } from './components/private/gestion_car/add-car/add-car.component';
import { UpdateCarComponent } from './components/private/gestion_car/update-car/update-car.component';
import { AddMonitorComponent } from './components/private/gestion_monitor/add-monitor/add-monitor.component';
import { UpdateMonitorComponent } from './components/private/gestion_monitor/update-monitor/update-monitor.component';
import { AuthGuard } from './guards/auth.guard';
import { CodeMeetListComponent } from './components/private/gestion-code-meet/code-meet-list/code-meet-list.component';
import { AddCodeMeetComponent } from './components/private/gestion-code-meet/add-code-meet/add-code-meet.component';
import { UpdateCodeMeetComponent } from './components/private/gestion-code-meet/update-code-meet/update-code-meet.component';
import { ConduiteMeet } from './models/conduite-meet';
import { AddConduiteMeetComponent } from './components/private/gestion-conduite-meet/add-conduite-meet/add-conduite-meet.component';
import { UpdateConduiteMeetComponent } from './components/private/gestion-conduite-meet/update-conduite-meet/update-conduite-meet.component';
import { ConduiteMeetListComponent } from './components/private/gestion-conduite-meet/conduite-meet-list/conduite-meet-list.component';
import { UserCodeMeetComponent } from './components/private/gestion user/user-code-meet/user-code-meet.component';
import { UserConduiteMeetComponent } from './components/private/gestion user/user-conduite-meet/user-conduite-meet.component';
import { MonitorConduiteMeetComponent } from './components/private/gestion_monitor/monitor-conduite-meet/monitor-conduite-meet.component';
import { AccountNotActiveComponent } from './components/account-not-active/account-not-active.component';



const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },

  {
    path: "login",
    component: LoginComponent
  },

  {
    path: "regiter",
    component: RegisterComponent
  },

  {
    path: "dashboard",
    component: DashboardComponent,
    canActivate: [AuthGuard]
  },

  {
    path: "users",
    component: ListUsersComponent,
    canActivate: [AuthGuard]
  },

  {
    path: "cars",
    component: ListVehiculeComponent,
    canActivate: [AuthGuard]
  },

  {
    path: "monitors",
    component: ListMoniteursComponent,
    canActivate: [AuthGuard]
  },

  {
    path: "add_user",
    component: AddUserComponent,
    canActivate : [AuthGuard]
  },

  {
    path: "update_user/:id",
    component: UpdateUserComponent,
    canActivate : [AuthGuard]
  },

  {
    path: "add_car",
    component: AddCarComponent,
    canActivate : [AuthGuard]
  },

  {
    path: "update_car/:id",
    component: UpdateCarComponent,
    canActivate : [AuthGuard]
  },

  {
    path: "add_monitor",
    component: AddMonitorComponent,
    canActivate : [AuthGuard]
  },

  {
    path: "update_monitor/:id",
    component: UpdateMonitorComponent,
    canActivate : [AuthGuard]
  },

  {
    path: "code-meet-list",
    component: CodeMeetListComponent,
    canActivate : [AuthGuard]
  },

  {
    path: "code-user-meet",
    component: UserCodeMeetComponent,
    canActivate : [AuthGuard]
  },

  {
    path: "conduite-user-meet",
    component: UserConduiteMeetComponent,
    canActivate : [AuthGuard]
  },

  {
    path: "add-code-meet",
    component: AddCodeMeetComponent,
    canActivate : [AuthGuard]
  },

  {
    path: "update-code-meet/:id/:userId",
    component: UpdateCodeMeetComponent,
    canActivate : [AuthGuard]
  },
  //---------------------------------

  {
    path: "conduite-meet-list",
    component: ConduiteMeetListComponent,
    canActivate : [AuthGuard]
  },

  {
    path: "monitor-conduite-meet",
    component: MonitorConduiteMeetComponent,
    canActivate : [AuthGuard]
  },

  {
    path: "add-conduite-meet",
    component: AddConduiteMeetComponent,
    canActivate : [AuthGuard]
  },

  {
    path: "update-conduite-meet/:id/:userId/:monitorId/:carId",
    component: UpdateConduiteMeetComponent,
    canActivate : [AuthGuard]
  },

  {
    path: "accountdesactiver",
    component: AccountNotActiveComponent
  },

  {
    path: "test",
    component: TestComponent
  },

  {
    path: "**",
    component: Page404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
