export interface IUser {
  activated?: boolean;
  authorities: string[];
  createdBy: string;
  createdDate: string;
  email: string;
  emissor: any;
  firstName: string;
  id: number;
  imageUrl: string;
  langKey: string;
  lastModifiedBy: string;
  lastModifiedDate: string;
  lastName: string;
  login: string;
  password?: string;
}
