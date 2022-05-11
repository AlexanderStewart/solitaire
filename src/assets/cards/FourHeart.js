import * as React from "react";

function FourHeart(props) {
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
              {"\u2665"}
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
      <g transform="translate(66.61 -12.362)">
        <g id="prefix__c" transform="translate(-140)">
          <text
            id="prefix__b"
            y={310.639}
            x={307.063}
            style={{
              textAlign: "center",
            }}
            xmlSpace="preserve"
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
            <tspan y={310.639} x={307.063}>
              {"\u2665"}
            </tspan>
          </text>
          <use
            height={1046.286}
            width={747.347}
            transform="matrix(1 0 0 -1 0 1071.01)"
            xlinkHref="#prefix__b"
          />
        </g>
        <use
          xlinkHref="#prefix__c"
          transform="translate(280)"
          width={747.347}
          height={1046.286}
        />
      </g>
    </svg>
  );
}

const MemoFourHeart = React.memo(FourHeart);
export default MemoFourHeart;
