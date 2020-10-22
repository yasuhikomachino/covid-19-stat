import React from "react";
import { Container } from "react-bootstrap";

const Footer: React.FC = () => {
    return (
        <Container className="my-5 py-5 text-left border-top">
            <p className="mb-0">
                <span className="text-muted">Author: </span>
                <a
                    href="https://github.com/yasuhikomachino"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-info"
                >
                    https://github.com/yasuhikomachino
                </a>
            </p>
            <p className="mb-0">
                <span className="text-muted">Repository: </span>
                <a
                    href="https://github.com/yasuhikomachino/covid-19-stat"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-info"
                >
                    https://github.com/yasuhikomachino/covid-19-stat
                </a>
            </p>
            <p className="mb-0">
                <span className="text-muted">Data Source: </span>
                <a
                    href="https://covid19api.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-info"
                >
                    https://covid19api.com/
                </a>
            </p>
            <p className="mb-0">
                <span className="text-muted">Flag Icon: </span>
                <a
                    href="http://www.famfamfam.com/archive/flag-icons-released/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-info"
                >
                    http://www.famfamfam.com/archive/flag-icons-released/
                </a>
            </p>
        </Container>
    );
};

export default Footer;
