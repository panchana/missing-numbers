import { useMissingNumbers } from '../../core/hooks';
import { missingNumbersInput1, missingNumbersInput2, missingNumbersInput3, missingNumbersInput4 } from '../../__mocks__/useMissingNumbers.mock';

let MissingContext: any = null;

beforeEach(() => {
    MissingContext = useMissingNumbers();
});

describe('useMissingNumbers', () => {

    it('should have an `handleMissingNumbers` function', () => {
        expect(MissingContext.handleMissingNumbers).toBeInstanceOf(Function);
    });

    it('should be `missingNumbersInput1` Output success', () => {
        const response = '204 205 206';
        const { handleMissingNumbers } = MissingContext;
        const output = handleMissingNumbers(missingNumbersInput1);
        expect(output).toBe(response);
    });

    it('should be `missingNumbersInput2` Output success', () => {
        const response = '3670 3674 3677 3684 3685 3695 3714 3720';
        const { handleMissingNumbers } = MissingContext;
        const output = handleMissingNumbers(missingNumbersInput2);
        expect(output).toBe(response);
    });

    it('should be `missingNumbersInput3` Output success', () => {
        const response = '8587 8609';
        const { handleMissingNumbers } = MissingContext;
        const output = handleMissingNumbers(missingNumbersInput3);
        expect(output).toBe(response);
    });

    it('should be `missingNumbersInput4` Output success', () => {
        const response = '3 7 8 10 12';
        const { handleMissingNumbers } = MissingContext;
        const output = handleMissingNumbers(missingNumbersInput4);
        expect(output).toBe(response);
    });

});
