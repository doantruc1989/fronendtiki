
import Layout from './components/Layout'
import NestedLayout from "./components/NestedLayout";
import type { ReactElement } from 'react';
import type { NextPageWithLayout } from './_app';
import Homepage from './components/Homepage';


const Home: NextPageWithLayout = () => {
  return (
    <div >
      <Homepage />
    </div>
  );
}

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <NestedLayout>{page}</NestedLayout>
    </Layout>
  )
}

export default Home;
