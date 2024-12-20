import { Inject, Injectable, Scope } from '@nestjs/common';
import type * as Schema from '../assets/locales/en.json';
import * as en from '../assets/locales/en.json';
import * as kh from '../assets/locales/kh.json';
import { REQUEST } from '@nestjs/core';
import format from 'string-format';

@Injectable({ scope: Scope.REQUEST, durable: true })
export class I18nService {
  constructor(
    @Inject(REQUEST) private readonly payload: { localeCode: string },
  ) {}

  public static readonly defaultLanguage = 'en';
  public static readonly supportedLanguages = ['en', 'kh'];
  private readonly locales: Record<string, typeof Schema> = { en, kh };

  public translate(
    key: keyof typeof Schema,
    ...arg: Array<string | Record<string, unknown>>
  ): string {
    const locale =
      this.locales[this.payload.localeCode ?? I18nService.defaultLanguage];
    const text = key.split('.').reduce((acc, cur) => acc[cur], locale);
    return format(text, ...arg);
  }
}
