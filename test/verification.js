import {
  Client
} from '../lib/rest/client';

// let authId = 'MAZJJKMWNLZJNIYJKYYT';
// let authToken = 'ZTQyYjI5NjkyMWE2N2YzMmM3ZWZiYWQ1YWI1NzAw';

let authId = 'MAMTI0ZWVIMDC5MMRIOT';
let authToken = 'ZTRmNWUyMWJlYWMyNDc2NjliNzViODdmYjM1ZWNk';

let client = new Client(authId, authToken);

describe('phlo client init', function () {

  it('Should test this', async function () {

    console.log("ABCD");

    // client.verification.retreive_address(5);
    await client.verification.list_all_addresses();
    // await client.verification.create_address('IN', 'abc', 'mr', 'shweta', 'ravi', 'bhagwati', 'sector', 'mumbai', 'maharashtra', '410209', 'iso', 'gdusgfuauf', 'alias', 'file', 'aadhar', '123', 'fascal123', 'st12', 'mu34');

  });

});
