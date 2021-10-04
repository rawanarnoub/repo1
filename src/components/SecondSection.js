import React from 'react';
import Button from 'react-bootstrap/Button'

export default function SecondSection() {
    return (
        <div>
            <h1>Some of my projects</h1>
            <p>Click here to see some of my Projects</p>
            <div className="clickbuttonprojects">
            <Button variant="outline-primary" href="/projects">Click Here</Button>{' '}
            </div>
        </div>
    )
}
