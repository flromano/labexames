import { ApiProperty } from '@nestjs/swagger';

export class CreateLaboratorioDto {
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
