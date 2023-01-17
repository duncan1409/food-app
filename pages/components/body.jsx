import { useState, useEffect } from "react";
import { Container, Col, Row, Modal, Image, Button } from "react-bootstrap";

export default function Cards() {
    const [items, setItems] = useState(null);
    const [popUpItem, setPopUpItem] = useState(0);
    const [showPopup, setShowPopup] = useState(false);
    const handlePopUpClose = () => setShowPopup(false);
    const handlePopUpShow = () => setShowPopup(true);

    useEffect(() => {
        fetch("http://localhost:9000/stores")
            .then((response) => response.json())
            .then((response) => {
                setItems(response);
            })
            .catch((error) => alert(error));
    }, []);
    return (
        <>
            {items === null ? null : (
                <>
                    <Container>
                        <h1>EAT</h1>
                        <Row md={4}>
                            {items.map((item, idx) => {
                                return (
                                    <Col
                                        onClick={(e) => {
                                            setPopUpItem(idx);
                                            handlePopUpShow();
                                        }}
                                        key={item.id}
                                    >
                                        <Image
                                            src={item.thumb}
                                            thumbnail
                                            alt="썸네일 이미지"
                                        ></Image>
                                    </Col>
                                );
                            })}
                        </Row>
                    </Container>

                    {/* 팝업창 */}
                    <Modal
                        style={{ innerWidth: "500px" }}
                        show={showPopup}
                        onHide={handlePopUpClose}
                    >
                        <Modal.Header>
                            <Modal.Title>{items[popUpItem].name}</Modal.Title>
                            <Button onClick={handlePopUpClose} variant="dark">
                                X
                            </Button>
                        </Modal.Header>
                        <Container style={{ textAlign: "center" }}>
                            <Image
                                width={300}
                                src={items[popUpItem].image}
                                alt="팝업 이미지"
                            />
                        </Container>
                        <Modal.Body>
                            <div className="modal-body">
                                {items[popUpItem].description}
                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                            {items[popUpItem].url === undefined ? null : (
                                <Button
                                    variant="dark"
                                    onClick={() => {
                                        window.open(
                                            items[popUpItem].url,
                                            "_blank"
                                        );
                                    }}
                                >
                                    홈페이지 바로가기
                                </Button>
                            )}
                        </Modal.Footer>
                    </Modal>
                </>
            )}
        </>
    );
}
