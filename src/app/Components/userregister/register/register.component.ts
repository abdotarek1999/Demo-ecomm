import { Component, OnInit } from '@angular/core';
import {  FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { passwordidentical } from "src/app/Components/customsvalidations/passwordidentical";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit{

  userregister!:FormGroup;


  constructor(private Fb:FormBuilder){


  }

  ngOnInit(): void {

    this.userregister=this.Fb.group({
      name:['',Validators.required],
      email:['',Validators.required],
      username:['',Validators.required],
      password:['',Validators.required],
      confirmpassword:['',Validators.required],
      address:this.Fb.array([
        this.Fb.group({
          addr:[""],
          street:[''],
          city:[''],
          country:[''],

        })
      ])
    },{validators:passwordidentical});

  }






  get name(){
    return this.userregister.get('name');
  }

  get email(){
    return this.userregister.get('email');
  }


  get username(){
    return this.userregister.get('username');
  }


  get password(){
    return this.userregister.get('password');
  }

  get confirmpassword(){
    return this.userregister.get('confirmpassword');
  }

  get fulladdress(){
    return this.userregister.get('address') as FormArray;
  }


  submitteddata(data:any){
    console.log(data);
  }

  addanotheraddress(){
    //console.log(this.fulladdress);
    //console.log(this.userregister);

    this.fulladdress.controls.push(this.Fb.group({
      addr:[""],
      street:[''],
      city:[''],
      country:[''],

    }));
  }

  removeaddress(){
    this.fulladdress.controls.pop();

  }

}
