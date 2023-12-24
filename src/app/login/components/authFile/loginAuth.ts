import { create } from "zustand";



interface TUserLogin {
    token_type: string,
    expires_in: number,
    access_token: string,
    refresh_token: string
}

interface TUserLoginStore extends TUserLogin  {
        userLogin: (data: TUserLogin)=> void;
}

export const userLoginStore = create<TUserLoginStore>((set)=> (
    {
        token_type: '',
        expires_in: 0,
        access_token: '',
        refresh_token: '',
        userLogin: (data) => set((state) => (
            {
                token_type: data.token_type,
                expires_in: data.expires_in,
                access_token: data.access_token,
                refresh_token: data.refresh_token
            }
        )),

    }
))