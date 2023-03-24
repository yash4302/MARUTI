import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-c-language',
  templateUrl: './c-language.component.html',
  styleUrls: ['./c-language.component.scss']
})
export class CLanguageComponent implements OnInit {
  activeSection: number = 0;
  activeLecture: number = 0;

  constructor(private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    let intro = document.getElementById('introduction');

    this.activeRoute.queryParams.subscribe((params) => {
      this.activeSection = params['section'];
      this.activeLecture = params['lecture'];

      if (this.activeLecture !== undefined && this.activeSection !== undefined) {
        intro?.classList.remove('button-tab-active');
        let section = document.getElementById('section-' + this.activeSection);
        section?.click();
      }
      else {
        intro?.classList.add('button-tab-active');
      }
    });
  }
}
