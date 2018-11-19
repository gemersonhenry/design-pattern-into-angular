import { GeneralService } from './factory-models.service';

export interface FactoryInterfaceService {

  getAllGeneralServices(): GeneralService[];

  getGeneralServicesPerCategory(category: string): GeneralService[];

  getGeneralServiceDetail(id: string): GeneralService;

}
