/**
 * interface para el modelo de los comentarios
 */
export interface IComment {
  id: string;
  name: string;
  email: string;
  body: string;
}

export class Comment {
  private _id: string;
  private _name: string;
  private _email: string;
  private _body: string;

  constructor(comment: IComment) {
    this._id = comment.id || '';
    this._name = comment.name || '';
    this._email = comment.email || '';
    this._body = comment.body || '';
  }

  public get id() {
    return this._id;
  }

  public get name() {
    return this._name;
  }

  public get email() {
    return this._email;
  }

  public get body() {
    return this._body;
  }
}
