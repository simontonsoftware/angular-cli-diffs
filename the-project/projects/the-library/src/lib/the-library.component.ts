import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-the-library',
  template: `
    <p>
      the-library works!
    </p>
  `,
  styles: [
  ]
})
export class TheLibraryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
