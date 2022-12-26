import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Res,
} from '@nestjs/common';
import { response } from 'express';

@Controller('coffees')
export class CoffeesController {
  @Get('')
  //   fineAll(@Res() response) {
  fineAll() {
    // response.status(200).send('fine123456');
    return 'fine Work';
  }

  @Get(':id')
  finOne(@Param('id') id: string) {
    return 'test id fine ' + id;
  }

  @Post()
  //   @HttpCode(HttpStatus.GONE)
  creart(@Body() body) {
    return body;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body) {
    return 'test2 id is fine is updated! ' + id;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return 'test3 id is fine is deleted ' + id;
  }
}
