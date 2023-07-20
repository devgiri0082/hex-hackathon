import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFiles, Headers } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { AnyFilesInterceptor } from '@nestjs/platform-express';

@Controller('users')
@UseInterceptors(AnyFilesInterceptor())
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Post()
  create(@UploadedFiles() files: Array<Express.Multer.File>, @Body() createUserDto: CreateUserDto, @Headers() header: any) {
    return this.usersService.create(files, createUserDto, header.authorization.split(" ")[1]);
  }
}
