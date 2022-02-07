import { Module } from '@nestjs/common';
import { LaboratoriosService } from './laboratorios.service';
import { LaboratoriosController } from './laboratorios.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Laboratorio, LaboratorioSchema } from './schemas/laboratorio.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Laboratorio.name, schema: LaboratorioSchema },
    ]),
  ],
  controllers: [LaboratoriosController],
  providers: [LaboratoriosService],
})
export class LaboratoriosModule {}
