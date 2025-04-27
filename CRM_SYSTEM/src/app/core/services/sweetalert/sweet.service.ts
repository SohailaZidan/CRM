import { Injectable } from '@angular/core';
import Swal, {SweetAlertResult } from 'sweetalert2';
@Injectable({
  providedIn: 'root'
})
export class SweetAlertService {

//success
public sideAlertSuccess(message: string) {
  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 1000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    },
  });
  Toast.fire({
    icon: 'success',
    title: `<span style="font-family: 'Almarai', sans-serif;">${message}</span>`,
  });
}
//notification
public sideAlertSuccessLeft(message: string) {
  const Toast = Swal.mixin({
    toast: true,
    position: 'top-right',
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    },
  });
  Toast.fire({
    icon: 'warning',
    title: `<span style="font-family: 'Almarai', sans-serif;">${message}</span>`,
  });
}

//error
public sideAlertError(message: string) {
  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    },
  });
  Toast.fire({
    icon: 'error',
    title: `<span style="font-family: 'Almarai', sans-serif;">${message}</span>`,
  });
}
// showConfirmation
public showConfirmation(params: {
  title?: string;
  message: string;
}): Promise<SweetAlertResult> {
  params.title = params.title || 'هل انت متأكد؟';
  return new Promise((resolve, reject) => {
    Swal.fire({
      title: `<span style="font-family: 'Almarai', sans-serif;">${params.title}</span>`,
      html: `<span style="font-family: 'Almarai', sans-serif;">${params.message}</span>`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: `<span style="font-family: 'Almarai', sans-serif;">نعم</span>`,
      cancelButtonText: `<span style="font-family: 'Almarai', sans-serif;">إلغاء</span>`,
    }).then((result) => {
      resolve(result);
    });
  });
}
// warning
public swalWarning(title: string , message : string) {
  Swal.fire({
    icon: 'warning',
    title: `<span style="font-family: 'Almarai'; font-size: 24px;">${title}</span>`,
    html: `<span style="font-family: 'Almarai'; font-size: 20px;">${message}</span>`,
    showConfirmButton: true,
    confirmButtonColor: '#d33',
    confirmButtonText: `<span style="font-family: 'Almarai'; font-size: 18px;">حسنًا</span>`,
    width: '450px',
  });
}
public swalSuccess(title: string , message : string) {
  Swal.fire({
    icon: 'success',
    title: `<span style="font-family: 'Almarai'; font-size: 24px;">${title}</span>`,
    html: `<span style="font-family: 'Almarai'; font-size: 20px;">${message}</span>`,
    showConfirmButton: true,
    confirmButtonColor: 'rgb(70 47 177)',
    confirmButtonText: `<span style="font-family: 'Almarai'; font-size: 18px;">حسنًا</span>`,
    width: '450px',
  });
}


public showRemoveConfirmation(elementName?:any): Promise<SweetAlertResult> {
  elementName ? (elementName = `"${elementName}"`) : (elementName = '');
  return new Promise((resolve, reject) => {
    Swal.fire({
      title: 'هل انت متأكد؟',
      text: `حذف  ${elementName}?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: `<span style="font-family: 'Almarai', sans-serif;">نعم, احذف!</span>`,
      cancelButtonText: `<span style="font-family: 'Almarai', sans-serif;">إلغاء</span>`,
    }).then((result) => {
      resolve(result);
    });
  });
}



}
