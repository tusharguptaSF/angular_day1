import { Injectable } from '@angular/core';
import { ContactModule } from '../model/contact/contact.module';
import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http';
import {tap}from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http:HttpClient) { }

  addContact(contact:ContactModule):Observable<ContactModule>{
    return this.http.post<ContactModule>("http://localhost:3000/conatct",contact)
    // .pipe(tap(contact => {
    //   console.log(contact);
    // }))
  }
  getAllContacts():Observable<Array<ContactModule>>{
    return this.http.get<ContactModule[]>("http://localhost:3000/conatct");
  }
}
