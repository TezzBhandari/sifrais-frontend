export interface IUser {
    sn: number;
    fullname: string;
    address: string;
    phonenumber: string;
    status: boolean;
}

export interface IPublicUser {
    sn: number;
    taxpayernumber: string;
    tole: string;
    phonenumber: string;
}