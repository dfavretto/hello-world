// require('dotenv').config();
const fs = require('fs');
const path = require('path');

const swaggerHubApiNames = {
	oapi: 'OAPI',
	partner_bank_api: 'partner-bank-api',
}

// const SWAGGER_HUB_API = process.env.SWAGGER_HUB_API;
// const MODIFIED_FILES = JSON.parse(process.env.MODIFIED_FILES);
const MODIFIED_FILES = [".github/workflows/blank.yml","README.md","index.js", "partner_bank_api.js"];

const getModifiedFilesByName = () => 
    MODIFIED_FILES.map((element) => element.split(/[\\\/]/).pop().split('.').shift())
const getSwaggerHubApiName = () =>
    Object.keys(swaggerHubApiNames).find(element => getModifiedFilesByName().includes(element));

const readSwaggerDefinitionFile = () =>
  fs.readFileSync(path.resolve(__dirname, `./${getSwaggerHubApiName()}.yaml`), 'utf8');

console.log(readSwaggerDefinitionFile());

