import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NotesComponent} from './notes/notes.component';
import {DetailsComponent} from './notes/details/details.component';

const routes: Routes = [
  {path: '', redirectTo: '/notes', pathMatch: 'full'},
  {path: 'notes', component: NotesComponent},
  {path: 'notes/:id', component: DetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
