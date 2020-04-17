export type Message = {
  id: string;
  type: string,
  message: string,
  date: string,
};

export type Trade = {
  id: number,
  tradeStatus: string,
  tradeName: string,
  tradeAmount: string,
  tradeHash: string,
  amountBtc: string,
  amountUsd: string,
  paymentMethod: string,
  positiveReputation: string,
  negativeReputation: string,
  messages: Array<Message>,
  newMessages: {
    [key: number]: boolean
  },
}
