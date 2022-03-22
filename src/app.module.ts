import { Module } from '@nestjs/common';
import { LoginModule } from './auth/login.module';
import { ClientModule } from './client/client.module';
import { HotelModule } from './hotels/hotel.module';
import { RestaurantModule } from './restaurants/restaurant.module';


@Module({
  imports: [LoginModule, ClientModule, HotelModule, RestaurantModule],
})
export class AppModule {}
