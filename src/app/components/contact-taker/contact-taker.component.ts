import { Component, OnInit } from '@angular/core';
import { ContactModule } from '../../model/contact/contact.module';
import { ContactService } from 'src/app/service/contact.service';
import { logging } from 'protractor';

@Component({
  selector: 'app-contact-taker',
  templateUrl: './contact-taker.component.html',
  styleUrls: ['./contact-taker.component.css']
})

export class ContactTakerComponent implements OnInit {
  panelOpenState = false;
  // username:string = "Ram";
  contactModule :ContactModule ;
  contactList:Array<ContactModule> = [];
  constructor(private contactService:ContactService) {
    this.contactModule = new ContactModule();
   }

  ngOnInit(): void {
    
    this.contactService.getAllContacts().subscribe(res => {
      console.log(`contact ${res}`);
      this.contactList = res;
    })

  }
  addContact(){
  
     this.contactService.addContact(this.contactModule)
         .subscribe(
      resp => {
        this.contactList.push(this.contactModule)
        this.contactModule = new ContactModule();
        console.log(`The List = ${this.contactList}`);
      }
      
    )

    // this.contactList.push(this.contactModule)
    // this.contactModule = new ContactModule();
    // console.log(`The List = ${this.contactList}`);
  }

}
