import { AfterViewInit, Component, inject, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { initFlowbite } from 'flowbite';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit , AfterViewInit {
title = 'crm'
ngOnInit(): void {
  initFlowbite();
}

private readonly router = inject(Router);

constructor(@Inject(PLATFORM_ID) private platformId: Object) {
  if (isPlatformBrowser(this.platformId)) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        setTimeout(() => {
          initFlowbite();
        }, 200);
      }
    });
  }
}

ngAfterViewInit(): void {
  if (isPlatformBrowser(this.platformId)) {
    initFlowbite();
  }
}
}
