import React from 'react';
import {
  useVoucherState,
  useVoucherDispatch,
} from '../../utilities/hooks/VoucherContext';
import {
  SET_AMOUNT,
  SET_VIEW,
} from '../../utilities/hooks/VoucherContext/constants';
import styled from 'styled-components';
import {
  ViewContainer,
  SubViewContainer,
  Text,
  Footer,
  SubmitButton,
} from './style';
import StoreBanner from './StoreBanner';

const Amount = () => {
  const { amount, voucher } = useVoucherState(null);
  const dispatch = useVoucherDispatch(null);

  const setView = (e) => {
    dispatch({ type: SET_AMOUNT, payload: 0 });
    dispatch({ type: SET_VIEW, payload: 0 });
  };

  return (
    <ViewContainer>
      <StoreBanner />
      <MainView>
        <BoldText>Redemption Complete</BoldText>
        {!voucher.single_use ? (
          <SubViewContainer>
            <Text>$ {(amount / 100).toFixed(2)}</Text>
            <Text>Remaining voucher balance</Text>
          </SubViewContainer>
        ) : (
          ''
        )}
        <BoldText> Thank you for dining at {voucher.storeName}! </BoldText>
        <SubmitButton onClick={(e) => setView(0)}>Finish</SubmitButton>
      </MainView>
    </ViewContainer>
  );
};

export default Amount;

const MainView = styled(Footer)`
  min-height: 100vh;
  padding: 0 5%;
  justify-content: space-around;
`;

const BoldText = styled(Text)`
  font-weight: 600;
  font-size: 22px;
  line-height: 31px;
`;
