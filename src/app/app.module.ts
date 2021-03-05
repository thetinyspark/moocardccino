import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { CatalogComponent } from './catalog/catalog.component';
import { CardTypePipe } from './card-type.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CatalogComponent,
    CardTypePipe
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
