import { IChecklistItem } from "../../interfaces/checklist-items";

export namespace ChecklistActions{
     export class AddItem{
          static readonly type = "[Checklist] Add Item";
          constructor(public item: IChecklistItem){}
     }
     export class EditItem{
          static readonly type = "[Checklist] Edit Item";
          constructor(public item: IChecklistItem){}
     }
     export class MoveItemToCompleted{
          static readonly type = "[Checklist] Move Item To Completed";
          constructor(public item: IChecklistItem){}
     }
     export class DeleteItem{
          static readonly type = "[Checklist] Delete Item";
          constructor(public item: IChecklistItem){}
     }
     export class MarkItems{
          static readonly type = "[Checklist] Mark All Items";
          constructor(public items: IChecklistItem[]){}
     }
     export class ClearItems{
          static readonly type = "[Checklist] Clear All Items";
          constructor(public items: IChecklistItem[]){}
     }
}