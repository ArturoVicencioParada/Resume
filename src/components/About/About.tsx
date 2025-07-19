import { Row, Col, Avatar } from "antd"
import ResumePhoto from '../../assets/resume-photo.jpeg';
import './About.scss'

export const About = () => {
    return (
        <Row gutter={[20, 20]} justify="center">
            <Col xs={{ order: 2, span: 24 }} sm={{ order: 1, span: 18 }} className="presentation">
                <h1>Arturo Vicencio Parada</h1>
            </Col>
            <Col xs={{ order: 1, span: 24 }} sm={{ order: 2, span: 6 }}>
                <Avatar src={ResumePhoto} shape="square" size={180} className="mx-auto"></Avatar>
            </Col>
        </Row>
    )
}