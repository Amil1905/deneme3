/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { I18nContext, I18nService } from 'nestjs-i18n';
import { langService } from './app.langservice';

@Injectable()
export class AppService {
  constructor(
    private readonly i18n: I18nService,
    private readonly langService: langService,
  ) {}

  getHello(): string {
    return this.langService.t('test.Hi');
  }
}
