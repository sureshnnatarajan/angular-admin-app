import { Component, OnDestroy, OnInit } from '@angular/core';
import { DynamoDbDataSource } from '../../../@core/data/dynamodb-data-source';
import { DynamoDbDataService } from '../../../@core/mock/dynamodb-data.service';

@Component({
    selector: 'dynamo-db',
    styleUrls: ['./dynamodb.component.scss'],
    templateUrl: './dynamodb.component.html',
})
export class DynamoDbComponent {

  dynamoDB: DynamoDbDataSource[];

  constructor(private dynamoDbDataService: DynamoDbDataService) {
      this.getDataFromDynamoDbService();
  }

  getDataFromDynamoDbService() {
    this.dynamoDbDataService.getDynamoDbDataSources()
                      .subscribe(res => {
                          this.dynamoDB = res as DynamoDbDataSource[];
                      });
  }

  settings = {
      add: {
        addButtonContent: '<i class="nb-plus"></i>',
        createButtonContent: '<i class="nb-checkmark"></i>',
        cancelButtonContent: '<i class="nb-close"></i>',
      },
      edit: {
        editButtonContent: '<i class="nb-edit"></i>',
        saveButtonContent: '<i class="nb-checkmark"></i>',
        cancelButtonContent: '<i class="nb-close"></i>',
      },
      delete: {
        deleteButtonContent: '<i class="nb-trash"></i>',
        confirmDelete: true,
      },
      columns: {
        id: {
          title: 'ID',
          type: 'string',
        },
        dataSourceUrl: {
          title: 'URL',
          type: 'string',
        },
        createdTimeStamp: {
          title: 'Created Date',
          type: 'string',
        }
      },
  };

  onDeleteConfirm($event) {
      console.log("Event ===>" + $event);
  }
}
