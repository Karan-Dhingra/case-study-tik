import EmojiLowerBottom from './components/EmojiLowerBottom'
import DoubleBoxWrapper from './components/shared/DoubleBoxWrapper'
import MobileView from './components/shared/MobileView'
import SideBar from './components/SideBar'
import TVBroadcast from './components/TVBroadcast'
import ThinkingCloud from './components/Screen2/ThinkingCloud'
import ThaughtPop from './components/Screen3/ThaughtPop'
import RightArrow from './components/shared/PageArrow/RightArrow'
import LeftArrow from './components/shared/PageArrow/LeftArrow'

function App() {
    return (
        <>
            <section className='content_of_this_slide'>
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

                <DoubleBoxWrapper
                    id={'content_box_top_1'}
                    content={[
                        `The other night I was in my couch watching Netflix's
                        troubling docu-drama "Social Dilemma".`,
                    ]}
                />
                <DoubleBoxWrapper
                    id={'content_box_bottom_1'}
                    bottom
                    content={[
                        `It mentioned TikTok.`,
                        `Which made me realize that…`,
                    ]}
                />
                <DoubleBoxWrapper
                    id={'content_box_top_2'}
                    content={[
                        `…I've <strong>never tried</strong> TikTok before.`,
                        `I just heard that its feed was
                        fun and addictive.`,
                    ]}
                />
                <DoubleBoxWrapper
                    id={'content_box_top_3'}
                    content={[
                        `But I thought that a <strong>good laugh</strong> in
                        these stressful times <strong>couldn't hurt</strong> so…`,
                        `I downloaded
                        TikTok.`,
                        `(…naively)`,
                    ]}
                />
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
