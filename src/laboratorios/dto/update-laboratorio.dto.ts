import { PartialType } from '@nestjs/mapped-types';
import { CreateLaboratorioDto } from './create-laboratorio.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateLaboratorioDto extends PartialType(CreateLaboratorioDto) {
  @ApiProperty({
    example: 'id',
    description: `Pode ser enviado junto ao body quando for execultado em lote`,
  })
  id?: string;

  @ApiProperty({
    example: 'Laboratório de Teste',
    description: `O nome do Laborátorio.`,
  })
  nome: string;

  @ApiProperty({
    example: 'Rua Margarida, 100 Bairro Jardins',
    description: `O endereço do Laborátorio.`,
  })
  endereco: string;
}
