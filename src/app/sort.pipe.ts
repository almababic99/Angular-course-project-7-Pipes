// Custom pipe for sorting:

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({   // To use this pipe we need to add SortPipe in app.component.ts in imports and then we can use it in app.component.html
  name: 'sort',  // This is the name of the pipe, which will be used in templates to apply the sorting functionality. In this case, the pipe is named sort.
  standalone: true,  // This makes the pipe a standalone pipe, meaning it doesn’t depend on other modules or components to function.
  pure: false  // By default, Angular pipes are pure, meaning they only re-run when the input changes (immutable data). 
  // Setting pure: false makes this pipe impure, meaning it will re-run every time the component changes, regardless of whether the input changes. This might be useful for sorting dynamic data where changes happen frequently.
})
export class SortPipe implements PipeTransform { // The SortPipe class implements the PipeTransform interface, which requires a transform() method. This is the method that Angular calls when the pipe is used in the template.

  transform(value: string[] | number[], direction: 'asc' | 'desc' = 'asc') {
    // value: string[] | number[]: The input to the pipe, which must be an array of strings or numbers.
    // direction: 'asc' | 'desc' = 'asc': The direction in which to sort the array, which can either be 'asc' (ascending) or 'desc' (descending). The default value is 'asc' if no direction is provided.

    const sorted = [...value];
    // The transform() method first creates a shallow copy of the input array (value) to avoid mutating the original array directly. This is done using the spread syntax (...), which creates a new array containing the same elements as the original.

    sorted.sort((a, b) => {  // The sort() function arranges the elements in the specified order: ascending or descending.
      if (direction === 'asc') {  // If the direction is ascending (asc), it returns 1 if a is greater than b (meaning a should come after b), and -1 otherwise.
        return a > b ? 1 : -1;
      } else {
        return a > b ? -1 : 1;  // If the direction is descending (desc), it returns -1 if a is greater than b (meaning a should come before b), and 1 otherwise.
      }
    });

    return sorted;  // The method returns the sorted array, which is the result of the sorting operation.
  }

}
