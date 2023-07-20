import {
  Controller,
  Get,
  Post,
  Body,
  UseInterceptors,
  UploadedFiles,
  Headers,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { AnyFilesInterceptor } from '@nestjs/platform-express';

@Controller('users')
@UseInterceptors(AnyFilesInterceptor())
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(
    @UploadedFiles() files: Array<Express.Multer.File>,
    @Body() createUserDto: CreateUserDto,
    @Headers() header: any,
  ) {
    return this.usersService.create(
      files,
      createUserDto,
      header.authorization.split(' ')[1],
    );
  }

  @Get()
  get(@Body() getUserDto: { email: string }) {
    return this.usersService.getUser(getUserDto.email);
  }
}
