import { createSlice } from "@reduxjs/toolkit";

// This initializes our variables when the game starts
const initialState = {
  bux: 0,
  steps: 0,
  income: 0,
  fbIncome: 0,
  zIncome: 0,
  incomes: [],
  timeSinceLastStep: 1,
};

export const gameSlice = createSlice({
  name: "game",
  initialState: initialState,
  reducers: {
    addBux: (state, action) => {
      // Action contains the type of action and the payload, containing the amount of bux to add
      state.bux += action.payload;
    },
    subtractBux: (state, action) => {
      // Action contains the type of action and the payload, containing the amount of bux to subtract
      state.bux -= action.payload;
    },
    addIncome: (state, action) => {
      /**
       * This action should be passed an object of the following shape:
       * {"id": 1, "amount": 1000}
       */
      // Look to see if we already have this type of income in the array
      const incomeIndex = state.incomes.findIndex(
        (income) => action.payload.id === income.id
      );
      if (incomeIndex == -1) {
        // This type of income isn't yet in the array
        state.incomes.push(action.payload);
      } else {
        // The income MUST have an id, if it doesn't, report error
        if (!action.payload.id) {
          console.error("Income must have an id");
          return;
        }
        if (!action.payload.amount) {
          console.error("Income must have an amount");
          return;
        }
        // Add the income amount to what we already have
        state.incomes[incomeIndex].amount += action.payload.amount;
      }
    },
    subtractIncome: (state, action) => {
      /**
       * This action should be passed an object of the following shape:
       * {"id": 1, "amount": 1000}
       */
      // Look to see if we already have this type of income in the array
      const incomeIndex = state.incomes.findIndex(
        (income) => action.payload.id === income.id
      );
      if (incomeIndex == -1) {
        // This type of income isn't yet in the array
        state.incomes.push(action.payload);
      } else {
        // The income MUST have an id, if it doesn't, report error
        if (!action.payload.id) {
          console.error("Income must have an id");
          return;
        }
        if (!action.payload.amount) {
          console.error("Income must have an amount");
          return;
        }
        // Subtract the income amount to what we already have
        state.incomes[incomeIndex].amount -= action.payload.amount;
      }
    },
    removeIncomeById: (state, action) => {
      // This reducer removes an income by id
      if (!action.payload.id) {
        // The ID must be specified, otherwise report error
        console.error("Error removing income, id not specified");
        return;
      }
      // Filter the income to be removed out of the array
      state.incomes = state.incomes.filter(
        (income) => income.id !== action.payload.id
      );
    },
    // TODO: Add reducers for each value you need to manipulate
    resetGame: (state) => {
      // Reset every value to the initial value
      state = initialState;
    },
  },
});

export const { addBux, subtractBux, addIncome, subtractIncome, resetGame } =
  gameSlice.actions;
export const gameReducer = gameSlice.reducer;
