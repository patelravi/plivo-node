import { extend, validate } from '../utils/common.js';
import { PlivoResource, PlivoResourceInterface } from '../base';

const clientKey = Symbol();
const action = 'Phlo/';
const idField = 'phloUuid';

/**
 * Represents a Multiparty Call Member
 * @constructor
 * @param {function} client - make api call
 * @param {object} [data] - data of phlo
 */
export class PhloMultiPartyCallMember extends PlivoResource {

    constructor(client, data = {}) {
        let action = 'phlo/' + data.phloId + '/multi_party_call/' + data.nodeId + '/members/';
        super(action, PhloMultiPartyCallMember, idField, client);
        extend(this, data);
        this.action = action;
        this.client = client;
    }

    resumeCall() {
        return this.update('resume_call');
    }

    voicemailDrop() {
        return this.update('voicemail_drop');
    }

    hangup() {
        return this.update('hangup');
    }

    hold() {
        return this.update('hold');
    }

    unhold() {
        return this.update('unhold');
    }

    update(action) {

        let params = {
            action: action
        };

        // Build Url
        // https://phlorunner.plivo.com/v1/phlo/{PHLO_ID}/multi_party_call/{NODE_ID}/members/{MemberAddress}
        let task = this.action + this.memberAddress;

        return super.executeAction(task, 'POST', params, '');
    }

}

export class PhloMultiPartyCallMemberInterface extends PlivoResourceInterface {


    constructor(client, data = {}) {
        let action = 'phlo/' + data.phloId + '/multi_party_call/' + data.nodeId + '/members/';
        super(action, PhloMultiPartyCallMember, idField, client);
        extend(this, data);
        this.action = action;
        this.client = client;
    }

    get(phloId, nodeId, memberAddress) {

        //Validate  memberAddress first
        let errors = validate([{
            field: 'memberAddress',
            value: memberAddress,
            validators: ['isRequired']
        }]);
        if (errors) {
            return errors;
        }

        return new PhloMultiPartyCallMember(this.client, { phloId: phloId, nodeId: nodeId, memberAddress: memberAddress });

    }
}
