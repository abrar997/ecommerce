export const WITHDRAW_MONEY = "WITHDRAW_MONEY";
export const DEPOSIT_MONEY = "DEPOSIT_MONEY";

export const withdraw = (amount) => {
  return {
    type: WITHDRAW_MONEY,
    payload: amount,
  };
};
export const deposit = (amount) => {
  return {
    type: DEPOSIT_MONEY,
    payload: amount,
  };
};
