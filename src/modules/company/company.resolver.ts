import { Int, Args, Query, Mutation, Resolver } from '@nestjs/graphql';
import { Company, CompanyInput } from './company.model';
import { CompanyService } from './company.service';

@Resolver((of) => Company)
export class CompanyResolver {
  constructor(private readonly CompanyService: CompanyService) {}

  @Query((returns) => [Company], { name: 'Companies', nullable: false })
  async getCompanys() {
    return this.CompanyService.findAll();
  }

  @Mutation(() => Company, { name: 'createCompany' })
  async createCompany(@Args('data') input: CompanyInput): Promise<Company> {
    return this.CompanyService.createCompany(input);
  }
}
