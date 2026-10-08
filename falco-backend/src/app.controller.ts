import { Controller, Get } from '@nestjs/common';
//import { AppService } from './app.service.js';

@Controller('api')
export class AppController {
  @Get('hello')
  getHello() {
    return {
      message: 'Hello from Falco Backend!'
    };
  }
}
