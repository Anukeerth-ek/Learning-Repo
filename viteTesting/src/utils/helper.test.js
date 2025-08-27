import { describe, it, expect } from 'vitest'
import { subtract } from './helper'

describe('Subtraction of 2 numbers', () => {
    it('return 2 if num1 is 4 and num2 is 2', () => {
        expect(subtract(4, 2)).toBe(2)
    });

    it('Checks for string values', () => {
        expect(subtract('1', '1')).toBe(0)
    })
})
