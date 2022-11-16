import { useState, useContext } from 'react'
import styled from 'styled-components'
import useTheme from 'hooks/useTheme'
import { ButtonMenu, ButtonMenuItem } from '@pancakeswap/uikit'
import { useTranslation } from '@pancakeswap/localization'
import replaceBrowserHistory from '@pancakeswap/utils/replaceBrowserHistory'
import { SwapFeaturesContext } from '../SwapFeaturesContext'

export enum SwapType {
  SWAP,
  STABLE_SWAP,
}

const ButtonMenuItemCustom = styled(ButtonMenuItem)`
  border-radius: 0%;
  border-top-left-radius: 12px;
`

const Wrapper = styled.div`
  & > div {
    width: 100%;
    /* background-color: ${({ theme }) => theme.colors.input}; */
    border: 0;
  }
  & button {
    border-top-left-radius: 0px;
    border-top-right-radius: 0px;
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
  }
`

export default function SwapTab({ children }) {
  const { isStableSupported } = useContext(SwapFeaturesContext)
  const { t } = useTranslation()
  const [swapTypeState, setSwapType] = useState(SwapType.SWAP)
  const { theme } = useTheme()

  if (isStableSupported) {
    return (
      <>
        <Wrapper>
          <ButtonMenu
            activeIndex={swapTypeState}
            onItemClick={() => {
              setSwapType((state) => (state === SwapType.SWAP ? SwapType.STABLE_SWAP : SwapType.SWAP))
              replaceBrowserHistory('inputCurrency', null)
              replaceBrowserHistory('outputCurrency', null)
            }}
          >
            {[t('Swap'), t('StableSwap')].map((content, idx) => (
              <ButtonMenuItemCustom
                key={content}
                style={{
                  borderRadius: '0',
                  color: '#29221F',
                  backgroundColor: idx === swapTypeState ? '#fff' : '#F4F6F9',
                }}
              >
                {content}
              </ButtonMenuItemCustom>
            ))}
          </ButtonMenu>
        </Wrapper>
        {children(swapTypeState)}
      </>
    )
  }

  return children(SwapType.SWAP)
}
