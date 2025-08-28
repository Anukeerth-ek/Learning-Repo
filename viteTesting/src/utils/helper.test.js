import { describe, it, expect } from 'vitest'
import { reverseString, subtract, USER_POST_API_URL } from './helper'

// describe('Subtraction of 2 numbers', () => {
//     it('return 2 if num1 is 4 and num2 is 2', () => {
//         expect(subtract(4, 2)).toBe(2)
//     });

//     it('Checks for string values', () => {
//         expect(subtract('1', '1')).toBe(0)
//     })
// })

// describe('reverse String function', () => {
//     it('Should return reversed string', () => {
//         expect(reverseString('Hello')).toBe('olleH')
//     });

//     it('Should return none if we pass a number', () => {
//         expect(reverseString(321)).toBe('none')
//     })
// })

describe('USER_POST_API_URL', () => {
    it('Check if user post url is correct or not', () => {
        expect(USER_POST_API_URL).toBe('https://api.com/user/posts')
    })
})