import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { AdDirective } from '../ad.directive';
import { AdItem } from './ad-item';

@Component({
  selector: 'app-ad-banner',
  templateUrl: './ad-banner.component.html',
  styleUrls: ['./ad-banner.component.css']
})
export class AdBannerComponent implements OnInit {

  @Input() ads: AdItem[] = [];

  currentIndex = -1;

  @ViewChild(AdDirective, {static: true}) adHost!: AdDirective
  interval: NodeJS.Timeout | null = null;

  constructor() { }

  ngOnInit(): void {
    this.loadComponent();
    // this.getAds();
  }

  loadComponent(){
    this.currentIndex = (this.currentIndex + 1) % this.ads.length;
    const adItem = this.ads[this.currentIndex];

    const viewContainerRef = this.adHost.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent(adItem.component);
    console.log(componentRef.instance);
    componentRef.instance.data = adItem.data;
  }

  getAds(){
    this.interval = setInterval(() => {
      this.loadComponent();
    }, 3000)
  }

}
