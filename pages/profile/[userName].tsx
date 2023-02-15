import { FlexRow } from '@atoms/Flex/style';
import { baseImgix } from '@constant/imigx';
import { getProfileApi } from '@fetch/index';
import DivisionLayout from '@layout/DivisionLayout';
import PageIntro from '@molecules/PageIntro';
import ProfileSummary from '@molecules/ProfileSummary';
import keys from '@query/keys';
import { NextPageContext } from 'next';
import { dehydrate, QueryClient } from 'react-query';

export async function getServerSideProps(context: NextPageContext) {
  const queryClient = new QueryClient();
  const userName = context.query?.userName as string;
  await queryClient.prefetchQuery([keys.getProfile, userName], () => getProfileApi(userName));

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

const UserDetail = () => {
  return (
    <>
      <PageIntro title={'Profile'} description={''} bgSource={`${baseImgix}/static/background-card-detail.webp`} objectPosition="center bottom" />
      <DivisionLayout>
        <ProfileSummary />
        <section></section>
      </DivisionLayout>
    </>
  );
};

export default UserDetail;
