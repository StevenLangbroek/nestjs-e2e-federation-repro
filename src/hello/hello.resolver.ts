import { Resolver, Query } from '@nestjs/graphql';

@Resolver('Health')
export class HelloResolver {
  @Query(() => String)
  hello(): string {
    return 'World!';
  }
}
