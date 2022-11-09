import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
} from '@nestjs/common';
import { CompanyInput } from './company.model';
import { CompanyService } from './company.service';

@Controller('company')
export class CompanyController {
  constructor(private readonly companyService: CompanyService) {}

  @Get()
  async getAllCompanies() {
    const companies = await this.companyService.findAll();

    return { companies };
  }
  @Post()
  async createCompany(@Body() data: CompanyInput) {
    const company = await this.companyService.createCompany(data);
    return { company };
  }
}
