import * as React from "react";

function AClub(props) {
  return (
    <svg width={747.347} height={1046.286} {...props}>
      <g transform="translate(.204 -12.362)">
        <g
          id="prefix__a"
          fontSize={144}
          fontWeight={400}
          textAnchor="middle"
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
            x={62.656}
            style={{
              textAlign: "center",
            }}
            transform="translate(2.768 .682)"
          >
            <tspan
              y={298.362}
              x={62.656}
              style={{
                textAlign: "center",
                InkscapeFontSpecification: "Arial Narrow",
              }}
              fontFamily="Arial Narrow"
            >
              {"\u2663"}
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
        x={373.591}
        y={685.774}
        fontSize={500}
        fontWeight={400}
        textAnchor="middle"
        fontFamily="Arial"
        transform="translate(.204 -12.362)"
      >
        <tspan x={373.591} y={685.774}>
          {"\u2663"}
        </tspan>
      </text>
    </svg>
  );
}

const MemoAClub = React.memo(AClub);
export default MemoAClub;
