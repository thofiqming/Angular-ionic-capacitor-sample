import {Component, OnInit} from '@angular/core';
import {PhotoService} from '../services/photo.service';


@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss'],
})
export class PhotoComponent implements OnInit {

  constructor(public photoService: PhotoService) {
  }

  async ngOnInit() {
    await this.photoService.loadSaved();
  }

  addPhotoToGallery() {
    this.photoService.addNewToGallery().then(r => r);
  }

}
