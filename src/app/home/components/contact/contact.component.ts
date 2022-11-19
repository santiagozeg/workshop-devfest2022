import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit{

  lastname = ""

  constructor() {}

  ngOnInit(): void {

  }
}
