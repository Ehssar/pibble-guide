import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './pages/home/home.component';
import { OGPibbComponent } from './pages/og-pibb/og-pibb.component';
import { WashingtonComponent } from './pages/washington/washington.component';
import { GmailComponent } from './pages/gmail/gmail.component';
import { PBCupsComponent } from './pages/pb-cups/pb-cups.component';
import { GeeblesComponent } from './pages/geebles/geebles.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'og-pibb', component: OGPibbComponent},
      { path: 'washington', component: WashingtonComponent},
      { path: 'gmail', component: GmailComponent},
      { path: 'pb-cups', component: PBCupsComponent},
      { path: 'geebles', component: GeeblesComponent},
    ]
  },
  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
