const { oneWeb3: web3 } = require('../../../utils/web3');
const { ONE_CHAIN_ID: chainId } = require('../../../constants');
const { getMasterChefApys } = require('../common/getMasterChefApys');

const pools = require('../../../data/one/comfyLpPools.json');
const { viperClient } = require('../../../apollo/client');

const getComfyApys = async () =>
  await getMasterChefApys({
    web3: web3,
    chainId: chainId,
    masterchef: '0x53efc025d19270b899eBf89DD89a1F58CE1CD66f',
    tokenPerBlock: 'cSharePerSecond',
    hasMultiplier: false,
    pools: pools,
    oracleId: 'CSHARE',
    oracle: 'tokens',
    decimals: '1e18',
    tradingFeeInfoClient: viperClient,
    liquidityProviderFee: 0.002,
    secondsPerBlock: 1,
    // log: true,
  });

module.exports = getComfyApys;
