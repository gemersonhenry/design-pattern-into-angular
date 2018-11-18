import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HttpBase extends HttpClient {

  constructor(
    handler: HttpHandler
  ) {
    super(handler);
  }

  public req(): Observable<{}> {
    return this.get('https://jsonplaceholder.typicode.com/comments');
  }

}
