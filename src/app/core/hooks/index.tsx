export const useMissingNumbers = () => {

    const removeDuplicate = (value: any, index: number, self: any) => {
        return self.indexOf(value) === index;
    } 

    const handleMissingNumbers = (input?: string) => {
        
        if (!input) return '';

        const lines = input.split('\n').map(line => {
            /**
             * Se generan los array
             */
            return line.split(' ');
        }).filter((_, index) => {
            /**
             * Se filtran los array impares, lo que tienen la listas
             */
            return index % 2 === 1;
        }).reduce((a: string[],b: string[]) => {
            /**
             * LÓGICA REAL PARA LA SOLUCIÓN DEL PROBLEMA.
             */
            /**
             * Se eliminan los elementos que existen en el otro array
             */
            a.map(c => { 
                var i = b.indexOf(c);
                b.splice(i, 1)
                return c;
            });
            /**
             * Filtramos elementros duplicados y ordenamos
             */
            return b.filter(removeDuplicate)
            .sort((c, d) => parseInt(c) - parseInt(d));
        });
        return lines.join(' ');
    }

    return {
        handleMissingNumbers
    }
}