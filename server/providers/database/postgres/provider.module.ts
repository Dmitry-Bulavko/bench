import { User } from "server/models/users/entities/user.entity";

export const userProviders = [
    {
        provide: 'USERS_REPOSITORY',
        useValue: User
    }
];

import { Module } from '@nestjs/common';
import { databaseProviders } from "server/database/postgre/postgres.providers";

// import { databaseProviders } from './database.providers';

@Module({
  providers: [...databaseProviders],
  exports: [...databaseProviders],
})
export class PostgresModule {}