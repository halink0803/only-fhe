// SPDX-License-Identifier: MIT

pragma solidity >=0.8.13 <0.9.0;

import "@fhenixprotocol/contracts/FHE.sol";
import {Permissioned, Permission} from "@fhenixprotocol/contracts/access/Permissioned.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";


contract OnlyFHE is ERC721Enumerable, Ownable, Permissioned {

    bool _paused;
    string public _basedURI;
    uint256 public maxTokenIds = 10;
    mapping (uint256 => euint128) encryptKeys;

    // total number of tokenIds minted
    uint256 public tokenIds;

    constructor() ERC721("OnlyFHE", "ONF") Ownable(msg.sender) {}

    function mint() public {
        require(tokenIds < maxTokenIds, "Exceed maximum supply");
        tokenIds += 1;
        _safeMint(msg.sender, tokenIds);
    }

    function setEncryptKey(inEuint128 memory encryptKey, uint256 tokenId) external onlyOwner {
        euint128 ek = FHE.asEuint128(encryptKey);
        encryptKeys[tokenId] = ek;
    }

    function getUnsealDecryptKey(Permission memory permission, uint256 tokenId) public view 
        onlySender(permission) returns (string memory) {
        euint128 encryptedKey = encryptKeys[tokenId];
        return FHE.sealoutput(encryptedKey, permission.publicKey);
    }

}