export default function ArrowRight({
    color = 'current',
    onClickFunction = undefined,
}) {
    return (
        <svg
            className="arrow"
            onClick={onClickFunction}
            fill={color}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M0.960022 72.3458L8.04002 79.4258L47.64 39.8258L8.04002 0.22583L0.960022 7.30583L33.48 39.8258L0.960022 72.3458Z"
                fill={color}
            />
        </svg>
    )
}
