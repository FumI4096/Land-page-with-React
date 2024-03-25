import React from "react";
import style from 'styled-components'
import styled from '../styles/contents.module.css'
import picture from '../styles/pictures.module.css'

const Contents = () => {
    const GridContainer = style.section `
        height: auto;
        background-color: var(--background);
        width: 1200px;

        @media only screen and (max-width: 1825px){
            width: 100%;
        }
    `;

    const ContentTitle = style.h1 `
        font-size: 2.5rem;
        margin-bottom: 2rem;

        @media only screen and (max-width: 1825px){
            text-align: center;
        }
        @media only screen and (max-width: 960px){
            font-size: clamp(2rem, 2vw, 2.5rem);
        }
    `;

    const InfoAside = style.div `
        height: auto;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        padding: 20px 0;
        border-top: solid 2px black;
        border-bottom: solid 2px black;
    `;

    const TitleAside = style.h1 `
        font-size: 2.5rem;
        border: 5px solid black;
        height: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: white;
        box-shadow: 20px 20px 0 black;

        @media only screen and (max-width: 1825px){
            grid-column: 1/3;
        }
        @media only screen and (max-width: 960px){
            font-size: clamp(2rem, 2.2vw, 2.5rem);
            grid-column: 1;
        }
    `;

    return (
        <>  
            <main style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                height: 'auto',
                backgroundColor: 'var(--background)',
                padding: 'var(--padding)',
                flexWrap: 'wrap',
                gap: '1rem',


            }}>
                <GridContainer>
                    <ContentTitle>Check your Views</ContentTitle>
                    <article className={styled.layoutTemp}>
                        <div className={styled.cards} id={picture.pic1}>
                            <div className={styled.texts}>
                                <p>ID: 1</p>
                            </div>
                        </div>
                        <div className={styled.cards} id={picture.pic2}>
                            <div className={styled.texts}>
                                <p>ID: 2</p>
                            </div>
                        </div>
                        <div className={styled.cards} id={picture.pic3}>
                            <div className={styled.texts}>
                                <p>ID: 3</p>
                            </div>
                        </div>
                        <div className={styled.cards} id={picture.pic4}>
                            <div className={styled.texts}>
                                <p>ID: 4</p>
                            </div>
                        </div>
                        <div className={styled.cards} id={picture.pic5}>
                            <div className={styled.texts}>
                                <p>ID: 5</p>
                            </div>
                        </div>
                        <div className={styled.cards} id={picture.pic6}>
                            <div className={styled.texts}>
                                <p>ID: 6</p>
                            </div>
                        </div>
                        <div className={styled.cards} id={picture.pic7}>
                            <div className={styled.texts}>
                                <p>ID: 7</p>
                            </div>
                        </div>
                    </article>
                </GridContainer>
                <aside className={styled.layoutAside} id={styled.textAside}>
                    <TitleAside>The More you Know</TitleAside>
                    <div className={styled.Paragraphs}>
                        <ContentTitle>Did you know?</ContentTitle>
                        <InfoAside>
                            <p>
                                Photography, an art form that has transcended time and technology, holds within its lens a plethora of fascinating stories and captivating moments. From the humble beginnings of the earliest photographs to the advent of digital imagery, the world of pictures has evolved in remarkable ways, shaping our perceptions, preserving memories, and documenting history.
                            </p>
                            <p>
                                The inception of photography dates back to the early 19th century when Joseph Nicéphore Niépce captured the world's first photograph, titled "View from the Window at Le Gras," around 1826 or 1827. This pioneering achievement marked the dawn of a new era, where visual storytelling became possible through the medium of light and chemicals.
                            </p>
                        </InfoAside>
                    </div>
                    <div className={styled.Paragraphs}>
                    <ContentTitle>A Poetry?</ContentTitle>
                    <InfoAside>
                        <p>
                            In fields of gold, where poppies sway,
                            The wind's soft voice begins to play.
                            It whispers secrets to the trees,
                            And dances through the autumn breeze.
                        </p>
                        <p>
                            With gentle touch, it strokes the leaves,
                            And sighs among the forest eaves.
                            It tells of tales from distant lands,
                            Of mountains high and desert sands.
                        </p>
                            Through valleys deep and rivers wide,
                            The wind's sweet song is heard worldwide.
                            It carries dreams upon its breath,
                            And whispers of life, and love, and death.
                        <p>
                            So listen closely, hear its call,
                            As evening shadows start to fall.
                            For in the whispers of the wind,
                            We find the solace of a friend.
                        </p>
                    </InfoAside>

                    </div>
                </aside>
            </main>
        </>
    );
}

export default Contents