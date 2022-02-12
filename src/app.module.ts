import { Module } from '@nestjs/common';
import { EntityGatewaysModule } from 'infrastructure/entityGateways/entityGateways.module';
// import { EnvironmentConfigModule } from './infrastructure/config/environment-config/environment-config.module';
// import { UsecasesProxyModule } from './infrastructure/usecases-proxy/usecases-proxy.module';
import { ControllersModule } from './infrastructure/controllers/controllers.module';

@Module({
  imports: [ControllersModule],
  
  controllers: [],
  providers: [],
})
export class AppModule { }
