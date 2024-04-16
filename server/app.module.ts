import { Module } from '@nestjs/common';
import { AngularUniversalModule } from '@nestjs/ng-universal';
import { join } from 'path';
import { AppServerModule } from '../src/main.server';
// import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [
    AngularUniversalModule.forRoot({
      bootstrap: AppServerModule,
      viewsPath: join(process.cwd(), 'dist/bench/browser')
    }),
    // SequelizeModule.forRoot()
  ]
})
export class AppModule {}
