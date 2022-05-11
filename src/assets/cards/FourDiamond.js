import * as React from "react";

function FourDiamond(props) {
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
            x={61.355}
            y={158.362}
            transform="translate(2.768 .682)"
          >
            <tspan
              style={{
                textAlign: "center",
                InkscapeFontSpecification: "Arial Narrow",
              }}
              x={61.355}
              y={158.362}
              fontFamily="Arial Narrow"
            >
              {"4"}
            </tspan>
          </text>
          <text
            y={298.362}
            x={63.465}
            style={{
              textAlign: "center",
            }}
            transform="translate(2.768 .682)"
          >
            <tspan
              y={298.362}
              x={63.465}
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
      <g transform="translate(66.488 -12.362)">
        <g transform="translate(-140)" id="prefix__c">
          <text
            xmlSpace="preserve"
            style={{
              textAlign: "center",
            }}
            x={307.063}
            y={310.639}
            id="prefix__b"
            fontSize={250}
            fontStyle="normal"
            fontWeight={400}
            textAnchor="middle"
            fill="red"
            fillOpacity={1}
            stroke="none"
            strokeWidth={1}
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeOpacity={1}
            fontFamily="Arial"
          >
            <tspan x={307.063} y={310.639}>
              {"\u2666"}
            </tspan>
          </text>
          <use
            xlinkHref="#prefix__b"
            transform="matrix(1 0 0 -1 0 1071.01)"
            width={747.347}
            height={1046.286}
          />
        </g>
        <use
          height={1046.286}
          width={747.347}
          transform="translate(280)"
          xlinkHref="#prefix__c"
        />
      </g>
    </svg>
  );
}

const MemoFourDiamond = React.memo(FourDiamond);
export default MemoFourDiamond;
