import React from 'react';

import { useGetInfomation } from 'api/hooks/information';
import { DataFromServer } from 'entries/dataFromServer';
import { getRandomInRange } from 'utils/getRandomInRange';
import classes from './FromServer.module.css';

type Props = {
  data: DataFromServer
}

export const FromServer = () => {
  const [time, setTime] = React.useState<number>(0);
  const {
    error,
    data
  } = useGetInfomation(time);

  React.useEffect(() => {
    const changeTime = setTimeout(() => {
      const newTime = getRandomInRange(3000, 10000);
      setTime(newTime);
    }, time);
    return () => {
      clearTimeout(changeTime);
    }
  }, [time])

  return (
    <div className={classes.wrapper}>
      {error
      ? <div>Some error happening {error}</div>
      :
        <div>
          { data ? <DataBlock data={data} /> : <div>There is no data</div> }
        </div>
      }
    </div>
  )
}

const DataBlock: React.FC<Props> = ({ data }) => {
  const {
    disclaimer,
    bpi: {
      USD: {
        code,
        rate,
        description,
        rate_float
      }
    }
   } = data;

  return (
    <div>
      <p className={classes.disclaimer}>{disclaimer}</p>
      <div className={classes.blockWrapper}>
        <p>Code</p>
        <p className={classes.value}>{code}</p>
      </div>
      <div className={classes.blockWrapper}>
        <p>Rate</p>
        <p className={classes.value}>{rate}</p>
      </div>
      <div className={classes.blockWrapper}>
        <p>Description</p>
        <p className={classes.value}>{description}</p>
      </div>
      <div className={classes.blockWrapper}>
        <p>Rate Float</p>
        <p className={classes.value}>{rate_float}</p>
      </div>
    </div>
  )
}
