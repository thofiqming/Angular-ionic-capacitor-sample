import {BrowserModule} from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {IonicModule} from '@ionic/angular';
import {NotesComponent} from './notes/notes.component';
import {DetailsComponent} from './notes/details/details.component';
import {NoteserviceService} from './noteservice.service';

@NgModule({
  declarations: [
    AppComponent,
    NotesComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IonicModule.forRoot()
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [NoteserviceService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
