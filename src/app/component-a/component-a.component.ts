import { Component,OnChanges,OnDestroy,OnInit } from '@angular/core';
import { SampleService } from '../service/sample.service';

@Component({
  selector: 'app-component-a',
  templateUrl: './component-a.component.html',
  styleUrls: ['./component-a.component.css']
})
export class ComponentAComponent implements OnInit , OnDestroy {
  ngOnDestroy(): void {
    console.log('destroyed');
  }
  constructor(private service: SampleService){}
 

public valueFromB:any;
   ngOnInit(): void{
    this.valueFromB=this.service.sampleData;
   this.service.sampleData=2;
   }
}
