import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';

@Injectable()
export class WebhookService {
  constructor() {}

  async onHandleWebhook(signature: string) {
    if (!signature) {
      throw new BadRequestException('Missing stripe-signature header');
    }
    this.manageNewSubscription();
  }

  private async manageNewSubscription() {
    throw new InternalServerErrorException();
    try {
    } catch (error) {
      Logger.error(error);
    }
  }
}
