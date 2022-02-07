import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { ExamesService } from './exames.service';
import { CreateExameDto } from './dto/create-exame.dto';
import { UpdateExameDto } from './dto/update-exame.dto';

@Controller('exames')
export class ExamesController {
  constructor(private readonly examesService: ExamesService) {}

  @Post()
  create(@Body() createExameDto: CreateExameDto) {
    return this.examesService.create(createExameDto);
  }

  @Post('lote')
  createLot(@Body() createExameDto: Array<CreateExameDto>) {
    return this.examesService.createLot(createExameDto);
  }

  @Get()
  findAll(@Query('buscar') buscar: string) {
    return this.examesService.findAll(buscar);
  }

  @Patch('lote')
  updateLot(@Body() updateExameDto: UpdateExameDto[]) {
    return this.examesService.updateLot(updateExameDto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateExameDto: UpdateExameDto) {
    return this.examesService.update(id, updateExameDto);
  }

  @Delete('lote')
  removeLot(@Body() ids: string[]) {
    return this.examesService.removeLot(ids);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.examesService.remove(id);
  }

  @Patch(':exame_id/:lab_id')
  attach(@Param('exame_id') exame_id: string, @Param('lab_id') lab_id: string) {
    return this.examesService.attach(exame_id, lab_id);
  }

  @Delete(':exame_id/:lab_id')
  detach(@Param('exame_id') exame_id: string, @Param('lab_id') lab_id: string) {
    return this.examesService.detach(exame_id, lab_id);
  }
}
