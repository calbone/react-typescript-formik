/**
 *
 * @param amount
 * ３桁ごとにカンマ区切りが入る
 */
export const commaSeparated = (amount: number) =>
  Number(amount).toLocaleString()
