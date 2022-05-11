import * as React from "react";

function NineDiamond(props) {
  return (
    <svg width={747.347} height={1046.286} {...props}>
      <g transform="translate(.204 -12.362)">
        <g
          id="prefix__a"
          fill="red"
          fontSize={144}
          fontWeight={400}
          textAnchor="middle"
          fontFamily="Arial"
        >
          <text
            style={{
              textAlign: "center",
            }}
            x={58.736}
            y={158.362}
            transform="translate(2.768 .682)"
          >
            <tspan
              style={{
                textAlign: "center",
                InkscapeFontSpecification: "Arial Narrow",
              }}
              x={58.736}
              y={158.362}
              fontFamily="Arial Narrow"
            >
              {"9"}
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
        <g id="prefix__d" transform="translate(-140)">
          <text
            id="prefix__b"
            y={270.639}
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
            <tspan y={270.639} x={307.063}>
              {"\u2666"}
            </tspan>
          </text>
          <use
            height={1046.286}
            width={747.347}
            transform="matrix(1 0 0 -1 0 1071.01)"
            xlinkHref="#prefix__b"
          />
          <use
            x={0}
            y={0}
            xlinkHref="#prefix__b"
            id="prefix__c"
            width={747.347}
            height={1046.286}
            transform="translate(0 220)"
          />
          <use
            xlinkHref="#prefix__c"
            transform="matrix(1 0 0 -1 0 1071.01)"
            width={747.347}
            height={1046.286}
          />
        </g>
        <use
          xlinkHref="#prefix__d"
          transform="translate(280)"
          width={747.347}
          height={1046.286}
        />
      </g>
      <text
        y={384.925}
        x={368.743}
        style={{
          textAlign: "center",
        }}
        fontSize={250}
        fontWeight={400}
        textAnchor="middle"
        fill="red"
        fontFamily="Arial"
        transform="translate(4.808 -.648)"
      >
        <tspan y={384.925} x={368.743}>
          {"\u2666"}
        </tspan>
      </text>
    </svg>
  );
}

const MemoNineDiamond = React.memo(NineDiamond);
export default MemoNineDiamond;
