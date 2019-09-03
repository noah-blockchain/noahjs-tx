import {Buffer} from 'safe-buffer';
import defineProperties from '../define-properties';
import NoahTxDataSend from './send';

class NoahTxDataMultisend {
    constructor(data) {
        data = data || {};
        // Define Properties
        const fields = [
            {
                name: 'list',
                default: new Buffer([]),
                allowNonBinaryArray: true,
                nonBinaryArrayTransform(item) {
                    return (new NoahTxDataSend(item)).raw;
                },
            }];

        /**
         * Returns the rlp encoding of the transaction
         * @method serialize
         * @return {Buffer}
         * @memberof Transaction
         * @name serialize
         */
        // attached serialize
        defineProperties(this, fields, data);
    }
}

export default NoahTxDataMultisend;
