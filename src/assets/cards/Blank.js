import * as React from "react";

function Blank(props) {
  return <svg width={747.347} height={1046.286} {...props} />;
}

const MemoBlank = React.memo(Blank);
export default MemoBlank;
