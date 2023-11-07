import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './common/components/header/header.component';
import { MobileNavComponent } from './common/components/mobile-nav/mobile-nav.component';
import { WelcomeComponent } from './bookmark/components/welcome/welcome.component';
import { BookmarkViewComponent } from './bookmark/components/bookmark-view/bookmark-view.component';
import { FeaturesComponent } from './bookmark/components/features/features.component';
import { FooterComponent } from './common/components/footer/footer.component';
import { NewsletterComponent } from './bookmark/components/newsletter/newsletter.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MobileNavComponent,
    WelcomeComponent,
    BookmarkViewComponent,
    FeaturesComponent,
    FooterComponent,
    NewsletterComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
