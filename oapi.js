const MODIFIED_FILES = [".github/workflows/blank.yml","README.md","index.js", "partner_bank_api.js"];
const swaggerHubApiNames = {
	oapi: 'OAPI',
	partner_bank_api: 'partner-bank-api',
}
const getModifiedFilesByName = () => 
    MODIFIED_FILES.map((element) => element.split(/[\\\/]/).pop().split('.').shift())

const getSwaggerHubApiName = () =>
    swaggerHubApiNames[Object.keys(swaggerHubApiNames).find(element => getModifiedFilesByName().includes(element))];

console.log(getSwaggerHubApiName());