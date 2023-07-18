import { ethers } from "hardhat";

describe("Hello", function () {
  async function deployHello() {
    const PASSWORD = "ethernaut0";
    const HELLO = await ethers.getContractFactory("Hello");
    const hello = await HELLO.deploy(PASSWORD);

    return { hello };
  }

  describe("Get Info", function () {
    it("Get info", async () => {
      const { hello } = await deployHello();

      await hello.info();
      await hello.info1();
      await hello.info2("hello");
      await hello.infoNum();
      await hello.info42();
      await hello.theMethodName();
      await hello.method7123949();
      await hello.password();
    });
  });
});
