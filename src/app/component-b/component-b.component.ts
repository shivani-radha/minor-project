import { Component,OnInit } from '@angular/core';
import { SampleService } from '../service/sample.service';

@Component({
  selector: 'app-component-b',
  templateUrl: './component-b.component.html',
  styleUrls: ['./component-b.component.css']
})
export class ComponentBComponent implements OnInit {
  constructor(private service:SampleService){}
  public valueFromA:any;
 
   ngOnInit(): void{
    this.valueFromA=this.service.sampleData;
   }
}