import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Home/home/home.component';
import { NewCaseHomeComponent } from './NewCase/new-case-home/new-case-home.component';
import { NewCaseKPMGComponent } from './NewCase/new-case-kpmg/new-case-kpmg.component';
import { NewCaseSecuritiasComponent } from './NewCase/new-case-securitias/new-case-securitias.component';


const routes: Routes = [
  { path: "", redirectTo: "Home", pathMatch: "full" },
  { path: "Home", component: HomeComponent },
  {
    path: "NewCase", component: NewCaseHomeComponent, children: [
      { path: "Securitas", component: NewCaseSecuritiasComponent },
      { path: "KPMG", component: NewCaseKPMGComponent }
    ]
  },
  { path: "**", component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
