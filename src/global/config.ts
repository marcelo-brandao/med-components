import { MedConfig } from '../utils/config';

export class Config {
  private m = new Map<keyof MedConfig, any>();

  get(key: keyof MedConfig, fallback?: any): any {
    const value = this.m.get(key);
    return value !== undefined ? value : fallback;
  }

  getBoolean(key: keyof MedConfig, fallback = false): boolean {
    const val = this.m.get(key);
    if (val === undefined) {
      return fallback;
    }
    if (typeof val === 'string') {
      return val === 'true';
    }
    return !!val;
  }

}

export const config = /*@__PURE__*/ new Config();
