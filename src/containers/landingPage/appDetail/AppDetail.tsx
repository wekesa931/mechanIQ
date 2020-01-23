import React from "react";

import './appDetail.scss';

export interface AppDetailProps {}

const AppDetail: React.SFC<AppDetailProps> = () => {
  return (
    <div className='app-detail'>
      <div>
        <h2>Specialised Mechanic Services</h2>
      </div>
      <div className='app-detail-about'>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          nostrum natus excepturi fuga ullam accusantium vel ut eveniet aut
          consequatur laboriosam ipsam.
        </p>
      </div>
    </div>
  );
};

export default AppDetail;
