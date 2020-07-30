import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLFederationModule } from '@nestjs/graphql';
import { join } from 'path';
import { HelloResolver, Health } from './hello/hello.resolver';
import { HelloModule } from './hello/hello.module';

@Module({
  imports: [
    HelloModule,
    GraphQLFederationModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'schema.gql'),
      playground: true,
      introspection: true,
      buildSchemaOptions: {
        orphanedTypes: [Health],
      },
    }),
    HelloModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
