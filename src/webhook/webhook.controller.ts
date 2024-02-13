import { Controller, Get, Headers, Post } from '@nestjs/common';
import { WebhookService } from './webhook.service';

@Controller('webhook')
export class WebhookController {
  constructor(private readonly webhookService: WebhookService) {}

  @Get()
  async onCompletePayment(@Headers('stripe-signature') signature: string) {
    return this.webhookService.onHandleWebhook('signature');
  }
}
