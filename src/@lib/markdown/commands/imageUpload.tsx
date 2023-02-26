import { baseImgix } from '@constant/imigx';
import { Card } from '@customTypes/Card';
import { baseUrl, searchingApi } from '@fetch/index';
import { useS3Upload } from 'next-s3-upload';
import { BiGlobe, BiImage } from 'react-icons/bi';

const useImageUploadCommand = () => {
  const { uploadToS3 } = useS3Upload({ endpoint: `${baseUrl}/api/upload` });
  const imageUpload = {
    name: 'image',
    keyCommand: 'image',
    buttonProps: { 'aria-label': 'image' },
    icon: <BiImage size={16} />,
    execute: (state, api) => {
      const input = document.createElement('input');
      input.setAttribute('type', 'file');
      input.setAttribute('accept', 'image/*');
      input.click();
      input.addEventListener('change', async () => {
        const file = input.files?.[0]!;

        try {
          const response = await uploadToS3(file);
          const IMG_URL = response.url.replace('https://marvelsnap.resources.s3.ap-northeast-2.amazonaws.com', baseImgix);
          // 가져온 위치에 이미지를 삽입한다
          const img = `<img src="${IMG_URL}" />`;
          api.replaceSelection(img);
        } catch (error) {
          alert('이미지 업로드에 실패했습니다.');
          throw Error('이미지 업로드에 실패했습니다.');
        }
      });
    },
  };

  return [imageUpload];
};

export default useImageUploadCommand;
