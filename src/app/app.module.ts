import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { CoursesComponent } from './pages/courses/courses.component';
import { FeaturesComponent } from './pages/features/features.component';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { ResourceComponent } from './pages/resource/resource.component';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatExpansionModule } from '@angular/material/expansion';
import { VideoResourceComponent } from './pages/resource/video-resource/video-resource.component';
import { AppResourceComponent } from './pages/resource/app-resource/app-resource.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DeepDiveCardComponent } from './components/deep-dive-card/deep-dive-card.component';
import { OurTeamComponent } from './pages/our-team/our-team.component';
import { MemberCardComponent } from './components/member-card/member-card.component';
import { MemberCardHComponent } from './components/member-card-h/member-card-h.component';
import { CisspMindCardComponent } from './components/cissp-mind-card/cissp-mind-card.component';
import { CisspMindCard1Component } from './components/cissp-mind-card1/cissp-mind-card1.component';
import { CisspTabComponent } from './components/cissp-tab/cissp-tab.component';
import { DeepDiveTabComponent } from './components/deep-dive-tab/deep-dive-tab.component';
import { WhatTheHackTabComponent } from './components/what-the-hack-tab/what-the-hack-tab.component';
import { CybersecurityTabComponent } from './components/cybersecurity-tab/cybersecurity-tab.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CoursesComponent,
    FeaturesComponent,
    HomeComponent,
    FooterComponent,
    ResourceComponent,
    VideoResourceComponent,
    AppResourceComponent,
    DeepDiveCardComponent,
    OurTeamComponent,
    MemberCardComponent,
    MemberCardHComponent,
    CisspMindCardComponent,
    CisspMindCard1Component,
    CisspTabComponent,
    DeepDiveTabComponent,
    WhatTheHackTabComponent,
    CybersecurityTabComponent,
    PrivacyPolicyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    MatTabsModule,
    MatSidenavModule,
    MatExpansionModule,
    BrowserAnimationsModule,
  ],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
