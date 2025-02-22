import { Base58EncodedAddress } from '@solana/keys';

import { OrderedAccounts } from './accounts';

export function getCompiledStaticAccounts(orderedAccounts: OrderedAccounts): Base58EncodedAddress[] {
    const firstLookupTableAccountIndex = orderedAccounts.findIndex(account => 'lookupTableAddress' in account);
    const orderedStaticAccounts =
        firstLookupTableAccountIndex === -1 ? orderedAccounts : orderedAccounts.slice(0, firstLookupTableAccountIndex);
    return orderedStaticAccounts.map(({ address }) => address);
}
