import { Component, OnInit } from '@angular/core';
import { APIService, Picture } from '../API.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  public pictures: Array<Picture>;

  constructor(
    private api: APIService,
  ) { }

  async ngOnInit() {
    this.pictures = await this.api.ListPictures().then(e => e.items);
    console.log(this.pictures);
  }

}
