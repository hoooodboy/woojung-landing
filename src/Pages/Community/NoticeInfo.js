import React,{ useEffect, useState} from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import {Link} from 'react-router-dom';

import {PageWrapper} from '../../components/PageStyle';
import BackgroundImg from '../../assets/prbackground.png';
import {PageTitleWrpper, MainImgTitle, PageTitle, NavBarWrapper } from '../../components/PageStyle';
import styled from '@emotion/styled';
import axios from 'axios';


const NewsInfo = ({location}) => {

    const [newscard, setNewscard] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const history = useHistory();

    useEffect(() => {
        const fetchNews = async () => {
        try {
            setError(null);
            setNewscard(null);
            setLoading(true);
            const response = await axios.get(
            `https://www.sgtapi.co.kr/news/newslist.do`
            );
            setNewscard(response.data); 
        } catch (e) {
            setError(e);
        }
        setLoading(false);
        };

        fetchNews();
    }, []);

    if (loading) return <div></div>;
    if (error) return <div>에러가 발생했습니다</div>;
    if (!newscard) return null;

    return (
        <PageWrapper>
            <Header/>
            <MainImg>
                <MainImgTitle>
                커뮤니티
                </MainImgTitle>
            </MainImg>
            <NavBarWrapper>
                    <Link to="/notice" style={{textDecoration: 'none', color: "#000"}}>
                        <SelectNavBlock>공지사항</SelectNavBlock>
                    </Link>
            </NavBarWrapper>
            <PageTitleWrpper>
                <PageTitle>공지사항</PageTitle>
            </PageTitleWrpper>
            <BoardWrapper>
                {newscard.map(newscards => (
                    (newscards.idx === location.props?.id?
                        <>
                        <BoardHeader>
                            <BordTitle>{newscards.news_sub}</BordTitle>
                        </BoardHeader>
                        <BorderSubTitle>
                            <RegisDate>등록일: {newscards.regdate.split("", 10)}</RegisDate>
                        </BorderSubTitle>
                        <BoardContent>
                            <NewsImg src={"https://sgtapi.co.kr" + newscards?.care_image_list?.[0].url} alt=""/>
                            <NewssContnet>{newscards.newscon}</NewssContnet>
                        </BoardContent>
                    </>
                    :
                        null
                    )
                    
                ))}
                <ButtonWrapper>
                    <Button
                        onClick={() =>
                            history.push({pathname: `/notice`})
                        }                          
                    >목록으로</Button>
                </ButtonWrapper>
            </BoardWrapper>
            <Footer/>
        </PageWrapper>
    );
}


const MainImg = styled.div`
    width: 100%;
    height: 25vh;
    background: #282D27;
    background-image: url(${BackgroundImg});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center; 
    display: flex;
    align-items: center;
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

const BoardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 10vh 0;
    @media screen and (max-width: 1024px) {
        width: 90vw;
        margin: 10vh auto 0 auto;
  }
`;

const NewsImg = styled.img`
    height: 400px;
    max-width: 600px;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center; 
    margin: 0 auto;
    margin-top: 10vh;
    display: flex;
    flex-direction: column;
    transition: all 0.3s ease-in-out;  
    &:hover{
        background-size: 108%;
    }
    @media screen and (max-width: 840px) {
        width: 90vw;
        height: 60vw;
  }
  `;

const BoardHeader = styled.div`
    width: 90vw;
    max-width: 1088px;
    height: 52px;
    border-top: 2px solid #0A109F;
    border-bottom: 1px solid #DBDBDB;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #000;
`;

const BoardContent = styled.div`
    width: 90vw;
    max-width: 1088px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #000;
    border-bottom: 1px solid #DBDBDB;
`;

const BordTitle = styled.div`
    flex:1;
    padding: 0 50px;
    @media screen and (max-width: 780px) {
        padding: 0;
        font-size: 14px;
    }
`;

const RegisDate = styled.div`
    @media screen and (max-width: 780px) {
        padding: 0;
        font-size: 12px;
    }
`;

const NewssContnet = styled.div`
    max-width: 728px;
    padding: 5vh 0;
    text-align: center;
    @media screen and (max-width: 840px) {
        width: 90vw;
        font-size: 14px;
  }
`;

const BorderSubTitle = styled.div`
    width: 90vw;
    max-width: 1088px;
    padding: 1vh 0;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    color: #909090;
    font-size: 16px;
`;

const ButtonWrapper = styled.div`
    width: 90vw;
    max-width: 1088px;
    display: flex;
    justify-content: flex-end;
    @media screen and (max-width: 780px) {
        justify-content: center;
    }
`;

const Button = styled.div`
    color: #fff;
    font-size: 15px;
    border-radius: 5px;
    background: #0A109F;
    padding: 10px 20px;
    cursor: pointer;
    margin: 3vh 0;
    
`;

const SelectNavBlock = styled.div`
    width: 15vw;
    min-width: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    color: #000;
    @media screen and (max-width: 1207px) {
        font-size: 18px;
        width: 100vw;
        display: flex;
    }
`;


export default NewsInfo;
