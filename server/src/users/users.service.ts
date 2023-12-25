import {Injectable} from '@nestjs/common';
import {Repository} from "typeorm";
import {UsersEntity} from "./users.entity";
import {InjectRepository} from "@nestjs/typeorm";
import {UsersDto} from "./users.dto";
import * as hmacSHA512 from 'crypto-js/hmac-SHA512';

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
    createUsers(userDto: UsersDto) {
        let password = this.passToHash(userDto.password)
        console.log(password)
        let hashcode = this.generatedHash(userDto.firstName)
        console.log(hashcode)
        return this.UsersRepo.save(userDto)
    }

}
