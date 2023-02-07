import { BiLoaderCircle, BiMoveHorizontal, BiPowerOff, BiTrash } from 'react-icons/bi';
import { BsExclamationTriangle, BsLightning } from 'react-icons/bs';
import { FaSkull } from 'react-icons/fa';
import { FiCircle } from 'react-icons/fi';

export const OnRevealIcon = () => <BsLightning size={16} />;
export const OnGoingIcon = () => <BiLoaderCircle size={16} />;
export const NoneAbilityIcon = () => <BsExclamationTriangle size={16} />;
export const DiscardIcon = () => <BiTrash size={16} />;
export const MoveIcon = () => <BiMoveHorizontal size={16} />;
export const DestroyIcon = () => <FaSkull size={16} />;

export const PowerIcon = () => <BiPowerOff size={16} />;
export const ManaIcon = () => <FiCircle size={16} />;
