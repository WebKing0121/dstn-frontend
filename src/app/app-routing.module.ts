import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CisspTabComponent } from './components/cissp-tab/cissp-tab.component';
import { CybersecurityTabComponent } from './components/cybersecurity-tab/cybersecurity-tab.component';
import { DeepDiveTabComponent } from './components/deep-dive-tab/deep-dive-tab.component';
import { WhatTheHackTabComponent } from './components/what-the-hack-tab/what-the-hack-tab.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { FeaturesComponent } from './pages/features/features.component';
import { HomeComponent } from './pages/home/home.component';
import { OurTeamComponent } from './pages/our-team/our-team.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { AppResourceComponent } from './pages/resource/app-resource/app-resource.component';
import { ResourceComponent } from './pages/resource/resource.component';
import { VideoResourceComponent } from './pages/resource/video-resource/video-resource.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'courses',
    component: CoursesComponent
  },
  {
    path: 'features',
    component: FeaturesComponent
  },
  {
    path: 'our-team',
    component: OurTeamComponent
  },
  {
    path: 'resource',
    component: ResourceComponent
  },
  {
    path: 'resource',
    component: ResourceComponent,
    children: [
      {
        path:'videos',
        component: VideoResourceComponent,
        children: [
          {
            path: 'cissp-mindmap',
            component: CisspTabComponent
          },
          {
            path: 'deep-dive',
            component: DeepDiveTabComponent
          },
          {
            path: 'what-the-hack',
            component: WhatTheHackTabComponent
          },
          {
            path: 'cybersecurity-fireside',
            component: CybersecurityTabComponent
          },
          {
            path: '**',
            component: CisspTabComponent
          },
        ]
      },
      {
        path:'apps',
        component: AppResourceComponent
      }
    ]
  },
  {
    path: 'privacy-policy',
    component: PrivacyPolicyComponent
  },
  {
    path: '**',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
