import useSWRImmutable from 'swr/immutable'
import { fetchLastVaultAddress } from 'state/pottery/fetchPottery'
import { getPotteryVaultContract } from 'utils/contractHelpers'

// export const usePotteryStatus = () => {
//   console.log(200);
  
//   const { data: potteryStatus } = useSWRImmutable('potteryLastStatus', async () => {
//     const lastVaultAddress = await fetchLastVaultAddress()
//     const potteryVaultContract = getPotteryVaultContract(lastVaultAddress)
//     return potteryVaultContract.getStatus()
//   })

//   return potteryStatus
// }
