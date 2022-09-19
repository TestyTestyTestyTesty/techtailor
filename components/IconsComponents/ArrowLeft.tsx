import {forwardRef, Ref, SVGProps} from "react";


const ArrowLeft = forwardRef((  props: SVGProps<SVGSVGElement>,
    ref: Ref<SVGSVGElement>) => {
    return (
        <svg
            ref={ref}
            width="14"
            height="26"
            viewBox="0 0 14 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M13.3999 25L1.3999 13L13.3999 1" stroke="white" />
        </svg>
    );
});

export default ArrowLeft;
