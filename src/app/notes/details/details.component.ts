import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {NoteserviceService} from '../../noteservice.service';
import {Notes} from '../Notes';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {

  public note!: Notes;
  public selectedNoteId!: number;

  constructor(private router: ActivatedRoute,
              private noteService: NoteserviceService) {
  }

  ngOnInit(): void {
    this.router.params.subscribe(ob => {
      this.selectedNoteId = +ob.id;
    });
    this.noteService
      .getNotes()
      .subscribe(notes => {
        notes.filter(value => value.id === this.selectedNoteId).forEach(e => {
          this.note = e;
        });
      });
  }


}
