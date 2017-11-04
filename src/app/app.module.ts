import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { PlayerService } from './player.service';
import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
  ],
  imports: [
    BrowserModule,
    routing,
    NgbModule.forRoot()
  ],
  providers: [PlayerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
