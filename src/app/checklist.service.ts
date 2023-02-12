import { Injectable } from '@angular/core';
import checklist from './_files/checklist.json';
import { of, from } from 'rxjs';
import { AdItem } from './ad-banner/ad-item';
import { InputComponent } from './shared/input/input.component';
import { DropdownComponent } from './shared/dropdown/dropdown.component';

@Injectable({
  providedIn: 'root'
})
export class ChecklistService {

  _checklist: {ckId: number, active: boolean, comment: string, groups: any[], parentRequestId: any, score: number, scoremandatory: boolean, timetoload: number, type: string, vin: string} = checklist;

  constructor() { }

  getAllChecklist(){
    return of(this._checklist);
  }

  getFirstQuestion(){
    // return of(this._checklist.groups[0].elements[1].question);
    const component = this.getComponent(this._checklist.groups[0].elements[1].question.questionGraphic);
    return of([new AdItem(component, { headline: 'Hello World', bio: 'Apply today'})])
  }

  getComponent(strName: string): any{
    const componentName = strName;
    if(componentName === 'DropdownComponent') {
      return DropdownComponent;
    }
  }
}
