import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-the-library',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      the-library works!
    </p>
  `,
  styles: ``
})
export class TheLibraryComponent {

}
