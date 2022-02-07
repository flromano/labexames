import { Module } from '@nestjs/common';
import { ExamesService } from './exames.service';
import { ExamesController } from './exames.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Exame, ExameSchema } from './schemas/exame.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Exame.name, schema: ExameSchema }]),
  ],
  controllers: [ExamesController],
  providers: [ExamesService],
})
export class ExamesModule {}
