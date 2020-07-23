import { commaSeparated } from './commaSeparated'

const matchNumber: string = '1,000'

describe('should add comma', () => {
  test('3-digit grouping number', () => {
    expect(commaSeparated(1000)).toBe(matchNumber)
  })
  test('not 3-digit grouping number', () => {
    expect(commaSeparated(100)).not.toBe(matchNumber)
  })
})
