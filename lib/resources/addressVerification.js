import {
  extend,
  validate
} from '../utils/common.js';
import {
  PlivoResource,
  PlivoResourceInterface
} from '../base';

const clientKey = Symbol();
const action = 'Verirification/Address/';
const idField = 'authId';


export class AdressVerification extends PlivoResource {
  constructor(client, data = {}) {
    super(action, AdressVerification, idField, client);

    if (idField in data) {
      this.id = data[idField];
    }

    extend(this, data);
  }

  // GET https://api.plivo.com/v1/Account/{auth_id}/Verification/Address/
}

export class AddressVerificationInterface extends PlivoResourceInterface{
  constructor(client, data = {}) {
    super(action, AdressVerification, idField, client);
    extend(this, data);

    this[clientKey] = client;
  }  

  get(id) {
    let errors = validate([
      {field: 'id', value: id, validators: ['isRequired']}
    ]);

    if (errors) {
      return errors;
    }

    return super.get();
  }

}
