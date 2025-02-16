import { forwardRef, useEffect } from 'react';
import Select from 'ol/interaction/Select';
import { useMap } from '../Map';

export function SelectInteraction(props:any) {
  const map = useMap();

  useEffect(() => {
    if (!map) return;
    const select = new Select(props);
    props.onSelect &&
      select.on('select', props.onSelect);
    map.addInteraction(select);
  }, [map]);

  return null;
};