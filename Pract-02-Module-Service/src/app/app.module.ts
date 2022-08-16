import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';



import { AppComponent } from './app.component';
import { DbzModule } from './dbz/dbz.module';
import { UniversidadModule } from './universidad/universidad.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DbzModule,
    UniversidadModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
