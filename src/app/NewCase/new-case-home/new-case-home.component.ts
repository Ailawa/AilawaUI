import { Component, OnInit } from '@angular/core';
import { VendorDetailsService } from 'src/app/service/vendor-details.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-new-case-home',
  templateUrl: './new-case-home.component.html',
  styleUrls: ['./new-case-home.component.css']
})
export class NewCaseHomeComponent implements OnInit {

  vendorDetails: any = [];
  VendorMasterID: string;
  VendorName: string;

  constructor(private _vd: VendorDetailsService) { }


  ngOnInit(): void {
    this.GetVendorDetails();
  }

  GetVendorDetails() {
    this._vd.GetVendorDetails().subscribe(res => {
      this.vendorDetails = res;
    })
  }

  SelectVendor(vendor) {
    this.VendorMasterID = vendor.vendorMasterId;
    this.VendorName = vendor.vendorName;
  }

}
