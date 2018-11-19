import { FactoryInterfaceService } from './factory-interface.service';
import { GeneralService } from './factory-models.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class NewGeneralServicesService implements FactoryInterfaceService {

  constructor(
    private http: HttpClient
  ) {}

  getAllGeneralServices(): GeneralService[] {
    return [];
  }

  getGeneralServicesPerCategory(category: string): GeneralService[] {
    return [];
  }

  getGeneralServiceDetail(id: string): GeneralService {
    return {} as GeneralService;
  }

}
