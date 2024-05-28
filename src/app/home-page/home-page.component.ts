import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { NzLayoutModule } from 'ng-zorro-antd/layout';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [NzLayoutModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent implements OnInit {
  data: any[] = [];
  loading = true;
  error: string | null = null;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getData().subscribe({
      next: (data) => {
        this.data = data;
        console.log(data)
        this.loading = false;
      },
      error: (err) => {
        this.error = err.message;
        this.loading = false;
      },
    });
  }
}
