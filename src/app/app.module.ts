import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { AccountantFinancialPlanListComponent } from './financial-plan-list/accountant-financial-plan-list/accountant-financial-plan-list.component';
import { FinancialStaffFinancialPlanListComponent } from './financial-plan-list/financial-staff-financial-plan-list/financial-staff-financial-plan-list.component';
import { FirstStepImportComponent } from './financial-plan-import/first-step-import/first-step-import.component';
import { SecondStepImportComponent } from './financial-plan-import/second-step-import/second-step-import.component';
import { FinancialStaffFinancialPlanDetailsComponent } from './financial-plan-details/financial-staff-financial-plan-details/financial-staff-financial-plan-details.component';
import { AccountantFinancialPlanDetailsComponent } from './financial-plan-details/accountant-financial-plan-details/accountant-financial-plan-details.component';
import { BothRolesFinancialPlanDetailsComponent } from './financial-plan-details/both-roles-financial-plan-details/both-roles-financial-plan-details.component';
import { PlanHistoryFinancialPlanDetailsComponent } from './financial-plan-details/plan-history-financial-plan-details/plan-history-financial-plan-details.component';
import { FirstStepEditComponent } from './financial-plan-edit/first-step-edit/first-step-edit.component';
import { SecondStepEditComponent } from './financial-plan-edit/second-step-edit/second-step-edit.component';
import { FinancialStaffFinancialPlanSubmitComponent } from './financial-plan-submit/financial-staff-financial-plan-submit/financial-staff-financial-plan-submit.component';
import { AccountantFinancialPlanApproveComponent } from './financial-plan-approve/accountant-financial-plan-approve/accountant-financial-plan-approve.component';
import { BothRolesFinancialPlanApproveComponent } from './financial-plan-approve/both-roles-financial-plan-approve/both-roles-financial-plan-approve.component';
import { AccountantFirstStepEditComponent } from './financial-plan-edit/accountant-first-step-edit/accountant-first-step-edit.component';
import { AccountantSecondStepEditComponent } from './financial-plan-edit/accountant-second-step-edit/accountant-second-step-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AccountantFinancialPlanListComponent,
    FinancialStaffFinancialPlanListComponent,
    FirstStepImportComponent,
    SecondStepImportComponent,
    FinancialStaffFinancialPlanDetailsComponent,
    AccountantFinancialPlanDetailsComponent,
    BothRolesFinancialPlanDetailsComponent,
    PlanHistoryFinancialPlanDetailsComponent,
    FirstStepEditComponent,
    SecondStepEditComponent,
    FinancialStaffFinancialPlanSubmitComponent,
    AccountantFinancialPlanApproveComponent,
    BothRolesFinancialPlanApproveComponent,
    AccountantFirstStepEditComponent,
    AccountantSecondStepEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
