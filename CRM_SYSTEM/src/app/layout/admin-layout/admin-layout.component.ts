import { Component } from '@angular/core';
import { DashbordComponent } from '../../features/admin/dashbord/dashbord.component';

@Component({
  selector: 'app-admin-layout',
  standalone: true,
  imports: [DashbordComponent],
  templateUrl: './admin-layout.component.html',
  styleUrl: './admin-layout.component.css'
})
export class AdminLayoutComponent {

}
