import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import loadable from '@loadable/component';

export const TYPES = {
  ARROW: 'arrow',
  DOWNLOAD: 'download',
  MAIL: 'mail',
  SOCIAL_XING: 'xing',
  SOCIAL_LINKEDIN: 'linkedin',
  SOCIAL_TWITTER: 'twitter',
  SOCIAL_INSTAGRAM: 'instagram',
  WORLD: 'world',
};

interface IconProps {
  className?: string;
  type: keyof typeof TYPES;
}

const Icon = ({ className, type }: IconProps) => {
  const IconPath = loadable(() => import(`./assets/${type}.svg.js`));
  // @ts-ignore
  return type ? <IconPath className={className} /> : null;
};

Icon.propType = {
  className: PropTypes.string,
  type: PropTypes.oneOf(Object.values(TYPES)),
};

export default styled(Icon)`
  --icon-background-color: transparent;
  --icon-color: black;
  border: 1px solid var(--icon-background-color);
  border-radius: 7px;
  width: 35px;
  height: 35px;
  fill: var(--icon-color);
  background: var(--icon-background-color);

  .logo {
    fill: inherit;
    stroke: inherit;
  }

  .logo-fill {
    fill: var(--icon-color);
    stroke: transparent;
  }

  .logo-stroke {
    fill: transparent;
    stroke: var(--icon-color);
  }

  .logo-none {
    fill: transparent;
    stroke: transparent;
  }
`;
