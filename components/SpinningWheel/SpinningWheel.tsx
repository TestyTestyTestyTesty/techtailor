import React from "react";
import Button from "../Button/Button";
import Container from "../Containers/Container";
import {
    OverlayStyles,
    SpinningWheelColLStyles,
    SpinningWheelColRStyles,
    SpinningWheelContentStyles,
    SpinningWheelHeadingStyles,
    SpinningWheelParagraphStyles,
    SpinningWheelWrapperStyles,
} from "./SpinningWheel.styled";
import SpinningWheelCarousel from "./SpinningWheelCarousel/SpinningWheelCarousel";

export default function SpinningWheel() {
    return (
        <SpinningWheelWrapperStyles>
            <Container>
                <SpinningWheelContentStyles>
                    <SpinningWheelColLStyles>
                        <SpinningWheelHeadingStyles>
                            Why You Should Work With Us
                        </SpinningWheelHeadingStyles>
                        <SpinningWheelParagraphStyles>
                            Because Techtailor cares about people. Thanks to our
                            individual approach, can-do attitude and deep trust
                            we put in people we managed to attract top IT
                            specialists. This on the other hand, together with
                            our experience in digital business, captivate great
                            companies. So, independently if you want to us to
                            own the project, our just tap into our resourses we
                            can ensure top tech talents at speed thanks to our
                            vibrant and global tech network.
                        </SpinningWheelParagraphStyles>
                        <Button>Start working with us</Button>
                    </SpinningWheelColLStyles>
                    <SpinningWheelColRStyles>
                        <OverlayStyles>
                            <SpinningWheelCarousel />
                        </OverlayStyles>
                    </SpinningWheelColRStyles>
                </SpinningWheelContentStyles>
            </Container>
        </SpinningWheelWrapperStyles>
    );
}
