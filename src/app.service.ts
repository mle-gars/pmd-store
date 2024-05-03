import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getClient(body): string {
    return `${body.name}`;
  }
 
  postClient(body): string {
    return `${body.name}`;
  }
}