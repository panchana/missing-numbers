import React, { useRef, useState } from 'react';
import MissingNumbers from './missingNumbers';
import { pathOr } from 'ramda';

/** Hooks */
import { useMissingNumbers } from '../../core/hooks';

const WrapperMissingNumbers = () => {

    const missingNumbersContext = useMissingNumbers();

    const input = useRef(null);
    const [output, setOutput] = useState('');

    const onAction = () => {
        const { handleMissingNumbers } = missingNumbersContext; 
        const value = pathOr('', ['current', 'value'], input);
        const response = handleMissingNumbers(value);
        setOutput(response);
    }

    return <MissingNumbers onAction={onAction} input={input} output={output}/>
}

export default WrapperMissingNumbers;
