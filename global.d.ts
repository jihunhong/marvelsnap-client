declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: string;

    NEXT_PUBLIC_END_POINT: string;
    END_POINT: string;

    NEXT_PUBLIC_SENTRY_DSN: string;
    NEXT_PUBLIC_TINY_API_KEY: string;

    S3_UPLOAD_KEY: string;
    S3_UPLOAD_SECRET: string;
    S3_UPLOAD_BUCKET: string;
    S3_UPLOAD_REGION: string;

    ADMIN_ACCOUNT: string;

    REDIS_URL: string;
  }
}
