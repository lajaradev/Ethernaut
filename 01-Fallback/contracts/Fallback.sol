// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

/**
 *  Objectives:
 *   - Take ownership of the contract.
 *   - Reduce its balance to 0.
 */

contract Fallback {

    mapping(address => uint) public contributions;
    address public owner;

    /**
     * Sets the owner.
     * Initialice contributions.
     */
    constructor() {
        owner = msg.sender;
        contributions[msg.sender] = 1000 * (1 ether);
    }

    /**
     * The 'onlyOwner' modifier restricts access to a function 
     * only to the owner of the contract.
     */
    modifier onlyOwner {
            require(
                msg.sender == owner,
                "caller is not the owner"
            );
            _;
    }

    /**
     * Make a payment to the contract.
     * Contributions must be below a specified maximum limit.
     * If you are the highest contributor, you will become the owner of the contract.
     */
    function contribute() public payable {
        require(msg.value < 0.001 ether);
        contributions[msg.sender] += msg.value;
        if(contributions[msg.sender] > contributions[owner]) {
        owner = msg.sender;
        }
    }

    /**
     * Returns the latest contribution amount of [msg.sender].
     * @return uint the contribution amount
     */
    function getContribution() public view returns (uint) {
        return contributions[msg.sender];
    }

    /**
     * The owner has the ability to withdraw all available funds.
     */
    function withdraw() public onlyOwner {
        payable(owner).transfer(address(this).balance);
    }

    /**
     * Accepts payments.
     * If your contribution is greater than 0 and send ether to receive function,
     * you become the owner.
     */
    receive() external payable {
        require(msg.value > 0 && contributions[msg.sender] > 0);
        owner = msg.sender;
    }
}