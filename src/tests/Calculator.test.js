import { Calculator } from '../classes/Calculator';

describe('calculator', () => {
    it("should return '6' as the result of '3 + 3' ", ()=>{
        let calculator = new Calculator();
        expect(calculator.add(3,3)).toBe(6);
    });
});