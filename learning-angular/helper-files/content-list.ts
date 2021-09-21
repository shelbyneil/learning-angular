import { Content } from "./content-interface"

export class ContentList {

  static contentCount = 0;
  private _contentItems: Content[];

  constructor(contentItem: Content) {
    this._contentItems = [];
    this.increaseCount();
  }

  get contentItem(): Content[] {
    return this._contentItems;
  }

  set contentItem(newItems: Content[]) {
    this._contentItems.push(newItems[0]);
  }

  public increaseCount(){
    return ++ContentList.contentCount;
  }

  public arrayCount(){
    return ContentList.length;
  }

}
