import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {AuthModule} from './auth/auth.module';
import {UsersModule} from './users/users.module';
import {TypeOrmModule} from "@nestjs/typeorm";

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: "postgres",
            port: 5432,
            username: "messenger_pdf0_user",
            password: "Pln40k8D4EBSYyYa3pEJcpw4hIlGltu3",
            host: "dpg-cm4mdpfqd2ns73el21bg-a.oregon-postgres.render.com",
            database: "messenger_pdf0",
            synchronize: true,
            ssl: {
                rejectUnauthorized: false,
            },
            autoLoadEntities: true
        }),
        AuthModule, UsersModule
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}
