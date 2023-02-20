import Avatar from '@atoms/Avatar';
import Divider from '@atoms/Divider';
import { FlexColumn, FlexRow } from '@atoms/Flex/style';
import Tag from '@atoms/Tag';
import onlyTime from '@lib/day/onlyTime';
import * as S from './style';

const MatchMessage = ({ user, message, match_code, updated }) => {
  const date = onlyTime(updated);
  return (
    <S.MatchMessageContainer>
      <div className="grid">
        <Avatar src={user.avatarUrl} width={48} height={48} />
        <FlexColumn>
          <FlexRow justify="space-between">
            <span>
              <Tag>
                <span>#&nbsp;{match_code}</span>
              </Tag>
            </span>
            <span className="date-time">{date}</span>
          </FlexRow>
          <Divider margin={12} />
          <div>
            <span>{message || '친선전 해요'}</span>
          </div>
        </FlexColumn>
      </div>
    </S.MatchMessageContainer>
  );
};

export default MatchMessage;
