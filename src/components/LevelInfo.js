import React from 'react';

function LevelInfo() {
  return (
    <div id="level_info">
      <div className="earnings_count">
        <span className="">0,10 м.</span>
        <span>за клик</span>
      </div>
      <div className="progress_container">
        <div className="progress" />
        <div className="progress_active" style={{ width: '40%' }} />
      </div>
      <div className="current_level">
        <span>Уровень 1</span>
        <span>347 оставшееся</span>
      </div>
    </div>
  );
}

export default LevelInfo;
