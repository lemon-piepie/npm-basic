import {transform} from "../src/romanizer";

describe('transform', () => {
    it('should return X when input 10', () => {
        const result = transform(10);
        console.log(result);
        expect(result).toEqual('X');
    });
});