import { Module } from '@nestjs/common';
import { LaboratoriosModule } from './laboratorios/laboratorios.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://flromano:JkJq2ydVrCJiv7Ah@labexames.pu78y.mongodb.net/labexames?retryWrites=true&w=majority',
    ),
    LaboratoriosModule,
  ],
})
export class AppModule {}
