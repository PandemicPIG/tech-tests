function mostFrequentItem(arr) {
  // return the most frequent item in the array
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
test('should handle arrays with a single item', () => {
  expect(mostFrequentItem(['apple'])).toBe('apple')
})

test('should handle empty arrays and return null', () => {
  expect(mostFrequentItem([])).toBe(null)
})

test('should return the most frequent item in an array', () => {
  expect(mostFrequentItem([1, 2, 3, 4, 4, 4, 5, 5])).toBe(4)
  expect(mostFrequentItem(['apple', 'banana', 'banana', 'cherry', 'cherry', 'banana'])).toBe('banana')
})

test('should return the first most frequent item if there are multiple', () => {
  expect(mostFrequentItem(['apple', 'banana', 'banana', 'cherry', 'cherry'])).toBe('banana')
})

test('should handle arrays with multiple most frequent items', () => {
  expect(mostFrequentItem([1, 1, 2, 2, 3])).toBe(1)
  expect(mostFrequentItem([1, 1, 2, 2, 3, 3, 4, 5, 5 ,5, 6, 6, 6, 7, 7, 8, 8, 8])).toBe(1)
})

test('should handle long arrays', () => {
  const longArray = [...(new Array(10**3).fill(1)), ...(new Array(10**4).fill(2)), ...(new Array(10**5).fill(3)), ...(new Array(10**6).fill(4))]
  expect(mostFrequentItem(longArray)).toBe(4)
})

test('should handle arrays with non-primitive items', () => {
  const obj1 = { id: 1 }
  const obj2 = { id: 2 }
  const obj3 = { id: 3 }
  expect(mostFrequentItem([obj1, obj2, obj2, obj3, obj3, obj3]).id).toBe(obj3.id)
})
