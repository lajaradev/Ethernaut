# Ethernaut - Level 00: Hello

Welcome to Level 00 of Ethernaut, a security-focused game on the Ethereum platform. This level will walk you through the very basics of how to play the game.

## Instructions

Follow these instructions to set up and play the game:

1. Set up MetaMask:

   - Install the MetaMask browser extension in Chrome, Firefox, Brave, or Opera on your desktop machine.
   - Set up the extension's wallet and choose the preferred network in the top left of the extension's interface. If you select an unsupported network, the game will notify you and bring you to the default Sepolia testnet.

2. Open the browser's console:

   - Open your browser's console: Tools > Developer Tools.
   - You should see a few messages from the game, including your player's address. This address will be important during the game. You can always see your player address by entering the following command: `player`.
   - Pay attention to any warnings or errors, as they could provide important information during gameplay.

3. Use the console helpers:

   - To check your current ether balance, type: `getBalance(player)`
     (NOTE: Expand the promise to see the actual value, even if it reads "pending". If you're using Chrome v62, you can use `await getBalance(player)` for a cleaner console experience).
   - To explore other utility functions available in the console, type: `help()`. These will be helpful during gameplay.

4. The Ethernaut contract:

   - Enter the following command in the console: `ethernaut`.
   - This is the game's main smart contract. You don't need to interact with it directly through the console, as the app will handle that for you. However, you can play around with this object to learn how to interact with other smart contracts in the game. Expand the `ethernaut` object in the console to see its contents.

5. Interact with the ABI:

   - The `ethernaut` object is a TruffleContract object that wraps the `Ethernaut.sol` contract deployed on the blockchain.
   - You can interact with the contract's ABI, which exposes all of the public methods of `Ethernaut.sol`. For example, type: `ethernaut.owner()` or `await ethernaut.owner()` (for Chrome v62) to see who the owner of the `ethernaut` contract is.

6. Get test ether:

   - To play the game, you need test ether. The easiest way to obtain testnet ether is through a valid faucet for your chosen network.
   - Once you have some test ether in your balance, proceed to the next step.

7. Getting a level instance:

   - When playing a level, you don't interact directly with the `ethernaut` contract. Instead, you ask it to generate a level instance for you.
   - Click the "Get New Instance" button at the bottom of the page. MetaMask will prompt you to authorize the transaction. Once authorized, you should see some messages in the console. Note that deploying a new contract on the blockchain may take a few seconds, so please be patient when requesting new level instances.

8. Inspecting the contract:

   - Similar to inspecting the `ethernaut` contract, you can inspect the ABI of the level contract through the console using the `contract` variable.

9. Interact with the contract to complete the level:
   - Explore the level's info method by calling `contract.info()` or `await contract.info()` (for Chrome v62) in the console. The level's info method should provide you with the necessary information to complete the level.
   - Once you believe you have completed the level, submit the contract using the submit button at the bottom of the page. Your instance will be sent back to the `ethernaut`, which will determine if you have completed it.
   - Remember, you can always refer to the contract's ABI for guidance!

Good luck completing Level 00! Remember to think creatively and securely as you progress through the challenges.

## Learn More

To learn more about Ethereum smart contracts and the Ethernaut game, refer to the official documentation:

- [Ethereum Documentation](https://ethereum.org/developers/)
- [Ethernaut Game](https://ethernaut.openzeppelin.com)

License: This project is licensed under the [MIT License](LICENSE).
