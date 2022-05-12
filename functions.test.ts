const {shuffleArray} = require('./utils')

describe('shuffleArray should type string', () => {
    it('should be the same length as newArr', () => {
        const newArr = [0, 2, 4, 6,]
        expect(shuffleArray(newArr)).toHaveLength(4)
    })
})

describe('shuffleArray should', () =>{
    it('should not be a null value', () => {
        const newArr = [0, 2, 4, 6, 8]
        expect(shuffleArray(newArr)).not.toBeNull()
    })
})
