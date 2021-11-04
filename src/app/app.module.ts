import {BrowserModule} from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {IonicModule} from '@ionic/angular';
import {NotesComponent} from './notes/notes.component';
import {DetailsComponent} from './notes/details/details.component';
import {NoteserviceService} from './noteservice.service';
import {PhotoComponent} from './photo/photo.component';
import {PhotoService} from './services/photo.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NotesComponent,
    DetailsComponent,
    PhotoComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    IonicModule.forRoot()
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [NoteserviceService, PhotoService, HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule {
}
