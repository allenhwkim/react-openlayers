import { useEffect } from 'react';
import Translate, { Options } from 'ol/interaction/Translate';
import { useMap } from '../Map';

export function TranslateInteraction(props: Options) {
  const map = useMap();

  useEffect(() => {
    if (!map) return;
    const translate = new Translate(props);
    map.addInteraction(translate);
  }, [map]);

  return null;
};
