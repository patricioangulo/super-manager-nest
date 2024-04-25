import { Controller, Get, Post, Body, Patch, Param, Delete, Res } from '@nestjs/common';
import { SudoService } from './sudo.service';
import { CreateSudoDto } from './dto/create-sudo.dto';
import { UpdateSudoDto } from './dto/update-sudo.dto';
import { Response } from 'express';

@Controller('sudo')
export class SudoController {
  constructor(private readonly sudoService: SudoService) {}

  @Post()
  create(@Body() createSudoDto: CreateSudoDto, @Res() response:Response) {
    this.sudoService.create(createSudoDto)
    .then(res=>{return response.status(200).json(res)})
    .catch(err=>{return response.jsonp({success: false, error: err})})
    // return this.sudoService.create(createSudoDto);
  }

  @Get()
  findAll() {
    return this.sudoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sudoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSudoDto: UpdateSudoDto) {
    return this.sudoService.update(+id, updateSudoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sudoService.remove(+id);
  }
}
