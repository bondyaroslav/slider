import React, {Children, cloneElement, useEffect, useState} from 'react';
import "./Carousel.css"

const PAGE_WIDTH = 450

export const Carousel = ({children}) => {
    const [pages, setPages] = useState([])
    const [offset, setOffset] = useState(0)

    const handleLeftClick = () => {
        setOffset((currentOffset) => {
            const newOffset = currentOffset + PAGE_WIDTH
            console.log(newOffset)
            return Math.min(newOffset, 0)
        })
    }
    const handleRightClick = () => {
        setOffset((currentOffset) => {
            const newOffset = currentOffset - PAGE_WIDTH

            const maxOffset = -(PAGE_WIDTH * (pages.length -1))

            console.log(newOffset)
            return Math.max(newOffset, maxOffset)
        })
    }

    useEffect(() => {
        setPages(
            Children.map(children, child => {
                return cloneElement(child, {
                    style: {
                        height: "100%",
                        minWidth: `${PAGE_WIDTH}px`,
                        maxWidth: `${PAGE_WIDTH}px`,
                    }
                })
            })
        )
    }, []);

    return (
        <div className="wrapper">
            <div className="button" onClick={handleLeftClick}>left</div>
            <div className="main-container">
                <div className="window">
                    <div className="all-pages-container"
                        style={{
                            transform: `translateX(${offset}px)`
                    }}
                    >{pages}</div>
                </div>
            </div>
            <div className="button" onClick={handleRightClick}>right</div>
        </div>
    )
}

