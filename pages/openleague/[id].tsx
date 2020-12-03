import axios from 'axios';
import { useRouter } from 'next/router';

export default function League({ leagueDetail }) {
  const router = useRouter();

  // If the page is not yet generated, this will be displayed
  // initially until getStaticProps() finishes running
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return <h1>안녕</h1>;
}

// This function gets called at build time
export async function getStaticPaths() {
  const leagueList = await axios
    .get(`${process.env.NEXT_PUBLIC_BACKEND}/api/v1/league`, {
      params: {
        page: 1,
        limit: 12,
      },
    })
    .then((response) => {
      return response.data;
    });

  // Get the paths we want to pre-render based on posts
  const paths = leagueList.map((league) => ({
    params: { id: league._id },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const leagueDetail = await axios
    .get(`${process.env.NEXT_PUBLIC_BACKEND}/api/v1/league/${params}`, {})
    .then((response) => {
      return response.data;
    });

  return { props: { leagueDetail }, revalidate: 1 };
}
