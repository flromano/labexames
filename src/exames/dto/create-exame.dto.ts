import { Type } from '../schemas/exame.schema';

export class CreateExameDto {
  nome: string;
  tipo: Type;
  laboratorios?: string[];
}
