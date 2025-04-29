export interface IntegrationData {
  jobName: string;
  jobType: string;
  dbType: number;
  integrationType: number;
  connectionStrign: string | null;
  query: string;
  mapping: string;
  xeroClientId: string | null;
  xeroScopes: string | null;
  xeroState: string | null;
  xeroEndPoint: string | null;
  xeroResponsPort: string | null;
  xeroRedirectUri: string | null;
  username: string | null;
  password: string | null;
  odoourl: string | null;
  ddoodb: string | null;
  odoousername: string | null;
  odoopassword: string | null;
  id: number;
  rowStatus: number;
  registrationTaxFlag: string;
  userCreatedId: number;
}

export interface IntegrationResponse {
  errors: any[];
  acceptedObjects: IntegrationData[];
  rejectedObjects: any[];
} 