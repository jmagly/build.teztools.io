# build.teztools.io
Build blockchain powered applications with scripts and tools built against teztools.io infrastructure.

Currently this GitHub is the primary home of the documetation and samples, this will over time transition to a site hosted @ build.teztools.io

# API Endpoints

BASE URI: https://api.teztools.io/v1/

No api key is currently needed. 

If the application you plan to use with the TezTools API will make a large number of requests please contact us so we can ensure we are able to support you!

# General 
## /v1/prices
Full price data for all tracked tokens

uses: loading price data for multiple tokens with 1 request. 
ex: https://api.teztools.io/v1/prices

## /v1/prices-live
Live price data, only tokens from the latest block

uses: small updates of just the last block
ex: https://api.teztools.io/v1/prices-live

## /v1/contracts
Full list of all tracked token contract data (token and quipu contracts)

uses: loading list of all contracts
ex: https://api.teztools.io/v1/contracts

## /v1/blocks-live
Live block data, only blocks and contracts from latest block

uses: detect when a block is done ready for read, look for contract usage
ex: https://api.teztools.io/v1/blocks-live

## /v1/xtz-price
Tezos coin price pulled from CoinGecko every 10min.

uses: get current tezos price for live fiat display calulations
ex: https://api.teztools.io/v1/xtz-price

## /v1/community
Community provided metadata, the same is merged into prices and contracts endpoints

uses: review community data
ex: https://api.teztools.io/v1/community

## /v1/blocked
Tokens removed from API data due technical issues or duplicate tokens created by mistake by the creator. 

Will eventually be part of a commuity-based curation system. 

uses: review  blocked tokens
ex: https://api.teztools.io/v1/blocked

# Token Specific

## TOKENADDRESS_TOKENID or TOKENADDRESS?

Token specific endpoints should reffered to using the token address (omit the underscore) for FA1.2 tokens and token address with token ID for FA2 tokens. 

ex FA1.2 Endpoint 

https://api.teztools.io/v1/KT1VYsVfmobT7rsMVivvZ4J8i3bPiqz12NaH/price

ex. FA2 Endpoint
https://api.teztools.io/v1/KT18fp5rcTW7mbWDmzFwjLDUhs5MeJmagDSZ_11/price


To determine if a token is an FA1.2 or an FA2 you can look for the existance of the tokenId field or check the type field which indicates the token type. 

## /v1/TOKENADDRESS_TOKENID/price
individual token price

uses: single token price monitor
ex: https://api.teztools.io/v1/KT18fp5rcTW7mbWDmzFwjLDUhs5MeJmagDSZ_11/price

## /v1/TOKENADDRESS_TOKENID/contract
individual token contract

uses: single token metadata  
ex: https://api.teztools.io/v1/KT18fp5rcTW7mbWDmzFwjLDUhs5MeJmagDSZ_11/contract

## /v1/TOKENADDRESS>_TOKENID/price-history
token price history (beta)

uses: single token metadata  
ex: https://api.teztools.io/v1/KT18fp5rcTW7mbWDmzFwjLDUhs5MeJmagDSZ_11/price-history

## /v1/TOKENADDRESS>_TOKENID/pools/<POOLADDRESS>/ledger
pool specific ledger
  
## /v1/TOKENADDRESS>_TOKENID/pools/<POOLADDRESS>/aggregate_daily
pool specific aggregate with moving averages daily scope

## /v1/TOKENADDRESS>_TOKENID/pools/<POOLADDRESS>/aggregate_weekly
pool specific aggregate with moving averages weekly scope
  
## /v1/TOKENADDRESS>_TOKENID/pools/<POOLADDRESS>/aggregate_monthly
pool specific aggregate with moving averages monthly scope
