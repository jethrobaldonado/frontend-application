# Cattr Frontend Applicaton

## Build
```
# Install dependencies
npm install

# Copy frontend configuration file
cp app/etc/env.production.js app/etc/env.js

# Adjust parameters in env.js (API_URL at least)
nano app/etc/env.js

# Compile modules
npm run compile

# Run production build
npm run build
```
