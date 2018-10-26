import React from 'react'

export default function SummaryList({dataArray}) {
    return (
        <ul className="sum_ul">
            {dataArray.map((item, index) =>
                <li className="sum_i" key={item.title}>
                    <p className="sum_i_t">{item.title}</p>
                    <p className="sum_i_v">{item.value}</p>
                </li>
            )}
        </ul>
    )
}
