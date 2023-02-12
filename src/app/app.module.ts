import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdBannerComponent } from './ad-banner/ad-banner.component';
import { HeroProfileComponent } from './hero-profile/hero-profile.component';
import { HeroJobAdComponent } from './hero-job-ad/hero-job-ad.component';
import { AdDirective } from './ad.directive';
import { CustomInputComponent } from './custom-input/custom-input.component';
import { CustomDropdownComponent } from './custom-dropdown/custom-dropdown.component';
import { InputComponent } from './shared/input/input.component';
import { DropdownComponent } from './shared/dropdown/dropdown.component';

@NgModule({
  declarations: [
    AppComponent,
    AdBannerComponent,
    HeroProfileComponent,
    HeroJobAdComponent,
    AdDirective,
    CustomInputComponent,
    CustomDropdownComponent,
    InputComponent,
    DropdownComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
