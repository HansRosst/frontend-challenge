import styled from 'styled-components';
import Box from '@mui/material/Box';
import { deviceSize } from '../../../../../../utils/Sizes.styles';

const StyledGridItem = {
  Wrapper: styled.div<{ pad?: string }>`
    padding: ${({ pad }) => pad || '0px'};
  `,
  Box: styled(Box)`
   border-radius: 10px;
   border-top-width: 0px;
   box-shadow: 0px 3px 3px 0px rgba(0,0,0,0.3);
   height: 250px;
   margin: 0px 5px;
   width: 90%;

  @media (min-width: ${deviceSize.lg_tablet2}px) {
      min-width: 250px;
  }
`,
  Row: styled.div`
    padding: 15px;
    display: flex;
    justify-content: space-between;
    align-item: flex-start;
  `,
  Img: styled.img`
    width: 56px;
    height: 34px;
  `,
  Title: styled.p`
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    color: #4F9419;
  `,
  Divider: styled.div`
    height: 0px;
    border: 1px solid #ABABAB;
  `,
  Text: styled.p`
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    color: #000000;
  `,
};

export default StyledGridItem;
