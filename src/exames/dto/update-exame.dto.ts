import { Type } from '../schemas/exame.schema';
import { PartialType } from '@nestjs/mapped-types';
import { CreateExameDto } from './create-exame.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateExameDto extends PartialType(CreateExameDto) {
  @ApiProperty({
    example: 'id',
    description: `Pode ser enviado junto ao body quando for execultado em lote`,
  })
  id?: string;

  @ApiProperty({
    example: 'Covid',
    description: `O nome do descritivo para o exame.`,
  })
  nome?: string;

  @ApiProperty({
    example: 'analise clinica ou imagem',
    description: `O tipo de exame pode receber as duas propriedades [ analise clinica | imagem ]`,
  })
  tipo?: Type;

  @ApiProperty({
    example: 'id ou array de ids',
    description: `Pode receber um id ou um array de ids para asocciar o exame a um ou mais laboratórios`,
  })
  laboratorios?: string[];
}
