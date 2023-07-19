import { Injectable } from '@nestjs/common';

@Injectable()
export class TestService {
  get(body: any) {
    console.log('here', body);
    return { message: 'This action adds a new test' };
  }
}
