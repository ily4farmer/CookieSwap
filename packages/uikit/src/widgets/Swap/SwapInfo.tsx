import { useTranslation } from "@pancakeswap/localization";
import { useIsMounted } from "@pancakeswap/hooks";
import { PropsWithChildren, ReactNode } from "react";
import { AutoColumn, RowBetween, Text, TextProps } from "../../components";

type SwapInfoType = {
  price: ReactNode;
  allowedSlippage: number;
};

export const SwapInfoLabel = (props: PropsWithChildren<TextProps>) => (
  <Text fontSize="12px" bold={false} color="#6D6866" {...props} />
);

export const SwapInfo = ({ allowedSlippage, price }: SwapInfoType) => {
  const { t } = useTranslation();
  const isMounted = useIsMounted();

  return (
    <AutoColumn gap="sm" py="0" px="16px">
      <RowBetween alignItems="center">{price}</RowBetween>
      <RowBetween alignItems="center">
        <SwapInfoLabel>{t("Slippage Tolerance")}</SwapInfoLabel>
        {isMounted && (
          <Text bold={false} fontSize="16px" color="#FC8211">
            {allowedSlippage / 100}%
          </Text>
        )}
      </RowBetween>
    </AutoColumn>
  );
};
