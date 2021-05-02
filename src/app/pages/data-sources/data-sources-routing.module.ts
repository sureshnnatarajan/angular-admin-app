import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DataSourcesComponent } from './data-sources.component';
import { DynamoDbComponent } from './dynamo-db/dynamo-db.component';

const routes: Routes = [{
  path: '',
  component: DataSourcesComponent,
  children: [{
    path: 'dynamodb',
    component: DynamoDbComponent
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DataSourcesRoutingModule { }

export const routedComponents = [
  DataSourcesComponent,
  DynamoDbComponent
];
