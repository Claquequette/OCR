import { runOCR } from './config.js';

(async () => {
  const image = './images/sample-text.png'; // path to your image
  const text = await runOCR(image);
  console.log('Recognized text:', text);
})();
