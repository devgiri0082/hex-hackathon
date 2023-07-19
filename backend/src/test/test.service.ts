import { Injectable } from '@nestjs/common';

@Injectable()
export class TestService {
  get() {
    console.log('here');
    return { message: 'This action adds a new test' };
  }
}
