import { Container, Row, Col, Stack } from 'react-bootstrap';
import "./Resume.css"

function Resume() {
  return (
    <Container className="resume-page text-start p-2">
        <Row className='mt-5'>
            <Col md={8} className="mx-auto">
                <h2>Education</h2>
                <strong>Bachelor of Science in Computer Science</strong> at <em> University of Florida</em> (Dec 2022)
                <p>GPA: 3.92/4.0</p>
                <p>Honors: Cum Laude</p>
            </Col>
        </Row>
        <Row className='mt-2'>
            <Col md={8} className="mx-auto">
                <h2>Technical Skills</h2>

                <p><strong>Languages:</strong> Python, C#, JavaScript, TypeScript</p>
                <p><strong>Frameworks & Libraries:</strong> React, Node.js, Django, .NET MVC</p>
                <p><strong>Databases:</strong> MySQL, PostgreSQL, OracleDB</p>
                <p><strong>DevOps & Tools:</strong> Git, GitHub Actions, Terraform, Docker, Docker Compose, Postman</p>
                <p><strong>Cloud:</strong> AWS</p>
            </Col>
        </Row>
        <Row className='mt-2'>
            <Col md={8} className="mx-auto">
                <h2>Relevant Experience</h2>

                <h5>Software Engineer | RWX Solutions | Remote (Part-time)</h5>
                <p><em>Mar 2024 - Aug 2024</em></p>
                <ul>
                <li>Participated in system architecture discussions and contributed to technology stack decisions centered around TypeScript, React, and Node.js.</li>
                <li>Developed full-stack features using React, HTML, CSS, and Node.js; wrote supporting technical design documentation.</li>
                <li>Built and tested modular UI components in isolation with StorybookJS to accelerate frontend development and ensure design consistency.</li>
                <li>Implemented unit and integration tests using Jest to maintain high code quality.</li>
                <li>Conducted code reviews and collaborated with team members to enforce best practices and clean code standards.</li>
                </ul>

                <h5>Correctional Systems Officer | Federal Bureau of Prisons | Coleman, FL</h5>
                <p><em>July 2010 - Present</em></p>
                <ul>
                <li>Demonstrated strong independent work ethic and effective time management skills, successfully balancing multiple competing tasks.</li>
                <li>Established a reputation as a dependable authority to guide, mentor, and cultivate new team members in a diverse environment.</li>
                </ul>

                <h5>Software Developer | ILN | Remote (Part-time)</h5>
                <p><em>Mar 2023 - Mar 2024</em></p>
                <ul>
                <li>Increased user efficiency by 50% by developing a real-time virtual editor, eliminating the need for manual changes and separate previews when creating custom website themes.</li>
                <li>Spearheaded the enhancement of the application's chat service in .NET, leveraging Entity Framework to architect and optimize intricate queries.</li>
                <li>Developed and tested consumable REST APIs for the backend, introducing a suite of new features to augment user experience and functionality.</li>
                <li>Managed and optimized Entity Framework MVC applications, improving database interactions and system performance.</li>
                <li>Designed and maintained SQL databases, implementing performance optimizations and indexing strategies to enhance query execution speed.</li>
                <li>Leveraged full-stack development expertise in C#, .NET MVC, JavaScript, HTML, CSS, and SQL, while following DevOps best practices for scalable and maintainable applications.</li>
                </ul>
            </Col>
        </Row>
        <Row className='mt-2'>
            <Col md={8} className="mx-auto">
            <h2>Certifications</h2>
            <ul>
                <li>AWS Certified Solutions Architect – Associate (Sep 2024)</li>
                <li>CompTIA - A+ (Apr 2016)</li>
            </ul>
            </Col>
        </Row>
    </Container>
  );
}

export default Resume;
