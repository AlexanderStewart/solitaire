import * as React from "react";

function FiveClub(props) {
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
            x={62.92}
            y={158.362}
            transform="translate(2.768 .682)"
          >
            <tspan
              style={{
                textAlign: "center",
                InkscapeFontSpecification: "Arial Narrow",
              }}
              x={62.92}
              y={158.362}
              fontFamily="Arial Narrow"
            >
              {"5"}
            </tspan>
          </text>
          <text
            y={298.362}
            x={62.779}
            style={{
              textAlign: "center",
            }}
            transform="translate(2.768 .682)"
          >
            <tspan
              y={298.362}
              x={62.779}
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
      <g transform="translate(66.671 -12.362)">
        <g id="prefix__c" transform="translate(-140)">
          <text
            id="prefix__b"
            y={310.639}
            x={307.063}
            xmlSpace="preserve"
            fontSize={250}
            fontStyle="normal"
            fontWeight={400}
            fill="#000"
            fillOpacity={1}
            stroke="none"
            strokeWidth={1}
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeOpacity={1}
            fontFamily="Arial"
          >
            <tspan
              style={{
                textAlign: "center",
              }}
              y={310.639}
              x={307.063}
              textAnchor="middle"
            >
              {"\u2663"}
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
        <text
          x={307.063}
          y={610.639}
          fontSize={250}
          fontWeight={400}
          fontFamily="Arial"
        >
          <tspan
            style={{
              textAlign: "center",
            }}
            x={307.063}
            y={610.639}
            textAnchor="middle"
          >
            {"\u2663"}
          </tspan>
        </text>
      </g>
    </svg>
  );
}

const MemoFiveClub = React.memo(FiveClub);
export default MemoFiveClub;
