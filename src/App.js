import EmojiLowerBottom from './components/EmojiLowerBottom'
import DoubleBoxWrapper from './components/shared/DoubleBoxWrapper'
import MobileView from './components/shared/MobileView'
import SideBar from './components/SideBar'
import TVBroadcast from './components/TVBroadcast'
import ThinkingCloud from './components/Screen2/ThinkingCloud'
import ThaughtPop from './components/Screen3/ThaughtPop'
import RightArrow from './components/shared/PageArrow/RightArrow'
import LeftArrow from './components/shared/PageArrow/LeftArrow'
import MovingDiv from './components/MovingDiv.jsx/MovingDiv'

function App() {
    return (
        <>
            <section className='content_of_this_slide' id='hijo'>
                <EmojiLowerBottom />
                <SideBar />
                <TVBroadcast />
                <MobileView />
                <ThinkingCloud />

                <ThaughtPop
                    className='thinkingScreen_4'
                    id='thaught_4'
                    content={[
                        `Hm, I was expecting
                                TikTok's video feed right from
                                the start… not a wall of buttons.`,
                    ]}
                    para={'para_absolute_4'}
                />

                <ThaughtPop
                    className='thinkingScreen_5'
                    id='thaught_5'
                    content={[
                        `At least they allow me to "Skip"!`,
                        `Let's do this… {TAP}`,
                    ]}
                    para={'para_absolute_5'}
                />

                <ThaughtPop
                    className='thinkingScreen_5'
                    id='thaught_6'
                    content={[
                        `Hmm… options? That's a
                        lot!`,
                        `Especially since—`,
                    ]}
                    para={'para_absolute_5'}
                />

                <ThaughtPop
                    className='thinkingScreen_5'
                    id='thaught_7'
                    content={[`Seems simple enough!`, `swipe`]}
                    para={'para_absolute_5'}
                />

                <DoubleBoxWrapper
                    id={'thaught_8'}
                    content={[`The first video instantly`, `got my attention…`]}
                    top={420}
                    left={30}
                    bottom={24}
                />

                <ThaughtPop
                    className='thinkingScreen_5'
                    id='thaught_9'
                    content={[
                        `Also, unless you manually pause the default video loop, it keeps you engaged and eliminates any downtime.`,
                        `Notice how immersive this full-screen interface is.`,
                    ]}
                    para={'para_absolute_5'}
                    parentWidth={'315px'}
                    parentHeight={'185px'}
                    svgHeight={'190px'}
                    svgWidth={'400px'}
                />

                <DoubleBoxWrapper
                    id={'content_box_top_1'}
                    content={[
                        `The other night I was in my couch watching Netflix's
                        troubling docu-drama "Social Dilemma".`,
                    ]}
                />
                <DoubleBoxWrapper
                    id={'content_box_bottom_1'}
                    cont2
                    content={[
                        `It mentioned TikTok.`,
                        `Which made me realize that…`,
                    ]}
                />
                <DoubleBoxWrapper
                    id={'content_box_top_2'}
                    content={[
                        `…I've never tried TikTok before.`,
                        `I just heard that its feed was
                        fun and addictive.`,
                    ]}
                />
                <DoubleBoxWrapper
                    id={'content_box_top_3'}
                    content={[
                        `But I thought that a good laugh in
                        these stressful times couldn't hurt so…`,
                        `I downloaded
                        TikTok.`,
                        `(…naively)`,
                    ]}
                />

                <MovingDiv />
            </section>

            <RightArrow />

            <LeftArrow />

            <div className='backgrounds'>
                <div className='main__body_bg'></div>
            </div>
        </>
    )
}

export default App
