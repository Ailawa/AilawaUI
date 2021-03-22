import { Component, OnInit, OnChanges, ViewChild, Input } from '@angular/core';
import { CaseUploadService } from 'src/app/service/case-upload.service';

@Component({
  selector: 'app-new-case-upload',
  templateUrl: './new-case-upload.component.html',
  styleUrls: ['./new-case-upload.component.css']
})
export class NewCaseUploadComponent implements OnInit, OnChanges {
  @ViewChild('fileInput') fileInput;
  message: string;
  @Input() VendorMasterID: string;
  @Input() VendorName: string;

  constructor(private service: CaseUploadService) { }

  ngOnInit(): void {
  }

  ngOnChanges() {
    console.log(this.VendorName)
  }


  uploadFile() {
    let formData = new FormData();
    formData.append('ExcelFile', this.fileInput.nativeElement.files[0]);
    formData.append('VendorMasterID', this.VendorMasterID);
    formData.append('VendorName', this.VendorName);

    this.service.UploadExcel(formData).subscribe(res => {
      this.message = res.toString();
    },
      (error) => {
        this.fileInput.nativeElement.value = null;
      }
    )


  }

}
