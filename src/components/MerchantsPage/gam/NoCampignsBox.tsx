import React from 'react';
import {
  smallScreens,
  tabletScreens,
} from '../../../utilities/general/responsive';
import styled from 'styled-components';
import Modal from '../../Modal';
import { useModalPaymentDispatch } from '../../../utilities/hooks/ModalPaymentContext/context';
import { SET_MODAL_VIEW } from '../../../utilities/hooks/ModalPaymentContext/constants';
import { useTranslation } from 'react-i18next';

const ModalBox: any = Modal;

const NoActiveCampaignsBox = () => {
  const { t } = useTranslation();

  const dispatch = useModalPaymentDispatch(); //provide null according to Bruce's new branch
  const showModal = (event: any) => {
    dispatch({ type: SET_MODAL_VIEW, payload: 0 });
  };

  return (
    <NoCampaignBox>
      <TextContainer>
        <Heading>{t('gamHome.noCampaignsBox.CTA')}</Heading>
        <SubHeading>{t('gamHome.noCampaignsBox.description')}</SubHeading>
      </TextContainer>
      <Button className="button--filled" onClick={showModal}>
        {t('gamHome.giftButton')}
      </Button>
      <ModalBox
        purchaseType={'buy_meal'}
        sellerId={''}
        sellerName={''}
        costPerMeal={5}
        nonProfitLocationId={''}
      />
    </NoCampaignBox>
  );
};

export default NoActiveCampaignsBox;

const NoCampaignBox = styled.div`
  align-items: center;
  border: 1px solid #e5e5e5;
  display: grid;
  grid-template-columns: 2fr 1fr;
  padding: 30px;
  margin-bottom: 25px;

  @media (${tabletScreens}) {
    grid-template-columns: 1fr;
    margin-bottom: 15px;
  }
`;

const TextContainer = styled.div`
  @media (${tabletScreens}) {
    margin-bottom: 20px;
  }
`;

const Heading = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 24px;

  @media (${smallScreens}) {
    font-size: 14px;
  }
`;

const SubHeading = styled.p`
  font-size: 15px;

  @media (${smallScreens}) {
    font-size: 12px;
  }
`;

const Button = styled.button`
  text-align: center;
  letter-spacing: 0.15em;
  cursor: pointer;
  margin-bottom: 18px;
  font-family: 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: 700;
  font-size: 16px;
  letter-spacing: 0.05em;

  @media (${smallScreens}) {
    font-size: 14px;
    padding-right: 0;
  }
`;
