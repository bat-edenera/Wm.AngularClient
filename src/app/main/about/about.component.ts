import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit,AfterViewInit{

  @ViewChild('swiper') swiperCtx : ElementRef;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    new Swiper('.swiper-container', {
      autoplay: true,//可选选项，自动滑动
    })
  }

}
