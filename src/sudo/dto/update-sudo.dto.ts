import { PartialType } from '@nestjs/mapped-types';
import { CreateSudoDto } from './create-sudo.dto';

export class UpdateSudoDto extends PartialType(CreateSudoDto) {}
