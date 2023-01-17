import Header from "./components/header";
import Body from "./components/body";
import Footer from "./components/footer";
import Head from "next/head";

export default function Home() {
    return (
        <>
            <Head>
                <title>STORE</title>
                <meta name="description" content="메인 페이지" />
            </Head>
            <Header />
            <Body />
            <Footer />
        </>
    );
}
