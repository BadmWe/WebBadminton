// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

contract MyERC1155NFT is ERC1155 {
    string public name = "WebBadminton";
    uint256 public constant Arcsaber11 = 0;
    uint256 public constant astrox88DPro = 1;
    uint256 public constant astrox88SPro = 2;
    uint256 public constant astrox99Pro = 3;
    uint256 public constant astroxnavy = 4;
    uint256 public constant astroxred = 5;
    uint256 public constant duora6 = 6;

    constructor() ERC1155("https://bafybeiaga2yzzckfdtdn62sr2aauil3llkx4fdu6zlhavzl42k354mcgsm.ipfs.dweb.link/{id}.json") {
}

    function mintArcsaber11() public{
        _mint(msg.sender, Arcsaber11, 1, "");
    }

    function mintastrox88DPro() public{
        _mint(msg.sender, astrox88DPro, 1, "");
    }

    function mintastrox88SPro() public{
        _mint(msg.sender, astrox88SPro, 1, "");
    }

    function mintastrox99Pro() public{
        _mint(msg.sender, astrox99Pro, 1, "");
    }

    function mintastroxnavy() public{
        _mint(msg.sender, astroxnavy, 1, "");
    }

    function mintastroxred() public{
        _mint(msg.sender, astroxred, 1, "");
    }

    function mintduora6() public{
        _mint(msg.sender, duora6, 1, "");
    }

    function uri(uint256 _tokenid) override public pure returns (string memory) {
        return string(
            abi.encodePacked(
                "https://bafybeiaga2yzzckfdtdn62sr2aauil3llkx4fdu6zlhavzl42k354mcgsm.ipfs.dweb.link/",
                Strings.toString(_tokenid),".json"
            )
        );
    }

    }