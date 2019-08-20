var adoption = artifacts.require("./adoption.sol");

contract("adoption", function(accounts) {
  
  describe('First group of test', () => {
    let instance;

    before(async ()=>{
      instance = await adoption.deployed();
    });

    it('User should adopt a pet', async () => {
      let id = await instance.adopt(8, accounts[0]);
      let adopter = await instance.adopters.call(8)

      assert.equal(adopter, accounts[0], "There was an error");
    });

    it('Should throw if invalid id is given',async () => {
      try{
        await instance.adopt(17, accounts[0]);
        assert.fail(true,false, "This function did not throw");
      }catch(error){
        assert.include(String(error),"revert", 'Expected "revert" but instead got ${error}');
      }
    });
  });
});
