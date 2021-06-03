// require('dotenv').config();
const fs = require('fs');
const path = require('path');

const swaggerHubApiNames = {
	oapi: 'OAPI',
	partner_bank_api: 'partner-bank-api',
}

// const SWAGGER_HUB_API = process.env.SWAGGER_HUB_API;
const MODIFIED_FILES = JSON.parse(process.env.MODIFIED_FILES);
// const MODIFIED_FILES = [".github/workflows/blank.yml","README.md","index.js", "oapi.js"];

const getModifiedFilesByName = () => 
    MODIFIED_FILES.map((element) => element.split(/[\\\/]/).pop().split('.').shift())

const getSwaggerFileName = () =>
    Object.keys(swaggerHubApiNames).find(element => getModifiedFilesByName().includes(element));

const getSwaggerHubApiName = () =>
    swaggerHubApiNames[getSwaggerFileName()];

const readSwaggerDefinitionFile = () =>
  fs.readFileSync(path.resolve(__dirname, `./${getSwaggerFileName()}.yaml`), 'utf8');

if (getSwaggerFileName() !== undefined) {
    console.log(readSwaggerDefinitionFile());
    console.log(getSwaggerHubApiName());
}
