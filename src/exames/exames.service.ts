import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateExameDto } from './dto/create-exame.dto';
import { UpdateExameDto } from './dto/update-exame.dto';
import { Exame, ExameDocument, Status } from './schemas/exame.schema';

@Injectable()
export class ExamesService {
  constructor(
    @InjectModel(Exame.name) private exameModel: Model<ExameDocument>,
  ) {}

  async create(createExameDto: CreateExameDto) {
    const exame = new this.exameModel(createExameDto);
    await exame.populate('laboratorios');
    return exame.save();
  }

  async createLot(createExameDto: CreateExameDto[]) {
    return await Promise.all(
      createExameDto.map(async (create) => {
        return await this.create(create);
      }),
    );
  }

  async findAll(buscar: string = null) {
    let filter = { status: Status.ATIVO };
    if (buscar) {
      filter = Object.assign(filter, {
        nome: { $regex: '.*' + buscar + '.*', $options: 'i' },
      });
    }
    return await this.exameModel.find(filter).populate('laboratorios').exec();
  }

  async update(id: string, updateExameDto: UpdateExameDto) {
    const exame = await this.exameModel
      .findByIdAndUpdate(id, updateExameDto, {
        new: true,
      })
      .populate('laboratorios');
    if (!exame) {
      throw new NotFoundException();
    }
    return exame;
  }

  async updateLot(updateExameDto: UpdateExameDto[]) {
    return await Promise.all(
      updateExameDto.map(async (update) => {
        return await this.update(update.id, update);
      }),
    );
  }

  async remove(id: string) {
    const status = await this.exameModel
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

  async findOne(id: string) {
    return await this.exameModel.findById(id).exec();
  }

  async attach(exame_id: string, lab_id: string) {
    const exame = await this.findOne(exame_id);
    const laboratorios = exame.laboratorios.map((id) => id.toString());
    laboratorios.push(lab_id);
    return this.update(exame_id, { laboratorios });
  }

  async detach(exame_id: string, lab_id: string) {
    const exame = await this.findOne(exame_id);
    let laboratorios = exame.laboratorios.map((id) => id.toString());
    laboratorios = laboratorios.filter((id) => id !== lab_id);
    return this.update(exame_id, { laboratorios });
  }
}
