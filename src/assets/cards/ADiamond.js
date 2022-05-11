import * as React from "react";

function ADiamond(props) {
  return (
    <svg width={747.347} height={1046.286} {...props}>
      <g transform="translate(.204 -12.362)">
        <g
          id="prefix__a"
          fontSize={144}
          fontWeight={400}
          textAnchor="middle"
          fill="red"
          fontFamily="Arial"
        >
          <text
            style={{
              textAlign: "center",
            }}
            x={62.586}
            y={158.362}
            transform="translate(2.768 .682)"
          >
            <tspan
              style={{
                textAlign: "center",
                InkscapeFontSpecification: "Arial Narrow",
              }}
              x={62.586}
              y={158.362}
              fontFamily="Arial Narrow"
            >
              {"A"}
            </tspan>
          </text>
          <text
            y={298.362}
            x={67.051}
            style={{
              textAlign: "center",
            }}
            transform="translate(2.768 .682)"
          >
            <tspan
              y={298.362}
              x={67.051}
              style={{
                textAlign: "center",
                InkscapeFontSpecification: "Arial Narrow",
              }}
              fontFamily="Arial Narrow"
            >
              {"\u2666"}
            </tspan>
          </text>
        </g>
        <use
          xlinkHref="#prefix__a"
          transform="rotate(180 373.47 535.505)"
          width={747.347}
          height={1046.286}
        />
      </g>
      <text
        style={{
          textAlign: "center",
        }}
        x={373.225}
        y={685.774}
        fontSize={500}
        fontWeight={400}
        textAnchor="middle"
        fill="red"
        fontFamily="Arial"
        transform="translate(.204 -12.362)"
      >
        <tspan x={373.225} y={685.774}>
          {"\u2666"}
        </tspan>
      </text>
    </svg>
  );
}

const MemoADiamond = React.memo(ADiamond);
export default MemoADiamond;
