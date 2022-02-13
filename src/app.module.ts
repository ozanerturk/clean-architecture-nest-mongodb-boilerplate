import { Module } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';
import { AllExceptionFilter } from 'infrastructure/common/filter/exception.filter';
import { I18nJsonParser, I18nModule } from 'nestjs-i18n';
import { ControllersModule } from './infrastructure/controllers/controllers.module';
import * as path from 'path';
import { LocalizationModule } from 'infrastructure/common/localization.module';
import { LoggerModule } from 'infrastructure/logger/logger.module';

@Module({
  imports: [
    LoggerModule,
    LocalizationModule,
    ControllersModule,
  ],

  controllers: [],
  providers: [
    {
      provide: APP_FILTER,
      useClass: AllExceptionFilter,
    },
  ],

})
export class AppModule { }
