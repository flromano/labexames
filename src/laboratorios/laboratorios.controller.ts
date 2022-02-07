import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { LaboratoriosService } from './laboratorios.service';
import { CreateLaboratorioDto } from './dto/create-laboratorio.dto';
import { UpdateLaboratorioDto } from './dto/update-laboratorio.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('laboratorios')
@Controller('laboratorios')
export class LaboratoriosController {
  constructor(private readonly laboratoriosService: LaboratoriosService) {}

  @Post()
  create(@Body() createLaboratorioDto: CreateLaboratorioDto) {
    return this.laboratoriosService.create(createLaboratorioDto);
  }

  @Post('lote')
  createLot(@Body() createLaboratorioDto: CreateLaboratorioDto) {
    return this.laboratoriosService.create(createLaboratorioDto);
  }

  @Get()
  findAll() {
    return this.laboratoriosService.findAll();
  }

  @Patch('lote')
  updateLot(@Body() updateLaboratorioDto: UpdateLaboratorioDto[]) {
    return this.laboratoriosService.updateLot(updateLaboratorioDto);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateLaboratorioDto: UpdateLaboratorioDto,
  ) {
    return this.laboratoriosService.update(id, updateLaboratorioDto);
  }

  @Delete('lote')
  removeLot(@Body() ids: string[]) {
    return this.laboratoriosService.removeLot(ids);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.laboratoriosService.remove(id);
  }
}
