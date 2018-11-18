import { Injectable } from '@angular/core';
import { HttpBase } from './http-base.service';
import { map } from 'rxjs/operators/map';
import { Observable } from 'rxjs/Observable';
import { Comment } from './instance.service';
import { Observer } from 'rxjs/Observer';

@Injectable()
export class AppService {

  constructor(
    private httpBase: HttpBase,
  ) {}

  public getCommentList(): Observable<Comment[]> {
    return this.httpBase.req()
      .pipe(
        map((result: Comment[]) => {
          return result.filter((comment) => {
            return Number(comment.id) <= 10;
          });
        })
      );
  }

  public getAllCommentList(): Observable<{}> {
    return Observable.create((observer: Observer<{}>) => {
      this.httpBase.req()
        .pipe(
          map((result: Comment[]) => {
            return result.filter((comment) => {
              return Number(comment.id) <= 10;
            });
          })
        )
        .subscribe((commentList) => {
          observer.next(commentList);
          observer.complete();
        });
    });
  }
}
