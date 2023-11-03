/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import * as path from 'path';
import {
  AcceptLanguageResolver,
  HeaderResolver,
  I18nModule,
  QueryResolver,
} from 'nestjs-i18n';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { langService } from './app.langservice';



@Module({
  imports: [
    I18nModule.forRoot({
      resolvers: [AcceptLanguageResolver, new QueryResolver(['lang']), new HeaderResolver(['x-custom-lang'])],
      fallbackLanguage: 'tr',
      loaderOptions: {
        path: path.join(__dirname, '/i18n/'),
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService,langService],
})
export class AppModule {}
