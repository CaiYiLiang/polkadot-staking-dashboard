import React from 'react';

type TextVariant =
  | 'display1'
  | 'display2'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'subtitle1'
  | 'subtitle2'
  | 'body1'
  | 'body2'
  | 'button'
  | 'caption';

interface ITextProps {
  component?: React.ReactElement;
  variant?: TextVariant;
  block?: boolean;
}

const Text: React.FC<React.PropsWithChildren<ITextProps>> = ({
  children,
  component = <span />,
  variant = 'body1',
  block,
}) => {
  const getVariantStyles = (variant) => {
    switch (variant) {
      case 'display1':
        return 'text-6xl font-normal leading-tight';
      case 'display2':
        return 'text-5xl font-bold leading-tight';
      case 'h1':
        return 'text-4xl font-semibold leading-snug';
      case 'h2':
        return 'text-3xl font-semibold leading-tight';
      case 'h3':
        return 'text-2xl font-semibold leading-snug';
      case 'h4':
        return 'text-xl font-semibold leading-snug';
      case 'h5':
        return 'text-lg font-semibold leading-snug';
      case 'h6':
        return 'text-base font-semibold leading-5';
      case 'subtitle1':
        return 'text-base font-medium leading-5';
      case 'subtitle2':
        return 'text-sm font-medium leading-snug';
      case 'body1':
        return 'text-base font-normal leading-normal';
      case 'body2':
        return 'text-sm font-normal leading-snug';
      case 'button':
        return 'text-sm font-semibold leading-snug';
      case 'caption':
        return 'text-xs font-normal leading-normal';
    }
  };

  return (
    <div className={`${getVariantStyles(variant)} ${block ? 'inline-block' : ''}`}>{children}</div>
  );
};

export default Text;
