import {
  extend,
  validate
} from '../utils/common.js';
import {
  PlivoResource,
  PlivoResourceInterface
} from '../base';

const clientKey = Symbol();
const addressVerificationAction = 'Verification/Address/';
const identityVerificationAction = 'Verification/Identity/';
const idField = 'authId';

/* ---------------Address method----------*/
export class AddressVerification extends PlivoResource {
  constructor(client, data = {}) {
    super(addressVerificationAction, AddressVerification, idField, client);

    if (idField in data) {
      this.id = data[idField];
    }

    extend(this, data);
  }
  delete_address(id) {
    let errors = validate([
      { field: 'id', value: id, validators: ['isRequired'] }
    ]);

    if (errors) {
      return errors;
    }

    return super.delete(id);
  }
  update_address(phone_number_country, number_type, salutation, first_name, last_name, address_line1, address_line2, city, region, postal_code, country_iso, callback_url, alias, file, proof_type, id_number, fiscal_identification_code, street_code, municipal_code) {
    return super.update({
      phone_number_country: phone_number_country,
      number_type: number_type,
      salutation: salutation,
      first_name: first_name,
      last_name: last_name,
      address_line1: address_line1,
      address_line2: address_line2,
      city: city,
      region: region,
      postal_code: postal_code,
      country_iso: country_iso,
      callback_url: callback_url,
      alias: alias,
      file: file,
      proof_type: proof_type,
      id_number: id_number,
      fiscal_identification_code: fiscal_identification_code,
      street_code: street_code,
      municipal_code: municipal_code
    });
  }


}

export class AddressVerificationInterface extends PlivoResourceInterface {
  constructor(client, data = {}) {
    super(addressVerificationAction, AddressVerification, idField, client);
    extend(this, data);

    this[clientKey] = client;
  }

  retreive_address(id) {
    let errors = validate([
      { field: 'id', value: id, validators: ['isRequired'] }
    ]);

    if (errors) {
      return errors;
    }

    return super.get(id);
  }

  list_all_addresses(params) {
    return super.list(params, 'POST');
  }

  create_address(phone_number_country, number_type, salutation, first_name, last_name, address_line1, address_line2, city, region, postal_code, country_iso, callback_url, alias, file, proof_type, id_number, fiscal_identification_code, street_code, municipal_code) {
    return super.create({
      phone_number_country: phone_number_country,
      number_type: number_type,
      salutation: salutation,
      first_name: first_name,
      last_name: last_name,
      address_line1: address_line1,
      address_line2: address_line2,
      city: city,
      region: region,
      postal_code: postal_code,
      country_iso: country_iso,
      callback_url: callback_url,
      alias: alias,
      file: file,
      proof_type: proof_type,
      id_number: id_number,
      fiscal_identification_code: fiscal_identification_code,
      street_code: street_code,
      municipal_code: municipal_code
    });
  }
}
/* ---------------Identity method----------*/

export class IdentityVerification extends PlivoResource {
  constructor(client, data = {}) {
    super(identityVerificationAction, IdentityVerification, idField, client);

    if (idField in data) {
      this.id = data[idField];
    }

    extend(this, data);
  }
  delete_identity(id) {
    let errors = validate([
      { field: 'id', value: id, validators: ['isRequired'] }
    ]);

    if (errors) {
      return errors;
    }

    return super.delete(id);
  }
  update_identity(phone_number_country, number_type, salutation, first_name, last_name, address_line1, address_line2, city, region, postal_code, country_iso, callback_url, alias, file, proof_type, id_number, nationality, id_nationality, birth_place, birth_date, id_issue_date, business_name, fiscal_identification_code, street_code, municipal_code) {
    return super.update({
      phone_number_country: phone_number_country,
      number_type: number_type,
      salutation: salutation,
      first_name: first_name,
      last_name: last_name,
      address_line1: address_line1,
      address_line2: address_line2,
      city: city,
      region: region,
      postal_code: postal_code,
      country_iso: country_iso,
      callback_url: callback_url,
      alias: alias,
      file: file,
      proof_type: proof_type,
      id_number: id_number,
      nationality: nationality,
      id_nationality: id_nationality,
      birth_place: birth_place,
      birth_date: birth_date,
      id_issue_date: id_issue_date,
      business_name: business_name,
      fiscal_identification_code: fiscal_identification_code,
      street_code: street_code,
      municipal_code: municipal_code
    });
  }

}

export class IdentityVerificationInterface extends PlivoResourceInterface {
  constructor(client, data = {}) {
    super(identityVerificationAction, IdentityVerification, idField, client);
    extend(this, data);

    this[clientKey] = client;
  }

  retreive_identity(id) {
    let errors = validate([
      { field: 'id', value: id, validators: ['isRequired'] }
    ]);

    if (errors) {
      return errors;
    }

    return super.get(id);
  }

  list_all_identity() {
    return super.list();
  }

  create_identity(phone_number_country, number_type, salutation, first_name, last_name, address_line1, address_line2, city, region, postal_code, country_iso, callback_url, alias, file, proof_type, id_number, nationality, id_nationality, birth_place, birth_date, id_issue_date, business_name, fiscal_identification_code, street_code, municipal_code) {
    return super.create({
      phone_number_country: phone_number_country,
      number_type: number_type,
      salutation: salutation,
      first_name: first_name,
      last_name: last_name,
      address_line1: address_line1,
      address_line2: address_line2,
      city: city,
      region: region,
      postal_code: postal_code,
      country_iso: country_iso,
      callback_url: callback_url,
      alias: alias,
      file: file,
      proof_type: proof_type,
      id_number: id_number,
      nationality: nationality,
      id_nationality: id_nationality,
      birth_place: birth_place,
      birth_date: birth_date,
      id_issue_date: id_issue_date,
      business_name: business_name,
      fiscal_identification_code: fiscal_identification_code,
      street_code: street_code,
      municipal_code: municipal_code
    });
  }


}


/* ---------------Verificatiob Address and Identity method----------*/
export class Verification {

  constructor(client, data = {}) {
    this.addressVerificationResource = new exports.AddressVerification(client);
    this.addressVerificationInterface = new exports.AddressVerificationInterface(client);
    this.identityVerificationResource = new exports.IdentityVerification(client);
    this.identityVerificationInterface = new exports.IdentityVerificationInterface(client);
  }

  async retreive_address(id) {
    return await this.addressVerificationInterface.retreive_address(id);
  }

  async list_all_addresses() {
    return await this.addressVerificationInterface.list_all_addresses();
  }
  async create_address(phone_number_country, number_type, salutation, first_name, last_name, address_line1, address_line2, city, region, postal_code, country_iso, callback_url, alias, file, proof_type, id_number, fiscal_identification_code, street_code, municipal_code) {
    return await this.addressVerificationInterface.create_address(phone_number_country, number_type, salutation, first_name, last_name, address_line1, address_line2, city, region, postal_code, country_iso, callback_url, alias, file, proof_type, id_number, fiscal_identification_code, street_code, municipal_code);
  }
  async delete_address(id) {
    return await this.addressVerificationResource.delete_address(id);
  }
  async update_address(phone_number_country, number_type, salutation, first_name, last_name, address_line1, address_line2, city, region, postal_code, country_iso, callback_url, alias, file, proof_type, id_number, fiscal_identification_code, street_code, municipal_code) {
    return await this.addressVerificationResource.update_address(phone_number_country, number_type, salutation, first_name, last_name, address_line1, address_line2, city, region, postal_code, country_iso, callback_url, alias, file, proof_type, id_number, fiscal_identification_code, street_code, municipal_code);
  }




  async retreive_identity(id) {
    return await this.identityVerificationInterface.retreive_identity(id);
  }

  async list_all_identity() {
    return await this.identityVerificationInterface.list_all_identity();
  }
  async create_identity(phone_number_country, number_type, salutation, first_name, last_name, address_line1, address_line2, city, region, postal_code, country_iso, callback_url, alias, file, proof_type, id_number, nationality, id_nationality, birth_place, birth_date, id_issue_date, business_name, fiscal_identification_code, street_code, municipal_code) {
    return await this.identityVerificationInterface.create_identity(phone_number_country, number_type, salutation, first_name, last_name, address_line1, address_line2, city, region, postal_code, country_iso, callback_url, alias, file, proof_type, id_number, nationality, id_nationality, birth_place, birth_date, id_issue_date, business_name, fiscal_identification_code, street_code, municipal_code);
  }
  async delete_identity(id) {
    return await this.identityVerificationResource.delete_identity(id);
  }
  async update_identity(phone_number_country, number_type, salutation, first_name, last_name, address_line1, address_line2, city, region, postal_code, country_iso, callback_url, alias, file, proof_type, id_number, nationality, id_nationality, birth_place, birth_date, id_issue_date, business_name, fiscal_identification_code, street_code, municipal_code) {
    return await this.identityVerificationResource.update_identity(phone_number_country, number_type, salutation, first_name, last_name, address_line1, address_line2, city, region, postal_code, country_iso, callback_url, alias, file, proof_type, id_number, nationality, id_nationality, birth_place, birth_date, id_issue_date, business_name, fiscal_identification_code, street_code, municipal_code);
  }

}

