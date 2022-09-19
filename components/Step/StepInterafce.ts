export interface StepInterface {
    index: number;
    number: string;
    title: String;
    text: string;
    activeSlide: number;
    link?: {
        href: string;
        text: string;
    };
}
