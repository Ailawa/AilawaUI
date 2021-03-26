import { Component, ViewChild, Input, ElementRef, OnChanges } from '@angular/core';
import { CaseUploadService } from 'src/app/service/case-upload.service';

@Component({
  selector: 'app-new-case-upload',
  templateUrl: './new-case-upload.component.html',
  styleUrls: ['./new-case-upload.component.css']
})
export class NewCaseUploadComponent implements OnChanges {
  @ViewChild('fileInput') fileInput: ElementRef;
  message: string;
  msgClass: string;
  @Input() VendorMasterID: string;
  @Input() VendorName: string;
  uploadDisable: boolean = true;

  constructor(private service: CaseUploadService) { }

  ngOnChanges(): void {
    if (this.VendorMasterID != undefined && this.VendorMasterID != '')
      this.uploadDisable = false;
  }

  uploadFile() {
    if (this.fileInput.nativeElement.files.length > 0) {
      if (this.validateFile(this.fileInput.nativeElement.files[0].name)) {
        let formData = new FormData();
        formData.append('ExcelFile', this.fileInput.nativeElement.files[0]);
        formData.append('VendorMasterID', this.VendorMasterID);
        formData.append('VendorName', this.VendorName);

        this.service.UploadExcel(formData).subscribe(res => {
          console.log(res);

          this.message = res.toString();
          this.msgClass = "alert-success";
        },
          (error) => {
            console.log(error);
            this.message = "Error in Upload";
            this.msgClass = "alert-danger";
            this.fileInput.nativeElement.value = null;
          }
        )
      }
      else {
        this.msgClass = "alert-secondary";
        this.message = "Please upload only excel file.";
        this.fileInput.nativeElement.value = null;
      }
    }
    else {
      this.msgClass = "alert-info";
      this.message = "Please select a Excel file for Upload";
    }
  }

  CloseMessage() {
    this.message = "";
  }

  validateFile(name: String): boolean {
    var ext = name.substring(name.lastIndexOf('.') + 1);
    if (ext.toLowerCase() == 'xls' || ext.toLowerCase() == 'xlsx') {
      return true;
    }
    else {
      return false;
    }
  }

}
