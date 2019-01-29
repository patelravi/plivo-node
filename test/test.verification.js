import {
  Client
} from '../lib/rest/client';

// let authId = 'MAZJJKMWNLZJNIYJKYYT';
// let authToken = 'ZTQyYjI5NjkyMWE2N2YzMmM3ZWZiYWQ1YWI1NzAw';

let authId = 'MAMTI0ZWVIMDC5MMRIOT';
let authToken = 'ZTRmNWUyMWJlYWMyNDc2NjliNzViODdmYjM1ZWNk';
// https://api.numbers.plivodev.com/v1/Account/MAMTI0ZWVIMDC5MMRIOT/Verification/Address/
// https://api.numbers.plivodev.com/v1/Account/MAMTI0ZWVIMDC5MMRIOT/Verirification/Address/',
let client = new Client(authId, authToken);

describe('phlo client init', function () {

  it('Should test this', async function () {

    // await client.verification.retreive_address(5);
    
    //  let addressList = await client.verification.list_all_addresses();
    //  console.log('addreess list is =>', JSON.stringify(addressList));
    
    //  let addressCreate = await client.verification.create_address('IN', '9274222998', 'Mr', 'shweta', 'ravi', 'bhagwati heritage 1201', 'sector-21', 'mumbai', 'maharashtra', '410209', 'IN', 'https://www.google.com/', 'Null', 'Null', 'passport', '123', 'fascal123', 'st12', 'mu34');
    // console.log('address Create is=>',JSON.stringify(addressCreate));
    
    //  await client.verification.delete_address(5); 
  
    // await client.verification.update_address('usa', '9274222998', 'Mrs', 'shweta', 'ravi', 'bhagwati heritage 1201', 'sector-21', 'mumbai', 'maharashtra', '410209', 'IN', 'https://www.google.com/', 'Null', 'Null', 'passport', '123', 'fascal123', 'st12', 'mu34');
   
   
    // await client.verification.retreive_identity(5);
   
    // let identityList= await client.verification.list_all_identity();
    // console.log('identity list is =>', JSON.stringify(identityList));
    
  //   let identityCreate=await client.verification.create_identity('IN', '9274222998', 'Mr', 'shweta', 'ravi', 'bhagwati heritage 1201', 'sector-21', 'mumbai', 'maharashtra', '410209', 'IN','https://www.google.com/', 'Null', 'Null', 'passport', '123', 'IN','ind-123','gujarat','01-02-1991','id-date-12/10/2017','bus-plivo','fascal123', 'st12', 'mu34');
  //  console.log('identity Create is=>',JSON.stringify(identityCreate));

  let identityDelete = await client.verification.delete_identity(5); 
  console.log('identity Delete is=>',JSON.stringify(identityDelete));
  
    // await client.verification.update_identity('IN', '9274222998', 'Mr', 'shweta', 'ravi', 'bhagwati heritage 1201', 'sector-21', 'mumbai', 'maharashtra', '410209', 'IN', 'https://www.google.com/', 'Null', 'Null', 'passport', '123','IN','ind-123','gujarat','01-02-1991','id-date-12/10/2017','bus-plivo','fascal123', 'st12', 'mu34');
  });

});
