const input = require('@inquirer/prompts').input;
const qr = require('qr-image');
const fs = require('fs');

function file(name) {
  return fs.createWriteStream(__dirname + '/' + name);
}

(async function () {
  const answer = await input({ message: 'Enter your name', required: true });
  qr.image(answer, { type: 'png', ec_level: 'Q', parse_url: true, margin: 1 }).pipe(file('qr_t.png'));
})();
