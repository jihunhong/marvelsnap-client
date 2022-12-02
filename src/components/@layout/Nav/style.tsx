import styled from 'styled-components';
import device from '../../../styles/devices';

export const Nav = styled.nav`
    position: fixed;
    background: #fff;
    top: 0;
    left: 0;
    width: 100%;
    box-shadow: rgb(0 0 0 / 5%) 0px 6px 24px 0px, rgb(0 0 0 / 8%) 0px 0px 0px 1px;
    z-index: 1000;
    align-items: center;
    justify-content: space-between;

    @media ${device.laptop} {
        height: 56px;
    }
`