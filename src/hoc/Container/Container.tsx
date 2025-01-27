import { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  padding?: string;
  maxWidth?: string;
}

const Container: React.FC<ContainerProps> = ({
  children,
  padding = 'px-36 pt-5 pb-0 max-sm:px-4',
  maxWidth = 'max-w-[94.5rem]',
}) => {
  return <div className={`${padding} ${maxWidth} mx-auto`}>{children}</div>;
};

export default Container;
