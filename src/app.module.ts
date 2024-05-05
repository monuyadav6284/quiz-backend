import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { QuestionModule } from './Questions/questions.module';
import { ResultModule } from './resultstatus/result.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.DB_URI),
    UserModule,
    QuestionModule,
    ResultModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
