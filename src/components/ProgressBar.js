import React from 'react'

export default function ProgressBar({percentage = 50}) {
    const p = percentage > 100 ? 100: percentage;
    return (
        <div className="prgs_cnt">
            <div className="prgs_fill" style={{width:percentage+'%'}}></div>
        </div>
    )
}
