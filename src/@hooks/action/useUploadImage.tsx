import { baseImgix } from '@constant/imigx';
import { baseUrl } from '@fetch/index';
import { useS3Upload } from 'next-s3-upload';
import { useRef } from 'react';

const useUploadImage = () => {
  const ref = useRef();
  const { uploadToS3 } = useS3Upload({ endpoint: `${baseUrl}/api/upload` });

  const handler = () => {
    const input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');
    input.click();
    input.addEventListener('change', async () => {
      const file = input.files?.[0]!;

      try {
        const response = await uploadToS3(file);
        const IMG_URL = response.url.replace('https://marvelsnap.resources.s3.ap-northeast-2.amazonaws.com', baseImgix);
        const editor = ref.current.getEditor();
        const range = editor.getSelection();
        // 가져온 위치에 이미지를 삽입한다
        editor.insertEmbed(range.index, 'image', IMG_URL);
      } catch (error) {
        alert('이미지 업로드에 실패했습니다.');
        throw Error('이미지 업로드에 실패했습니다.');
      }
    });
  };
  return [handler, ref];
};

export default useUploadImage;
