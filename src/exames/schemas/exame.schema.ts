import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { Laboratorio } from 'src/laboratorios/schemas/laboratorio.schema';

export type ExameDocument = Exame & Document;

export enum Status {
  ATIVO = 'ativo',
  INATIVO = 'inativo',
}

export enum Type {
  CLINICA = 'analise clinica',
  IMAGEM = 'imagem',
}

@Schema()
export class Exame {
  @Prop()
  nome: string;

  @Prop({ enum: Object.values(Type), required: true })
  tipo: Type;

  @Prop({ enum: Object.values(Status), default: Status.ATIVO })
  status: Status;

  @Prop([{ type: mongoose.Schema.Types.ObjectId, ref: Laboratorio.name }])
  laboratorios: Laboratorio[];
}

export const ExameSchema = SchemaFactory.createForClass(Exame);
