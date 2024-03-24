import React from "react";
import style from 'styled-components'
import styled from '../styles/contents.module.css'

const Contents = () => {
    const GridContainer = style.main `
        display: flex;
        flex-direction: row;
        height: auto;
        background-color: var(--background);
        padding: var(--padding);

    `;

    const ContentTitle = style.h1 `
        font-size: 2rem;
        flex: none;
    `;

    return (
        <>  
            <GridContainer>
                <ContentTitle>Get your Photos</ContentTitle>
                <section className={styled.layoutTemp}>
                    <article className={styled.cards}>
                        <h1>hey</h1>
                    </article>
                    <article className={styled.cards}>
                        {/*Background-image*/}
                    </article>
                    <article className={styled.cards}>
                        {/*Background-image*/}
                    </article>
                    <article className={styled.cards}>
                        {/*Background-image*/}
                    </article>
                    <article className={styled.cards}>
                        {/*Background-image*/}
                    </article>
                    <article className={styled.cards}>
                        {/*Background-image*/}
                    </article>
                </section>
                <aside className={styled.layoutAside}>
                    {/*Some Pic*/}
                </aside>
            </GridContainer>
        </>
    );
}

export default Contents