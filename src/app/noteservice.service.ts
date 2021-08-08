import {Injectable} from '@angular/core';
import {Notes} from './notes/Notes';
import { of } from 'rxjs';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoteserviceService {

  public notes: Notes[] = [
    {id: 1, header: 'do it right', details: 'Do it right'},
    {id: 2, header: 'do the right thing', details: 'Do the right thing'},
    {id: 3, header: 'be passionate', details: 'be passionate'},
    {id: 4, header: 'yes can do', details: 'yes you can, do it !'}
  ];

  constructor() {
  }

  public getNotes(): Observable<Notes[]> {
    return of(this.notes);
  }

}
