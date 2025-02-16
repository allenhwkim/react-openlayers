import { useEffect } from 'react';
import Translate from 'ol/interaction/Translate';
import { useMap } from '../Map';

export function TranslateInteraction(props) {
  const map = useMap();

  useEffect(() => {
    if (!map) return;
    const translate = new Translate(props);
    map.addInteraction(translate);
  }, [map]);

  return null;
};
