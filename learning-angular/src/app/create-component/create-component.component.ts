import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Content} from "../../../helper-files/content-interface";
import {ContentService} from "../services/content.service";

@Component({
  selector: 'app-create-component',
  templateUrl: './create-component.component.html',
  styleUrls: ['./create-component.component.css']
})
export class CreateComponentComponent implements OnInit {

  constructor(private contentService: ContentService) { }

  ngOnInit(): void {
  }

  @Output() newBookItem = new EventEmitter<Content>();

  CreateNewContent(): void{
    this.contentService.addContent(this.newBookItem).subscribe(content => this.bookService.push(content));
  }

  update(): void {
    this.contentService.updateContent(this.newBookItem).subscribe(() => console.log("Content updated"));
  }

}
