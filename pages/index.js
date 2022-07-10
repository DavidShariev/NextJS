import Image from "next/image";
import Layout from "../components/layout";

import image_1 from "../image/image_1.jpg";

function HomePage() {
  return (
    <Layout>
      <h1>Hello, NextJS!</h1>
      <Image src={image_1} alt="some img"></Image>
    </Layout>
  );
}

export default HomePage;
