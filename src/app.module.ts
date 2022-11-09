import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompanyModule } from './modules/company/company.module';
import { GraphQLModule } from '@nestjs/graphql';
import { Company } from './modules/company/company.model';
import { ApolloDriver } from '@nestjs/apollo';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5433,
      username: 'postgres',
      password: 'Sarvadhi@2022',
      database: 'graphQL',
      entities: [Company],
      synchronize: true,
    }),
    GraphQLModule.forRoot({ autoSchemaFile: true, driver: ApolloDriver }),
    CompanyModule,
  ],
})
export class AppModule {}
