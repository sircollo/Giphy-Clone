import { NgbCarouselConfig } from "@ng-bootstrap/ng-bootstrap";

export class Trending {

  constructor(config: NgbCarouselConfig) {
    config.interval = 3000;
    config.keyboard = true;
    config.pauseOnHover = true;
  }
}

