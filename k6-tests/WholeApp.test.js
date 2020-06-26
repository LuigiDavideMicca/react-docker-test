import http from 'k6/http';
import { check, sleep } from 'k6';
import { Rate } from 'k6/metrics';

export const errorRate = new Rate('errors');

export const options = {
  stages: [
    { duration: '10s', target: 10 },
    { duration: '30s', target: 1000 },
    { duration: '20s', target: 100 },
    { duration: '10s', target: 0 },
  ],
  thresholds: {
    errors: ['rate<0.001'],
  },
};

export default function () {
  const res = http.get('http://localhost:3000');
  check(res, { 'status was 200': r => r.status === 200 }) || errorRate.add(1);
  sleep(1);
}
