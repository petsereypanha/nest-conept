import { Inject } from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import { Request } from 'express';

export class EventContext {
  constructor(@Inject(REQUEST) public readonly request: Request) {}
}
