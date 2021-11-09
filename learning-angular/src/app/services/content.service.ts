import { Injectable } from '@angular/core';
import { Content } from "../../../helper-files/content-interface";
// import { bookArray } from "../in-memory-data.service";
import { Observable, of } from "rxjs";
import { MessageService} from "../message.service";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  bookService: Content[] = [];

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-type' : 'application/json'})
  };

  constructor(private http: HttpClient, private messageService: MessageService) { }

  getBookObs(): Observable<Content[]>{
    return this.http.get<Content[]>("api/bookContent");
  }

  addContent(content: Content): Observable<Content>{
    this.messageService.add("Content Retrieved!");
    return this.http.post<Content>("api/bookContent", content, this.httpOptions);
  }

  updateContent(content: Content): Observable<any>{
    return this.http.put("api/bookContent", content, this.httpOptions);
  }


}
