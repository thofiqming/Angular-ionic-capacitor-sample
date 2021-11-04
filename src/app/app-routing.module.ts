import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NotesComponent} from './notes/notes.component';
import {DetailsComponent} from './notes/details/details.component';
import {PhotoComponent} from './photo/photo.component';
import {AppComponent} from './app.component';

const routes: Routes = [
  {path: '', redirectTo: '/photo', pathMatch: 'full'},
  {path: 'notes', component: NotesComponent},
  {path: 'notes/:id', component: DetailsComponent},
  {path: 'photo', component: PhotoComponent},
  {path: 'app', component: AppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
