# build.teztools.io
Build blockchain powered applications with scripts and tools built against teztools.io infrastructure 

# API Endpoints

BASE URI: https://api.teztools.io

No api key is currently needed. 

TOKENADDRESS_TOKENID or TOKENADDRESS?
TOKENADDRESS = FA1.2 tokens and FA2 tokens with token id 0

TOKENADDRESS_TOKENID = FA2 tokens with ID > 0

API Reference will simply use <TOKENADDRESS> for simplicity

# General 
# /token/prices
Full price data for all tracked tokens

uses: loading price data for multiple tokens with 1 request. 
ex: https://api.teztools.io/token/prices

# /token/prices-live
Live price data, only tokens from the latest block

uses: small updates of just the last block
ex: https://api.teztools.io/token/prices-live

# /token/contracts
Full list of all tracked token contract data (token and quipu contracts)

uses: loading list of all contracts
ex: https://api.teztools.io/token/contracts

# /token/blocks-live
Live block data, only blocks and contracts from latest block

uses: detect when a block is done ready for read, look for contract usage
ex: https://api.teztools.io/token/blocks-live

# /token/TOKENADDRESS/price
individual token price

uses: single token price monitor
ex: https://api.teztools.io/token/KT18fp5rcTW7mbWDmzFwjLDUhs5MeJmagDSZ_11/price

# /token/TOKENADDRESS/contract
individual token contract

uses: single token metadata  
ex: https://api.teztools.io/token/KT18fp5rcTW7mbWDmzFwjLDUhs5MeJmagDSZ_11/contract
