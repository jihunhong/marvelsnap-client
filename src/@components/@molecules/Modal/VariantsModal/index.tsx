import { imageStyle } from '@atoms/Modal/style';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';
import { BsX } from 'react-icons/bs';
import Modal, { setAppElement } from 'react-modal';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { modalCloser, modalStatus } from 'src/@store/modal';
import { variantsAtom } from 'src/@store/variants';
import * as S from './style';

type Props = {
  selectedIndex: number;
};
setAppElement('#__next');

const VariantsModal = ({ selectedIndex }: Props) => {
  const variantsSource = useRecoilValue(variantsAtom);
  const [current, setCurrent] = useState(selectedIndex);
  const close = useSetRecoilState(modalCloser);
  const visible = useRecoilValue(modalStatus('variants'));
  const router = useRouter();
  useEffect(() => {
    setCurrent(selectedIndex);
  }, [selectedIndex]);
  useEffect(() => {
    router.beforePopState(() => {
      close('variants');
      return true;
    });
    const handleRouteChange = () => {
      close('variants');
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    router.events.on('hashChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
      router.events.off('hashChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <Modal style={imageStyle} isOpen={visible} preventScroll={true} onRequestClose={() => close('variants')}>
      <S.VariantsModalContainer>
        <div className="header">
          <BsX className="closer" color={'#efefef'} size={56} onClick={() => close('variants')} />
        </div>
        <div className="image">
          <Image src={variantsSource[(current + 1) % variantsSource.length]} layout="fill" objectFit="cover" alt="변형" />
        </div>
        <div className="controls">
          <BiChevronLeft size={48} onClick={() => setCurrent(current - 1)} className="prev" />
          <span></span>
          <BiChevronRight size={48} onClick={() => setCurrent(current + 1)} className="next" />
        </div>
        <div className="preview">
          <div className="flex">
            {variantsSource?.map((item, index) => (
              <div key={item} className={`thumbnail ${(current + 1) % variantsSource.length === index ? 'active' : ''}`}>
                <Image src={item} width={100} height={100} alt="썸네일" quality={10} />
              </div>
            ))}
          </div>
        </div>
      </S.VariantsModalContainer>
    </Modal>
  );
};

export default VariantsModal;
