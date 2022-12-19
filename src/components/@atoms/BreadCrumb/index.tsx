import Link from 'next/link';
import { FiChevronRight } from 'react-icons/fi';
import { BreadCrumbsContainer } from './style';

type Data = {
  name: string;
  href: string;
};

type Props = {
  source: Array<Data>;
};

const BreadCrumb = ({ source }: Props) => {
  return (
    <BreadCrumbsContainer aria-label="breadcrumb">
      <Link href="/">HOME</Link>
      {source?.map(item => (
        <>
          <FiChevronRight />
          <Link href={item?.href}>{item?.name}</Link>
        </>
      ))}
    </BreadCrumbsContainer>
  );
};

export default BreadCrumb;
