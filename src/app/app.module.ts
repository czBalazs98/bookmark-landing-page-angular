import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './common/components/header/header.component';
import { MobileNavComponent } from './common/components/mobile-nav/mobile-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MobileNavComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
