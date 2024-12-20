import {
  ContextId,
  ContextIdFactory,
  ContextIdResolver,
  ContextIdResolverFn,
  ContextIdStrategy,
  HostComponentInfo,
} from '@nestjs/core';
import { Request } from 'express';
import { pick } from 'accept-language-parser';
import { I18nService } from '../../../i18n/i18n.service';

export class AggregateByLocaleContextIdStrategy implements ContextIdStrategy {
  private readonly locale = new Map<string, ContextId>();

  attach(
    contextId: ContextId,
    request: Request,
  ): ContextIdResolverFn | ContextIdResolver {
    const localCode =
      pick(
        I18nService.supportedLanguages,
        request.headers['accept-language'],
      ) ?? I18nService.defaultLanguage;
    let localeSubTreeId: ContextId;
    if (this.locale.has(localCode)) {
      localeSubTreeId = this.locale.get(localCode);
    } else {
      localeSubTreeId = ContextIdFactory.create();
      this.locale.set(localCode, localeSubTreeId);
      setTimeout(() => {
        this.locale.delete(localCode);
      }, 3000);
    }
    return {
      payload: { localCode },
      resolve: (info: HostComponentInfo) =>
        info.isTreeDurable ? localeSubTreeId : contextId,
    };
  }
}
