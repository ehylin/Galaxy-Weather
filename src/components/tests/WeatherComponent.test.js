import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import WeatherComponent from '../WeatherComponent.vue';

describe('WeatherComponent', () => {
  it('renders the weather component correctly', () => {
    const mockWeather = {
      name: 'Test City',
      weather: [{ icon: '01d', description: 'Clear sky' }],
      main: { temp: 300, temp_min: 290, temp_max: 310, pressure: 1012, humidity: 40 },
      visibility: 10000,
      wind: { speed: 5, deg: 180 },
    };

    const formatTemperature = (temp) => (temp - 273.15).toFixed(1);

    const wrapper = mount(WeatherComponent, {
      props: {
        weather: mockWeather,
        formatTemperature,
      },
    });


    expect(wrapper.text()).toContain('Clima en: Test City');
    expect(wrapper.text()).toContain('Clear sky');
    expect(wrapper.text()).toContain('26.9°C'); 
    expect(wrapper.text()).toContain('16.9°C');
    expect(wrapper.text()).toContain('36.9°C');
  });
});
