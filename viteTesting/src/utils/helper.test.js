import { describe, it, expect } from 'vitest'
import { COMPANIES, postDetails, reverseString, subtract, USER_POST_API_URL } from './helper'

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

// describe('USER_POST_API_URL', () => {
//     it('Check if user post url is correct or not', () => {
//         expect(USER_POST_API_URL).toBe('https://api.com/user/posts')
//     })
// })

// describe('Companies name check', () => {
//     it("Should check the provided company name", () => {
//         expect(COMPANIES).toEqual(["GOOGLE", "META", "MICROSOFT", "APPLE"])
//     })
// })

// describe('Check postDetail', () => {

    // This is usefull if we have hardcoded object and if we need to check if that value is existing in there

    // it('Should have post details', () => {
    //     expect(postDetails).toEqual({
    //         category: "Technology",
    //         views: 24000
    //     })
    // })

    // Thsi is usefull if we have an object value that we will get from an api

//     it('Should have the category property', () => {
//         expect(postDetails).toHaveProperty("category");
//         expect(postDetails).toHaveProperty("views")
//     })
// })