import { useEffect } from 'react';
import canvasBlur from 'src/@lib/scaleToFit';

const useBlur = (ref, src) => {
  useEffect(() => {
    if (ref.current) {
      const image = new Image();
      image.src = src;
      image.onload = function () {
        canvasBlur(this as HTMLImageElement, ref.current);
      };
    }
  }, [ref, src]);
};

export default useBlur;
