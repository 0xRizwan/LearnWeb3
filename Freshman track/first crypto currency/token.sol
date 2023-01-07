// SPDX-License-Identifier:MIT
// Contract created by Mohammed Rizwan

pragma solidity ^0.8.1;

// Import ERC20 Contract from OpenZepplin
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

// Contract X {.....}
contract firstToken is ERC20 {

    //We also want to call the constructor present inside the ERC20.
 constructor(string memory _name, string memory _symbol) ERC20(_name, _symbol) {
        _mint(msg.sender, 1000 * 10 ** 18);

        // This is our constructor. 
    }


}