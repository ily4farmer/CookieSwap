import { Currency, Token, ChainId } from '@pancakeswap/aptos-swap-sdk'
import { APTOS_COIN } from '@pancakeswap/awgmi'
import memoize from 'lodash/memoize'
import { useHttpLocations } from '@pancakeswap/hooks'
import { WrappedTokenInfo } from '@pancakeswap/token-lists'
import { AptosIcon } from '@pancakeswap/uikit'
import { useMemo } from 'react'
import styled from 'styled-components'
import Logo from './Logo'

const getTokenLogoURL = memoize(
  (token?: Token) => {
    if (token && token.chainId === ChainId.MAINNET) {
      return `https://assets-cdn.trustwallet.com/blockchains/aptos/assets/${token.address.replaceAll(
        ':',
        '%253A',
      )}/logo.png` // hex encoding
    }
    return null
  },
  (t) => (t ? `${t.chainId}#${t.address}` : null),
)

const StyledLogo = styled(Logo)<{ size: string }>`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  border-radius: 50%;
`

export function CurrencyLogo({
  currency,
  size = '24px',
  style,
}: {
  currency?: Currency
  size?: string
  style?: React.CSSProperties
}) {
  const uriLocations = useHttpLocations(currency instanceof WrappedTokenInfo ? currency.logoURI : undefined)

  const srcs: string[] = useMemo(() => {
    if (currency?.isToken) {
      const tokenLogoURL = getTokenLogoURL(currency)

      if (currency instanceof WrappedTokenInfo) {
        if (!tokenLogoURL) return [...uriLocations]
        return [...uriLocations, tokenLogoURL]
      }
      if (!tokenLogoURL) return []
      return [tokenLogoURL]
    }
    return []
  }, [currency, uriLocations])

  // isNative of AptosCoin wrapped is false, using address comparison is safer
  if (currency?.isNative || currency?.address === APTOS_COIN) {
    return <AptosIcon width={size} style={style} />
  }

  return <StyledLogo size={size} srcs={srcs} alt={`${currency?.symbol ?? 'token'} logo`} style={style} />
}
