/**
 * @param id: string
 * @param title: string
 * @param description: string
 */
export interface IGeneralService {
  id: string;
  title: string;
  description: string;
}

/**
 * @param _id: string
 * @param _title: string
 * @param _description: string
 * @method id => en formato ES6
 * @method title => en formato ES6
 * @method description => en formato ES6
 */
export class GeneralService {
  private _id: string;
  private _title: string;
  private _description: string;

  constructor(gs: IGeneralService) {
    this._id = gs.id || '';
    this._title = gs.title || '';
    this._description = gs.description || '';
  }

  public get id(): string {
    return this._id;
  }

  public get title(): string {
    return this._title;
  }

  public get description(): string {
    return this._description;
  }
}
