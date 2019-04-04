import { extend, validate } from '../utils/common.js';
import { PlivoResource, PlivoResourceInterface } from '../base';

const clientKey = Symbol();
const action = 'Phlo/';
const idField = 'phloUuid';

/**
 * Represents a PhloMember
 * @constructor
 * @param {function} client - make api call
 * @param {object} [data] - data of phlo
 */
export class PhloMember extends PlivoResource {

    constructor(client, data = {}) {
        let action = 'phlo/' + data.phloId + '/multi_party_call/' + data.nodeId + '/members/';
        super(action, PhloMember, idField, client);
        extend(this, data);
        this.action = action;
        this.client = client;
    }

    async resumeCall() {
        return this.update('resume_call');
    }

    async voicemailDrop() {
        return this.update('voicemail_drop');
    }

    async hangup() {
        return this.update('hangup');
    }

    async hold() {
        return this.update('hold');
    }

    async unhold() {
        return this.update('unhold');
    }

    async update(action) {

        let params = {
            action: action
        };

        // Build Url
        // https://phlorunner.plivo.com/v1/phlo/{PHLO_ID}/multi_party_call/{NODE_ID}/members/{MemberAddress}
        let task = this.action + this.memberAddress;

        return super.executeAction(task, 'POST', params, '');
    }

}


/**
 * Represents a PhloMember Interface
 * @constructor
 * @param {function} client - make api call
 * @param {object} [data] - data of call
 */

export class PhloMemberInterface extends PlivoResourceInterface {


    constructor(client, data = {}) {
        let action = 'phlo/' + data.phloId + '/multi_party_call/' + data.nodeId + '/members/';
        super(action, PhloMultiPartyCall, idField, client);
        extend(this, data);
        this.action = action;
        this.client = client;
    }
    
  /**
    * Get A Phlo Detail
    * @method
    * @param {string} id - phlo uuid to get information of.
    * @promise {object} returns Phlo Object
    * @fail {Error} returns Error
    */

    async get(phloId, nodeId, id) {

        //Validate id first
        let errors = validate([{
            field: 'id',
            value: id,
            validators: ['isRequired']
        }]);

        if (errors) {
            return errors;
        }

        let params = {
            phlo_id: phloId,
            node_type: 'multi_party_call',
            node_id: id
        };

        return new Promise(async (resolve, reject) => {

            try {
                // Url pattern for getting phlo resource by id
                // https://phlorunner.plivo.com/v1/phlo/{phlo_id}
                console.log('get multi party call with ', id, params);
                let multiPartyCall = await super.get(id, params);
                resolve(multiPartyCall);
            } catch (err) {
                reject(err);
            }
        });

    }

}
