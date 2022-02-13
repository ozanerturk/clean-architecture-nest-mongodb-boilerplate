import { Module } from '@nestjs/common';
import * as path from 'path';
import { I18nModule, I18nJsonParser } from 'nestjs-i18n';
let dir =  path.resolve(path.join(__dirname, '../../i18n'))
console.log(dir)
@Module({
  imports: [
    I18nModule.forRoot({
      fallbackLanguage: 'en',
      parser: I18nJsonParser,
      parserOptions: {
        path: dir
      },
    }),
  ],
  controllers: [],
})
export class LocalizationModule { }