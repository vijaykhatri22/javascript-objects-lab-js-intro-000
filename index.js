var recipes ={};

function updateObjectWithKeyAndValue(recipes,key,value){
  return Object.assign({},recipes,{[key] : value});
}

function destructivelyUpadeObjectWithKeyAndValue(recipes,key,value){
  recipes[key]=value;
  return recipes;
} 