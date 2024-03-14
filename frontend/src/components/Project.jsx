import React from "react";
import { Container } from "react-bootstrap";
import MarkdownRenderer from "./MarkdownRenderer";

function Project({title, full_desc, date}) {

    const formatDate = (origDate) => {
        console.log(origDate);
        const dateString = origDate;
        const date = new Date(dateString);
        const formattedDate = date.toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric"
    });

        return formattedDate
    }

    return (  
        <Container className='p-3 mx-auto'>
            <h1 className='mt-5 mb-1'>
                {title}
            </h1>
            {date && (
                <p className="mb-5">{formatDate(date)}</p>
            )}
            <MarkdownRenderer markdown={full_desc}/>
        </Container>
    );
}

export default Project;