const Adoption = artifacts.require("./adoption.sol")

module.exports = function(deployer) {
  // Use deployer to state migration tasks.
  deployer.deploy(Adoption)
};
