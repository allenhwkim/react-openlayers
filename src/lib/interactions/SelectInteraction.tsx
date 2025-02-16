import Select from 'ol/interaction/Select';
import { forwardRef, useEffect } from 'react';
import { useMap } from '../Map';

export const SelectInteraction = forwardRef( (props:any, ref:any) => {
  const map = useMap();

  useEffect(() => {
    if (!map) return;
    const select = new Select(props);
    props.onSelect &&
      select.on('select', props.onSelect);
    map.addInteraction(select);
  }, [map]);

  return null;
});