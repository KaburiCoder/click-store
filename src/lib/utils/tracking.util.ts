import { Tracking } from "../classes/tracking";

export const bigoToTrackings = (bigo?: string) => {
  if (!bigo) return;
  const bigoArr = bigo.split(/,|\//).map((b) => b.trim());

  const trackings: Tracking[] = [];

  bigoArr.forEach((b) => {
    const [name, number] = b.split(" ");

    if (name && number) {
      trackings.push(new Tracking(name.toLowerCase(), number));
    } else if (!number && name) {
      if (trackings.length === 0) return;
      const number = name;
      const prevName = trackings[trackings.length - 1].name;

      trackings.push(new Tracking(prevName, number));
    }
  });

  return trackings;
};
