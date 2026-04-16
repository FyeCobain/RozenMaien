import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SEOService } from './seo.service';

@Component({
  selector: 'rm-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
})
export class App {
  private readonly seoService = inject(SEOService);

  constructor() {
    this.seoService.init();
  }
}
