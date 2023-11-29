const CheckDot = artifacts.require('CheckDot');

module.exports = async function (deployer, network, accounts) {
    if (network == "development") return;
    const owner = "0x961a14bEaBd590229B1c68A21d7068c8233C8542";
    await deployer.deploy(CheckDot, owner);
};