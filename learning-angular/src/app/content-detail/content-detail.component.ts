import { Component, OnInit } from '@angular/core';
import {ContentService} from "../services/content.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-content-detail',
  templateUrl: './content-detail.component.html',
  styleUrls: ['./content-detail.component.css']
})
export class ContentDetailComponent implements OnInit {

  id: number = 0;
  item: any = {};
  constructor(private route: ActivatedRoute, private content: ContentService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(parameters => {
      this.id = Number(parameters.get("id"));

      this.content.getBookItem(this.id).subscribe(book => this.item = book);
    });
  }

}
