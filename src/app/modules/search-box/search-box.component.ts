import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.sass'],
})
export class SearchBoxComponent {
  public form!: FormGroup;
  @Input() set searchText(searchText: string | undefined) {
    if (this.form) {
      this.form.patchValue({
        searchText,
      });
    }
  }

  constructor(private router: Router) {
    this.initForm();
  }

  private initForm(): void {
    this.form = new FormGroup({
      searchText: new FormControl(null, Validators.required),
    });
  }

  submit(): void {
    if (this.form.valid) {
      this.router.navigate(['/items'], {
        queryParams: { search: this.form.value.searchText },
      });
    }
  }
}
