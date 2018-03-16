const {getBrands} = require('node-car-api');
const {getModels} = require('node-car-api');



getBrands().then(res=>{
  console.log(res)
}).catch(err=>{
  console.log(err)
})
getModels('PEUGEOT').then(res=>{
  console.log(res)
}).catch(err=>{
  console.log(err)
})
