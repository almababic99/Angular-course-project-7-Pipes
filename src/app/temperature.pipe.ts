// Custom pipe for formatting temperature:

import { Pipe, PipeTransform } from "@angular/core";

@Pipe({  // To use this pipe we need to add TemperaturePipe in app.component.ts in imports and then we can use it in app.component.html
    name: 'temp',  // his is the name of the pipe, which will be used in templates to apply the transformation. In this case, you would use the temp pipe in the template (e.g., {{ temperature | temp:'cel' }}).
    standalone: true  // his property makes the pipe standalone, meaning it doesn’t need to be declared inside an Angular module (e.g., NgModule) to be used. It can be imported directly into the component.
}) 

export class TemperaturePipe implements PipeTransform {   // TemperaturePipe implements the PipeTransform interface, which requires the implementation of the transform() method.
    transform(value: string | number | null, inputType: 'cel' | 'fah', outputType?: 'cel' | 'fah') {  
    // value: string | number | null: This is the input value that we want to transform. It can be either a string, a number, or null.
    // inputType: 'cel' | 'fah': This is a required parameter that tells the pipe whether the input value is in Celsius ('cel') or Fahrenheit ('fah').
    // outputType?: 'cel' | 'fah': This is an optional parameter that specifies whether the output should be in Celsius ('cel') or Fahrenheit ('fah'). If not provided, it will default to the input type.

        if (!value) {
            return value;   // if the value is null or undefined or 0 it simply returns the value without transformation.
        }

        // This code ensures that the input value is a number.:
        let val: number;
        if (typeof value === 'string') {    
            val = parseFloat(value);   // If the value is a string (e.g., '20'), it is converted to a number using parseFloat.
        } else {
            val = value;  // If it's already a number, it is used as is.
        }

        let outputTemp: number;
        if (inputType === 'cel' && outputType === 'fah') {  // If the input type is Celsius ('cel') and the output type is Fahrenheit ('fah'), the temperature is converted from C to F
            outputTemp = val * (9 / 5) + 32;
        } else if (inputType === 'fah' && outputType === 'cel') {  // If the input type is Fahrenheit ('fah') and the output type is Celsius ('cel'), the temperature is converted from F to C
            outputTemp = (val - 32) * (5 / 9);
        } else {  // If the input and output types are the same, the value is returned as is without any conversion.
            outputTemp = val;
        } 

        let symbol: '°C' | '°F';
        if (!outputType) {   // If no outputType is provided, it uses the inputType to determine whether to use '°C' (Celsius) or '°F' (Fahrenheit).
            symbol = inputType === 'cel' ? '°C' : '°F';
        } else {  // If an outputType is provided, it uses that to determine the symbol.
            symbol = outputType === 'cel' ? '°C' : '°F';
        }

        return `${outputTemp.toFixed(2)} ${symbol}`;
        // The outputTemp.toFixed(2) ensures that the output temperature is formatted to 2 decimal places.
        // The symbol is then appended to the output temperature (either '°C' or '°F').
    }
}
