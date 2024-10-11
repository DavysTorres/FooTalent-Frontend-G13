import { Component } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-progress-spinner-overview',
  standalone: true,
  imports: [MatProgressSpinnerModule],
  templateUrl: './progress-spinner-overview.component.html',
  styleUrl: './progress-spinner-overview.component.css',
})
export class ProgressSpinnerOverviewComponent {

}
