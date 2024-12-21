import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get('mysub')
  getMySub(): string {
    return 'No auth yet';
  }
}
