import { Resolver, Query, Mutation, Arg } from "type-graphql";
import { User } from '../../entity/user';
import { CreateUserInput } from '../inputs/create_user_input';

@Resolver()
export class UserResolver {
  @Query(() => [User])
  users() {
    return User.find();
  }

  @Query(() => User)
  user(@Arg("id") id: string) {
    return User.findOne({ where: { id }});
  }

  @Mutation(() => User)
  async createUser(@Arg("data") data: CreateUserInput) {
    const user = User.create(data);
    await user.save();
    return user;
  }
}
