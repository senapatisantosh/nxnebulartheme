import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { ECommerceModule } from './e-commerce/e-commerce.module';
import { PagesRoutingModule } from './pages-routing.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { SharedUiNbnxthemeModule } from '@nxnebulartheme/shared/ui-nbnxtheme'


@NgModule({
  imports: [
    PagesRoutingModule,
    SharedUiNbnxthemeModule,
    NbMenuModule,
    DashboardModule,
    ECommerceModule,
    MiscellaneousModule,
  ],
  declarations: [
    PagesComponent,
  ],
})
export class PagesModule {
}
