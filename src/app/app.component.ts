import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'my-app';
  public msg = 'Hello, my-app';

  onChange(msg: string) {
    this.msg = msg;
  }
  public fruits = [
    { name: 'Apple', price: 10 },
    { name: 'Orange', price: 20 },
    { name: 'Mango', price: 30 },
    { name: 'Banana', price: 40 },
    { name: 'Pineapple', price: 50 },
  ];
}
