import React, { useId } from "react";
import Container from "../Containers/Container";
import SliderNavigation from "../SliderNavigation/SliderNavigation";
import {
  StepsParagraphStyles,
  StepsTitleStyles,
  StepsWrapperStyles,
} from "./Steps.styled";
import StepsCarousel from "./StepsCarousel/StepsCarousel";

export default function Steps() {
  const steps = [
    {
      title: "Apps development",
      text: "Get our full support in bringing to life your MVP project. We provide consultancy, design, technology and seamless processes.",
      link: {
        href: "/link1",
        text: "learn more",
      },
    },
    {
      title: "Website Development",
      text: "Design and implement your website with us. We provide professional support in each step of the way.",
      link: {
        href: "/link2",
        text: "learn more",
      },
    },
    {
      title: "Consultants",
      text: "We provide a full team of talented individuals for your next project and we own the processes from A-Z.",
      link: {
        href: "/link3",
        text: "learn more",
      },
    },
    {
      title: "Recruitment",
      text: "Let us find your future employees who will fit perfectly to your organisation culture and will bring value for the long run.",
      link: {
        href: "/link4",
        text: "learn more",
      },
    },
  ];
  return (
    <StepsWrapperStyles>
      <Container>
        <StepsTitleStyles>What We Can Do for You</StepsTitleStyles>
        <StepsParagraphStyles>
          Techtailor provides support to Companies, Startups and Scaleups in
          different dimentions. See how we can help you advance your business.
        </StepsParagraphStyles>
        <StepsCarousel steps={steps} />
      </Container>
    </StepsWrapperStyles>
  );
}
