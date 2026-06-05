import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HealthModule } from './modules/health/health.module';
import { ConfigModule } from '@nestjs/config';
import { envValidationSchema } from './config/env.validation';
import appConfig from './config/app.config';
import DatabaseConfig from './config/database.config';
import RedisConfig from './config/redis.config';
import JwtConfig from './config/jwt.config';

@Module({
  imports: [
    HealthModule,
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      validationSchema: envValidationSchema,
      load: [appConfig, DatabaseConfig, RedisConfig, JwtConfig],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
