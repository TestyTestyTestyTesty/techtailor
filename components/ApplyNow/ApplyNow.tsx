import React from "react";
import Button from "../Button/Button";
import Container from "../Containers/Container";
import { ContainerSmallStyles } from "../Containers/Container.styled";
import {
    ApplyNowColLStyles,
    ApplyNowColRStyles,
    ApplyNowContentStyles,
    ApplyNowHeadingStyles,
    ApplyNowParagraphStyles,
    ApplyNowWrapperStyles,
} from "./ApplyNow.styled";

export default function ApplyNow() {
    return (
        <ApplyNowWrapperStyles>
            <ContainerSmallStyles>
                <ApplyNowContentStyles>
                    <ApplyNowColLStyles>
                        <ApplyNowHeadingStyles>
                            So, Are You Ready to Rocket your Project?
                        </ApplyNowHeadingStyles>
                    </ApplyNowColLStyles>
                    <ApplyNowColRStyles>
                        <ApplyNowParagraphStyles>
                            We believe so. Let’s connect and talk about your
                            project. We want to find perfectly matching team for
                            you, support you and get to know your needs.{" "}
                        </ApplyNowParagraphStyles>
                        <Button chevronRight>let’s chat today</Button>
                    </ApplyNowColRStyles>
                </ApplyNowContentStyles>
            </ContainerSmallStyles>
        </ApplyNowWrapperStyles>
    );
}
