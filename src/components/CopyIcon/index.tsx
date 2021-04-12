interface Props {
  size?: number;
}

export default function CopyIcon({ size = 35 }: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size + 6}
      viewBox={`0 0 ${size} ${size + 6}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.6316 0H2.94737C1.32632 0 0 1.32632 0 2.94737V23.5789H2.94737V2.94737H20.6316V0ZM25.0526 5.89474H8.84211C7.22105 5.89474 5.89474 7.22105 5.89474 8.84211V29.4737C5.89474 31.0947 7.22105 32.4211 8.84211 32.4211H25.0526C26.6737 32.4211 28 31.0947 28 29.4737V8.84211C28 7.22105 26.6737 5.89474 25.0526 5.89474ZM25.0526 29.4737H8.84211V8.84211H25.0526V29.4737Z"
        fill="#737380"
      />
    </svg>
  );
}
