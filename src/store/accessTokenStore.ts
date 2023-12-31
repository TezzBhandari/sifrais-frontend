import { create } from "zustand";

export interface AcessTokenState {
  accessToken: string;
}

export interface AccessTokenAction {
  setAccessToken: (token: AcessTokenState["accessToken"]) => void;
  revokeAccessToken: () => void;
}

export const useAccessTokenStore = create<
  AcessTokenState & AccessTokenAction
>()((set) => ({
  accessToken: "",
  setAccessToken: (token) => set(() => ({ accessToken: token })),
  revokeAccessToken: () => set(() => ({ accessToken: "" })),
}));
