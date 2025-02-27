// @flow

import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import Loading from '../../Component/Loading/Loading.component';
import {
  StyledImageContainer,
  StyledContentContainer,
  StyledTitleContainer,
  TitleText,
  StyledUpperContentContainer,
  BackButton,
  SubtitleText,
  StyledDetailContainer,
  DetailLabel,
  DetailValue
} from './Detail.styles';
import { Props } from './Detail.type';

const Detail = (props: Props) => {
  const { axios } = props;
  const location = useLocation();
  const navigate = useNavigate();
  const { movieId } = location.state;
  const getDetailURI = `/movie/${movieId}`;
  const imageURI = 'https://image.tmdb.org/t/p/w342';

  const [detail, setDetail] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const response = await axios.get(getDetailURI);
      setDetail(response.data);
      setLoading(false);
    };
    fetchData();
  }, []);

  const onBackButtonClick = () => {
    navigate('/');
  };

  const transformDetailArrays = (items) => {
    const itemNames = items?.map((item) => item.name);
    return itemNames?.join(', ');
  };

  const renderMovieDetail = (label: String, value: String) => (
    <StyledDetailContainer>
      <DetailLabel className="text-base/7">{label}</DetailLabel>
      <DetailValue className="text-base/7">{value}</DetailValue>
    </StyledDetailContainer>
  );

  return detail === {} || loading
    ? (<Loading />)
    : (
      <>
        <StyledUpperContentContainer>
          <BackButton onClick={onBackButtonClick} className="p-3 text-base/7">Back</BackButton>
        </StyledUpperContentContainer>
        <StyledContentContainer>
          <StyledTitleContainer>
            <TitleText className="underline text-3xl/7">{detail.title}</TitleText>
            <SubtitleText className="text-sm/7">{detail.tagline}</SubtitleText>
          </StyledTitleContainer>
          <StyledImageContainer>
            <img src={`${imageURI}${detail.poster_path}`} alt="poster" />
          </StyledImageContainer>
          {renderMovieDetail('Overview', detail.overview)}
          {renderMovieDetail('Genres', transformDetailArrays(detail.genres))}
          {renderMovieDetail('Release Date', new Date(detail.release_date)
            .toLocaleString('en-us', { month: 'short', year: 'numeric' }))}
          {renderMovieDetail('Runtime', `${detail.runtime} minutes`)}
          {renderMovieDetail('Production Companies', transformDetailArrays(detail.production_companies))}
        </StyledContentContainer>
      </>
    );
};

export default Detail;
