export const lgBreakpoint = 1200;

export const SELLER_TYPE = 1;
export const BUYER_TYPE = 2;

export const sampleTrade = {
  id: 1,
  tradeStatus: 'PAID',
  tradeName: "Chanaaar",
  tradeAmount: '4',
  paymentMethod: "iTunes Gift Card",
  amountUsd: "77.00",
  amountBtc: '0.00542345',
  tradeHash: 'sfdf7sd87',
  positiveReputation: "+37",
  negativeReputation: "-1",
  messages: [
    {
      id: '1',
      type: SELLER_TYPE,
      message:`
      Aliquam eget finibus ante, non facilisis lectus. Sed vitae dignissim est, vel aliquam tellus.
      Praesent non nunc mollis, fermentum neque at, semper arcu.
      Nullam eget est sed sem iaculis gravida eget vitae justo.
      Aliquam eget finibus ante, non facilisis lectus. Sed vitae dignissim est, vel aliquam tellus.
      Praesent non nunc mollis, fermentum neque at, semper arcu.
      Nullam eget est sed sem iaculis gravida eget vitae justo.
      `,
      date: '2:20 pm'
    },
    {
      id: '2',
      type: BUYER_TYPE,
      message:`
      Aliquam eget finibus ante, non facilisis lectus. Sed vitae dignissim est, vel aliquam tellus.
      Praesent non nunc mollis, fermentum neque at, semper arcu.
      `,
      date: '3:41 pm'
    },
  ],
  newMessages: {
    [SELLER_TYPE]: true,
    [BUYER_TYPE]: true,
  },
}

export const sampleTradeSecond = {
  id: 2,
  tradeStatus: 'NOT PAID',
  tradeName: "Chanaaar",
  tradeAmount: '7',
  paymentMethod: "Amazon Gift Card",
  amountUsd: "85.00",
  amountBtc: '0.00472345',
  tradeHash: 'sfdf7sd87',
  positiveReputation: "+15",
  negativeReputation: "-3",
  messages: [
    {
      id: '1',
      type: SELLER_TYPE,
      message:`
      Aliquam eget finibus ante, non facilisis lectus. Sed vitae dignissim est, vel aliquam tellus.
      Praesent non nunc mollis, fermentum neque at, semper arcu.
      Nullam eget est sed sem iaculis gravida eget vitae justo.
      Aliquam eget finibus ante, non facilisis lectus. Sed vitae dignissim est, vel aliquam tellus.
      `,
      date: '1:54 pm'
    },
    {
      id: '2',
      type: BUYER_TYPE,
      message:`
      Aliquam eget finibus ante, non facilisis lectus. Sed vitae dignissim est, vel aliquam tellus.
      Praesent non nunc mollis, fermentum neque at, semper arcu. Praesent non nunc mollis, fermentum neque at, semper arcu.
      Nullam eget est sed sem iaculis gravida eget vitae justo.
      `,
      date: '1:58 pm'
    }
  ],
  newMessages: {
    [SELLER_TYPE]: true,
    [BUYER_TYPE]: true,
  },
}

export const sampleTradeThird = {
  id: 3,
  tradeStatus: 'NOT PAID',
  tradeName: "Chanaaar",
  tradeAmount: '10',
  paymentMethod: "Amazon Gift Card",
  amountUsd: "58.30",
  amountBtc: '0.00483345',
  tradeHash: 'sfdf7sd87',
  positiveReputation: "+27",
  negativeReputation: "-5",
  messages: [
    {
      id: '1',
      type: SELLER_TYPE,
      message:`
      Aliquam eget finibus ante, non facilisis lectus. Sed vitae dignissim est, vel aliquam tellus.
      Praesent non nunc mollis, fermentum neque at, semper arcu.
      `,
      date: '1:54 pm'
    },
    {
      id: '2',
      type: BUYER_TYPE,
      message:`
      Aliquam eget finibus ante, non facilisis lectus. Sed vitae dignissim est, vel aliquam tellus.
      Praesent non nunc mollis, fermentum neque at, semper arcu. Praesent non nunc mollis, fermentum neque at, semper arcu.
      Nullam eget est sed sem iaculis gravida eget vitae justo.
      Nullam eget est sed sem iaculis gravida eget vitae justo.
      Aliquam eget finibus ante, non facilisis lectus. Sed vitae dignissim est, vel aliquam tellus.
      `,
      date: '2:58 pm'
    }
  ],
  newMessages: {
    [SELLER_TYPE]: true,
    [BUYER_TYPE]: true,
  },
}

export const sampleTradeFourth = {
  id: 4,
  tradeStatus: 'NOT PAID',
  tradeName: "Chanaaar",
  tradeAmount: '10',
  paymentMethod: "Amazon Gift Card",
  amountUsd: "68.30",
  amountBtc: '0.00483345',
  tradeHash: 'sfdf7sd87',
  positiveReputation: "+50",
  negativeReputation: "-2",
  messages: [
    {
      id: '1',
      type: SELLER_TYPE,
      message:`
      Aliquam eget finibus ante, non facilisis lectus. Sed vitae dignissim est, vel aliquam tellus.
      Praesent non nunc mollis, fermentum neque at, semper arcu.
      Aliquam eget finibus ante, non facilisis lectus. Sed vitae dignissim est, vel aliquam tellus.
      Praesent non nunc mollis
      `,
      date: '10:54 am'
    },
    {
      id: '2',
      type: BUYER_TYPE,
      message:`
      Aliquam eget finibus ante, non facilisis lectus. Sed vitae dignissim est, vel aliquam tellus.
      Praesent non nunc mollis, fermentum neque at, semper arcu. Praesent non nunc mollis, fermentum neque at, semper arcu.
      Aliquam eget finibus ante, non facilisis lectus. Sed vitae dignissim est, vel aliquam tellus.
      `,
      date: '3:27 pm'
    },
    {
      id: '3',
      type: SELLER_TYPE,
      message:`
      Aliquam eget finibus ante, non facilisis lectus. Sed vitae dignissim est, vel aliquam tellus.
      Praesent non nunc mollis, fermentum neque at, semper arcu.
      Aliquam eget finibus ante, non facilisis lectus. Sed vitae dignissim est, vel aliquam tellus.
      Praesent non nunc mollis
      `,
      date: '10:54 am'
    },
  ],
  newMessages: {
    [SELLER_TYPE]: true,
    [BUYER_TYPE]: true,
  },
}
