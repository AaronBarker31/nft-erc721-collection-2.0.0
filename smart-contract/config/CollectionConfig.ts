import CollectionConfigInterface from '../lib/CollectionConfigInterface';
import { ethereumTestnet, ethereumMainnet } from '../lib/Networks';
import { openSea } from '../lib/Marketplaces';
import whitelistAddresses from './whitelist.json';

const CollectionConfig: CollectionConfigInterface = {
  testnet: ethereumTestnet,
  mainnet: ethereumMainnet,
  // The contract name can be updated using the following command:
  // yarn rename-contract NEW_CONTRACT_NAME
  // Please DO NOT change it manually!
  contractName: 'GreatSwords',
  tokenName: 'Great Swords',
  tokenSymbol: 'GS',
  hiddenMetadataUri: 'ipfs://QmeUXZRovJ2hfrtriZzwgSER9MHN35S8T6s5VMcjoUBp1d/hidden.json',
  maxSupply: 49,
  whitelistSale: {
    price: 0.05,
    maxMintAmountPerTx: 1,
  },
  preSale: {
    price: 0.07,
    maxMintAmountPerTx: 2,
  },
  publicSale: {
    price: 0.00001,
    maxMintAmountPerTx: 49,
  },
  contractAddress: "0x96d83FB14dE67EA440a743206D632FE53F249D68",
  marketplaceIdentifier: 'GreatSwords',
  marketplaceConfig: openSea,
  whitelistAddresses: whitelistAddresses,
};

export default CollectionConfig;
