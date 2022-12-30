import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data-handle/data.service';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(public data: DataService, private viewport: ViewportScroller) {}

  ngOnInit(): void {
    window.addEventListener('scroll', this.scroll, true);
  }

  ngOnDestroy() {
    window.removeEventListener('scroll', this.scroll, true);
  }

  // infinite-scroll
  scroll = (event: any): void => {
    const elementHight = document.querySelector('section');
    let number = event.srcElement.children[0].scrollTop;
    let temp: number = elementHight?.offsetHeight || 900;

    if (number >= temp - screen.height) {
      this.data.loadMore();
    }
  };

  scrollToTop(): void {
    this.viewport.scrollToPosition([0, 0]);
  }
}
