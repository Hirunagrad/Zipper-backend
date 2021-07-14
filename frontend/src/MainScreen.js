import React from 'react';
import { Container,Row } from 'react-bootstrap';

const MainScreen = () => {
    return (
        <div className="main">
            <Container>
                <Row>
                    <div className="page">
                        {
                           <h2>My Notes</h2>
                        }
                    </div>
                </Row>
            </Container>
        </div>
    )
}

export default MainScreen
