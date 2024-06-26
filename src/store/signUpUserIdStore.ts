import { create } from "zustand";

export interface UserIdState {
  uid: string;
}

export interface UserIdAction {
  setUserId: (uid: UserIdState["uid"]) => void;
  revokeUserId: () => void;
}

export const useSignUpUserIdStore = create<UserIdState & UserIdAction>()(
  (set) => ({
    uid: "",
    setUserId: (userId) => set(() => ({ uid: userId })),
    revokeUserId: () => set(() => ({ uid: "" })),
  })
);
