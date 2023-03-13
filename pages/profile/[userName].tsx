import backgroundUrls from '@constant/backgrounds';
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
      <PageIntro title={'Profile'} description={''} bgSource={backgroundUrls.cards} objectPosition="center bottom" />
      <DivisionLayout>
        <ProfileSummary />
        <section></section>
      </DivisionLayout>
    </>
  );
};

export default UserDetail;
