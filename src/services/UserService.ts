import { RegisterUserDto } from "../dto/RegisterUserDto";
import User from "../models/User";
import bcrypt from "bcrypt";
import HttpException from "../exceptions/HttpException";

interface UserServiceImp {
  create(data: RegisterUserDto): Promise<Object>;
  findByEmail(email: string): Promise<Object>;
}

class UserService implements UserServiceImp {
  async create(data: RegisterUserDto): Promise<Object> {
    const hash = await bcrypt.hash(data.password, 10);
    data.password = hash;

    const user = await User.create(data);
    return user;
  }

  async findByEmail(email: string): Promise<Object> {
    const user = await User.findOne({ email: email }).exec();
    if (!user) {
      throw new HttpException(404, "User not found");
    }

    return user;
  }
}

export default UserService;
