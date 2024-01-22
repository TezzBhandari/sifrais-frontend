import React from 'react'
// import SifarisList from './components/SifarisList'
// import dynamic from 'next/dynamic';
import SifarisList from './components/SifarisList';

// export const dynamic = "force-dynamic";
// const SifarisListWithNoSSR = dynamic(() => import("./components/SifarisList"), {
//   ssr: false,
// });

const page = () => {
  return (
    <><SifarisList/></>
  )
}

export default page