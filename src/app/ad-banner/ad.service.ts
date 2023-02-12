import { Injectable } from '@angular/core';
import { CustomDropdownComponent } from '../custom-dropdown/custom-dropdown.component';
import { CustomInputComponent } from '../custom-input/custom-input.component';
import { HeroJobAdComponent } from '../hero-job-ad/hero-job-ad.component';
import { HeroProfileComponent } from '../hero-profile/hero-profile.component';
import { InputComponent } from '../shared/input/input.component';
import { AdItem } from './ad-item';

@Injectable({
  providedIn: 'root'
})
export class AdService {

  getAds(){
    return [
      new AdItem(
        HeroProfileComponent, { name: 'Bombasto', bio: 'Brave as they can' }
      ),
      new AdItem(
        HeroProfileComponent, { name: 'Dr. IQ', bio: 'Smart as they can' }
      ),
      new AdItem(
        HeroJobAdComponent, { headline: 'Hiring for several positions', bio: 'Submit your resume today' }
      ),
      new AdItem(
        HeroJobAdComponent, { headline: 'Openings in all departments', bio: 'Apply today' }
      ),
      // new AdItem(
      //   InputComponent, { headline: 'Hello World', bio: 'Apply today'}
      // ),
      // new AdItem(
      //   CustomDropdownComponent, { headline: 'Hello World', bio: 'Apply today' }
      // ),
      // new AdItem(
      //   CustomInputComponent, { headline: 'Hello World', bio: 'Apply today' }
      // ),
    ]
  }

}
