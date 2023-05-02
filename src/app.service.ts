import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  private readonly watch: number[] = [];

  postNathan(episode: number) {
    this.watch.push(episode);
  }
  getNathan(): string {

    return `Nathan regarde l'épisode ${this.watch}`;
  }
  getHello(): string {
    return 'Hello World!';
  }
  

}
