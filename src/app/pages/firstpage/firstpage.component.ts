import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-firstpage',
  templateUrl: './firstpage.component.html',
  styleUrls: ['./firstpage.component.css'],
})
export class FirstpageComponent implements OnInit {
  visibleSidebar1: any;
  constructor(private primengConfig: PrimeNGConfig) {}
  collapsed = true;
  toggleCollapsed(): void {
    this.collapsed = !this.collapsed;
  }
  ngOnInit(): void {
    this.primengConfig.ripple = true;
    console.log('In First Page');
  }
}
