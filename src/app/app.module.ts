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
import { DndDirective } from './drag-drop/dnd.directive';
import { DragDropComponent } from './drag-drop/drag-drop.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FeedComponent,
    DirectComponent,
    ProfileComponent,
    MypostsComponent,
    MyigtvComponent,
    DndDirective,
    DragDropComponent,
    LoginComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
