// SPDX-License-Identifier:MIT
// Contract created by Mohammed Rizwan

pragma solidity ^0.8.1;

contract MoodDiary{
  string mood;

function setMood(string memory _mood) public{
    mood = _mood;
}

function getMood() public view returns(string memory){
    return mood;
}

}

