'use strict';

import {
  PhloClient
} from '../lib/rest/client';

describe('Phlo Member test cases', function () {

  let authId = 'MAZJJKMWNLZJNIYJKYYT';
  let authToken = 'ZTQyYjI5NjkyMWE2N2YzMmM3ZWZiYWQ1YWI1NzAw';
  let phloId = 'b30083e9-73c9-42a2-acfa-c08e6e66cd83';
  let nodeId = '85169eaf-d8b9-4e3d-9baf-13eb6b231bb0';

  let memberAddress = '919920700964';
  let memberAddress2 = '919898967510';
  let nixonAddress = '919620074923';

  /******************** Phlo resource test cases *********************/

  it('resumeCall - Phlo Member', async function () {
    try {
      let phloClient = new PhloClient(authId, authToken);
      let result = await phloClient.phlo(phloId).multiPartyCall(nodeId).member(memberAddress).resumeCall();
      console.log('resume call result -', result);
      return true;
    } catch (err) {
      throw err;
    }
  });

  it('voicemail drop - Phlo Member', async function () {
    try {
      let phloClient = new PhloClient(authId, authToken);
      let result = await phloClient.phlo(phloId).multiPartyCall(nodeId).member(nixonAddress).voicemailDrop();
      console.log('voicemail Drop call result -', result);
      return true;
    } catch (err) {
      throw err;
    }
  });

  it('hangup - Phlo Member', async function () {
    try {
      let phloClient = new PhloClient(authId, authToken);
      let result = await phloClient.phlo(phloId).multiPartyCall(nodeId).member(memberAddress2).hangup();
      console.log('hangup result -', result);
      return true;
    } catch (err) {
      throw err;
    }
  });

  it('hold - Phlo Member', async function () {
    try {
      let phloClient = new PhloClient(authId, authToken);
      let result = await phloClient.phlo(phloId).multiPartyCall(nodeId).member(nixonAddress).hold();
      console.log('hold result -', result);
      return true;
    } catch (err) {
      throw err;
    }
  });

  it('unhold - Phlo Member', async function () {
    try {
      let phloClient = new PhloClient(authId, authToken);
      let result = await phloClient.phlo(phloId).multiPartyCall(nodeId).member(memberAddress).unhold();
      console.log('hold result -', result);
      return true;
    } catch (err) {
      throw err;
    }
  });

});
