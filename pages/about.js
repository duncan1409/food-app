import { Container } from "react-bootstrap";
import Header from "./components/header";
import Footer from "./components/footer";
import Head from "next/head";

export default function About() {
    return (
        <>
            <Head>
                <title>ABOUT</title>
                <meta name="description" content="설명 페이지" />
            </Head>
            <Header />
            <Container>
                <h3>Tech Stack</h3>
                <ul>
                    <li>Node.js</li>
                    <li>yarn</li>
                    <li>Next.js</li>
                    <li>json-server</li>
                    <li>React-Bootstrap</li>
                </ul>
                <h3>Page</h3>
                <ul>
                    <h5>
                        pages 폴더에 components 폴더와 그 외의 js파일로
                        나누었다.
                    </h5>
                    <h5>
                        components는 지시사항대로 헤더-바디-푸터 형식으로
                        나누었다.
                    </h5>
                    <h5>상단은 STORE, ABOUT으로 나뉘어져있다.</h5>
                    <h5>
                        STORE는 메인 페이지, ABOUT은 프로젝트 소개 페이지로
                        연결시켜준다.
                    </h5>
                    <br />
                    <h5>썸네일 이미지가 가로로 4장까지 배치된다.</h5>
                    <h5>
                        사진을 클릭하면 db.json의 정보에 연결된 팝업창이 열린다.
                    </h5>
                    <h5>팝업창은 x버튼으로 닫을 수 있다.</h5>
                    <h5>
                        url 정보가 있는 음식점의 경우에는 홈페이지 바로가기
                        버튼이 생성된다.
                    </h5>
                    <br />
                    <h5>푸터에는 지시사항대로 @ 2023 박민형을 출력하였다.</h5>
                    <br />
                    <h5>
                        잘못된 URL에 접속하였을 경우 404에러페이지를 띄운다.
                    </h5>
                    <h5>서버에 문제가 생겼을 경우 500에러페이지를 띄운다.</h5>
                    <h5>
                        에러가 발생하면 에러페이지를 띄우고 5초 뒤 메인페이지로
                        돌아간다.
                    </h5>
                </ul>
            </Container>
            <Footer></Footer>
        </>
    );
}
