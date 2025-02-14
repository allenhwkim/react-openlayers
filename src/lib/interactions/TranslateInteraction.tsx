import Translate from 'ol/interaction/Translate';
import { useEffect } from 'react';
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
