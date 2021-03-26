import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { VendorDetailsService } from 'src/app/service/vendor-details.service';
import { map } from 'rxjs/operators';
import { vendorDetail } from 'src/app/model/VendorDetail';
import { NewCaseUploadComponent } from '../new-case-upload/new-case-upload.component';

@Component({
  selector: 'app-new-case-home',
  templateUrl: './new-case-home.component.html',
  styleUrls: ['./new-case-home.component.css']
})
export class NewCaseHomeComponent implements OnInit {
  @ViewChild(NewCaseUploadComponent ) newCaseUpload : NewCaseUploadComponent;
  vendorDetails: vendorDetail[] = [];
  VendorMasterID: string;
  VendorName: string;

  constructor(private _vd: VendorDetailsService) { }


  ngOnInit(): void {
    this.GetVendorDetails();
  }

  GetVendorDetails() {
    this._vd.GetVendorDetails().pipe(
      map(ret => ret.map(data => ({
        vendorMasterId: data.vendorMasterId,
        vendorName: data.vendorName,
        isSelected: false
      })))
    ).subscribe(res => {
      this.vendorDetails = res;
    })
  }

  SelectVendor(vendor) {

    this.vendorDetails.forEach(el => {
      el.isSelected = false;
    });
    vendor.isSelected = true;

    this.VendorMasterID = vendor.vendorMasterId;
    this.VendorName = vendor.vendorName;

    this.newCaseUpload.fileInput.nativeElement.value = null;
  }

}
