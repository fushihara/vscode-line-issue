callTest().catch((error:Error)=>{
  console.error(`start----`);
  const stack = error.stack;
  console.error(stack);
  console.log(stack);
  console.error(`end----`);
});
//keep empty lines and comment
//


































async function callTest(){
  await Promise.reject(new Error("test"));
}