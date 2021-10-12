import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {

  bookArray = [{ // THE BODY IS THE FIRST LINE OF EACH BOOK PLEASE ENJOY LOL
      id: 0,
      author: "Stephen King",
      title: "The Shining",
      type: "Horror",
      imgUrl: "https://covers.openlibrary.org/b/id/10521199-L.jpg",
      body: "Jack Torrance thought, officious little prick.",
      tags: ["novel", "horror", "stephen king"]
    }, {
    id: 1,
    author: "Stephen King",
    title: "Carrie",
    type: "Horror",
    imgUrl: "https://images.squarespace-cdn.com/content/v1/5a83a7c529f187a4cab99625/1529030026539-WTHKNUDSF8WUQ8F67WWA/May+1st+1983+by+New+English+Library.jpg",
    body: "News item from the Westover (Me.) weakly Enterprise, August 19, 1966",
    tags: ["novel", "horror", "stephen king"]
  }, {
  id: 2,
  author: "Stephen King",
  title: "Cujo",
  type: "Horror",
  imgUrl: "https://dyn1.heritagestatic.com/lf?set=path%5B8%2F5%2F7%2F9%2F8579801%5D%2Csizedata%5B850x600%5D&call=url%5Bfile%3Aproduct.chain%5D",
  body: "Once upon a time, not so long ago, a monster came to the small town of Castle Rock, Maine.",
  tags: ["novel", "horror", "stephen king"]
}, {
  id: 3,
    author: "Stephen King",
    title: "IT",
    type: "Horror",
    // imgUrl: "https://covers.openlibrary.org/b/id/8569284-L.jpg",
    body: "The terror, which would not end for another twenty-eight years - if it ever did end - began, as far as I " +
  "can know or tell, with a boat made from a sheet of newspaper floating down a gutter " +
  "swollen with rain.",
    tags: ["novel", "horror", "stephen king"]
}, {
  id: 4,
    author: "Stephen King",
    title: "Finders Keepers",
    type: "Crime",
    imgUrl: "https://www.dreadcentral.com/wp-content/uploads/2015/01/finders_keepers_large_cover.jpg",
    body: "Wake up, genius.",
    tags: ["novel", "crime", "stephen king"]
}];


  constructor() {}

  ngOnInit(): void {
  }

  checkIfExists(title: string): void{
    // console.log(content);
    for (let i = 0; i < this.bookArray.length; i++){
      if(this.bookArray[i].title === title){
        console.log("Found your book!")
        break;
      } else {
        console.log("Can't find that book!")
      }
    }
  }
}
