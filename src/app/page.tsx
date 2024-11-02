import { Col, Container, Row } from 'react-bootstrap';
import { PeopleFill, FileEarmarkTextFill, Calendar2CheckFill } from 'react-bootstrap-icons';

const Home = () => (
  <main>
    <Container id="landing-page" className="py-3">
      <Row className="text-center">
        <Col>
          <PeopleFill size={100} />
          <h1>This address book enables any number of users to register and save their business contacts.</h1>
          <h5>You can only see the contacts you have created.</h5>
        </Col>

        <Col>
          <FileEarmarkTextFill size={100} />
          <h1>For each contact, you can save their name, address, and phone number.</h1>
          <h5>Manage all essential contact information in one place.</h5>
        </Col>

        <Col>
          <Calendar2CheckFill size={100} />
          <h1>Each time you make contact, you can write a note summarizing the conversation.</h1>
          <h5>This note is saved along with a timestamp with the contact.</h5>
        </Col>
      </Row>
    </Container>
  </main>
);

export default Home;
