# Community Data

Not all the data about a token can be tracked on chain. Extra data can be stored in the ext-token.json file. 

This file will be used to both agument and override data being delivered by teztools api. 

To add new data or overrides simply add any fields desired to ext-token.json entries. If the field name matches names used in the contracts.json file then those fields will override the data coming from the chain.