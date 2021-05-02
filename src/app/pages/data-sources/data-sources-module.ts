import { NgModule } from '@angular/core';
import { NbCardModule, NbTreeGridModule, NbIconModule, NbInputModule } from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';

import { DataSourcesRoutingModule, routedComponents } from './data-sources-routing.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';

@NgModule({
  imports: [
    NbCardModule,
    ThemeModule,
    DataSourcesRoutingModule,
    NbTreeGridModule,
    NbIconModule,
    NbInputModule,
    Ng2SmartTableModule,
  ],
  declarations: [
    ...routedComponents,
  ],
})
export class DataSourcesModule { }
