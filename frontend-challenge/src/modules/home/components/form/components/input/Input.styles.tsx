import styled from 'styled-components';
import { deviceSize } from '../../../../../../utils/Sizes.styles';

const StyledInput = {
  Wrapper: styled.div<{ width: number }>`
    width: 80%;
    margin: 10px 0px;
    
     @media (min-width: ${deviceSize.xlg_mobile1}px) {
        max-width: ${({ width }) => width}px;
        padding: 0px 10px;
    }

     @media (min-width: ${deviceSize.tablet}px) {
        max-width: ${({ width }) => width}px;
        padding: 0px 20px;
    }
  `
};

export default StyledInput;
