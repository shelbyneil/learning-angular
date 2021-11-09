import {Component, OnInit} from '@angular/core';
import {Content} from "../../../helper-files/content-interface";
import {ContentService} from "../services/content.service";

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {
  bookService: Content[] = [];

  constructor(private contentService: ContentService) {}

  public ngOnInit(): void {
    this.contentService.getBookObs().subscribe(bookService => this.bookService = bookService);
  }

  checkIfExists(title: string): void{
    // console.log(content);
    for (let i = 0; i < this.bookService.length; i++){
      if(this.bookService[i].title === title){
        console.log("Found your book!")
        break;
      } else {
        console.log("Can't find that book!")
      }
    }
  }

}
