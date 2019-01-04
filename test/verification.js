import {
  Client
} from '../lib/rest/client';

let authId = 'MAZJJKMWNLZJNIYJKYYT';
let authToken = 'ZTQyYjI5NjkyMWE2N2YzMmM3ZWZiYWQ1YWI1NzAw';

let client = new Client(authId, authToken);

describe('phlo client init', function () {

  it('Should test this', async function () {

    console.log("ABCD");

    client.addressVerification.get(5);

  });

});
