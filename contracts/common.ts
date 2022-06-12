/** Режим торгов инструмента */
export enum SecurityTradingStatus {
  /** SECURITY_TRADING_STATUS_UNSPECIFIED - Торговый статус не определён */
  SECURITY_TRADING_STATUS_UNSPECIFIED,
  /** SECURITY_TRADING_STATUS_NOT_AVAILABLE_FOR_TRADING - Недоступен для торгов */
  SECURITY_TRADING_STATUS_NOT_AVAILABLE_FOR_TRADING,
  /** SECURITY_TRADING_STATUS_OPENING_PERIOD - Период открытия торгов */
  SECURITY_TRADING_STATUS_OPENING_PERIOD,
  /** SECURITY_TRADING_STATUS_CLOSING_PERIOD - Период закрытия торгов */
  SECURITY_TRADING_STATUS_CLOSING_PERIOD,
  /** SECURITY_TRADING_STATUS_BREAK_IN_TRADING - Перерыв в торговле */
  SECURITY_TRADING_STATUS_BREAK_IN_TRADING,
  /** SECURITY_TRADING_STATUS_NORMAL_TRADING - Нормальная торговля */
  SECURITY_TRADING_STATUS_NORMAL_TRADING,
  /** SECURITY_TRADING_STATUS_CLOSING_AUCTION - Аукцион закрытия */
  SECURITY_TRADING_STATUS_CLOSING_AUCTION,
  /** SECURITY_TRADING_STATUS_DARK_POOL_AUCTION - Аукцион крупных пакетов */
  SECURITY_TRADING_STATUS_DARK_POOL_AUCTION,
  /** SECURITY_TRADING_STATUS_DISCRETE_AUCTION - Дискретный аукцион */
  SECURITY_TRADING_STATUS_DISCRETE_AUCTION,
  /** SECURITY_TRADING_STATUS_OPENING_AUCTION_PERIOD - Аукцион открытия */
  SECURITY_TRADING_STATUS_OPENING_AUCTION_PERIOD,
  /** SECURITY_TRADING_STATUS_TRADING_AT_CLOSING_AUCTION_PRICE - Период торгов по цене аукциона закрытия */
  SECURITY_TRADING_STATUS_TRADING_AT_CLOSING_AUCTION_PRICE,
  /** SECURITY_TRADING_STATUS_SESSION_ASSIGNED - Сессия назначена */
  SECURITY_TRADING_STATUS_SESSION_ASSIGNED,
  /** SECURITY_TRADING_STATUS_SESSION_CLOSE - Сессия закрыта */
  SECURITY_TRADING_STATUS_SESSION_CLOSE,
  /** SECURITY_TRADING_STATUS_SESSION_OPEN - Сессия открыта */
  SECURITY_TRADING_STATUS_SESSION_OPEN,
  /** SECURITY_TRADING_STATUS_DEALER_NORMAL_TRADING - Доступна торговля в режиме внутренней ликвидности брокера */
  SECURITY_TRADING_STATUS_DEALER_NORMAL_TRADING,
  /** SECURITY_TRADING_STATUS_DEALER_BREAK_IN_TRADING - Перерыв торговли в режиме внутренней ликвидности брокера */
  SECURITY_TRADING_STATUS_DEALER_BREAK_IN_TRADING,
  /** SECURITY_TRADING_STATUS_DEALER_NOT_AVAILABLE_FOR_TRADING - Недоступна торговля в режиме внутренней ликвидности брокера */
  SECURITY_TRADING_STATUS_DEALER_NOT_AVAILABLE_FOR_TRADING,
  UNRECOGNIZED,
}

/** Денежная сумма в определенной валюте */
export interface MoneyValue {
  /** строковый ISO-код валюты */
  currency: string;
  /** целая часть суммы, может быть отрицательным числом */
  units: number;
  /** дробная часть суммы, может быть отрицательным числом */
  nano: number;
}

/** Котировка - денежная сумма без указания валюты */
export interface Quotation {
  /** целая часть суммы, может быть отрицательным числом */
  units: number;
  /** дробная часть суммы, может быть отрицательным числом */
  nano: number;
}

/** Проверка активности стрима. */
export interface Ping {
  /** Время проверки. */
  time: Date | undefined;
}
