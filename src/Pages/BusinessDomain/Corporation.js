import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import {Link} from 'react-router-dom';

import {PageWrapper} from '../../components/PageStyle';
import BackgroundImg from '../../assets/businessdomainbackground.png';
import {PageTitleWrpper, PageTitle, MainImgTitle, NavBarWrapper, NavBlock, SelectNavBlock, RedSpanBold } from '../../components/PageStyle';
import styled from '@emotion/styled';
import ProfileImg from '../../assets/helmet.png';

const AutomotiveParts = () => {
    return (
        <PageWrapper>
            <Header/>
            <MainImg>
                <MainImgTitle>
                    사업분야
                </MainImgTitle>
            </MainImg>
            <NavBarWrapper>
                    <Link to="/license" style={{textDecoration: 'none', color: "#000"}}>
                        <NavBlock>위험물 인허가/설계</NavBlock>
                    </Link>
                    <Link to="/management-agency" style={{textDecoration: 'none', color: "#000"}}>
                        <NavBlock>위험물 안전관리대행</NavBlock>
                    </Link>
                    <Link to="/inspection" style={{textDecoration: 'none', color: "#000"}}>
                        <NavBlock>소방시설안전관리/점검</NavBlock>
                    </Link>
                    <Link to="/corporation" style={{textDecoration: 'none', color: "#000"}}>
                        <SelectNavBlock>소방 공사/위험물 공사</SelectNavBlock>
                    </Link>
                    <Link to="/automotive-parts" style={{textDecoration: 'none', color: "#000"}}>
                        <NavBlock>친환경 자동차 부품</NavBlock>
                    </Link>
                    <Link to="/integration" style={{textDecoration: 'none', color: "#000"}}>
                        <NavBlock>내역(적산)</NavBlock>
                    </Link>
                </NavBarWrapper>
            <PageTitleWrpper>
                <PageTitle>소방 공사/위험물 공사</PageTitle>
            </PageTitleWrpper>
            <HelloWrapper>
                    <Profile/>
                    <Descrip>
                        위험물의 저장 및 취급시설은 위험물안전관리법에서 정하는 기준에 적합하게 설치, 유지하여야 합니다. 위험물설비 및 공사는 관련 기준을 잘 숙지하고 설계도서에 의하되 실무경험이 많은 업체에 의뢰하는 것이 시행착오를 줄이고 경비를 절감하는 효과를 얻을 수 있습니다.
                        <br/>
                        <br/>
                        우정에이치앤씨(주)는 다양한 시공 경험을 바탕으로 사회적 요구에 부응하는 기업으로 나아가고 있습니다.
                        <br/>
                        <br/>
                        우정에이치앤씨(주)는 위험물 설계 전문업체로서 현장여건에 가장 <RedSpanBold>적합한 설계도서를 작성</RedSpanBold>하고, <RedSpanBold>설계도서를 토대로 책임시공</RedSpanBold>을 약속합니다.
                        <br/>
                        <br/>
                        당사는 신규 설치 및 변경 공사 뿐만 아니라 제조소 등의 <RedSpanBold>용도폐지 공사</RedSpanBold>까지 위험물 전 반에 대한 <RedSpanBold>공사업무를 수행</RedSpanBold>하고 있습니다.
                    </Descrip>
                </HelloWrapper>
            <Footer/>
        </PageWrapper>
    );
}

const MainImg = styled.div`
    width: 100%;
    height: 30vh;
    background: #282D27;
    background-image: url(${BackgroundImg});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center; 
    display: flex;
    justify-content: center;
    flex-direction: column;
    color: #fff;
    font-size: 45px;
    font-weight: 600;
    @media screen and (max-width: 1024px) {
        height: 17vh;
        font-size: 26px;
  }
`;

const Descrip = styled.div`
    max-width: 536px;
    font-size: 18px;
    line-height: 32px;
    @media screen and (max-width: 1155px) {
        margin-top: 5vh;
  }
    @media screen and (max-width: 780px) {
        font-size: 16px;
  }
`;

const HelloWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 90vw;
    max-width: 1100px;
    margin: 5vh auto 15vh auto;
    justify-content: space-between;
    @media screen and (max-width: 1155px) {
        justify-content: center;
  }
`;

const Profile = styled.div`
    width: 508px;
    height: 536px;
    background: #282D27;
    background-image: url(${ProfileImg});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center; 
    display: flex;
    align-items: flex-end;
    justify-content: center;
    flex-direction: column;
    @media screen and (max-width: 840px) {
        max-width: 640px;
        width: 90vw;
        height: 60vw;
  }
`;


export default AutomotiveParts;