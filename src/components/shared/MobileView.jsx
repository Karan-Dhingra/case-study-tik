import React from 'react'

const MobileView = () => {
    return (
        <>
            <div className='center_mobile_section' id='mobile_center'>
                <div className='mobile_section_inner'>
                    <img
                        src='https://growth.design/content/case-studies/tiktok-feed-psychology/tiktok-feed-psychology/1dad73ad052c1b684f31b1de9ae4593c.png'
                        alt=''
                        id='mobile_screen_part'
                    />

                    <video
                        src='https://growth.design/content/case-studies/tiktok-feed-psychology/tiktok-feed-psychology/575247aefa7f9d5220217e71e4caf179.mp4'
                        id='mobile_screen_video_play'
                        autoPlay
                        loop
                    ></video>
                </div>
            </div>
        </>
    )
}

export default MobileView
