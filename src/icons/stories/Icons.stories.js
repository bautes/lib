import React, { useState } from 'react';
import styled from 'styled-components';
import Icon, { TYPES } from '../';

const Wrapper = styled.div`
  display: flex;
  text-align: center;
  small {
    display: block;
  }
`;

const StyledIcon = styled(Icon)`
  --icon-color: black;
  margin: 1rem 3rem;
  &:after {
    content: '${(props) => props.type}';
    display: block;
  }
`;

const IconsStory = {
  title: 'Icon',
  component: StyledIcon,
};

const DefaultIcon = () => {
  const RedIcon = styled(Icon)`
    --icon-background-color: red;
    --icon-color: white;
  `;
  const RoundIcon = styled(Icon)`
    --icon-background-color: lightblue;
    --icon-color: white;
    border-radius: 100%;
    margin: 0 0.5rem;
  `;
  const BlackIcon = styled(Icon)`
    --icon-background-color: transparent;
    --icon-color: black;
    border: none;
  `;

  return (
    <>
      <RedIcon type={TYPES.SOCIAL_INSTAGRAM} />
      <RoundIcon type={TYPES.SOCIAL_TWITTER} />
      <BlackIcon type={TYPES.SOCIAL_LINKEDIN} />
    </>
  );
};

const SearchIcons = () => {
  const [filter, setFilter] = useState('');
  const setSearch = (ev) => setFilter(ev?.target.value);
  return (
    <div>
      <input type='text' placeholder='search icon' onChange={setSearch} />
      <Wrapper>
        {Object.entries(TYPES)
          .filter(([, t]) => new RegExp(filter).test(t))
          .map(([key, type]) => (
            <div>
              <StyledIcon type={type} />
              <small>{key}</small>
            </div>
          ))}
      </Wrapper>
    </div>
  );
};

export const Default = DefaultIcon.bind({});
Default.args = {
  type: TYPES.SOCIAL_INSTAGRAM,
};

export const SeachIcon = SearchIcons.bind({});

export default IconsStory;
