# Web Badminton

Web Badminton - decentralized badminton centered dapp on IPFS and Polygon Blockchain.

<div align="left">
      <a href="https://www.youtube.com/watch?v=1oxnYJdtDQg">
         <img src="https://img.youtube.com/vi/1oxnYJdtDQg/0.jpg" style="width:100%;">
      </a>
</div>

With Decentralized Storage provider IPFS and blockchain technology, we build a decentralized platform for you to learn about playing Badminton.

We Updated the App to include new Chain: Lukso L14 testnet. The contract on the new chain follows LSP-8 standard. A standard interface for identifiable digital assets, allowing for tokens to be uniquely traded and given metadata using ERC725Y.

## What it does

Web Badminton Dapp introduces users to the sport of Badminton as well as contains item store to track and ledger the delivery of badminton equipment.

Each real equipment item is ledgered via a digital one with a smart contract logic system in place to determine the demand and track iteam. When delivery is completed the DApp ERC1155 NFTs should be exchanged for the physical items.

A great win for the producers is a potential to save on costs with improved inventory tracking and demand management.

Web Badminton DApp succeeds where off-chain software ledgering system products fail because they may go out of service, need updates, crash with data losses. Web Badminton DApp is a very low cost business systems management product/tool.

While competing software based ledgering products carry monthly and or annual base fees, the only new costs accrued by the business utilizing the DApp are among new contract deployments. A new contract for new batch of items only is needed every few months based on demand and delivery schedule.

In addition, we created Decentralized Newsletter subscription List that we connected to web3.storage.

## How we built it

We built the application using JavaScript, NextJS, React, Tailwind Css and Wagmi library, IPFS, nft.storage and web3.storage. The application is hosted on vercel. The newsletter list data is stored on ipfs with web3.storage.

The contract is built with solidity, hardhat and polygon blockchain mumbai testnet. Meanwhile the Ipfs data is stored using nft.storage.

## Getting started

To get started with this Dapp, first install the npm dependencies:

```bash
yarn
```

Next, run the development server:

```bash
yarn dev
```

# Links

[Devpost Page](https://devpost.com/software/web-badminton)

## Learn more

To learn more about the technologies used in this site template, see the following resources:

- [Tailwind CSS](https://tailwindcss.com/docs) - the official Tailwind CSS documentation
- [Next.js](https://nextjs.org/docs) - the official Next.js documentation
- [Headless UI](https://headlessui.dev) - the official Headless UI documentation
- [Web3 Storage](web3.storage/) - ipfs storage
- [LSP-8-IdentifiableDigitalAsset](https://github.com/lukso-network/LIPs/blob/main/LSPs/LSP-8-IdentifiableDigitalAsset.md) - A standard interface for identifiable digital assets, allowing for tokens to be uniquely traded and given metadata using ERC725Y.
