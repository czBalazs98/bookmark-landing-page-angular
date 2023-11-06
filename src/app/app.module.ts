import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './common/components/header/header.component';
import { MobileNavComponent } from './common/components/mobile-nav/mobile-nav.component';
import { WelcomeComponent } from './bookmark/components/welcome/welcome.component';
import { BookmarkViewComponent } from './bookmark/components/bookmark-view/bookmark-view.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MobileNavComponent,
    WelcomeComponent,
    BookmarkViewComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
