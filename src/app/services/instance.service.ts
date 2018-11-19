import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { IComment } from './models.service';

@Injectable()
export class InstanceService {

  // selectedComment
  private _selectedComment: IComment = {} as IComment;
  private _selectedCommentSubject: BehaviorSubject<IComment> = new BehaviorSubject({} as IComment);

  // commentList
  private _commentList: IComment[] = [];
  private _commentListSubject: BehaviorSubject<IComment[]> = new BehaviorSubject([]);

  // selectedComment methods
  public get selectedComment$(): Observable<IComment> {
    return this._selectedCommentSubject.asObservable();
  }
  public setSelectedComment(comment: IComment) {
    this._selectedCommentSubject.next(comment);
  }
  public get selectedComment(): IComment {
    return this._selectedComment;
  }

  // commentList methods
  public get commentList$(): Observable<IComment[]> {
    return this._commentListSubject.asObservable();
  }
  public setCommentList(commentList: IComment[]) {
    this._commentListSubject.next(commentList);
  }
  public get commentList(): IComment[] {
    return this._commentList;
  }

  constructor() {
    this._selectedCommentSubject.subscribe((comment) => this._selectedComment = comment);
    this._commentListSubject.subscribe((commentList) => this._commentList = commentList);
  }

  public resetInstance() {
    this.setSelectedComment({} as IComment);
    this.setCommentList([]);
  }
}
