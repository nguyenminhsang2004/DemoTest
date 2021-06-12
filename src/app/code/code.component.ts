import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.scss'],
})
export class CodeComponent implements OnInit {
  html = `<h2>Bài tập</h2>
  <p>Bài 1: Vẽ tam giác pascal</p>
  <p>Bài 2: Chuyển đổi 1 số thập phân thành nhị phân</p>
  <p>Bài 3: Chèn 1 phần tử vào mảng 1 chiều (có thứ tự)</p>
  <p>Bài 4: Chèn 1 phần tử vào mảng 1 chiều (không thứ tự)</p>
  <p>Bài 5: Tìm phần tử lớn thứ 2 trong mảng 1 chiều</p>
  <p>Bài 6: Chia mảng 1 chiều thành mảng chẵn, mảng lẽ</p>
  <p>Bài 7: Cộng, trừ, nhân, chuyển vị 2 ma trận</p>
  <p>Bài 8: In ma trận tam giác bên trong</p>
  <p>Bài 9: Kiểm tra ma trận thưa (Sparse Matrix)</p>
  <p>Bài 10: So sánh hai ma trận xem chúng có bằng nhau không</p>
  <p>Bài 11: Tính định thức ma trận</p>
  <p>Bài 12: In các ký tự riêng lẻ của chuỗi theo chiều đảo ngược</p>
  <p>Bài 13: Đếm số chữ cái, số chữ số, số ký tự đặc biệt trong một chuỗi</p>
  <p>Bài 14: Sắp xếp mảng các ký tự trong chuỗi theo thứ tự tăng dần</p>
  <p>Bài 15: Lấy chuỗi con từ một chuỗi đã cho</p>
  <p>Bài 16: Chuyển chữ hoa thành chữ thường và ngược lại</p>
  <p>Bài 17: Tìm kiếm vị trí chuỗi con trong chuỗi đã cho</p>
  <p>Bài 18: Chèn chuỗi con trước vị trí xuất hiện lần đầu của một chuỗi con khác trong một chuỗi</p>
  <p>Bài 19: So sánh, sao chép chuỗi</p>
  <p>Bài 20: Tạo một hàm tự định nghĩa để đếm số khoảng trống trong một chuỗi</p>
  <p>Bài 21: Tạo một hàm đệ qui để tính phần tử thứ n trong dãy Fibonacci</p>
  <p>Bài 22: Mở file và hiển thị nội dung file trên màn hình</p>
  <p>Bài 23: Chuyển nội dung file thành chữ hoa</p>
  <p>Bài 24: Sao chép và so sánh 2 file</p>
  `;

  editorOptions = { theme: 'vs-dark', language: 'csharp' };
  code: string = '';
  originalCode: string = 'function x() { // TODO }';

  // kiem soat chuyen dong mo
  isShow = false;
  fileName = 'code.js';
  result = 'This is sample result';

  constructor(
    private activatedroute: ActivatedRoute,
    private homeService: HomeService
  ) {}

  ngOnInit(): void {
    this.editorOptions.language =
      this.activatedroute.snapshot.paramMap.get('language');
    this.fileName =
      'code.' + this.getFileExtension(this.editorOptions.language);
  }

  getFileExtension(language: string): string {
    if (language == 'csharp') {
      return 'cs';
    }
    if (language == 'python') {
      return 'py';
    }
    if (language == 'java') {
      return 'java';
    }
  }

  saveFile() {
    const blob: any = new Blob([this.code], { type: 'text/plain' });

    const a: any = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = this.fileName;
    document.body.appendChild(a);
    a.click();
    a.remove();
  }

  submitCode(): void {
    this.homeService
      .submitCode(
        this.code,
        this.getLanguageNumber(this.editorOptions.language)
      )
      .subscribe((res) => {
        this.result = res;
      });
  }

  getLanguageNumber(language: string): string {
    if (language == 'csharp') {
      return '1';
    }
    if (language == 'java') {
      return '2';
    }
    if (language == 'python') {
      return '3';
    }
  }
}
