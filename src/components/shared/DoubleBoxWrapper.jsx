import React from 'react'

const DoubleBoxWrapper = ({
    id,
    cont2,
    class_name = 'designed_double_shade_box',
    content,
    left,
    top,
    bottom,
    right,
}) => {
    return (
        <div
            className={class_name}
            id={id}
            style={{
                left: left ? left : '',
                top: top ? top : '',
                bottom: bottom ? bottom : '',
                right: right ? right : '',
            }}
        >
            <div className='designed_double_shade_box_content_top_left'>
                <div
                    className={`designed_double_shade_box_caption_wraper ${
                        cont2 ? 'designed_double_shade_box_2' : ''
                    }`}
                >
                    {content?.map((cont, key) => (
                        <p key={key}>{cont}</p>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default DoubleBoxWrapper
