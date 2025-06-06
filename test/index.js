const hsl = require('../')
const t = require('tap')

t.test('pure white', (t) => {
  const expected = '#ffffff'
  const actual = hsl(0, 100, 100)
  const it = `
    max saturation and luminosity should return pure white
  `
  t.equal(actual, expected, it)
  t.end()
})

t.test('medium gray', (t) => {
  const expected = '#808080'
  const actual = hsl(0, 0, 50)
  const it = `
    0% saturation, 50% luminosity should be medium gray
  `
  t.equal(actual, expected, it)
  t.end()
})

t.test('hue', (t) => {
  {
    const expected = '#ff0000'
    const actual = hsl(0, 100, 50)
    const it = `
      0deg should be red
    `
    t.equal(actual, expected, it)
  }
  {
    const expected = '#0000ff'
    const actual = hsl(240, 100, 50)
    const it = `
      240deg should be blue
    `
    t.equal(actual, expected, it)
  }
  {
    const expected = '#00ffff'
    const actual = hsl(180, 100, 50)
    const it = `
      180deg should be cyan
    `
    t.equal(actual, expected, it)
  }
  t.end()
})

t.test('degree overflow/underflow', (t) => {
  {
    const expected = hsl(1, 100, 50)
    const actual = hsl(361, 100, 50)
    const it = `
      361deg should be the same as 1deg
    `
    t.equal(actual, expected, it)
  }
  {
    const expected = hsl(-1, 100, 50)
    const actual = hsl(359, 100, 50)
    const it = `
      -1deg should be the same as 359deg
    `
    t.equal(actual, expected, it)
  }
  t.end()
})

t.test('max constraint', (t) => {
  {
    const expected = hsl(0, 101, 50)
    const actual = hsl(0, 100, 50)
    const it = `
      101% should be the same as 100%
    `
    t.equal(actual, expected, it)
  }
  {
    const expected = hsl(0, -1, 50)
    const actual = hsl(0, 0, 50)
    const it = `
      -1% should be the same as 0%
    `
    t.equal(actual, expected, it)
  }
  t.end()
})
