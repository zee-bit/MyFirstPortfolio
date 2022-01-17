import React, { Component } from 'react';
// import { Document, Page } from 'react-pdf/dist/umd/entry.webpack';

// import resume from '../../public/resume/Zeeshan Equbal BIT Mesra.pdf'

class Resume extends Component {
    constructor(props) {
        super(props);

        this.resume = props.resume;
    }

    render() {
        return (
            <div className="resume-section p-3 p-lg-5 d-flex justify-content-center" id="resume" name="resume">
                <div className="w-100">
                    <h2 className="mb-5 mt-2">Resume</h2>
                    {/* <Document file="/resume/Zeeshan Equbal BIT Mesra.pdf">
                        <Page pageNumber={1} />
                    </Document> */}
                </div>
            </div>
        )
    }
}

export default Resume;