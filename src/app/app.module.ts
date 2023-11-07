import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { TabViewModule } from 'primeng/tabview';

import { AppComponent } from './app.component';
import { HeaderComponent } from './common/components/header/header.component';
import { MobileNavComponent } from './common/components/mobile-nav/mobile-nav.component';
import { WelcomeComponent } from './bookmark/components/welcome/welcome.component';
import { BookmarkViewComponent } from './bookmark/components/bookmark-view/bookmark-view.component';
import { FeaturesComponent } from './bookmark/components/tabs/features/features.component';
import { FooterComponent } from './common/components/footer/footer.component';
import { NewsletterComponent } from './bookmark/components/newsletter/newsletter.component';
import { FeatureTabComponent } from './bookmark/components/tabs/feature-tab/feature-tab.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MobileNavComponent,
    WelcomeComponent,
    BookmarkViewComponent,
    FeaturesComponent,
    FooterComponent,
    NewsletterComponent,
    FeatureTabComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    TabViewModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
