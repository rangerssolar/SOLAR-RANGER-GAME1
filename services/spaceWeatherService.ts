import { KpIndexData, SolarFlareData } from '../types';

// This is a mock service to simulate fetching data from NOAA/NASA APIs.
// In a real application, these would be fetch requests to the actual endpoints.

export const getKpIndex = (): Promise<KpIndexData> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const value = Math.floor(Math.random() * 10); // 0 to 9
      let status: 'quiet' | 'unsettled' | 'storm' = 'quiet';
      if (value >= 5) {
        status = 'storm';
      } else if (value >= 3) {
        status = 'unsettled';
      }
      resolve({
        value,
        timestamp: new Date().toISOString(),
        status,
      });
    }, 500);
  });
};

export const getLatestSolarFlare = (): Promise<SolarFlareData> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const flareClasses = ['M1.5', 'M5.0', 'X1.2', 'C8.9'];
        const randomClass = flareClasses[Math.floor(Math.random() * flareClasses.length)];
        resolve({
          class: randomClass,
          peakTime: new Date(Date.now() - Math.random() * 1000 * 60 * 60).toISOString(),
          region: 3000 + Math.floor(Math.random() * 100),
        });
      }, 500);
    });
  };
