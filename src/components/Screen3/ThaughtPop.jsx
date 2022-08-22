import React from 'react'

const ThaughtPop = ({ className, id, content, para }) => {
    return (
        <>
            <div class='lower_part_thinking_4' id='lower_thinking_4'>
                <img
                    src='https://growth.design/content/case-studies/tiktok-feed-psychology/tiktok-feed-psychology/4f807e66ca713aac48c5e0e2d0ee28cd.svg'
                    alt=''
                    style={{ filter: 'invert(1)' }}
                />
            </div>
            <div class={className} id={id}>
                <div class='thinking_cloud'>
                    <svg
                        class='speech-balloon__bubble'
                        height='188'
                        preserveAspectRatio='none'
                        viewBox='0 0 292 188'
                        width='292'
                        xmlns='http://www.w3.org/2000/svg'
                        style={{ fill: 'white' }}
                    >
                        <path
                            d='M19.68 170.25C1.1 157.65-4.87 43.4 16.98 20.32c21.85-23.06 231.95-23.13 257.6 0 23.82 21.49 14.02 129.8 0 149.93-18.51 25.68-236.33 12.6-254.9 0z'
                            vector-effect='non-scaling-stroke'
                        ></path>
                    </svg>
                    <div class={para}>
                        {content?.map((cont, key) => (
                            <p key={key}>{cont}</p>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ThaughtPop
