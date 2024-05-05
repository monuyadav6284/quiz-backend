// cors.config.ts

import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';

const corsOptions: CorsOptions = {
    origin: 'http://localhost:3000',
    // Other CORS options can be added here
};

export default corsOptions;