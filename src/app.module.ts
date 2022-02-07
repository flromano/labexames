import { Module } from '@nestjs/common';
import { LaboratoriosModule } from './laboratorios/laboratorios.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ExamesModule } from './exames/exames.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://flromano:JkJq2ydVrCJiv7Ah@labexames.pu78y.mongodb.net/labexames?retryWrites=true&w=majority',
    ),
    LaboratoriosModule,
    ExamesModule,
  ],
})
export class AppModule {}
