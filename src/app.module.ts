import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EpisodesModule } from './episodes/episodes.module';
import { ConfigController } from './config/config.controller';
import { TopicsModule } from './topics/topics.module';

@Module({
  imports: [EpisodesModule, TopicsModule],
  controllers: [AppController, ConfigController],
  providers: [AppService],
})
export class AppModule {}
