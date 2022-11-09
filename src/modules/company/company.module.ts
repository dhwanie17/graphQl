import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Company } from './company.model';
import { CompanyService } from './company.service';
import { CompanyController } from './company.controller';
import { CompanyResolver } from './company.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Company])],
  providers: [CompanyService, CompanyResolver],
  exports: [CompanyService],
  controllers: [CompanyController],
})
export class CompanyModule {}
