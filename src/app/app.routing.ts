import {RouterModule,Routes}from '@angular/router'
import { Component } from '@angular/core';
import {ModuleWithProviders} from '@angular/core';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { ResumeComponent } from './resume/resume.component';
import { SkillsComponent } from './skills/skills.component';
import { ContactComponent } from './contact/contact.component';
import { ServicesComponent } from './services/services.component';


export const routes:Routes=[
    {
        path: '',
        component:HomeComponent
    },
    {
        path:'home',
        component:HomeComponent
    },
    {
        path:'profile',
        component:ProfileComponent
    },
    {
        path:'services',
        component:ServicesComponent
    },
    {
        path:'resume',
        component:ResumeComponent
    },
    {
        path:'skills',
        component:SkillsComponent
    },
    {
        path:'contact',
        component:ContactComponent
    }
]
export const routing:ModuleWithProviders = RouterModule.forRoot(routes)