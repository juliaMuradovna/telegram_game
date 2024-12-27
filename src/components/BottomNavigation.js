import React from 'react';
import { ReactComponent as EarningsIcon } from '../assets/icons/earning.svg';
import { ReactComponent as InvestmentsIcon } from '../assets/icons/investmants.svg';
import { ReactComponent as BusinessIcon } from '../assets/icons/business.svg';
import { ReactComponent as ListingIcon } from '../assets/icons/listing.svg';
import { ReactComponent as ProfileIcon } from '../assets/icons/profile.svg';

function BottomNavigation() {
  return (
    <div id="bottom_navigation">
      <div className="content">
        <div className="item active">
          <EarningsIcon />
          <span>Earnings</span>
        </div>
        <div className="item">
          <InvestmentsIcon />
          <span>Investments</span>
        </div>
        <div className="item">
          <BusinessIcon />
          <span>Business</span>
        </div>
        <div className="item">
          <ListingIcon />
          <span>Listing</span>
        </div>
        <div className="item">
          <ProfileIcon />
          <span>Profile</span>
        </div>
      </div>
    </div>
  );
}

export default BottomNavigation;
