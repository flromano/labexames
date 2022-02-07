import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type LaboratorioDocument = Laboratorio & Document;

export enum Status {
  ATIVO = 'ativo',
  INATIVO = 'inativo',
}

@Schema()
export class Laboratorio {
  @Prop()
  nome: string;

  @Prop()
  endereco: string;

  @Prop({ enum: Object.values(Status), default: Status.ATIVO })
  status: Status;
}

export const LaboratorioSchema = SchemaFactory.createForClass(Laboratorio);
