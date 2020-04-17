import useSWR from "swr";
import axios, { AxiosResponse } from "axios";

import { DataFromServer, ErrorData } from 'entries/dataFromServer';

const fetcher = (url: string) => {
  return axios
    .get(url)
    .then((value: AxiosResponse<DataFromServer>) => value.data)
    .catch((err: ErrorData) => {
      throw err.response.data;
    });
};

export const useGetInfomation = (time: number) => {
  return useSWR<DataFromServer>(
    `${process.env.REACT_APP_SERVER_PATH}`,
    fetcher,
    {
      revalidateOnFocus: false,
      shouldRetryOnError: false,
      refreshInterval: time,
    }
  );
};
