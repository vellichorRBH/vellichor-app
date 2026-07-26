// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

/// @dev Local stand-in for $VELL, used ONLY for testing VellichorGovernance before
///      the real $VELL token exists. Real $VELL is now live on Robinhood Chain via the
///      pons launchpad at 0x3d8C79bE2071CA84b0EfAe66E1437d9417ea4226 (PonsLauncherToken.sol —
///      see vellichor-vell-token.md). Once VellichorGovernance is ready to point at it,
///      deploy against that real address, not this mock. Do not deploy this mock to
///      testnet or mainnet.
contract MockVELL is ERC20 {
    constructor() ERC20("Mock Vellichor Token", "mVELL") {
        _mint(msg.sender, 1_000_000_000 * 10 ** decimals()); // matches the real $VELL's planned 1B supply
    }

    function faucet(address to, uint256 amount) external {
        _mint(to, amount);
    }
}
