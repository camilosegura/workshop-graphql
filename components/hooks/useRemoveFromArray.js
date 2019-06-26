import { useCallback, useEffect, useState } from 'react';

const useRemoveFromArray = (initialValue) => {
  const [values, setValues] = useState(initialValue);

  const removePost = useCallback((index) => {
    const newValues = [
      ...values,
    ];
    newValues.splice(index, 1);
    setValues(newValues);
  }, [values]);

  useEffect(() => {
    setValues(initialValue);
  }, [initialValue]);

  return [
    values,
    removePost,
  ];
};

export default useRemoveFromArray;
