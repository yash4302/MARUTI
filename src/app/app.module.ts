import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidePanelComponent } from './components/side-panel/side-panel.component';
import { AboutUsComponent } from './components/content/about-us/about-us.component';
import { ReferencesComponent } from './components/content/references/references.component';
import { ContentComponent } from './components/content/content.component';

@NgModule({
  declarations: [
    AppComponent,
    SidePanelComponent,
    AboutUsComponent,
    ReferencesComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
