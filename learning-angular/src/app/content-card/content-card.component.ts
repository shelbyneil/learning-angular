import { Component, OnInit } from '@angular/core';
import {Content} from "../../../helper-files/content-interface";
import {ContentList} from "../../../helper-files/content-list";

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.css']
})
export class ContentCardComponent implements OnInit {

  constructor() { }

  // all my component shite goes here

  public ngOnInit(): void{

    let contentItem: Content = {
      id: 0,
      author: "William Shakespeare",
      title: "Romeo and Juliet",
      type: "Play",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
    };

    let list: ContentList;
    list = new ContentList(contentItem);
    list.contentItem = [{
      id: 1,
      author: "William Shakespeare",
      title: "Hamlet",
      type: "Play",
      body: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    }];

    list.contentItem = [{
      id: 2,
      author: "William Shakespeare",
      title: "Macbeth",
      type: "Play",
      body: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    }];

  }

}
