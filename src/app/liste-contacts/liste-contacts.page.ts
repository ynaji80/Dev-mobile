import { Component, OnInit } from '@angular/core';
import { contacts } from "../Contacts";
import { Contact } from "../model/Contact";

@Component({
  selector: 'app-liste-contacts',
  templateUrl: './liste-contacts.page.html',
  styleUrls: ['./liste-contacts.page.scss'],
})
export class ListeContactsPage implements OnInit {
  contacts : Contact[] = contacts;

  constructor() { }

  ngOnInit() {
    this.contacts = contacts;
  }

}
