export enum OperatorToken {
  PERCENT = '%',
  PLUS = '+',
  MINUS_1 = '-',
  MINUS_2 = '−',
  MULTIPLIER_1 = '*',
  MULTIPLIER_2 = '×',
  MULTIPLIER_3 = 'X',
  MULTIPLIER_4 = 'x',
  DIVIDER_1 = '/',
  DIVIDER_2 = '÷',
  EQUAL = '=',
  POW = '^',
  RADICAL = '√',
  P_OPEN = '(',
  P_CLOSE = ')',
}

export enum OperatorAssoc {
  RIGHT,
  LEFT
}

export enum Errors {
  DIVISION_BY_ZERO = 'Division by zero',
  OPERATOR_NOT_SUPPORTED = 'Operator \'{operator}\' not supported',
  TOO_MANY_OPEN_PARENTHESES = 'Unclosed parentheses',
  TOO_MANY_CLOSE_PARENTHESES = 'Too many close parentheses',
  NUMBER_NOT_VALID = 'Number \'{number}\' not valid',
  PERCENT_CANT_BE_FIRST = 'Percent can\'t be first',
}
