import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DataService } from 'src/app/services/data-handle/data.service';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  public myform: FormGroup;
  plcHolder: string = this.data.placeHolder;

  constructor(public data: DataService) {
    this.myform = new FormGroup({
      search: new FormControl(),
    });
  }

  ngOnInit(): void {
    this.myform.valueChanges.pipe(debounceTime(500)).subscribe(({ search }) => {
      this.data.search = search;
      this.data.doSearch();
    });
  }
}
