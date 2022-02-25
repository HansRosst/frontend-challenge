import styled from 'styled-components';
import { deviceSize } from '../../../../utils/Sizes.styles';
import { Grid } from "@mui/material";
import Box from '@mui/material/Box';

const StyledGrid = {
  Wrapper: styled.div`
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 53px 0px;

     @media (min-width: ${deviceSize.desk}px) {
       display: flex;
    }
  `,
  Container: styled.div`
     @media (min-width: ${deviceSize.desk}px) {
      width: 92%;
    }

     @media (min-width: ${deviceSize.lg_desk}px) {
      width: 87%;
    }
  `,
  Grid: styled(Grid)`
     padding: 0px 6px 0px 15px;
     justify-content: center;

     @media (min-width: ${deviceSize.xlg_mobile1}px) {
      justify-content: flex-start;
      align-items: center;
    };

     @media (min-width: ${deviceSize.lg_desk}px) {
      justify-content: flex-start;
      align-items: center;
    }
  `
};

export default StyledGrid;
