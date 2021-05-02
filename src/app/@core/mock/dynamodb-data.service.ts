import { of as observableOf, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { DynamoDbDataSourceData, DynamoDbDataSource } from '../data/dynamodb-data-source'

@Injectable()
export class DynamoDbDataService extends DynamoDbDataSourceData {

    dynamoDbUrl : string = "http://localhost:8080/demo/datasource";

    dynamoDbSources : DynamoDbDataSource[];

    getDynamoDbDataSourceData(): DynamoDbDataSource {
        throw new Error("Method not implemented.");
    }

    constructor(private http: HttpClient) {
        super();
    }

    getDynamoDbDataSources(): Observable<DynamoDbDataSource[]> {
        return this.http.get<DynamoDbDataSource[]>(this.dynamoDbUrl);
    }   
}
