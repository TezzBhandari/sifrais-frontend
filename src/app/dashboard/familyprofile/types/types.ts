
export interface IFamilyProfile {
    email_address: string;
    mobile_no: string;
    landline_no: string;
    kardata_number: string;
    permanent_province_id: number;
    permanent_district_id: number;
    permanent_locallevel_id: number;
    permanent_ward: string;
    permanent_tole: string[]; // You mentioned [...], assuming it's an array of strings
    temporary_province_id: number;
    temporary_district_id: number;
    temporary_locallevel_id: number;
    temporary_ward: string;
    temporary_tole: string;
    verified_2fa: boolean;
  }
  
 