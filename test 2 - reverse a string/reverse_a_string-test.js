function reverseString(string) {
  // reverse a string
}


// test logic
function test(description, callback) {
  console.log(description)
  callback()
}

function expect(actual) {
  return {
    toBe(expected) {
      if (actual === expected) {
        console.log('Test passed')
      } else {
        console.log(`Expected ${expected}, but got ${actual}`)
      }
    }
  }
}

// tests
test('reverseString should return the reversed string', () => {
  expect(reverseString('banana')).toBe('ananab')
  expect(reverseString('the quick brown fox jumps over the lazy dog')).toBe('god yzal eht revo spmuj xof nworb kciuq eht')
  expect(reverseString('H8Hjhu#y0980-Htf767$sh90')).toBe('09hs$767ftH-0890y#uhjH8H')
  expect(reverseString('{data:"my data"}')).toBe('}"atad ym":atad{')
})
