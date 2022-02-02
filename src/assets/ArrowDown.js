export default function ArrowDown({ color = 'current' }) {
    return (
        <svg
            className="arrow"
            width="25"
            height="15"
            viewBox="0 0 25 15"
            fill={color}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M2.6635 0.859488L0.530579 3.00462L12.4605 14.9233L24.3904 2.99257L22.2575 0.859488L12.4605 10.6572L2.6635 0.859488V0.859488Z"
                fill={color}
            />
        </svg>
    )
}
