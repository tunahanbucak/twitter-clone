import { createSlice } from "@reduxjs/toolkit";

interface Account {
  id: number;
  username: string;
  fullName: string;
  avatar: string;
}

interface AuthState {
  currentAccount: Account;
  accounts: Account[];
}

const initialState: AuthState = {
  currentAccount: {
    id: 1,
    username: "tunahanbucakcom",
    fullName: "tunahanbucak",
    avatar:
      "https://pbs.twimg.com/profile_images/1200814302820753410/AhAh3xlU_400x400.png",
  },
  accounts: [
    {
      id: 1,
      username: "TunahanBucak",
      fullName: "Tunahan Buçak",
      avatar:
        "https://pbs.twimg.com/profile_images/1645080789472665601/i0Uwo_sL_400x400.jpg",
    },
    {
      id: 2,
      username: "tayfunerbilen",
      fullName: "Tayfun Erbilen",
      avatar:
        "https://pbs.twimg.com/profile_images/1665642354009677824/LNZo7V8x_400x400.jpg",
    },
  ],
};

const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    ///
    _addAccount: (state, action) => {
      state.accounts.push(action.payload);
    },

    _removeAccount: (state, action) => {
      state.accounts = state.accounts.filter(
        (account) => account.id !== action.payload
      );
      if (state.currentAccount) {
        state.currentAccount = initialState.currentAccount;
      }
    },

    _setCurrentAccount: (state, action) => {
      state.currentAccount = action.payload;
    },
  },
});

export const { _addAccount, _setCurrentAccount, _removeAccount } = auth.actions;
export default auth.reducer;
