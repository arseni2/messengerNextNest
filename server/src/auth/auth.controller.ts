import {Body, Controller, Post} from '@nestjs/common';
import {UsersDto} from "../users/users.dto";
import {UsersService} from "../users/users.service";
import {AuthLoginDto} from "./auth.login.dto";

@Controller('auth')
export class AuthController {
    constructor(
        private usersService: UsersService
    ) {
    }

    @Post("signin")
    signin(@Body() loginDto: AuthLoginDto) {
        return this.usersService.login(loginDto)
    }
    @Post("signup")
    signup(@Body() userDto: UsersDto) {
        return this.usersService.createUsers(userDto)
    }
}
