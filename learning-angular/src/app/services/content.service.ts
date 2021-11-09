import { Injectable } from '@angular/core';
import { Content } from "../../../helper-files/content-interface";
import { bookArray } from "../../../helper-files/contentDB";
import { Observable, of } from "rxjs";
import { MessageService} from "../message.service";

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor(private messageService: MessageService) { }

  getBooks(): Content[]{
    return bookArray;
  }

  getBookObs(): Observable<Content[]>{
    const book = of(bookArray);
    this.messageService.add("Content Retrieved!");
    return book;
  }
}
