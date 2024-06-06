import { AfterViewChecked, AfterViewInit, Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit, OnChanges, OnDestroy, AfterViewInit, AfterViewChecked {
  @Input() data: any;
  title = '';

  // Constructor: Được gọi khi component được khởi tạo. Đây là nơi khai báo các dependency được inject.
  constructor(){
   this.title = "tech";
  }

  // ngOnChanges: Được gọi khi có bất kỳ sự thay đổi nào đối với các input properties.
  // Hook này chạy nhiều lần trong suốt vòng đời của component.
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges', changes);
  }

  // ngOnInit: Được gọi một lần sau khi các giá trị input properties được khởi tạo.
  // Hook này chủ yếu dùng để khởi tạo dữ liệu trong component.
  ngOnInit(): void {
    console.log('ngOnInit');
  }

  // ngDoCheck: Được gọi khi có bất kỳ sự thay đổi nào không được Angular phát hiện thông qua ngOnChanges.
  ngDoCheck(): void {
    console.log('ngDoCheck');
  }

  // ngAfterContentInit: Được gọi một lần sau khi Angular đã khởi tạo hoàn tất nội dung trong component (content projection).
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }

  // ngAfterContentChecked: Được gọi sau mỗi lần Angular kiểm tra nội dung trong component.
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }

  // ngAfterViewInit: Được gọi một lần sau khi Angular đã khởi tạo hoàn tất các view của component và các view con.
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }

  // ngAfterViewChecked: Được gọi sau mỗi lần Angular kiểm tra các view của component và các view con.
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }

  // ngOnDestroy: Được gọi ngay trước khi component bị hủy. 
  // Hook này dùng để dọn dẹp các tài nguyên như unsubscribe từ các observable, hủy bỏ các timer, etc.
  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }

  onClicked(data:any){
   console.log("Hello world:", data)
   this.data = Math.random();
  }

}

