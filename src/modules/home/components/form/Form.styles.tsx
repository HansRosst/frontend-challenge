import styled from 'styled-components';
import { deviceSize } from '../../../../utils/Sizes.styles';

const StyledForm = {
  Wrapper: styled.div`
    display: grid;
    grid-template-columns: repeat(1, minmax(auto, 1fr));
    justify-items: center;
    align-items: center;
    // position: absolute;
    width: 100%;
    left: 0px;
    background: #4F9419;
    padding: 35px 0px 35px 0px;

     @media (min-width: ${deviceSize.xlg_mobile1}px) {
       display: flex;
       align-items: center;
       justify-content: center;
    }
  `
};

export default StyledForm;
