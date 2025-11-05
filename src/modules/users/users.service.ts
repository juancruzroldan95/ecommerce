import { Injectable } from "@nestjs/common";
import { User } from "./entities/user.entity";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateUserDto } from "./dtos/createUser.dto";

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  async findOne(id: string): Promise<User> {
    return this.usersRepository.findOneBy({ id });
  }

  async create(createUserDto: CreateUserDto): Promise<User> {
    const newUser = this.usersRepository.create(createUserDto);
    await this.usersRepository.save(newUser);
    return newUser;
  }

  // TODO: Se puede convertir en un método estático del repositorio
  async chackIfEmailExists(email: string): Promise<boolean> {
    const user = await this.usersRepository.findOneBy({ email });
    console.log(user);
    return !!user;
  }

  async finByEmail(email: string): Promise<User> {
    return this.usersRepository.findOneBy({ email });
  }
}
