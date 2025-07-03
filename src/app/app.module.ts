import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { HomeComponent } from './pages/home/home.component';
import { OGPibbComponent } from './pages/og-pibb/og-pibb.component';
import { WashingtonComponent } from './pages/washington/washington.component';
import { GmailComponent } from './pages/gmail/gmail.component';
import { PBCupsComponent } from './pages/pb-cups/pb-cups.component';
import { GeeblesComponent } from './pages/geebles/geebles.component';
import { ShowPibbleComponent } from './shared/show-pibble/show-pibble.component';
import { QuizComponent } from './pages/quiz/quiz.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    HomeComponent,
    OGPibbComponent,
    WashingtonComponent,
    GmailComponent,
    PBCupsComponent,
    GeeblesComponent,
    ShowPibbleComponent,
    QuizComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
