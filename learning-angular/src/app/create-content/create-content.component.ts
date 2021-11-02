import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Content} from "@angular/compiler/src/render3/r3_ast";


@Component({
  selector: 'app-create-content',
  templateUrl: './create-content.component.html',
  styleUrls: ['./create-content.component.css']
})
export class CreateContentComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }
  @Output() newBookEvent = new EventEmitter<Content>();
  newBookItem: Content | undefined;

  CreateNewContent(id: string, author: string, title: string, type: string, image: string, body: string): void{

    let getBooks = async function(){
      return Promise.resolve("Books");
    }

    let getAllBooks = async() => {
      return await Promise.all([getBooks()]);
    }

    this.newBookEvent.emit(this.newBookItem);

    let bookPromise = new Promise(async (success, fail) => {
      let displayBooks = await getAllBooks();
      if(displayBooks) {
        success("Success, Book Found!")
      } else {
        fail("Fail, Book Not Found!")
      }
    });

    bookPromise.then(function (successfulResult){
      console.log("Success - Book Found! - Successful Result")
    }).catch(failure => {
      console.log("Fail - Book Not Found!", failure)
    })

  }




}
