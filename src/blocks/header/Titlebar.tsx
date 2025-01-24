import React from 'react';

import Globals from '../../theme/Globals';

type Props = {
  title: string;
  mode: 'centered-title';
  icon?: string;
};

const Titlebar: React.FC<Props> = (props) => {
  

  return (
    <>
    <Globals />
    <div className='window-titlebar'>
      {props.icon ? (
        <section className='window-titlebar-icon'>
          <img src={props.icon} alt='titlebar icon' />
        </section>
      ) : (
        ''
      )}

      <section>
       <div className='window-title'>{props.title}</div>
      </section>

      <section>
        menu
      </section>

      {/* <WindowControls platform={windowContext.platform} tooltips={true} /> */}
    </div>
    </>
  );
};

export default Titlebar;