import {Buffer} from 'safe-buffer';
import {NoahTxDataCreateCoin, coinToBuffer} from '~/src';
import decodeToArray from '../decode-to-array';

describe('NoahTxDataCreateCoin', () => {
    test('rlp encoded fields', () => {
        const serializedTxData = (new NoahTxDataCreateCoin({
            name: 'My coin',
            symbol: coinToBuffer('MYCOIN'),
            initialAmount: 10,
            initialReserve: 50,
            constantReserveRatio: 100,
        })).serialize();

        expect(serializedTxData)
            .toEqual(Buffer.from([214, 135, 77, 121, 32, 99, 111, 105, 110, 138, 77, 89, 67, 79, 73, 78, 0, 0, 0, 0, 10, 50, 100]));

        expect(decodeToArray(serializedTxData))
            .toEqual([
                [77, 121, 32, 99, 111, 105, 110],
                [77, 89, 67, 79, 73, 78, 0, 0, 0, 0],
                [10],
                [50],
                [100],
            ]);
    });
});
