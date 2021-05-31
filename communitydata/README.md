# Community Data

Not all the data about a token can be tracked on chain. Extra data can be stored in the community.json file. 

This file will be used to both agument and override data being delivered by teztools api. 

To add new data or overrides simply add any fields desired to community.json entries. If the field name matches names used in the contracts.json file then those fields will override the data coming from the chain.

Examples of both the contracts and prices outputs are provided to assist in crafting overrides. 