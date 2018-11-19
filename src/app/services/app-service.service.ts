import { Injectable } from '@angular/core';
import { HttpBase } from './http-base.service';
import { map } from 'rxjs/operators/map';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { Comment, IComment } from './models.service';

@Injectable()
export class AppService {

  constructor(
    private httpBase: HttpBase,
  ) {}

  public getCommentList(): Observable<IComment[]> {
    return this.httpBase.req()
      .pipe(
        map((result: IComment[]) => {
          return result.map(res => new Comment(res));
        }),
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
          map((result: IComment[]) => {
            return result.map((res) => {
              delete res.body;
              return new Comment(res);
            });
          }),
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
