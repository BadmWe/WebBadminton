// SPDX-License-Identifier: MIT

import "@lukso/lsp-smart-contracts/contracts/LSP8IdentifiableDigitalAsset/LSP8IdentifiableDigitalAsset.sol";

pragma solidity ^0.8.0;

contract WebBadminton is LSP8IdentifiableDigitalAsset {

    uint256 public constant Arcsaber11 = 0;
    uint256 public constant astrox88DPro = 1;
    uint256 public constant astrox88SPro = 2;
    uint256 public constant astrox99Pro = 3;
    uint256 public constant astroxnavy = 4;
    uint256 public constant astroxred = 5;
    uint256 public constant duora6 = 6;

    constructor(
        string memory name_,
        string memory symbol_,
        address newOwner_
    ) LSP8IdentifiableDigitalAsset(name_, symbol_, newOwner_) {}

    function mintArcsaber11() public{
        _mint(msg.sender, bytes32(Arcsaber11), true, "");
    }

    function mintastrox88DPro() public{
        _mint(msg.sender, bytes32(astrox88DPro), true, "");
    }

    function mintastrox88SPro() public{
        _mint(msg.sender, bytes32(astrox88SPro), true, "");
    }

    function mintastrox99Pro() public{
        _mint(msg.sender, bytes32(astrox99Pro), true, "");
    }

    function mintastroxnavy() public{
        _mint(msg.sender, bytes32(astroxnavy), true, "");
    }

    function mintastroxred() public{
        _mint(msg.sender, bytes32(astroxred), true, "");
    }

    function mintduora6() public{
        _mint(msg.sender, bytes32(duora6), true, "");
    }

}