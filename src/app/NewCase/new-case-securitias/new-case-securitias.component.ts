import { Component, OnInit, ViewChild } from '@angular/core';
import { CaseUploadService } from 'src/app/service/case-upload.service';

@Component({
  selector: 'app-new-case-securitias',
  templateUrl: './new-case-securitias.component.html',
  styleUrls: ['./new-case-securitias.component.css']
})
export class NewCaseSecuritiasComponent implements OnInit {
  @ViewChild('fileInput') fileInput;
  message: string;

  constructor(private service: CaseUploadService) { }

  ngOnInit(): void {
  }

  uploadFile() {
    let formData = new FormData();
    formData.append('ExcelFile', this.fileInput.nativeElement.files[0]);
    formData.append('VendorMasterID', 'A78B5363-7CE2-47F5-B9BB-E2B667A2E4AE');
    formData.append('VendorName', 'Securitas');

    this.service.UploadExcel(formData).subscribe(res => {
      this.message = res.toString();
    })
  }

}
