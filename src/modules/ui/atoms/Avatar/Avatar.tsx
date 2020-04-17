import React from 'react';
import Avatar from '@material-ui/core/Avatar';

import { ReactComponent as BuyerLogo } from "./buyer.svg";
import { ReactComponent as SellerLogo } from "./seller.svg";

type Props = {
  buyer?: boolean;
}

export const AvatarComponent: React.FC<Props> = ({ buyer }) => {
  return (
    <Avatar>
      {buyer
        ? <BuyerLogo style={{ height: '100%', maxHeight: '40px' }} role="img" />
        : <SellerLogo style={{ height: '100%', maxHeight: '40px' }} role="img" />
      }
    </Avatar>
  )
}
