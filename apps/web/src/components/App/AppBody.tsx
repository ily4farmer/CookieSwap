import styled from 'styled-components'
import { Card } from '@pancakeswap/uikit'

export const BodyWrapper = styled(Card)`
  border-radius: 12px;
  max-width: 434px;
  width: 100%;
  z-index: 1;
  background: #ffffff;
  box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.07);
  overflow: auto;
`

/**
 * The styled container element that wraps the content of most pages and the tabs.
 */
export default function AppBody({ children }: { children: React.ReactNode }) {
  return <BodyWrapper>{children}</BodyWrapper>
}
