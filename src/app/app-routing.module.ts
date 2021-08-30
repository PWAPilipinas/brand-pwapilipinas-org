import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { DownloadComponent } from './page/download/download.component';
import { LogoComponent } from './page/logo/logo.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'downloads', component: DownloadComponent },
  { path: 'logo', component: LogoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
