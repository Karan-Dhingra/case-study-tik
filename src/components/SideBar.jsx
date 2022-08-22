import React from 'react'

const SideBar = () => {
    return (
        <div
            id='side_bar'
            className='sl-block'
            data-block-type='snippet'
            style={{ width: '30px', height: '30px', left: '0px', top: '0px' }}
            data-locked='true'
            data-block-id='403a0a2802d8cfefe7ac74bcdbe6e2a5'
        >
            <div
                className='sl-block-content'
                data-has-custom-html=''
                style={{ zIndex: '14' }}
            >
                <div className='hud__meter__wrapper'>
                    <div className='hud__meter__container--outer'>
                        <div className='hud__meter__marker'></div>
                        <div className='hud__meter__marker'></div>
                        <div className='hud__meter__marker'></div>
                        <div className='hud__meter__marker'></div>
                        <div className='hud__meter__marker'></div>
                        <div className='hud__meter__marker'></div>
                        <div className='hud__meter__marker'></div>
                        <div className='hud__meter__marker'></div>
                        <div className='hud__meter__marker'></div>

                        <div className='progress hud__meter__container'>
                            <div
                                id='hud-meter-bar-default'
                                className='progress-bar hud__meter__bar hud__meter__bar--default'
                                role='progressbar'
                                style={{ width: '45%' }}
                                aria-valuenow='45'
                                aria-valuemin='0'
                                aria-valuemax='100'
                                data-toggle='tooltip'
                                data-placement='right'
                                data-html='true'
                                data-after='Psych Level: 45%'
                            ></div>

                            <div
                                id='hud-meter-bar-loss'
                                className='progress-bar hud__meter__bar hud__meter__bar--loss'
                                role='progressbar'
                                style={{ width: '5%' }}
                                aria-valuenow='5'
                                aria-valuemin='0'
                                aria-valuemax='100'
                                data-toggle='tooltip'
                                data-placement='right'
                                data-html='true'
                            >
                                <div className='hud__meter__bar__change-indicator'></div>
                            </div>

                            <div
                                id='hud-meter-bar-gain'
                                className='progress-bar hud__meter__bar hud__meter__bar--gain'
                                role='progressbar'
                                style={{ width: '0%' }}
                                aria-valuenow='0'
                                aria-valuemin='0'
                                aria-valuemax='100'
                                data-toggle='tooltip'
                                data-placement='right'
                                data-html='true'
                            >
                                <div className='hud__meter__bar__change-indicator'></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SideBar
