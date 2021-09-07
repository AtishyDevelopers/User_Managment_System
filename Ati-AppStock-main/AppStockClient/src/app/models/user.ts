export interface User {
    id?: number;
    firstname?: string;
    lastname?: string;
    username: string;
    password: string;
    role: string;
    fullname: string;  
    token?: string;
  }