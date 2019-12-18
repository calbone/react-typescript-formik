const colors = {
  // Base
  baseA: '#f2f2f2',
  baseB: '#fafafa',
  baseC: '#fff',
  baseD: '#fffff2',
  baseE: '#fff9f2',
  baseF: '#fff4f3',
  baseG: '#f9f2fd',
  // Main
  mainA: '#111',
  mainB: '#484848',
  mainC: '#818181',
  mainD: '#b9b9b9',
  // Accent
  accentA: '#ff8e00',
  accentB: '#8700cc',
  accentC: '#00cc4b',
  // Alert
  alertA: '#fb311a',
  alertB: '#ffe100',
  alertC: '#0063cc'
} as const

const breakpoints = ['767', '768', '992', '1280'] as const
const margin = 8 as const

const theme = {
  colors,
  breakpoints,
  margin
}

export { theme }
