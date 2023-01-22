import { Component, OnInit, ViewChild } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
@Component({
  selector: 'app-base-template',
  templateUrl: './base-template.component.html',
  styleUrls: ['./base-template.component.css']
})
export class BaseTemplateComponent implements OnInit {
  visibleSidebar1:any;
  constructor(private primengConfig: PrimeNGConfig) {}
  collapsed = true;
     toggleCollapsed(): void {
       this.collapsed = !this.collapsed;
     }
  ngOnInit(): void {
    this.primengConfig.ripple = true;
    console.log("In Base Page");
  }
  @ViewChild('videoPlayer') videoplayer: any;

  toggleVideo() {
      this.videoplayer.play();
  }
}
