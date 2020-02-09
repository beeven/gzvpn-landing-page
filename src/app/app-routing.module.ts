import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TutorialComponent } from './tutorial/tutorial.component';
import { VideosComponent } from './videos/videos.component';
import { FaqComponent } from './faq/faq.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'tutorial', component: TutorialComponent},
  { path: 'videos', component: VideosComponent},
  { path: 'faq', component: FaqComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
