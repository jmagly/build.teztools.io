# build.teztools.io
Build blockchain powered applications with scripts and tools built against teztools.io infrastructure 

# API Endpoints

BASE URI: https://api.teztools.io

No api key is currently needed. 

<TOKENADDRESS>_<TOKENID> or <TOKENADDRESS>?
<TOKENADDRESS> = FA1.2 tokens and FA2 tokens with token id 0

<TOKENADDRESS>_<TOKENID> = FA2 tokens with ID > 0

API Reference will simply use <TOKENADDRESS> for simplicity

# General 
# /token/prices
Full price data for all tracked tokens

# /token/prices-live
Live price data, only tokens from the latest block

# /token/contracts
Full list of all tracked token contract data (token and quipu contracts)

# /token/blocks-live
Live block data, only blocks and contracts from latest block

# /token/<TOKENADDRESS>/price
individual token price

# /token/<TOKENADDRESS>/contract
individual token contract
