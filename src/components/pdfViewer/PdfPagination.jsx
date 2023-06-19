import React, { useState } from 'react';
import './pdfViewer.css';

import { AiOutlineStepBackward, AiOutlineStepForward} from 'react-icons/ai/index' ; 

const PdfPagination = (props) => {
    return (
        <>
            <div className='pdfPagination-wrapper'>
                <div onClick={props.left} className="pdfPagination-left  p-p-child">
                    <AiOutlineStepBackward/>
                </div>
                <div className="pdfPagination-mid p-p-child">
                    <span>{props.val}/{props.total}</span>
                </div>
                <div onClick={props.right} className="pdfPagination-right p-p-child">
                    <AiOutlineStepForward/>
                </div>
            </div>
        </>
    )
}

export default PdfPagination