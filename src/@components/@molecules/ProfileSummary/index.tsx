import Button from '@atoms/Button';
import { FlexRow } from '@atoms/Flex/style';
import useUser from '@query/useUser';
import { FaSyncAlt, FaUserCircle } from 'react-icons/fa';
import * as S from './style';

const ProfileSummary = () => {
  const [user] = useUser();
  return (
    <S.ProfileSummaryContainer className="left">
      <div className="background-header">
        <div className="profile-image">
          <img src="" width={96} height={96} />
        </div>
      </div>
      <div className="profile-content">
        <p className="nickname">{user?.username}</p>
        <div className="user-content">
          <span>등록한 덱 0</span>
          <span>댓글 0</span>
          <span>좋아요 0</span>
        </div>
        <FlexRow className="actions">
          <Button icon={<FaUserCircle size={14} />} colorType="success">
            <span>프로필 편집</span>
          </Button>
          <Button icon={<FaSyncAlt size={14} />} colorType="plain">
            <span>컬렉션 연동</span>
          </Button>
        </FlexRow>
      </div>
    </S.ProfileSummaryContainer>
  );
};

export default ProfileSummary;
