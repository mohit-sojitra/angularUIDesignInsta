import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirectComponent } from './direct/direct.component';
import { FeedComponent } from './feed/feed.component';
import { MyigtvComponent } from './myigtv/myigtv.component';
import { MypostsComponent } from './myposts/myposts.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {
    path: '',
    component: FeedComponent,
  },
  {
    path: 'direct/inbox',
    component: DirectComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
    children: [
      {
        path: '',
        component: MypostsComponent,
      },
      { path: 'channel', component: MyigtvComponent },
      {
        path:'**',
        component: MypostsComponent,
      }
    ],
  },
  {
    path: '**',
    redirectTo: '/',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
