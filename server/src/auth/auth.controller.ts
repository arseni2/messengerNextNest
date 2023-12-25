import {Body, Controller, Post} from '@nestjs/common';
import {UsersDto} from "../users/users.dto";
import {UsersService} from "../users/users.service";

@Controller('auth')
export class AuthController {
    constructor(
        private usersService: UsersService
    ) {
    }

    @Post("signup")
    signup(@Body() userDto: UsersDto) {
        return this.usersService.createUsers(userDto)
    }
}
