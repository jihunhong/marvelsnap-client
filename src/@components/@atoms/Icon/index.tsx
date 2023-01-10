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
