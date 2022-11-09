import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';

import { Company, CompanyInput } from './company.model';

@Injectable()
export class CompanyService {
  constructor(
    @InjectRepository(Company)
    private readonly CompanyRepository: Repository<Company>,
  ) {}

  findAll() {
    return this.CompanyRepository.find();
  }

  async createCompany(data: CompanyInput) {
    const Company = await this.CompanyRepository.save(
      this.CompanyRepository.create(data),
    );
    return Company;
  }
}
