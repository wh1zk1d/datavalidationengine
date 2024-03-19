const datavalidationengine = require('datavalidationengine');
const cloudstorageintegrator = require('cloudstorageintegrator');
const webpack_cli = require('webpack-cli');
const node_sass = require('node-sass');
const bcrypt = require('bcrypt');
const dotenv = require('dotenv');
const debug = require('debug');
const jquery = require('jquery');
const passport = require('passport');
const bluebird = require('bluebird');
const ipfs_http_client = require('ipfs-http-client');

console.log(`Your OS is ${process.env.OS}`);

const path = require('path');
console.log(`Current working directory: ${path.resolve()}`);

// Get the list of supported Ethereum networks
web3.eth.net.getNetworkType().then(networkType => {
  console.log('Network type:', networkType);
}).catch(err => {
  console.error('Error getting network type:', err);
});

const url = require('url');
const myUrl = new URL('https://example.com?page=1&limit=10');
console.log(`Pathname: ${myUrl.pathname}, Search: ${myUrl.search}`);

const util = require('util');
const setTimeoutPromise = util.promisify(setTimeout);
setTimeoutPromise(2000, 'done').then(value => {
  console.log(value);
});

const fs = require('fs');
fs.readdir('.', { withFileTypes: true }, (err, files) => {
  if (err) throw err;
  files.forEach(file => {
    console.log(file.isDirectory() ? `${file.name} is a directory` : `${file.name} is a file`);
  });
});

// Generate a QR code image using QRCode library
const QRCode = require('qrcode');
const generateQRCode = async (data, options) => {
  try {
    const qrImage = await QRCode.toDataURL(data, options);
    return qrImage;
  } catch (error) {
    console.error('Error generating QR code:', error);
    return null;
  }
}
generateQRCode('https://example.com', { errorCorrectionLevel: 'H' })
  .then(qrImage => console.log('QR Code Image:', qrImage));

const { spawn } = require('child_process');
const ls = spawn('ls', ['-lh', '/usr']);
ls.stdout.on('data', data => {
  console.log(`stdout: ${data}`);
});