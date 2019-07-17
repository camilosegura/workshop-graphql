import { useState } from 'react';
import client from '../../apollo/client';

const useQuery = (query, opts) => {
  const [data, setData] = useState({ [opts.dataType]: [] });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  client
    .query({
      query,
    })
    .then((result) => {
      setLoading(false);
      if (result.errors && result.errors.length) {
        setError(true);
      }

      setData(result.data);
    })
    .catch((e) => { setError(true) })
    .finally(() => setLoading(false));

  return {
    data,
    loading,
    error,
  };
};

export default useQuery;
