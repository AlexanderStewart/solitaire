import { ReactComponent as Restart } from './../assets/icons/restart.svg';
import { ReactComponent as BackArrow } from './../assets/icons/backArrow.svg';

const Header = (props) => {

  const { startShuffleAndDeal, startBackAMove, score } = props;

  return (
    <div style={{ padding: '10px', paddingLeft: '30px', paddingRight: '30px', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>

      <span style={{ fontSize: '24px', paddingRight: '16px', fontWeight: 'bold' }}>GROUP 6 - SOLITAIRE</span>

      <div style={{ borderWidth: '2px', borderStyle: 'solid', borderColor: '#4ade80', marginRight: '16px', padding: '8px', borderRadius: '6px' }}>
        <span style={{ fontSize: '18px' }}>SCORE: {score} POINTS</span>
      </div>

      <div style={{
        cursor: 'pointer', padding: '8px 16px', borderRadius: '6px', backgroundColor: '#99f6e4', display: 'inline-flex', justifyContent: 'center', alignItems: 'center'
      }}
        onClick={() => startShuffleAndDeal()}
      >
        <span style={{ paddingRight: '4px' }}>RESTART</span>
        <Restart width={20} height={20} />
      </div>

      <div style={{ paddingLeft: '16px' }} />

      <div style={{
        cursor: 'pointer', padding: '8px 16px', borderRadius: '6px', backgroundColor: '#fed7aa', display: 'inline-flex', justifyContent: 'center', alignItems: 'center'
      }}
        onClick={() => startBackAMove()}
      >
        <span style={{ paddingRight: '4px' }}>BACK A MOVE</span>
        <BackArrow width={20} height={20} />
      </div>
    </div>
  );
};

export default Header;