import { sum } from "../sum"

test('Sum function should calculate the sum of two Numbers', () => { 
    const result = sum(4, 2);
    // Assertion 
    expect(result).toBe(6);
 });

