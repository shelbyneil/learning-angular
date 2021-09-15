import { Content } from "./content-interface"

export class ContentList {

  static contentCount = 0;
  private _contentItem: Content[];

  constructor(contentItem: Content[]) {
    this._contentItem = [];
    // this._contentItem[0] = contentItem;
    this.increaseCount();
  }

  get contentItem(): Content[] {
    return this._contentItem;
  }

  set contentItem(newItems: Content[]) {
    this._contentItem.push(newItems[0]);
  }

  public increaseCount(){
    return ContentList.contentCount;
  }

}
