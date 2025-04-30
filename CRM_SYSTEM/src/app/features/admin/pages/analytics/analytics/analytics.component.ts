import { Component, CUSTOM_ELEMENTS_SCHEMA, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { AnalyticsService } from '../../../../../core/services/analytics.service';
import { NgIf } from '@angular/common';
import { PageTitleComponent } from "../../../../../shared/components/page-title/page-title.component";
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { Color, ScaleType } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-analytics',
  standalone: true,
  imports: [NgIf, PageTitleComponent , NgxChartsModule ],
  templateUrl: './analytics.component.html',
  styleUrl: './analytics.component.css',
  schemas : [CUSTOM_ELEMENTS_SCHEMA]
})
export class AnalyticsComponent  implements OnInit, OnDestroy {
  liveVisits: number | null = null;
  isLoading = true;
  showAlert = false;
  private subscription!: Subscription;

  constructor(private _AnalyticsService: AnalyticsService) {}

  ngOnInit(): void {
    this.subscription = this._AnalyticsService.getLiveVisits().subscribe(count => {
      if (count !== null) {
        this.isLoading = false;
        this.liveVisits = count;
        this.addPoint(count);

        if (count > 1000) {
          this.showAlert = true;
          setTimeout(() => this.showAlert = false, 3000); 
        }
      }
    });

    interval(5000).subscribe(() => {
      if (this.visitsData.length > 10) {
        this.visitsData.shift();
      }
    });
  }

  visitsData: any[] = [
    {
      name: 'Visits',
      series: []
    }
  ];
  
  addPoint(count: number) {
    const newPoint = {
      name: new Date().toLocaleTimeString(),
      value: count
    };
  
    this.visitsData[0].series.push(newPoint);
  
    // احتفظ بعدد نقاط معين (مثلاً آخر 10)
    if (this.visitsData[0].series.length > 10) {
      this.visitsData[0].series.shift();
    }
  
    // نعمل نسخة جديدة لتحديث التغيير في Angular
    this.visitsData = [...this.visitsData];
  }
  

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }


  colorScheme: Color = {
    name: 'customScheme',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: ['#e85d04']
  };
  

}
