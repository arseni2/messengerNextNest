import {Injectable} from '@nestjs/common';
import {Repository} from "typeorm";
import {UsersEntity} from "./users.entity";
import {InjectRepository} from "@nestjs/typeorm";
import {UsersDto} from "./users.dto";
import * as hmacSHA512 from 'crypto-js/hmac-SHA512';
import {AuthLoginDto} from "../auth/auth.login.dto";

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(UsersEntity)
        private UsersRepo: Repository<UsersEntity>
    ) {}
    private generatedHash(str: string) {
        return
    }
    private passToHash(password: string) {
        return hmacSHA512(password, "123")
    }

    login(loginDto: AuthLoginDto) {

    }
    createUsers(userDto: UsersDto) {
        let password = this.passToHash(userDto.password)
        console.log(password)
        let hashcode = this.generatedHash(userDto.firstName)
        console.log(hashcode)
        return this.UsersRepo.save(userDto)
    }

}
