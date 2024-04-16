import { Module } from '@nestjs/common';
import { databaseProviders } from './postgres.providers';
// import { databaseProviders } from './database.providers';

@Module({
  providers: [...databaseProviders],
  exports: [...databaseProviders],
})
export class PostgresModule {}