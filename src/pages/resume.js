import React, { useState } from 'react';
import { Document, Page, pdfjs } from "react-pdf";
import SEO from "../components/seo"
import styled from "styled-components"

// Styles
import "../styles/shared.scss"

// Component
import Footer from "../components/footer/footer"
import Navigation from "../components/navigation/navigation.js"

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function Resume() {
    const [numPages, setNumPages] = useState(null);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }
    return (
        <div>
            <SEO
                description="Kevin Laminto, software developer, interested in UI/UX design."
                lang="us"
                title="Resume"
            />
            <div className="main" style={{ overflowX: 'hidden' }}>
                <Navigation />

                <ParentWrapper>
                    <ContentWrapper>

                        <p>Last updated: 11 September 2020</p>
                        <ResumeDiv>
                            <ResumeWrapper style={{ float: 'left' }}>
                                <Document
                                    className="doc"
                                    file={require('../../static/Resume.pdf')}
                                    options={{ workerSrc: "/pdf.worker.js" }}
                                    onLoadSuccess={onDocumentLoadSuccess}
                                >
                                    {Array.from(new Array(numPages), (el, index) => (
                                        <Page className="page" key={`page_${index + 1}`} pageNumber={index + 1} />
                                    ))}
                                </Document>
                            </ResumeWrapper>
                            <DownloadWrapper>
                                <a href={'/Resume.pdf'} download>Download</a>
                            </DownloadWrapper>
                        </ResumeDiv>

                    </ContentWrapper>
                </ParentWrapper>

                <Footer />
            </div>
        </div>
    )
}

// Styled components
const ParentWrapper = styled.div`
    width: 70vw;
    margin: 0 auto;

    @media(max-width: 768px) {
        width: 90vw;
    }
`

const ContentWrapper = styled.div`
    margin-top: 5em;
    max-width: 450px;
`

const ResumeWrapper = styled.div`
    display: flex;
    .doc {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    @media (max-width: 768px) {
        .page > canvas {
        max-width: 100%;
        height: auto !important;
    }
  }
`

const DownloadWrapper = styled.div`
    float: right;
    margin-left: 2.5rem;

    @media (max-width: 768px) {
        float: none;
        margin: 0;
    } 
`

const ResumeDiv = styled.div`
    display: flex;

    @media (max-width: 768px) {
        display: unset;
    } 
`