import { Module } from '@nestjs/common';
import { ConfigModule, ConfigModuleOptions } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller'; // Import your controller
import { AppService } from './app.service'; // Import your service (if exists)

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    } as ConfigModuleOptions),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      autoLoadEntities: true,
      synchronize: true,
    }),
  ],
  controllers: [AppController], // Add your AppController
  providers: [AppService], // Add AppService (if you have one)
})
export class AppModule {}
