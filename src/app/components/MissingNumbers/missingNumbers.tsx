import React from 'react';

interface IMissingNumbers {
    onAction: () => void;
    input: any;
    output: string
}

const MissingNumbers = ({ onAction, input, output }: IMissingNumbers) => {
    return <div>
        <div>
            <textarea ref={input} />
        </div>
        <div onClick={onAction}>Enviar</div>
        <div>{output}</div>
    </div>
}

export default MissingNumbers;
