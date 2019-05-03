import React from "react";
import styled from 'styled-components';

const Image = styled.img`
height: ${props => props.size === 'large' ? '500px' : '400px'};
width: ${props => props.size === 'large' ? '400px' : '300px'}
`;

const MovieCover = props => {
  const { title, url, type } = props;
  return (
    <Image src={url} alt={title} size={type}/>
  );
};

export default MovieCover;
