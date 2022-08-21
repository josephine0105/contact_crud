import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
public list:any;
  constructor() { }

  ngOnInit(): void {
    this.list=["Contact Details","Contact Details","Contact Details","Contact Details","Contact Details"]
  }

}
