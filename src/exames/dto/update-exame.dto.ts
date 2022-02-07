import { Type } from '../schemas/exame.schema';
import { PartialType } from '@nestjs/mapped-types';
import { CreateExameDto } from './create-exame.dto';

export class UpdateExameDto extends PartialType(CreateExameDto) {
  id?: string;
  nome?: string;
  tipo?: Type;
  laboratorios?: string[];
}
