import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router'; 
import { FormComponent } from './components/form/form.component';
import { ListComponent } from './components/list/list.component';
import { EdituserComponent } from './components/edituser/edituser.component';
import { NewuserComponent } from './components/newuser/newuser.component';
import { TabsComponent } from './components/tabs/tabs.component';

const routes: Routes = [
  {
    path: '',
    component: FormComponent
  },
  {
    path: 'list',
    component: ListComponent
  },
  {
    path: 'tabs/edituser',
    component: EdituserComponent
  },
  {
    path: 'tabs/newuser',
    component: NewuserComponent
  },
  {
    path: 'tabs',
    component: TabsComponent
  },
  { path: "**", 
    redirectTo: ''
  }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
