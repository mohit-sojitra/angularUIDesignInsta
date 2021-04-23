import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FeedComponent } from './feed/feed.component';
import { DirectComponent } from './direct/direct.component';
import { ProfileComponent } from './profile/profile.component';
import { MypostsComponent } from './myposts/myposts.component';
import { MyigtvComponent } from './myigtv/myigtv.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FeedComponent,
    DirectComponent,
    ProfileComponent,
    MypostsComponent,
    MyigtvComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
