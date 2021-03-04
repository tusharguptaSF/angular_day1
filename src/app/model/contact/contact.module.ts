import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ContactModule {
  username:string = "";
  phnumber:string = ""; 
  // constructor(username:string,phnumber:string){
  //    this.username = username;
  //    this.phnumner = phnumber;
  // }
 }
