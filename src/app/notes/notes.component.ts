import {Component, OnInit} from '@angular/core';
import {Notes} from './Notes';
import {NoteserviceService} from '../noteservice.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss'],
})
export class NotesComponent implements OnInit {

  public notes!: Notes[];

  constructor(private noteService: NoteserviceService) {
  }

  ngOnInit(): void {
    this.noteService.getNotes().subscribe(notes => {
      console.log(notes);
      this.notes = notes;
    });
  }
}
