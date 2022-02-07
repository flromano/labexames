import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateLaboratorioDto } from './dto/create-laboratorio.dto';
import { UpdateLaboratorioDto } from './dto/update-laboratorio.dto';
import {
  Laboratorio,
  LaboratorioDocument,
  Status,
} from './schemas/laboratorio.schema';

@Injectable()
export class LaboratoriosService {
  constructor(
    @InjectModel(Laboratorio.name)
    private laboratorioModel: Model<LaboratorioDocument>,
  ) {}

  async create(createLaboratorioDto: CreateLaboratorioDto) {
    return this.laboratorioModel.create(createLaboratorioDto);
  }

  async findAll() {
    return await this.laboratorioModel.find({ status: Status.ATIVO }).exec();
  }

  async update(id: string, updateLaboratorioDto: UpdateLaboratorioDto) {
    const laboratorio = await this.laboratorioModel.findByIdAndUpdate(
      id,
      updateLaboratorioDto,
      {
        new: true,
      },
    );
    if (!laboratorio) {
      throw new NotFoundException();
    }
    return laboratorio;
  }

  async updateLot(updateLaboratorioDto: UpdateLaboratorioDto[]) {
    return await Promise.all(
      updateLaboratorioDto.map(async (update) => {
        return await this.update(update.id, update);
      }),
    );
  }

  async remove(id: string) {
    const status = await this.laboratorioModel
      .updateOne({ _id: id }, { status: Status.INATIVO })
      .exec();
    return { deleted: !!status.modifiedCount };
  }

  async removeLot(ids: string[]) {
    return await Promise.all(
      ids.map(async (id) => {
        return await this.remove(id);
      }),
    );
  }
}
