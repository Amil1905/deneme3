/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import {  I18nContext, I18nService } from 'nestjs-i18n';


@Injectable()
export class langService {
  constructor(private readonly i18n: I18nService) {}
  t(key: string): string {
    
    return this.i18n.t(key,{lang:I18nContext.current().lang});
    
  }

}