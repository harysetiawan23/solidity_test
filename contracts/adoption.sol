pragma solidity ^0.5.0;


contract adoption {
 address[16] public adopters;

 function getAdopters() public view returns(address[16] memory){
   return adopters;
 }

 function adopt(uint petId, address userAddress) public returns(uint){
   require(petId>=0 && petId<=15);
   adopters[petId] = userAddress;
   return petId;
 }

  function getAdopter(uint petId) public view returns(address){
    return adopters[petId];
  }


}
