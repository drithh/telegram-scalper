import 'dotenv/config';
import { Telegram } from './telegram';
import { Trade } from './trade';

(async () => {
  const trade = new Trade();
  const telegram = new Telegram();

  trade.event.on('message', (message) => {
    telegram.sendMessage(message);
  });
  telegram.event.on('message', (event: string[]) => {
    console.log(event);
    trade.call(event);
  });
})();
