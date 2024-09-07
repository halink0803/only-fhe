// SPDX-License-Identifier: MIT

pragma solidity >=0.8.13 <0.9.0;

import "@fhenixprotocol/contracts/FHE.sol";
import {Permissioned, Permission} from "@fhenixprotocol/contracts/access/Permissioned.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";


contract OnlyFHE is ERC721Enumerable, Ownable {

    bool paused;

    string basedURI;

    mapping (uint256 => euint128) encryptKey;

    // total number of tokenIds minted
    uint256 public tokenIds;

    constructor() ERC721("OnlyFHE", "ONF") Ownable(msg.sender) {}

    function mint() {
        require(tokenIds < maxTokenIds, "Exceed maximum supply");
        require(msg.value >= _price, "Ether sent is not correct");
        tokenIds += 1;
        _safeMint(msg.sender, tokenIds);
    }
    function getUnsealDecryptKey(
        Permission memory permission
    ) public view onlySender(permission) returns (string) {
        return FHE.sealoutput()
    }

}