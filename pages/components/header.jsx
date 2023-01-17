import { useRouter } from "next/router";
import { Container, Nav, Navbar } from "react-bootstrap";
export default function Header() {
    const router = useRouter();
    const redirectMain = () => {
        router.push("/");
    };
    const redirectAbout = () => {
        router.push("/about");
    };
    return (
        <Navbar bg="light" variant="light">
            <Container>
                <Nav className="menu">
                    <Nav.Link onClick={redirectMain}>STORE </Nav.Link>
                    <Nav.Link onClick={redirectAbout}>ABOUT</Nav.Link>
                </Nav>
                <Navbar.Brand onClick={redirectMain}>FOODLIX</Navbar.Brand>
            </Container>
        </Navbar>
    );
}
