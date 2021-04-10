import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { CatalogComponent } from './catalog/catalog.component';
import { CardTypePipe } from './card-type.pipe';
import {HttpClientModule} from "@angular/common/http";
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NameContainsPipe } from './name-contains.pipe';
import { DescContainsPipe } from './desc-contains.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CatalogComponent,
    CardTypePipe,
    HomeComponent,
    NameContainsPipe,
    DescContainsPipe
  ],
  imports: [
    RouterModule.forRoot(
      [
        {
          path: "catalog", 
          component: CatalogComponent
        }, 
        {
          path:"", 
          component: HomeComponent
        }
      ], 
      {
        useHash: false
      }
    ),
    HttpClientModule,
    FormsModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
