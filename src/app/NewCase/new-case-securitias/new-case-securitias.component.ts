import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SecuritasService } from 'src/app/service/securitas.service';

@Component({
  selector: 'app-new-case-securitias',
  templateUrl: './new-case-securitias.component.html',
  styleUrls: ['./new-case-securitias.component.css']
})
export class NewCaseSecuritiasComponent implements OnInit {
  @ViewChild('fileInput') fileInput: ElementRef;
  message: string;

  constructor(private service: SecuritasService) { }

  ngOnInit(): void {
  }

  uploadFile() {
    let formData = new FormData();
    formData.append('upload', this.fileInput.nativeElement.files[0]);

    this.service.UploadExcel(formData).subscribe(res => {
      this.message = res.toString();
    })
  }

}
