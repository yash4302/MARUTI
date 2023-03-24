import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidePanelComponent } from './components/course/side-panel/side-panel.component';
import { HomeComponent } from './components/home/home.component';
import { CourseComponent } from './components/course/course.component';
import { ContentComponent } from './components/course/content/content.component';
import { CLanguageComponent } from './components/course/content/c-language/c-language.component';

@NgModule({
  declarations: [
    AppComponent,
    SidePanelComponent,
    HomeComponent,
    CourseComponent,
    ContentComponent,
    CLanguageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
