import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  facebookImgSrc: string = '../../../../assets/images/icon-facebook.svg';

  twitterImgSrc: string = '../../../../assets/images/icon-twitter.svg'

  handleFacebookIconHover(isHover: boolean) {
    if (isHover) {
      this.facebookImgSrc = '../../../../assets/images/icon-facebook-hover.svg';
    } else {
      this.facebookImgSrc = '../../../../assets/images/icon-facebook.svg';
    }
  }

  handleTwitterIconHover(isHover: boolean) {
    if (isHover) {
      this.twitterImgSrc = '../../../../assets/images/icon-twitter-hover.svg';
    } else {
      this.twitterImgSrc = '../../../../assets/images/icon-twitter.svg';
    }
  }
}
