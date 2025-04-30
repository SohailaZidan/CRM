import { trigger, transition, style, animate } from '@angular/animations';
import { Component, ElementRef, HostListener, inject, signal, ViewChild } from '@angular/core';
import { SweetAlertService } from '../../../core/services/sweetalert/sweet.service';
import { UserListComponent } from "../pages/users/user-list/user-list.component";
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dashbord',
  standalone: true,
  imports: [RouterLink , RouterLinkActive , RouterOutlet],
  templateUrl: './dashbord.component.html',
  styleUrl: './dashbord.component.css',
  animations: [
    trigger('openSidebar', [
      transition(':enter', [
        style({ opacity: 0, transform: '-translateX(100%)' }),
        animate(
          '300ms ease-out',
          style({ opacity: 1, transform: 'translateX(0)' })
        ),
      ]),
      transition(':leave', [
        animate(
          '300ms ease-in',
          style({ opacity: 0, transform: '-translateX(100%)' })
        ),
      ]),
    ]),
  ],
})
export class DashbordComponent {
  private readonly SweetAlertService = inject(SweetAlertService);
  menuItems = [
    {
      title: 'Dashboard',
      icon: 'fa-solid fa-house',
      route : '/admin/dashboard',
      action: () => {
        this.closeSidebar();
      }
    },
    {
      title: 'Users',
      icon: 'fa-solid fa-users',
      route : '/admin/users',
      action: () => {
        this.closeSidebar();
      }
    },
    {
      title: 'products',
      icon: 'fa-solid fa-box-archive',
      route : '/admin/notFound',
      action: () => {
        this.closeSidebar();
      }
    },
    {
      title: 'contact',
      icon: 'fa-solid fa-envelope',
       route : '/admin/notFound',
      action: () => {
        this.closeSidebar();
      }
    },
     {
      title: 'settings',
      icon: 'fa-solid fa-gear',
       route : '/admin/notFound',
      action: () => {
        this.closeSidebar();
      }
    },
    {
      title: ' Logout',
      icon: 'fa-solid fa-right-from-bracket',
       route : '/admin/notFound',
      action: () => {
        this.closeSidebar();
      }
    },
  ];
  
  ngOnInit(): void {
    this.isSidebarOpen = window.innerWidth >= 1024;
  }
  isSidebarOpen = true;
  //

  @ViewChild('sidebar', { static: false }) sidebar!: ElementRef;

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  closeSidebar() {
    if (window.innerWidth < 1024) {
      this.isSidebarOpen = false;
    }
  }

  stopPropagation(event: Event) {
    event.stopPropagation();
  }

  @HostListener('document:click', ['$event'])
  handleOutsideClick(event: Event) {
    if (
      this.isSidebarOpen &&
      this.sidebar &&
      !this.sidebar.nativeElement.contains(event.target)
    ) {
      this.closeSidebar();
    }
  }

  //
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    const screenWidth = event.target.innerWidth;

    if (screenWidth < 1024) {
      this.isSidebarOpen = false;
    } else {
      this.isSidebarOpen = true;
    }
  }
  isOpen = false;
  openSection: string | null = null;
  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  toggleAccordion(section: string) {
    this.openSection = this.openSection === section ? null : section;
  }

  logout() {
    this.SweetAlertService.showConfirmation({
      title: 'تسجيل الخروج',
      message: 'هل انت متأكد من تسجيل الخروج ',
    }).then((res) => {
      if (res.value) {

      }
    });
  }
}
