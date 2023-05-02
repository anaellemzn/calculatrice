import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { epilog } from 'yargs';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('nathan')
  getNathan(): string {
    return this.appService.getNathan();
  }

  @Post('nathan')
  postNathan(@Body('episode') episode: number): void {
    this.appService.postNathan(episode);
  }
}
