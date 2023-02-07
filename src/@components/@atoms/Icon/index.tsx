import { BiLoaderCircle, BiMoveHorizontal } from 'react-icons/bi';
import { BsExclamationTriangle, BsLightning } from 'react-icons/bs';
import { FaSkull } from 'react-icons/fa';
import { GiCardDiscard } from 'react-icons/gi';

export const OnRevealIcon = () => <BsLightning size={16} />;
export const OnGoingIcon = () => <BiLoaderCircle size={16} />;
export const NoneAbilityIcon = () => <BsExclamationTriangle size={16} />;
export const DiscardIcon = () => <GiCardDiscard size={16} />;
export const MoveIcon = () => <BiMoveHorizontal size={16} />;
export const DestroyIcon = () => <FaSkull size={16} />;
export const StarIcon = ({ size, className, ...props }: { size: number; className?: string }) => {
  return (
    <svg stroke="currentColor" className={className} fill="#b5b8b1" strokeWidth="0" viewBox="0 0 16 16" {...props} height={size} width={size} xmlns="http://www.w3.org/2000/svg">
      <path
        {...props}
        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
      ></path>
    </svg>
  );
};
