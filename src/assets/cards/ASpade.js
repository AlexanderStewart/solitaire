import * as React from "react";

function ASpade(props) {
  return (
    <svg width={747.347} height={1046.286} {...props}>
      <g fontWeight={400} textAnchor="middle" fontFamily="Arial">
        <g fontSize={144}>
          <text
            x={61.434}
            y={159.044}
            style={{
              textAlign: "center",
            }}
            transform="translate(.204 -12.362)"
          >
            <tspan
              x={61.434}
              y={159.044}
              style={{
                textAlign: "center",
                InkscapeFontSpecification: "Arial Narrow",
              }}
              fontFamily="Arial Narrow"
            >
              {"A"}
            </tspan>
          </text>
          <text
            x={65.548}
            y={299.044}
            style={{
              textAlign: "center",
            }}
            transform="translate(.204 -12.362)"
          >
            <tspan
              x={65.548}
              y={299.044}
              style={{
                textAlign: "center",
                InkscapeFontSpecification: "Arial Narrow",
              }}
              fontFamily="Arial Narrow"
            >
              {"\u2660"}
            </tspan>
          </text>
          <text
            x={58.666}
            y={158.362}
            style={{
              textAlign: "center",
            }}
            transform="rotate(180 372.187 528.983)"
          >
            <tspan
              x={58.666}
              y={158.362}
              style={{
                textAlign: "center",
                InkscapeFontSpecification: "Arial Narrow",
              }}
              fontFamily="Arial Narrow"
            >
              {"A"}
            </tspan>
          </text>
          <text
            x={62.779}
            y={298.362}
            style={{
              textAlign: "center",
            }}
            transform="rotate(180 372.187 528.983)"
          >
            <tspan
              x={62.779}
              y={298.362}
              style={{
                textAlign: "center",
                InkscapeFontSpecification: "Arial Narrow",
              }}
              fontFamily="Arial Narrow"
            >
              {"\u2660"}
            </tspan>
          </text>
        </g>
        <text
          x={373.469}
          y={685.774}
          style={{
            textAlign: "center",
          }}
          fontSize={500}
          transform="translate(.204 -12.362)"
        >
          <tspan x={373.469} y={685.774}>
            {"\u2660"}
          </tspan>
        </text>
      </g>
    </svg>
  );
}

const MemoASpade = React.memo(ASpade);
export default MemoASpade;
