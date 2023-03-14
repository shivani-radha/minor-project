import { Component, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit , OnChanges , OnDestroy {
  title = 'firstApp';
public isTrue = false;
  public sampleForm!: FormGroup;
public fromVar="";
public toVar="";
public days =['sun','mon','tue'];
  constructor(
    private router:Router,
    private fb:FormBuilder,
   ) {}

  ngOnInit(): void{
    this.sampleForm = this.fb.group({
      usernamecontro:new FormControl(),
      passwordControl:new FormControl(),
phoneNoArrayControl :new FormArray([])
  });
  
  this.sampleForm.valueChanges.subscribe(( value) =>{
     console.log(value);      
  });
  console.log('on init called');
}
ngOnChanges():void {
  console.log('on changes called');

}
ngOnDestroy(): void {
  console.log('on Destroy called');

}
  callFn(e: any){
    console.log(e);
    console.log(this.fromVar,this,this.toVar);
  }
  navigateToA() {
 this.router.navigateByUrl('path-a');
 }
 navigateToB() {
  this.router.navigateByUrl('path-b');
  }
}
