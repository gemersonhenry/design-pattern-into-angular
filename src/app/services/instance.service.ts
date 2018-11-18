import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

export interface Comment {
  id: string;
  name: string;
  email: string;
  body: string;
}

@Injectable()
export class InstanceService {

  // selectedComment
  private _selectedComment: Comment = {} as Comment;
  private _selectedCommentSubject: BehaviorSubject<Comment> = new BehaviorSubject({} as Comment);

  // commentList
  private _commentList: Comment[] = [];
  private _commentListSubject: BehaviorSubject<Comment[]> = new BehaviorSubject([]);

  // selectedComment methods
  public get selectedComment$(): Observable<Comment> {
    return this._selectedCommentSubject.asObservable();
  }
  public setSelectedComment(comment: Comment) {
    this._selectedCommentSubject.next(comment);
  }
  public get selectedComment(): Comment {
    return this._selectedComment;
  }

  // commentList methods
  public get commentList$(): Observable<Comment[]> {
    return this._commentListSubject.asObservable();
  }
  public setCommentList(commentList: Comment[]) {
    this._commentListSubject.next(commentList);
  }
  public get commentList(): Comment[] {
    return this._commentList;
  }

  constructor() {
    this._selectedCommentSubject.subscribe((comment) => this._selectedComment = comment);
    this._commentListSubject.subscribe((commentList) => this._commentList = commentList);
  }

  public resetInstance() {
    this.setSelectedComment({} as Comment);
    this.setCommentList([]);
  }
}
