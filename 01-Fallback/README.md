# Ethernaut - Fallback

## DESCRIPTION

Look carefully at the contract's code below.

You will beat this level if

1. You claim ownership of the contract
2. You reduce its balance to 0

Things that might help:

- How to send ether when interacting with an ABI
- How to send ether outside of the ABI
- Converting to and from wei/ether units (see help() command)
- Fallback methods

## SOLUTION

There are two distinct methods to gain ownership of the contract, excluding the constructor. The first approach, which can be deemed more challenging, involves becoming the highest contributor among all participants. On the other hand, the second method provides a much simpler way to achieve ownership, utilizing the receive() method. To exploit this advantage, the caller only needs to perform two straightforward steps. Firstly, make a nominal contribution of 1 wei by invoking the contribute() method. Secondly, send another 1 wei to the contract's receive() method. By accomplishing these actions, the caller effortlessly fulfills the necessary conditions to assume ownership of the contract. Surprisingly, no additional contract code is required for this process to take effect, as the existing functionality within the contract is sufficient to facilitate this seamless transition of ownership.

## INSTRUCTIONS

#### TESTS

> > npx hardhat test test/Fallback.test.ts

#### DEPLOY

> > npx hardhat run scripts/deploy.ts --network sepolia
