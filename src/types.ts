import type { Address } from "viem";
import { PYTH_SYMBOL_TO_PRICE_ID } from "./constants";

export type OrderInput = {
  pairBase: Address;
  isLong: boolean;
  tokenIn: Address;
  amountIn: number;
  qty: number;
  price: number;
  stopLoss: number;
  takeProfit: number;
  broker: number;
};

export type MarketData = {
  pairBase: string;
  longQty: bigint;
  shortQty: bigint;
  lpLongAvgPrice: bigint;
  lpShortAvgPrice: bigint;
  fundingFeeRate: bigint;
};

export type PythSymbolForAstherus = keyof typeof PYTH_SYMBOL_TO_PRICE_ID;
