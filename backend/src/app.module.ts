import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { TestModule } from './test/test.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => {
        console.log(configService.get('MONGODB_URI'));
        return {
          uri: configService.get('MONGODB_URI'),
          dbName: configService.get('MONGODB_DBNAME'),
        };
      },
      inject: [ConfigService],
    }),
    TestModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
