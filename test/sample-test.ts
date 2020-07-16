import {ethers, deployments} from "@nomiclabs/buidler";
import {Deployment} from "@nomiclabs/buidler/types";
import {expect} from "chai";

import {Greeter} from "../typechain/Greeter";


describe("Greeter", function () {
  let Greeter: Deployment;

  before(async () => {
    ({Greeter} = await deployments.fixture());

  });

  it("Should return the new greeting once it's changed", async function () {
    const Greeter = await ethers.getContractFactory("Greeter");
    const greeter = await Greeter.deploy("Hello, world!");

    await greeter.deployed();
    expect(await greeter.greet()).to.equal("Hello, world!");

    await greeter.setGreeting("Hola, mundo!");
    expect(await greeter.greet()).to.equal("Hola, mundo!");
  });
});
