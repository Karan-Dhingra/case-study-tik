import React from 'react'

const DoubleBoxWrapper = ({
    id,
    bottom,
    class_name = 'designed_double_shade_box',
    content,
}) => {
    return (
        <div class={class_name} id={id}>
            <div class='designed_double_shade_box_content_top_left'>
                <div
                    class={`designed_double_shade_box_caption_wraper ${
                        bottom ? 'designed_double_shade_box_2' : ''
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