import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { DoclistComponent } from './components/doclist/doclist.component';
import { DocdetailsComponent } from './components/docdetails/docdetails.component';
import {DoclistService} from './services/doclist.service';
import {RouterModule,Routes} from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import {FormsModule} from '@angular/forms';


const appRoutes : Routes= [

  {path:'',component:DoclistComponent},
  {path:'details/:id',component:DocdetailsComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    DoclistComponent,
    DocdetailsComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [DoclistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
