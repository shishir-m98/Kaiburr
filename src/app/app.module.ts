import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FormComponent } from './components/form/form.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { ListComponent } from './components/list/list.component';
import { MatTableModule} from '@angular/material/table';
import { MatPaginatorModule} from '@angular/material/paginator';
import { EdituserComponent } from './components/edituser/edituser.component';
import { HttpClientModule } from '@angular/common/http';
import { NewuserComponent } from './components/newuser/newuser.component';
import { MatTabsModule} from '@angular/material/tabs';
import { TabsComponent } from './components/tabs/tabs.component';
import { PiechartComponent } from './components/piechart/piechart.component';
import { NgApexchartsModule } from "ng-apexcharts";
import { BarchartsComponent } from './components/barcharts/barcharts.component';
import { TictactoeComponent } from './components/tictactoe/tictactoe.component';
@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ListComponent,
    EdituserComponent,
    NewuserComponent,
    TabsComponent,
    PiechartComponent,
    BarchartsComponent,
    TictactoeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    AppRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    FormsModule,
    HttpClientModule,
    MatTabsModule,
    NgApexchartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
