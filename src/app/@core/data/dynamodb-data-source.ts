export interface DynamoDbDataSource {
    id: string;
    dataSourceUrl: string;
    createdTimeStamp: Date;
}

export abstract class DynamoDbDataSourceData {
    abstract getDynamoDbDataSourceData(): DynamoDbDataSource;
}