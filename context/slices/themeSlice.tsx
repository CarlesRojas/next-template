import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ThemeState {
    dark: boolean;
    accentColor: string;
    status: "idle" | "loading" | "failed";
}

const initialState: ThemeState = {
    dark: false,
    accentColor: "ed0022",
    status: "idle",
};

function sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

const changeThemeAsync = createAsyncThunk("theme/switch", async (dark: boolean) => {
    await sleep(500);
    return dark;
});

export const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        changeAccentColor: (state, action: PayloadAction<string>) => {
            state.accentColor = action.payload;
        },
    },

    extraReducers: (builder) => {
        builder
            .addCase(changeThemeAsync.pending, (state) => {
                state.status = "loading";
            })
            .addCase(changeThemeAsync.fulfilled, (state, action) => {
                state.status = "idle";
                state.dark = action.payload;
            });
    },
});

const actions = { changeThemeAsync, changeAccentColor: themeSlice.actions.changeAccentColor };
export default actions;

export const { changeAccentColor } = themeSlice.actions;
