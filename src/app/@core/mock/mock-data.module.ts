import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DynamoDbDataService } from './dynamodb-data.service';
import { HttpClientModule } from '@angular/common/http';

const SERVICES = [
  DynamoDbDataService
];

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    ...SERVICES,
  ],
})
export class MockDataModule {
  static forRoot(): ModuleWithProviders<MockDataModule> {
    return {
      ngModule: MockDataModule,
      providers: [
        ...SERVICES,
      ],
    };
  }
}
