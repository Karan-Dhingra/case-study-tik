var index
const init = () => {
    index = 0
}

const step1 = () => {
    const lower_emoji_image = document.getElementById('lower_emoji_image')
    lower_emoji_image.classList.add('addTransition')
    lower_emoji_image.src =
        'https://s3.amazonaws.com/files.growth.design/media/avatar/avatar__dan--notsure--200.png'

    const finger_pointing = document.getElementById('finger_pointing')
    // finger_pointing.classList.add('addTransition')
    finger_pointing.style.visibility = 'hidden'
    finger_pointing.style.opacity = '0'

    const large_tv_image = document.getElementById('large_tv_image')
    // large_tv_image.classList.add('addTransition')
    large_tv_image.style.visibility = 'hidden'
    large_tv_image.style.opacity = '0'

    const content_box_top_1 = document.getElementById('content_box_top_1')
    // large_tv_image.classList.add('addTransition')
    content_box_top_1.style.visibility = 'hidden'
    content_box_top_1.style.opacity = '0'

    const content_box_bottom_1 = document.getElementById('content_box_bottom_1')
    // large_tv_image.classList.add('addTransition')
    content_box_bottom_1.style.visibility = 'hidden'
    content_box_bottom_1.style.opacity = '0'

    const content_box_top_2 = document.getElementById('content_box_top_2')
    // large_tv_image.classList.add('addTransition')
    content_box_top_2.style.visibility = 'visible'

    const cloud_thinking_container = document.getElementById(
        'cloud_thinking_container'
    )
    // large_tv_image.classList.add('addTransition')
    cloud_thinking_container.style.visibility = 'visible'
    // cloud_thinking_container.style.opacity = '1'

    const lower_cloud_thinking = document.getElementById(
        'lower_cloud_thinking_2'
    )
    // large_tv_image.classList.add('addTransition')
    lower_cloud_thinking.style.visibility = 'visible'
    // cloud_thinking_container.style.opacity = '1'
}

const step2 = () => {
    const lower_emoji_image = document.getElementById('lower_emoji_image')
    lower_emoji_image.classList.add('addTransition')
    lower_emoji_image.src =
        'https://s3.amazonaws.com/files.growth.design/media/avatar/avatar__dan--laugh--200.png'

    const content_box_top_2 = document.getElementById('content_box_top_2')
    content_box_top_2.style.visibility = 'hidden'

    const content_box_top_3 = document.getElementById('content_box_top_3')
    content_box_top_3.style.visibility = 'visible'

    const cloud_thinking_container = document.getElementById(
        'cloud_thinking_container'
    )
    cloud_thinking_container.style.visibility = 'hidden'

    const lower_cloud_thinking = document.getElementById(
        'lower_cloud_thinking_2'
    )
    lower_cloud_thinking.style.visibility = 'hidden'

    const mobile_center = document.getElementById('mobile_center')
    mobile_center.style.visibility = 'visible'
}

const step3 = () => {
    const mobile_center = document.getElementById('mobile_center')
    mobile_center.style.visibility = 'visible'

    const mobile_screen_part = document.getElementById('mobile_screen_part')
    mobile_screen_part.src =
        'https://growth.design/content/case-studies/tiktok-feed-psychology/tiktok-feed-psychology/36bf210568e27db4170a61bffc637b49.png'

    const lower_emoji_image = document.getElementById('lower_emoji_image')
    lower_emoji_image.classList.add('addTransition')
    lower_emoji_image.src =
        'https://s3.amazonaws.com/files.growth.design/media/avatar/avatar__dan--bad--200.png'

    const content_box_top_3 = document.getElementById('content_box_top_3')
    content_box_top_3.style.visibility = 'hidden'

    const thaught_4 = document.getElementById('thaught_4')
    thaught_4.style.visibility = 'visible'

    const lower_thinking_4 = document.getElementById('lower_thinking_4')
    lower_thinking_4.style.visibility = 'visible'

    const side_bar = document.getElementById('side_bar')
    side_bar.style.visibility = 'visible'
}

const step4 = () => {
    const mobile_center = document.getElementById('mobile_center')
    mobile_center.style.visibility = 'visible'

    const mobile_screen_part = document.getElementById('mobile_screen_part')
    mobile_screen_part.src =
        'https://growth.design/content/case-studies/tiktok-feed-psychology/tiktok-feed-psychology/36bf210568e27db4170a61bffc637b49.png'

    const lower_emoji_image = document.getElementById('lower_emoji_image')
    lower_emoji_image.classList.add('addTransition')
    lower_emoji_image.src =
        'https://growth.design/content/case-studies/tiktok-feed-psychology/tiktok-feed-psychology/f3816a24753c080625ea37ed907d67e8.png'

    const thaught_4 = document.getElementById('thaught_4')
    thaught_4.style.visibility = 'hidden'

    const lower_thinking_4 = document.getElementById('lower_thinking_4')
    lower_thinking_4.style.visibility = 'visible'

    const thaught_5 = document.getElementById('thaught_5')
    thaught_5.style.visibility = 'visible'

    const hudMeterBarLoss = document.getElementById('hud-meter-bar-loss')
    hudMeterBarLoss.style.visibility = 'hidden'

    const hudMeterBarGain = document.getElementById('hud-meter-bar-gain')
    hudMeterBarGain.style.visibility = 'hidden'
}

const step5 = () => {
    const mobile_center = document.getElementById('mobile_center')
    mobile_center.style.visibility = 'visible'

    const mobile_screen_part = document.getElementById('mobile_screen_part')
    mobile_screen_part.src =
        'https://growth.design/content/case-studies/tiktok-feed-psychology/tiktok-feed-psychology/123cbac0f4c1174b0276132184e7c126.jpg'

    const lower_emoji_image = document.getElementById('lower_emoji_image')
    lower_emoji_image.classList.add('addTransition')
    lower_emoji_image.src =
        'https://s3.amazonaws.com/files.growth.design/media/avatar/avatar__dan--surprise--075.png'

    const thaught_4 = document.getElementById('thaught_5')
    thaught_4.style.visibility = 'hidden'

    const lower_thinking_4 = document.getElementById('lower_thinking_4')
    lower_thinking_4.style.visibility = 'visible'

    const thaught_5 = document.getElementById('thaught_6')
    thaught_5.style.visibility = 'visible'

    const hudMeterBarLoss = document.getElementById('hud-meter-bar-loss')
    hudMeterBarLoss.style.visibility = 'visible'

    const hudMeterBarGain = document.getElementById('hud-meter-bar-gain')
    hudMeterBarGain.style.visibility = 'visible'
}

const nextSection = () => {
    try {
        index++
        console.log('HELLO')

        switch (index) {
            case 1:
                step1()
                break

            case 2:
                step2()
                break

            case 3:
                step3()
                break

            case 4:
                step4()
                break

            case 5:
                step5()
                break

            default:
                break
        }
    } catch (err) {
        console.log(err)
    }
}

document.addEventListener(
    'DOMContentLoaded',
    function () {
        init()
    },
    false
)
