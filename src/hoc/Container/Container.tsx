import { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  padding?: string;
  maxWidth?: string;
}

const Container: React.FC<ContainerProps> = ({
  children,
  padding = 'sm:px-36 sm:pt-5 sm:pb-0 px-4 pt-1 pb-0',
  maxWidth = 'max-w-[1512px]',
}) => {
  return <div className={`${padding} ${maxWidth} mx-auto`}>{children}</div>;
};

export default Container;
