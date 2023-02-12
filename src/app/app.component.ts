import { Component } from '@angular/core';
import { AdItem } from './ad-banner/ad-item';
import { AdService } from './ad-banner/ad.service';
import { ChecklistService } from './checklist.service';
import checklist from './_files/checklist.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'dynamic-components';
  ads: AdItem[] = [];
  checklist: any[] = checklist;

  constructor(private service: AdService, private checklistService: ChecklistService){}

  ngOnInit(){
    // this.ads = this.service.getAds();

    // this.checklistService.getAllChecklist().subscribe(result => {
    //   console.log(result.groups[0].elements[1].question.questionGraphic);
    // });

    this.checklistService.getFirstQuestion().subscribe(result => {
      console.log(result);
      this.ads = result;
    })
  }
}
