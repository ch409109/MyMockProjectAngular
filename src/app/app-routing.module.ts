import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountantFinancialPlanListComponent } from './financial-plan-list/accountant-financial-plan-list/accountant-financial-plan-list.component';
import { FinancialStaffFinancialPlanListComponent } from './financial-plan-list/financial-staff-financial-plan-list/financial-staff-financial-plan-list.component';
import { FirstStepImportComponent } from './financial-plan-import/first-step-import/first-step-import.component';
import { SecondStepImportComponent } from './financial-plan-import/second-step-import/second-step-import.component';
import { FinancialStaffFinancialPlanDetailsComponent } from './financial-plan-details/financial-staff-financial-plan-details/financial-staff-financial-plan-details.component';
import { AccountantFinancialPlanDetailsComponent } from './financial-plan-details/accountant-financial-plan-details/accountant-financial-plan-details.component';
import { FirstStepEditComponent } from './financial-plan-edit/first-step-edit/first-step-edit.component';
import { SecondStepEditComponent } from './financial-plan-edit/second-step-edit/second-step-edit.component';
import { FinancialStaffFinancialPlanSubmitComponent } from './financial-plan-submit/financial-staff-financial-plan-submit/financial-staff-financial-plan-submit.component';
import { AccountantFinancialPlanApproveComponent } from './financial-plan-approve/accountant-financial-plan-approve/accountant-financial-plan-approve.component';
import { AccountantFirstStepEditComponent } from './financial-plan-edit/accountant-first-step-edit/accountant-first-step-edit.component';
import { AccountantSecondStepEditComponent } from './financial-plan-edit/accountant-second-step-edit/accountant-second-step-edit.component';

const routes: Routes = [
  {path: 'accountantList', component: AccountantFinancialPlanListComponent},
  {path: 'staffList', component: FinancialStaffFinancialPlanListComponent},
  {path: 'firstImport', component: FirstStepImportComponent},
  {path: 'secondImport', component: SecondStepImportComponent},
  {path: 'staffDetails', component: FinancialStaffFinancialPlanDetailsComponent},
  {path: 'accountantDetails', component: AccountantFinancialPlanDetailsComponent},
  {path: 'firstEdit', component: FirstStepEditComponent},
  {path: 'secondEdit', component: SecondStepEditComponent},
  {path: 'staffSubmit', component: FinancialStaffFinancialPlanSubmitComponent},
  {path: 'accountantApprove', component: AccountantFinancialPlanApproveComponent},
  {path: 'accountantFirstEdit', component: AccountantFirstStepEditComponent},
  {path: 'accountantSecondEdit', component: AccountantSecondStepEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
