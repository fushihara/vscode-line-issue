import axios from "axios";
const URL_BADSSL ="https://expired.badssl.com/";
callAxios().catch(catchFunction("axios"));
/**
npx tsc ./src/fetch-error-test.ts && node ./src/fetch-error-test.js
npx ts-node ./src/fetch-error-test.ts
node -r ts-node/register ./src/fetch-error-test.ts
*/
function catchFunction(message:string){
  return function(error:Error){
    console.error(`${message} start----`);
    const stack = error.stack;
    console.error(stack);
    console.log(stack);
    console.error(`${message} end----`);
  }
}
/* keep empty lines
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */
async function callAxios(){
  await axios(URL_BADSSL).catch(error=>{
    return Promise.reject(new Error(error));
  });
}