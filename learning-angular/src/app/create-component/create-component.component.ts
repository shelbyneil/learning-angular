import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Content} from "../../../helper-files/content-interface";
import {ContentService} from "../services/content.service";
import {MessageService} from "../message.service";

@Component({
  selector: 'app-create-component',
  templateUrl: './create-component.component.html',
  styleUrls: ['./create-component.component.css']
})
export class CreateComponentComponent implements OnInit {
  @Output() addContent = new EventEmitter<Content>();
  @Output() updateContent = new EventEmitter<Content>();
  newBookItem: Content;
  tempId!: string;
  tempTag!: string;

  constructor(private contentService: ContentService, private messageService: MessageService) {
    this.newBookItem = {
      author: '',
      title: '',
      body: '',
      type: '',
    };
  }



  ngOnInit(): void {
  }

  CreateNewContent(): void{
    this.newBookItem.tags = this.tempTag.split(",");
    this.contentService.addContent(this.newBookItem).subscribe(newBookItem => {
     this.messageService.add("Added content has an ID of: " + newBookItem.id);
      this.newBookItem = {
        author: '',
        title: '',
        body: ''
      };
      this.tempTag = "";
      this.addContent.emit(newBookItem);
    });
  }

  update(): void {
    this.newBookItem.tags = this.tempTag.split(",");
    this.newBookItem.id = parseInt(this.tempId);
    this.contentService.updateContent(this.newBookItem).subscribe(() => {
      this.messageService.add("Updated content at ID: " + this.newBookItem.id);
      this.tempTag = "";
      this.tempId = "";
      this.updateContent.emit(this.newBookItem);
      this.newBookItem = {
        author: '',
        title: '',
        body: ''
      };
    });
  }
}
