import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { TabViewModule } from 'primeng/tabview';
import { AccordionModule } from 'primeng/accordion';

import { AppComponent } from './app.component';
import { HeaderComponent } from './common/components/header/header.component';
import { MobileNavComponent } from './common/components/mobile-nav/mobile-nav.component';
import { WelcomeComponent } from './bookmark/components/welcome/welcome.component';
import { BookmarkViewComponent } from './bookmark/components/bookmark-view/bookmark-view.component';
import { FeaturesComponent } from './bookmark/components/tabs/features/features.component';
import { FooterComponent } from './common/components/footer/footer.component';
import { NewsletterComponent } from './bookmark/components/newsletter/newsletter.component';
import { FeatureTabComponent } from './bookmark/components/tabs/feature-tab/feature-tab.component';
import { ExtensionCardComponent } from './bookmark/components/extension/extension-card/extension-card.component';
import { ExtensionsComponent } from './bookmark/components/extension/extensions/extensions.component';
import { FaqComponent } from './bookmark/components/faq/faq.component';

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
    FeatureTabComponent,
    ExtensionCardComponent,
    ExtensionsComponent,
    FaqComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    TabViewModule,
    AccordionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
