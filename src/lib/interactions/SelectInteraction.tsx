import Select from 'ol/interaction/Select';
import { forwardRef, useEffect, useImperativeHandle, useState } from 'react';
import { useMap } from '../Map';

export const SelectInteraction = forwardRef( (props:any, ref:any) => {
  const map = useMap();
  const [selectRef, setSelectRef] = useState<Select>();

  useImperativeHandle(ref, () => selectRef, [selectRef]);

  useEffect(() => {
    if (!map) return;
    const select = new Select(props);
    props.onSelect && 
      select.on('select', props.onSelect);
    setSelectRef(select);
    map.addInteraction(select);
  }, [map]);

  return null;
});