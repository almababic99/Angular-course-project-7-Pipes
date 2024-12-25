import { DatePipe, DecimalPipe } from '@angular/common';
import { Component } from '@angular/core';
import { TemperaturePipe } from './temperature.pipe';

@Component({
  selector: 'app-root',   // This defines the custom HTML tag that will represent this component in the HTML. In this case, it’s <app-root>.
  standalone: true,   // This indicates that the component is a standalone component and can be used independently (not part of a module). 
  templateUrl: './app.component.html',   // This refers to the HTML template file (app.component.html) that defines the structure of the component's view (what the user sees on the screen).
  imports: [DatePipe, DecimalPipe, TemperaturePipe]   
  // DatePipe is a built-in pipe that allows you to format dates. 
  // DecimalPipe is a built-in pipe that is used to format numeric values.
})
export class AppComponent {
  currentDate = new Date();  // This initializes the currentDate property with the current date and time using JavaScript's Date object.
  currentTemperaturs = {  // This object holds the current temperature for several cities.
    berlin: 4.2749812,
    newYork: 18.1214,
    paris: 72.1209001,
    chicago: 65.0775238,
  };

  historicTemperatures = [  // This is an array that represents a list of temperatures for different time points. These might represent historical temperature data, such as from previous days or months.
    25, 37, 19, -4, 28, 21, 19, 28, 33, 31, 9, 11, 5, -12, -5,
  ];

  onReset(index: number) {  // This method accepts an index and resets the temperature at that index in the historicTemperatures array to 18.
    this.historicTemperatures[index] = 18;
  }
}
